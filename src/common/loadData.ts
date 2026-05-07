import type { Fuel, RecipeEntry, Stack } from "@/types/types.ts";

let fuels: Fuel = {};
let stacks: Stack = {};
let recipes: RecipeEntry[] = [];

let fuelsPromise: Promise<Fuel> | null = null;
let stacksPromise: Promise<Stack> | null = null;
let recipesPromise: Promise<RecipeEntry[]> | null = null;

export function loadFuels(): Promise<Fuel> {
  if (!fuelsPromise) {
    fuelsPromise = fetch("/data/fuels.json")
      .then((r) => r.json())
      .then((data) => {
        fuels = data;
        return data;
      });
  }

  return fuelsPromise;
}

export function loadStacks(): Promise<Stack> {
  if (!stacksPromise) {
    stacksPromise = fetch("/data/stacks.json")
      .then((r) => r.json())
      .then((data) => {
        stacks = data;
        return data;
      });
  }

  return stacksPromise;
}

export function loadRecipes(): Promise<RecipeEntry[]> {
  if (!recipesPromise) {
    recipesPromise = fetch("/data/recipes.json")
      .then((r) => r.json())
      .then((data) => {
        recipes = data;
        return data;
      });
  }

  return recipesPromise;
}

export function getFuels(): Fuel {
  return fuels;
}

export function getStacks(): Stack {
  return stacks;
}

export function getRecipes(): RecipeEntry[] {
  return recipes;
}
