import type { TreeNode } from "@/common/helpers/tree.ts";
import type { CraftingType, RecipeType, SlotKey, VariablesType } from "@/types/types.ts";

export const VERSION = "26.2";

export const DEFAULT_FLOATING_POSITION = { x: 75, y: 75 };

export const COUNT_STACK_64 = 64;
export const COUNT_SLOT_SHULKER = 27;

export const MAX_CALCULATIONS = 268435456 * 32;

export const VARIABLES: VariablesType = [0, 0, 0, 0, 0, 0, 0, 0, 0];

export const CRAFTING_TYPE: CraftingType[] = [
  "crafting_shaped",
  "crafting_shapeless",
  "crafting_transmute",
  "crafting_imbue",
  "stonecutting",
  "smelting",
  "blasting",
  "smoking",
  "campfire_cooking",
  "smithing_transform",
  "brewing",
];

export const DEFAULT: RecipeType = {
  "0_slot": "air",
  "1_slot": "air",
  "2_slot": "air",
  "3_slot": "air",
  "4_slot": "air",
  "5_slot": "air",
  "6_slot": "air",
  "7_slot": "air",
  "8_slot": "air",
  output_slot: "air",
  output_count: 1,
  crafting_type: "crafting_shapeless",
  time: 0,
  experience: 0,
};

export const DEFAULT_ROOT: TreeNode = {
  recipeIndex: 0,
  count: 1,
  expanded: false,
  disabled: false,
  recipeVariableIndex: 0,
  indexVariables: VARIABLES,
  children: null,
};

export const TYPE_USE_FUELS: string[] = ["smelting", "blasting", "smoking"];

export const BREWING_FUEL_YIELD: Record<string, number> = {
  blaze_powder: 60,
};

export const BREWING_INGREDIENT_SLOT: SlotKey = "1_slot";
export const BREWING_BATCH_SIZE = 3;
