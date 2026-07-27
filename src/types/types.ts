import type { ItemKey } from "@/localization";

export type CraftingType =
  | "crafting_shaped"
  | "crafting_shapeless"
  | "crafting_transmute"
  | "crafting_imbue"
  | "stonecutting"
  | "smelting"
  | "blasting"
  | "smoking"
  | "campfire_cooking"
  | "smithing_transform"
  | "brewing";

export type Fuel = Record<string, number>;

export type Stack = Record<string, number>;

export type Recipe = {
  crafting_type: CraftingType;
  item: string;
  count: number;
  time?: number;
  experience?: number;
  ingredients: [string[], string[], string[], string[], string[], string[], string[], string[], string[]];
};

export type RecipeEntry = Recipe | Recipe[];

export type RecipeType = {
  "0_slot": ItemKey;
  "1_slot": ItemKey;
  "2_slot": ItemKey;
  "3_slot": ItemKey;
  "4_slot": ItemKey;
  "5_slot": ItemKey;
  "6_slot": ItemKey;
  "7_slot": ItemKey;
  "8_slot": ItemKey;
  output_slot: ItemKey;
  output_count: number;
  crafting_type: CraftingType;
  time?: number;
  experience?: number;
};

export type ItemTypeSize = "small" | "medium" | "large";

export type VariablesType = number[];

export type SlotKey = `${0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8}_slot`;
