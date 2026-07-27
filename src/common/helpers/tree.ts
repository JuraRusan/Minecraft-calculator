import { getFuels, getRecipes } from "@/common/loadData.ts";
import type { ItemKey } from "@/localization";
import type { Recipe, RecipeEntry, RecipeType, SlotKey, VariablesType } from "@/types/types.ts";

import {
  BREWING_BATCH_SIZE,
  BREWING_FUEL_YIELD,
  BREWING_INGREDIENT_SLOT,
  DEFAULT,
  TYPE_USE_FUELS,
  VARIABLES,
} from "./constants.ts";
import { roundToMultiple } from "./functions.ts";

export type TreeNode = {
  recipeIndex: number;
  count: number;
  expanded: boolean;
  disabled: boolean;
  recipeVariableIndex: number;
  indexVariables: VariablesType;
  children: TreeNode[] | null;
};

let itemToRecipeIndex: Map<string, number> | null = null;

const getItemToRecipeIndex = (): Map<string, number> => {
  if (itemToRecipeIndex) return itemToRecipeIndex;

  const map = new Map<string, number>();
  const recipes = getRecipes();

  for (let i = 1; i < recipes.length; i++) {
    const entry = recipes[i];
    const recipe: Recipe = Array.isArray(entry) ? entry[0] : entry;

    if (!map.has(recipe.item)) {
      map.set(recipe.item, i);
    }
  }

  itemToRecipeIndex = map;
  return map;
};

export const findRecipeIndex = (itemKey: string): number | null => {
  return getItemToRecipeIndex().get(itemKey) ?? null;
};

export const buildNode = (recipeIndex: number, count: number): TreeNode => ({
  recipeIndex,
  count,
  expanded: false,
  disabled: false,
  recipeVariableIndex: 0,
  indexVariables: VARIABLES,
  children: null,
});

export const getOutputItem = (node: TreeNode): string => {
  const entry = getRecipes()[node.recipeIndex];
  const recipe = Array.isArray(entry) ? entry[node.recipeVariableIndex] : entry;
  return recipe.item;
};

const getActiveRecipe = (node: TreeNode): RecipeType => {
  const entry: RecipeEntry = getRecipes()[node.recipeIndex];
  const recipe: Recipe = Array.isArray(entry) ? entry[node.recipeVariableIndex] : entry;

  if (!recipe.ingredients) return DEFAULT;

  return {
    "0_slot": recipe.ingredients[0][node.indexVariables[0]] as ItemKey,
    "1_slot": recipe.ingredients[1][node.indexVariables[1]] as ItemKey,
    "2_slot": recipe.ingredients[2][node.indexVariables[2]] as ItemKey,
    "3_slot": recipe.ingredients[3][node.indexVariables[3]] as ItemKey,
    "4_slot": recipe.ingredients[4][node.indexVariables[4]] as ItemKey,
    "5_slot": recipe.ingredients[5][node.indexVariables[5]] as ItemKey,
    "6_slot": recipe.ingredients[6][node.indexVariables[6]] as ItemKey,
    "7_slot": recipe.ingredients[7][node.indexVariables[7]] as ItemKey,
    "8_slot": recipe.ingredients[8][node.indexVariables[8]] as ItemKey,
    output_slot: recipe.item as ItemKey,
    output_count: recipe.count,
    crafting_type: recipe.crafting_type,
    time: recipe.time ?? 0,
    experience: recipe.experience ?? 0,
  };
};

export const computeIngredients = (node: TreeNode): Record<string, number> => {
  const active = getActiveRecipe(node);
  const multiplier = roundToMultiple(node.count / active.output_count, 1);
  const result: Record<string, number> = {};

  if (TYPE_USE_FUELS.includes(active.crafting_type)) {
    const first = active["0_slot"];
    const fuel = active["1_slot"];

    if (first !== "air") {
      result[first] = multiplier;
    }

    if (fuel !== "air" && getFuels()[fuel]) {
      const totalTime = (active.time ?? 0) * multiplier;
      result[fuel] = Math.ceil(totalTime / getFuels()[fuel]);
    }
  } else {
    for (let i = 0; i <= 8; i++) {
      const key = `${i}_slot` as SlotKey;
      const value = active[key];

      if (value !== "air") {
        result[value] = (result[value] ?? 0) + 1;
      }
    }

    for (const key in result) {
      result[key] *= multiplier;
    }

    if (active.crafting_type === "brewing") {
      for (const key in BREWING_FUEL_YIELD) {
        if (result[key]) {
          result[key] = Math.ceil(result[key] / BREWING_FUEL_YIELD[key]);
        }
      }

      const ingredient = active[BREWING_INGREDIENT_SLOT];
      if (ingredient !== "air" && result[ingredient]) {
        result[ingredient] = Math.ceil(result[ingredient] / BREWING_BATCH_SIZE);
      }
    }
  }

  return result;
};

const buildChildrenForNode = (node: TreeNode, prevChildren: TreeNode[] | null): TreeNode[] => {
  const ingredients = computeIngredients(node);
  const prevByRecipeIndex = new Map<number, TreeNode>();

  if (prevChildren) {
    for (const child of prevChildren) {
      prevByRecipeIndex.set(child.recipeIndex, child);
    }
  }

  const result: TreeNode[] = [];

  for (const itemKey in ingredients) {
    const recipeIndex = findRecipeIndex(itemKey);
    if (recipeIndex === null) continue;

    const count = ingredients[itemKey];
    const prev = prevByRecipeIndex.get(recipeIndex);

    if (prev) {
      result.push(reconcileSubtree({ ...prev, count }));
    } else {
      result.push(buildNode(recipeIndex, count));
    }
  }

  return result;
};

export const reconcileSubtree = (node: TreeNode): TreeNode => {
  if (!node.expanded) return { ...node, children: null };

  return {
    ...node,
    children: buildChildrenForNode(node, node.children),
  };
};

export const updateAtPath = (root: TreeNode, path: number[], fn: (node: TreeNode) => TreeNode): TreeNode => {
  if (path.length === 0) {
    return reconcileSubtree(fn(root));
  }

  const [head, ...rest] = path;

  if (!root.children || head < 0 || head >= root.children.length) {
    return root;
  }

  const newChildren = [...root.children];
  newChildren[head] = updateAtPath(root.children[head], rest, fn);

  return { ...root, children: newChildren };
};

export type FrontierTotals = {
  ingredients: Record<string, number>;
  experience: number;
};

const getNodeExperience = (node: TreeNode): number => {
  const entry = getRecipes()[node.recipeIndex];
  const recipe = Array.isArray(entry) ? entry[node.recipeVariableIndex] : entry;
  const perCraft = recipe.experience ?? 0;

  if (!perCraft) return 0;

  const resultMultiplier = roundToMultiple(node.count, recipe.count);
  return resultMultiplier * perCraft;
};

export const computeFrontier = (root: TreeNode | null): FrontierTotals => {
  const ingredients: Record<string, number> = {};
  let experience = 0;

  if (!root) return { ingredients, experience };

  const visit = (node: TreeNode) => {
    if (node.disabled) {
      const item = getOutputItem(node);
      ingredients[item] = (ingredients[item] ?? 0) + node.count;
      return;
    }

    experience += getNodeExperience(node);

    if (node.expanded && node.children && node.children.length > 0) {
      const nodeIngredients = computeIngredients(node);
      const decomposed = new Set(node.children.map((child) => getOutputItem(child)));

      for (const key in nodeIngredients) {
        if (!decomposed.has(key)) {
          ingredients[key] = (ingredients[key] ?? 0) + nodeIngredients[key];
        }
      }

      for (const child of node.children) {
        visit(child);
      }
      return;
    }

    const nodeIngredients = computeIngredients(node);
    for (const key in nodeIngredients) {
      ingredients[key] = (ingredients[key] ?? 0) + nodeIngredients[key];
    }
  };

  visit(root);
  return { ingredients, experience };
};
