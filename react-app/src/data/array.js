const air = [
  {
    1: "air",
    2: "air",
    3: "air",
    4: "air",
    5: "air",
    6: "air",
    7: "air",
    8: "air",
    9: "air",
    out: "air",
    qty: 1
  },
];

const craftAllNoSort = [
  {
    1: null,
    2: null,
    3: null,
    4: "diorite",
    5: "quartz",
    6: null,
    7: null,
    8: null,
    9: null,
    out: "granite",
    qty: 1
  }, // granite
  {
    1: null,
    2: null,
    3: null,
    4: "granite",
    5: "granite",
    6: null,
    7: "granite",
    8: "granite",
    9: null,
    out: "polished_granite",
    qty: 4
  }, // polished_granite
  {
    1: null,
    2: null,
    3: null,
    4: "cobblestone",
    5: "quartz",
    6: null,
    7: "quartz",
    8: "cobblestone",
    9: null,
    out: "diorite",
    qty: 2
  }, // diorite
  {
    1: null,
    2: null,
    3: null,
    4: "diorite",
    5: "diorite",
    6: null,
    7: "diorite",
    8: "diorite",
    9: null,
    out: "polished_diorite",
    qty: 4
  }, // polished_diorite
  {
    1: null,
    2: null,
    3: null,
    4: "diorite",
    5: "cobblestone",
    6: null,
    7: null,
    8: null,
    9: null,
    out: "andesite",
    qty: 2
  }, // andesite
  {
    1: null,
    2: null,
    3: null,
    4: "andesite",
    5: "andesite",
    6: null,
    7: "andesite",
    8: "andesite",
    9: null,
    out: "polished_andesite",
    qty: 4
  }, // polished_andesite
  {
    1: null,
    2: null,
    3: null,
    4: "cobbled_deepslate",
    5: "cobbled_deepslate",
    6: null,
    7: "cobbled_deepslate",
    8: "cobbled_deepslate",
    9: null,
    out: "polished_deepslate",
    qty: 4
  }, // polished_deepslate
  {
    1: null,
    2: null,
    3: null,
    4: "pointed_dripstone",
    5: "pointed_dripstone",
    6: null,
    7: "pointed_dripstone",
    8: "pointed_dripstone",
    9: null,
    out: "dripstone_block",
    qty: 1
  }, // dripstone_block
  {
    1: null,
    2: null,
    3: null,
    4: "dirt",
    5: "gravel",
    6: null,
    7: "gravel",
    8: "dirt",
    9: null,
    out: "rooted_dirt",
    qty: 4
  }, // rooted_dirt
  {
    1: null,
    2: null,
    3: null,
    4: null,
    5: "oak_log",
    6: null,
    7: null,
    8: null,
    9: null,
    out: "oak_planks",
    qty: 4
  }, // "oak_planks"
  {
    1: null,
    2: null,
    3: null,
    4: null,
    5: "spruce_log",
    6: null,
    7: null,
    8: null,
    9: null,
    out: "spruce_planks",
    qty: 4
  }, // "spruce_planks"
  {
    1: null,
    2: null,
    3: null,
    4: null,
    5: "birch_log",
    6: null,
    7: null,
    8: null,
    9: null,
    out: "birch_planks",
    qty: 4
  }, // "birch_planks"
  {
    1: null,
    2: null,
    3: null,
    4: null,
    5: "jungle_log",
    6: null,
    7: null,
    8: null,
    9: null,
    out: "jungle_planks",
    qty: 4
  }, // "jungle_planks"
  {
    1: null,
    2: null,
    3: null,
    4: null,
    5: "acacia_log",
    6: null,
    7: null,
    8: null,
    9: null,
    out: "acacia_planks",
    qty: 4
  }, // "acacia_planks"
  {
    1: null,
    2: null,
    3: null,
    4: null,
    5: "cherry_log",
    6: null,
    7: null,
    8: null,
    9: null,
    out: "cherry_planks",
    qty: 4
  }, // "cherry_planks"
  {
    1: null,
    2: null,
    3: null,
    4: null,
    5: "dark_oak_log",
    6: null,
    7: null,
    8: null,
    9: null,
    out: "dark_oak_planks",
    qty: 4
  }, // "dark_oak_planks"
  {
    1: null,
    2: null,
    3: null,
    4: null,
    5: "mangrove_log",
    6: null,
    7: null,
    8: null,
    9: null,
    out: "mangrove_planks",
    qty: 4
  }, // "mangrove_planks"
  {
    1: null,
    2: null,
    3: null,
    4: null,
    5: "bamboo_block",
    6: null,
    7: null,
    8: null,
    9: null,
    out: "bamboo_planks",
    qty: 2
  }, // "bamboo_planks"
  {
    1: null,
    2: null,
    3: null,
    4: null,
    5: "crimson_stem",
    6: null,
    7: null,
    8: null,
    9: null,
    out: "crimson_planks",
    qty: 4
  }, // "crimson_planks"
  {
    1: null,
    2: null,
    3: null,
    4: null,
    5: "warped_stem",
    6: null,
    7: null,
    8: null,
    9: null,
    out: "warped_planks",
    qty: 4
  }, // "warped_planks"
  {
    1: null,
    2: null,
    3: null,
    4: null,
    5: "bamboo_slab",
    6: null,
    7: null,
    8: "bamboo_slab",
    9: null,
    out: "bamboo_mosaic",
    qty: 1
  }, // "bamboo_mosaic"
  {
    1: "coal",
    2: "coal",
    3: "coal",
    4: "coal",
    5: "coal",
    6: "coal",
    7: "coal",
    8: "coal",
    9: "coal",
    out: "coal_block",
    qty: 1
  }, // "coal_block"
  {
    1: "raw_iron",
    2: "raw_iron",
    3: "raw_iron",
    4: "raw_iron",
    5: "raw_iron",
    6: "raw_iron",
    7: "raw_iron",
    8: "raw_iron",
    9: "raw_iron",
    out: "raw_iron_block",
    qty: 1
  }, // "raw_iron_block"
  {
    1: "raw_copper",
    2: "raw_copper",
    3: "raw_copper",
    4: "raw_copper",
    5: "raw_copper",
    6: "raw_copper",
    7: "raw_copper",
    8: "raw_copper",
    9: "raw_copper",
    out: "raw_copper_block",
    qty: 1
  }, // "raw_copper_block"
  {
    1: "raw_gold",
    2: "raw_gold",
    3: "raw_gold",
    4: "raw_gold",
    5: "raw_gold",
    6: "raw_gold",
    7: "raw_gold",
    8: "raw_gold",
    9: "raw_gold",
    out: "raw_gold_block",
    qty: 1
  }, // "raw_gold_block"
  {
    1: null,
    2: null,
    3: null,
    4: "amethyst_shard",
    5: "amethyst_shard",
    6: null,
    7: "amethyst_shard",
    8: "amethyst_shard",
    9: null,
    out: "amethyst_block",
    qty: 1
  }, // "amethyst_block"
  {
    1: "iron_ingot",
    2: "iron_ingot",
    3: "iron_ingot",
    4: "iron_ingot",
    5: "iron_ingot",
    6: "iron_ingot",
    7: "iron_ingot",
    8: "iron_ingot",
    9: "iron_ingot",
    out: "iron_block",
    qty: 1
  }, // "iron_block"
  {
    1: "copper_ingot",
    2: "copper_ingot",
    3: "copper_ingot",
    4: "copper_ingot",
    5: "copper_ingot",
    6: "copper_ingot",
    7: "copper_ingot",
    8: "copper_ingot",
    9: "copper_ingot",
    out: "copper_block",
    qty: 1
  }, // "copper_block"
  {
    1: "gold_ingot",
    2: "gold_ingot",
    3: "gold_ingot",
    4: "gold_ingot",
    5: "gold_ingot",
    6: "gold_ingot",
    7: "gold_ingot",
    8: "gold_ingot",
    9: "gold_ingot",
    out: "gold_block",
    qty: 1
  }, // "gold_block"
  {
    1: "diamond",
    2: "diamond",
    3: "diamond",
    4: "diamond",
    5: "diamond",
    6: "diamond",
    7: "diamond",
    8: "diamond",
    9: "diamond",
    out: "diamond_block",
    qty: 1
  }, // "diamond_block"
  {
    1: "netherite_ingot",
    2: "netherite_ingot",
    3: "netherite_ingot",
    4: "netherite_ingot",
    5: "netherite_ingot",
    6: "netherite_ingot",
    7: "netherite_ingot",
    8: "netherite_ingot",
    9: "netherite_ingot",
    out: "netherite_block",
    qty: 1
  }, // "netherite_block"
  {
    1: null,
    2: null,
    3: null,
    4: "copper_block",
    5: "copper_block",
    6: null,
    7: "copper_block",
    8: "copper_block",
    9: null,
    out: "cut_copper",
    qty: 4
  }, // "cut_copper"
  {
    1: null,
    2: null,
    3: null,
    4: "exposed_copper",
    5: "exposed_copper",
    6: null,
    7: "exposed_copper",
    8: "exposed_copper",
    9: null,
    out: "exposed_cut_copper",
    qty: 4
  }, // "exposed_cut_copper"
  {
    1: null,
    2: null,
    3: null,
    4: "weathered_copper",
    5: "weathered_copper",
    6: null,
    7: "weathered_copper",
    8: "weathered_copper",
    9: null,
    out: "weathered_cut_copper",
    qty: 4
  }, // "weathered_cut_copper"
  {
    1: null,
    2: null,
    3: null,
    4: "oxidized_copper",
    5: "oxidized_copper",
    6: null,
    7: "oxidized_copper",
    8: "oxidized_copper",
    9: null,
    out: "oxidized_cut_copper",
    qty: 1
  }, // "oxidized_cut_copper"
  {
    1: "cut_copper",
    2: null,
    3: null,
    4: "cut_copper",
    5: "cut_copper",
    6: null,
    7: "cut_copper",
    8: "cut_copper",
    9: "cut_copper",
    out: "cut_copper_stairs",
    qty: 4
  }, // "cut_copper_stairs"
  {
    1: "exposed_cut_copper",
    2: null,
    3: null,
    4: "exposed_cut_copper",
    5: "exposed_cut_copper",
    6: null,
    7: "exposed_cut_copper",
    8: "exposed_cut_copper",
    9: "exposed_cut_copper",
    out: "exposed_cut_copper_stairs",
    qty: 4
  }, // "exposed_cut_copper_stairs"
  {
    1: "weathered_cut_copper",
    2: null,
    3: null,
    4: "weathered_cut_copper",
    5: "weathered_cut_copper",
    6: null,
    7: "weathered_cut_copper",
    8: "weathered_cut_copper",
    9: "weathered_cut_copper",
    out: "weathered_cut_copper_stairs",
    qty: 4
  }, // "weathered_cut_copper_stairs"
  {
    1: "oxidized_cut_copper",
    2: null,
    3: null,
    4: "oxidized_cut_copper",
    5: "oxidized_cut_copper",
    6: null,
    7: "oxidized_cut_copper",
    8: "oxidized_cut_copper",
    9: "oxidized_cut_copper",
    out: "oxidized_cut_copper_stairs",
    qty: 4
  }, // "oxidized_cut_copper_stairs"
  {
    1: null,
    2: null,
    3: null,
    4: "cut_copper",
    5: "cut_copper",
    6: "cut_copper",
    7: null,
    8: null,
    9: null,
    out: "cut_copper_slab",
    qty: 6
  }, // "cut_copper_slab"
  {
    1: null,
    2: null,
    3: null,
    4: "exposed_cut_copper",
    5: "exposed_cut_copper",
    6: "exposed_cut_copper",
    7: null,
    8: null,
    9: null,
    out: "exposed_cut_copper_slab",
    qty: 6
  }, // "exposed_cut_copper_slab"
  {
    1: null,
    2: null,
    3: null,
    4: "weathered_cut_copper",
    5: "weathered_cut_copper",
    6: "weathered_cut_copper",
    7: null,
    8: null,
    9: null,
    out: "weathered_cut_copper_slab",
    qty: 6
  }, // "weathered_cut_copper_slab"
  {
    1: null,
    2: null,
    3: null,
    4: "oxidized_cut_copper",
    5: "oxidized_cut_copper",
    6: "oxidized_cut_copper",
    7: null,
    8: null,
    9: null,
    out: "oxidized_cut_copper_slab",
    qty: 6
  }, // "oxidized_cut_copper_slab"
  {
    1: null,
    2: null,
    3: null,
    4: "copper_block",
    5: "honeycomb",
    6: null,
    7: null,
    8: null,
    9: null,
    out: "waxed_copper_block",
    qty: 1
  }, // "waxed_copper_block"
  {
    1: null,
    2: null,
    3: null,
    4: "exposed_copper",
    5: "honeycomb",
    6: null,
    7: null,
    8: null,
    9: null,
    out: "waxed_exposed_copper",
    qty: 1
  }, // "waxed_exposed_copper"
  {
    1: null,
    2: null,
    3: null,
    4: "weathered_copper",
    5: "honeycomb",
    6: null,
    7: null,
    8: null,
    9: null,
    out: "waxed_weathered_copper",
    qty: 1
  }, // "waxed_weathered_copper"
  {
    1: null,
    2: null,
    3: null,
    4: "oxidized_copper",
    5: "honeycomb",
    6: null,
    7: null,
    8: null,
    9: null,
    out: "waxed_oxidized_copper",
    qty: 1
  }, // "waxed_oxidized_copper"
  {
    1: null,
    2: null,
    3: null,
    4: "waxed_copper_block",
    5: "waxed_copper_block",
    6: null,
    7: "waxed_copper_block",
    8: "waxed_copper_block",
    9: null,
    out: "waxed_cut_copper",
    qty: 4
  }, // "waxed_cut_copper"
  {
    1: null,
    2: null,
    3: null,
    4: "waxed_exposed_copper",
    5: "waxed_exposed_copper",
    6: null,
    7: "waxed_exposed_copper",
    8: "waxed_exposed_copper",
    9: null,
    out: "waxed_exposed_cut_copper",
    qty: 4
  }, // "waxed_exposed_cut_copper"
  {
    1: null,
    2: null,
    3: null,
    4: "waxed_weathered_copper",
    5: "waxed_weathered_copper",
    6: null,
    7: "waxed_weathered_copper",
    8: "waxed_weathered_copper",
    9: null,
    out: "waxed_weathered_cut_copper",
    qty: 4
  }, // "waxed_weathered_cut_copper"
  {
    1: null,
    2: null,
    3: null,
    4: "waxed_oxidized_copper",
    5: "waxed_oxidized_copper",
    6: null,
    7: "waxed_oxidized_copper",
    8: "waxed_oxidized_copper",
    9: null,
    out: "waxed_oxidized_cut_copper",
    qty: 4
  }, // "waxed_oxidized_cut_copper"
  {
    1: "waxed_cut_copper",
    2: null,
    3: null,
    4: "waxed_cut_copper",
    5: "waxed_cut_copper",
    6: null,
    7: "waxed_cut_copper",
    8: "waxed_cut_copper",
    9: "waxed_cut_copper",
    out: "waxed_cut_copper_stairs",
    qty: 4
  }, // "waxed_cut_copper_stairs"
  {
    1: "waxed_exposed_cut_copper",
    2: null,
    3: null,
    4: "waxed_exposed_cut_copper",
    5: "waxed_exposed_cut_copper",
    6: null,
    7: "waxed_exposed_cut_copper",
    8: "waxed_exposed_cut_copper",
    9: "waxed_exposed_cut_copper",
    out: "waxed_exposed_cut_copper_stairs",
    qty: 4
  }, // "waxed_exposed_cut_copper_stairs"
  {
    1: "waxed_weathered_cut_copper",
    2: null,
    3: null,
    4: "waxed_weathered_cut_copper",
    5: "waxed_weathered_cut_copper",
    6: null,
    7: "waxed_weathered_cut_copper",
    8: "waxed_weathered_cut_copper",
    9: "waxed_weathered_cut_copper",
    out: "waxed_weathered_cut_copper_stairs",
    qty: 4
  }, // "waxed_weathered_cut_copper_stairs"
  {
    1: "waxed_oxidized_cut_copper",
    2: null,
    3: null,
    4: "waxed_oxidized_cut_copper",
    5: "waxed_oxidized_cut_copper",
    6: null,
    7: "waxed_oxidized_cut_copper",
    8: "waxed_oxidized_cut_copper",
    9: "waxed_oxidized_cut_copper",
    out: "waxed_oxidized_cut_copper_stairs",
    qty: 4
  }, // "waxed_oxidized_cut_copper_stairs"
  {
    1: "waxed_cut_copper",
    2: null,
    3: null,
    4: "waxed_cut_copper",
    5: "waxed_cut_copper",
    6: null,
    7: "waxed_cut_copper",
    8: "waxed_cut_copper",
    9: "waxed_cut_copper",
    out: "waxed_cut_copper_slab",
    qty: 6
  }, // "waxed_cut_copper_slab"
  {
    1: "waxed_exposed_cut_copper",
    2: null,
    3: null,
    4: "waxed_exposed_cut_copper",
    5: "waxed_exposed_cut_copper",
    6: null,
    7: "waxed_exposed_cut_copper",
    8: "waxed_exposed_cut_copper",
    9: "waxed_exposed_cut_copper",
    out: "waxed_exposed_cut_copper_slab",
    qty: 6
  }, // "waxed_exposed_cut_copper_slab"
  {
    1: "waxed_weathered_cut_copper",
    2: null,
    3: null,
    4: "waxed_weathered_cut_copper",
    5: "waxed_weathered_cut_copper",
    6: null,
    7: "waxed_weathered_cut_copper",
    8: "waxed_weathered_cut_copper",
    9: "waxed_weathered_cut_copper",
    out: "waxed_weathered_cut_copper_slab",
    qty: 6
  }, // "waxed_weathered_cut_copper_slab"
  {
    1: "waxed_oxidized_cut_copper",
    2: null,
    3: null,
    4: "waxed_oxidized_cut_copper",
    5: "waxed_oxidized_cut_copper",
    6: null,
    7: "waxed_oxidized_cut_copper",
    8: "waxed_oxidized_cut_copper",
    9: "waxed_oxidized_cut_copper",
    out: "waxed_oxidized_cut_copper_slab",
    qty: 6
  }, // "waxed_oxidized_cut_copper_slab"
  {
    1: null,
    2: null,
    3: null,
    4: "mud",
    5: "mangrove_roots",
    6: null,
    7: null,
    8: null,
    9: null,
    out: "muddy_mangrove_roots",
    qty: 1
  }, // "muddy_mangrove_roots"
  {
    1: "bamboo",
    2: "bamboo",
    3: "bamboo",
    4: "bamboo",
    5: "bamboo",
    6: "bamboo",
    7: "bamboo",
    8: "bamboo",
    9: "bamboo",
    out: "bamboo_block",
    qty: 1
  }, // "bamboo_block"
  {
    1: null,
    2: null,
    3: null,
    4: "stripped_oak_log",
    5: "stripped_oak_log",
    6: null,
    7: "stripped_oak_log",
    8: "stripped_oak_log",
    9: null,
    out: "stripped_oak_wood",
    qty: 3
  }, // "stripped_oak_wood"
  {
    1: null,
    2: null,
    3: null,
    4: "stripped_spruce_log",
    5: "stripped_spruce_log",
    6: null,
    7: "stripped_spruce_log",
    8: "stripped_spruce_log",
    9: null,
    out: "stripped_spruce_wood",
    qty: 3
  }, // "stripped_spruce_wood"
  {
    1: null,
    2: null,
    3: null,
    4: "stripped_birch_log",
    5: "stripped_birch_log",
    6: null,
    7: "stripped_birch_log",
    8: "stripped_birch_log",
    9: null,
    out: "stripped_birch_wood",
    qty: 3
  }, // "stripped_birch_wood"
  {
    1: null,
    2: null,
    3: null,
    4: "stripped_jungle_log",
    5: "stripped_jungle_log",
    6: null,
    7: "stripped_jungle_log",
    8: "stripped_jungle_log",
    9: null,
    out: "stripped_jungle_wood",
    qty: 3
  }, // "stripped_jungle_wood"
  {
    1: null,
    2: null,
    3: null,
    4: "stripped_acacia_log",
    5: "stripped_acacia_log",
    6: null,
    7: "stripped_acacia_log",
    8: "stripped_acacia_log",
    9: null,
    out: "stripped_acacia_wood",
    qty: 3
  }, // "stripped_acacia_wood"
  {
    1: null,
    2: null,
    3: null,
    4: "stripped_cherry_log",
    5: "stripped_cherry_log",
    6: null,
    7: "stripped_cherry_log",
    8: "stripped_cherry_log",
    9: null,
    out: "stripped_cherry_wood",
    qty: 3
  }, // "stripped_cherry_wood"
  {
    1: null,
    2: null,
    3: null,
    4: "stripped_dark_oak_log",
    5: "stripped_dark_oak_log",
    6: null,
    7: "stripped_dark_oak_log",
    8: "stripped_dark_oak_log",
    9: null,
    out: "stripped_dark_oak_wood",
    qty: 3
  }, // "stripped_dark_oak_wood"
  {
    1: null,
    2: null,
    3: null,
    4: "stripped_mangrove_log",
    5: "stripped_mangrove_log",
    6: null,
    7: "stripped_mangrove_log",
    8: "stripped_mangrove_log",
    9: null,
    out: "stripped_mangrove_wood",
    qty: 3
  }, // "stripped_mangrove_wood"
  {
    1: null,
    2: null,
    3: null,
    4: "stripped_crimson_stem",
    5: "stripped_crimson_stem",
    6: null,
    7: "stripped_crimson_stem",
    8: "stripped_crimson_stem",
    9: null,
    out: "stripped_crimson_hyphae",
    qty: 3
  }, // "stripped_crimson_hyphae"
  {
    1: null,
    2: null,
    3: null,
    4: "stripped_warped_stem",
    5: "stripped_warped_stem",
    6: null,
    7: "stripped_warped_stem",
    8: "stripped_warped_stem",
    9: null,
    out: "stripped_warped_hyphae",
    qty: 3
  }, // "stripped_warped_hyphae"
  {
    1: null,
    2: null,
    3: null,
    4: "oak_log",
    5: "oak_log",
    6: null,
    7: "oak_log",
    8: "oak_log",
    9: null,
    out: "oak_wood",
    qty: 3
  }, // "oak_wood"
  {
    1: null,
    2: null,
    3: null,
    4: "spruce_log",
    5: "spruce_log",
    6: null,
    7: "spruce_log",
    8: "spruce_log",
    9: null,
    out: "spruce_wood",
    qty: 3
  }, // "spruce_wood"
  {
    1: null,
    2: null,
    3: null,
    4: "birch_log",
    5: "birch_log",
    6: null,
    7: "birch_log",
    8: "birch_log",
    9: null,
    out: "birch_wood",
    qty: 3
  }, // "birch_wood"
  {
    1: null,
    2: null,
    3: null,
    4: "jungle_log",
    5: "jungle_log",
    6: null,
    7: "jungle_log",
    8: "jungle_log",
    9: null,
    out: "jungle_wood",
    qty: 3
  }, // "jungle_wood"
  {
    1: null,
    2: null,
    3: null,
    4: "acacia_log",
    5: "acacia_log",
    6: null,
    7: "acacia_log",
    8: "acacia_log",
    9: null,
    out: "acacia_wood",
    qty: 3
  }, // "acacia_wood"
  {
    1: null,
    2: null,
    3: null,
    4: "cherry_log",
    5: "cherry_log",
    6: null,
    7: "cherry_log",
    8: "cherry_log",
    9: null,
    out: "cherry_wood",
    qty: 3
  }, // "cherry_wood"
  {
    1: null,
    2: null,
    3: null,
    4: "dark_oak_log",
    5: "dark_oak_log",
    6: null,
    7: "dark_oak_log",
    8: "dark_oak_log",
    9: null,
    out: "dark_oak_wood",
    qty: 3
  }, // "dark_oak_wood"
  {
    1: null,
    2: null,
    3: null,
    4: "mangrove_log",
    5: "mangrove_log",
    6: null,
    7: "mangrove_log",
    8: "mangrove_log",
    9: null,
    out: "mangrove_wood",
    qty: 3
  }, // "mangrove_wood"
  {
    1: null,
    2: null,
    3: null,
    4: "crimson_stem",
    5: "crimson_stem",
    6: null,
    7: "crimson_stem",
    8: "crimson_stem",
    9: null,
    out: "crimson_hyphae",
    qty: 3
  }, // "crimson_hyphae"
  {
    1: null,
    2: null,
    3: null,
    4: "warped_stem",
    5: "warped_stem",
    6: null,
    7: "warped_stem",
    8: "warped_stem",
    9: null,
    out: "warped_hyphae",
    qty: 3
  }, // "warped_hyphae"
  {
    1: null,
    2: "amethyst_shard",
    3: null,
    4: "amethyst_shard",
    5: "glass",
    6: "amethyst_shard",
    7: null,
    8: "amethyst_shard",
    9: null,
    out: "tinted_glass",
    qty: 2
  }, // "tinted_glass"
  {
    1: "lapis_lazuli",
    2: "lapis_lazuli",
    3: "lapis_lazuli",
    4: "lapis_lazuli",
    5: "lapis_lazuli",
    6: "lapis_lazuli",
    7: "lapis_lazuli",
    8: "lapis_lazuli",
    9: "lapis_lazuli",
    out: "lapis_block",
    qty: 1
  }, // "lapis_block"
  {
    1: null,
    2: null,
    3: null,
    4: "sand",
    5: "sand",
    6: null,
    7: "sand",
    8: "sand",
    9: null,
    out: "sandstone",
    qty: 1
  }, // "sandstone"
  {
    1: null,
    2: null,
    3: null,
    4: null,
    5: "sandstone_slab",
    6: null,
    7: null,
    8: "sandstone_slab",
    9: null,
    out: "chiseled_sandstone",
    qty: 1
  }, // "chiseled_sandstone"
  {
    1: null,
    2: null,
    3: null,
    4: "sandstone",
    5: "sandstone",
    6: null,
    7: "sandstone",
    8: "sandstone",
    9: null,
    out: "cut_sandstone",
    qty: 4
  }, // "cut_sandstone",
  [
    {
      1: null,
      2: null,
      3: null,
      4: "string",
      5: "string",
      6: null,
      7: "string",
      8: "string",
      9: null,
      out: "white_wool",
      qty: 1
    }, // "white_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "white_dye",
      5: "orange_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "white_wool",
      qty: 1
    }, // "white_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "white_dye",
      5: "magenta_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "white_wool",
      qty: 1
    }, // "white_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "white_dye",
      5: "light_blue_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "white_wool",
      qty: 1
    }, // "white_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "white_dye",
      5: "yellow_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "white_wool",
      qty: 1
    }, // "white_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "white_dye",
      5: "lime_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "white_wool",
      qty: 1
    }, // "white_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "white_dye",
      5: "pink_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "white_wool",
      qty: 1
    }, // "white_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "white_dye",
      5: "gray_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "white_wool",
      qty: 1
    }, // "white_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "white_dye",
      5: "light_gray_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "white_wool",
      qty: 1
    }, // "white_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "white_dye",
      5: "cyan_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "white_wool",
      qty: 1
    }, // "white_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "white_dye",
      5: "purple_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "white_wool",
      qty: 1
    }, // "white_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "white_dye",
      5: "blue_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "white_wool",
      qty: 1
    }, // "white_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "white_dye",
      5: "brown_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "white_wool",
      qty: 1
    }, // "white_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "white_dye",
      5: "green_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "white_wool",
      qty: 1
    }, // "white_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "white_dye",
      5: "red_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "white_wool",
      qty: 1
    }, // "white_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "white_dye",
      5: "black_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "white_wool",
      qty: 1
    }, // "white_wool"
  ],
  [
    {
      1: null,
      2: null,
      3: null,
      4: "orange_dye",
      5: "white_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "orange_wool",
      qty: 1
    }, // "orange_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "orange_dye",
      5: "magenta_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "orange_wool",
      qty: 1
    }, // "orange_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "orange_dye",
      5: "light_blue_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "orange_wool",
      qty: 1
    }, // "orange_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "orange_dye",
      5: "yellow_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "orange_wool",
      qty: 1
    }, // "orange_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "orange_dye",
      5: "lime_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "orange_wool",
      qty: 1
    }, // "orange_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "orange_dye",
      5: "pink_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "orange_wool",
      qty: 1
    }, // "orange_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "orange_dye",
      5: "gray_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "orange_wool",
      qty: 1
    }, // "orange_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "orange_dye",
      5: "light_gray_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "orange_wool",
      qty: 1
    }, // "orange_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "orange_dye",
      5: "cyan_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "orange_wool",
      qty: 1
    }, // "orange_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "orange_dye",
      5: "purple_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "orange_wool",
      qty: 1
    }, // "orange_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "orange_dye",
      5: "blue_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "orange_wool",
      qty: 1
    }, // "orange_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "orange_dye",
      5: "brown_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "orange_wool",
      qty: 1
    }, // "orange_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "orange_dye",
      5: "green_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "orange_wool",
      qty: 1
    }, // "orange_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "orange_dye",
      5: "red_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "orange_wool",
      qty: 1
    }, // "orange_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "orange_dye",
      5: "black_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "orange_wool",
      qty: 1
    }, // "orange_wool"
  ],
  [
    {
      1: null,
      2: null,
      3: null,
      4: "magenta_dye",
      5: "white_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "magenta_wool",
      qty: 1
    }, // "magenta_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "magenta_dye",
      5: "orange_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "magenta_wool",
      qty: 1
    }, // "magenta_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "magenta_dye",
      5: "light_blue_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "magenta_wool",
      qty: 1
    }, // "magenta_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "magenta_dye",
      5: "yellow_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "magenta_wool",
      qty: 1
    }, // "magenta_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "magenta_dye",
      5: "lime_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "magenta_wool",
      qty: 1
    }, // "magenta_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "magenta_dye",
      5: "pink_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "magenta_wool",
      qty: 1
    }, // "magenta_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "magenta_dye",
      5: "gray_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "magenta_wool",
      qty: 1
    }, // "magenta_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "magenta_dye",
      5: "light_gray_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "magenta_wool",
      qty: 1
    }, // "magenta_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "magenta_dye",
      5: "cyan_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "magenta_wool",
      qty: 1
    }, // "magenta_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "magenta_dye",
      5: "purple_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "magenta_wool",
      qty: 1
    }, // "magenta_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "magenta_dye",
      5: "blue_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "magenta_wool",
      qty: 1
    }, // "magenta_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "magenta_dye",
      5: "brown_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "magenta_wool",
      qty: 1
    }, // "magenta_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "magenta_dye",
      5: "green_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "magenta_wool",
      qty: 1
    }, // "magenta_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "magenta_dye",
      5: "red_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "magenta_wool",
      qty: 1
    }, // "magenta_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "magenta_dye",
      5: "black_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "magenta_wool",
      qty: 1
    }, // "magenta_wool"
  ],
  [
    {
      1: null,
      2: null,
      3: null,
      4: "light_blue_dye",
      5: "white_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_blue_wool",
      qty: 1
    }, // "light_blue_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "light_blue_dye",
      5: "orange_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_blue_wool",
      qty: 1
    }, // "light_blue_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "light_blue_dye",
      5: "magenta_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_blue_wool",
      qty: 1
    }, // "light_blue_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "light_blue_dye",
      5: "yellow_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_blue_wool",
      qty: 1
    }, // "light_blue_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "light_blue_dye",
      5: "lime_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_blue_wool",
      qty: 1
    }, // "light_blue_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "light_blue_dye",
      5: "pink_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_blue_wool",
      qty: 1
    }, // "light_blue_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "light_blue_dye",
      5: "gray_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_blue_wool",
      qty: 1
    }, // "light_blue_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "light_blue_dye",
      5: "light_gray_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_blue_wool",
      qty: 1
    }, // "light_blue_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "light_blue_dye",
      5: "cyan_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_blue_wool",
      qty: 1
    }, // "light_blue_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "light_blue_dye",
      5: "purple_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_blue_wool",
      qty: 1
    }, // "light_blue_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "light_blue_dye",
      5: "blue_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_blue_wool",
      qty: 1
    }, // "light_blue_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "light_blue_dye",
      5: "brown_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_blue_wool",
      qty: 1
    }, // "light_blue_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "light_blue_dye",
      5: "green_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_blue_wool",
      qty: 1
    }, // "light_blue_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "light_blue_dye",
      5: "red_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_blue_wool",
      qty: 1
    }, // "light_blue_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "light_blue_dye",
      5: "black_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_blue_wool",
      qty: 1
    }, // "light_blue_wool"
  ],
  [
    {
      1: null,
      2: null,
      3: null,
      4: "yellow_dye",
      5: "white_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "yellow_wool",
      qty: 1
    }, // "yellow_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "yellow_dye",
      5: "orange_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "yellow_wool",
      qty: 1
    }, // "yellow_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "yellow_dye",
      5: "magenta_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "yellow_wool",
      qty: 1
    }, // "yellow_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "yellow_dye",
      5: "light_blue_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "yellow_wool",
      qty: 1
    }, // "yellow_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "yellow_dye",
      5: "lime_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "yellow_wool",
      qty: 1
    }, // "yellow_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "yellow_dye",
      5: "pink_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "yellow_wool",
      qty: 1
    }, // "yellow_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "yellow_dye",
      5: "gray_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "yellow_wool",
      qty: 1
    }, // "yellow_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "yellow_dye",
      5: "light_gray_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "yellow_wool",
      qty: 1
    }, // "yellow_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "yellow_dye",
      5: "cyan_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "yellow_wool",
      qty: 1
    }, // "yellow_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "yellow_dye",
      5: "purple_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "yellow_wool",
      qty: 1
    }, // "yellow_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "yellow_dye",
      5: "blue_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "yellow_wool",
      qty: 1
    }, // "yellow_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "yellow_dye",
      5: "brown_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "yellow_wool",
      qty: 1
    }, // "yellow_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "yellow_dye",
      5: "green_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "yellow_wool",
      qty: 1
    }, // "yellow_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "yellow_dye",
      5: "red_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "yellow_wool",
      qty: 1
    }, // "yellow_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "yellow_dye",
      5: "black_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "yellow_wool",
      qty: 1
    }, // "yellow_wool"
  ],
  [
    {
      1: null,
      2: null,
      3: null,
      4: "lime_dye",
      5: "white_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "lime_wool",
      qty: 1
    }, // "lime_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "lime_dye",
      5: "orange_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "lime_wool",
      qty: 1
    }, // "lime_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "lime_dye",
      5: "magenta_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "lime_wool",
      qty: 1
    }, // "lime_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "lime_dye",
      5: "light_blue_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "lime_wool",
      qty: 1
    }, // "lime_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "lime_dye",
      5: "yellow_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "lime_wool",
      qty: 1
    }, // "lime_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "lime_dye",
      5: "pink_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "lime_wool",
      qty: 1
    }, // "lime_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "lime_dye",
      5: "gray_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "lime_wool",
      qty: 1
    }, // "lime_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "lime_dye",
      5: "light_gray_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "lime_wool",
      qty: 1
    }, // "lime_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "lime_dye",
      5: "cyan_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "lime_wool",
      qty: 1
    }, // "lime_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "lime_dye",
      5: "purple_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "lime_wool",
      qty: 1
    }, // "lime_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "lime_dye",
      5: "blue_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "lime_wool",
      qty: 1
    }, // "lime_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "lime_dye",
      5: "brown_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "lime_wool",
      qty: 1
    }, // "lime_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "lime_dye",
      5: "green_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "lime_wool",
      qty: 1
    }, // "lime_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "lime_dye",
      5: "red_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "lime_wool",
      qty: 1
    }, // "lime_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "lime_dye",
      5: "black_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "lime_wool",
      qty: 1
    }, // "lime_wool"
  ],
  [
    {
      1: null,
      2: null,
      3: null,
      4: "pink_dye",
      5: "white_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "pink_wool",
      qty: 1
    }, // "pink_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "pink_dye",
      5: "orange_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "pink_wool",
      qty: 1
    }, // "pink_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "pink_dye",
      5: "magenta_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "pink_wool",
      qty: 1
    }, // "pink_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "pink_dye",
      5: "light_blue_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "pink_wool",
      qty: 1
    }, // "pink_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "pink_dye",
      5: "yellow_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "pink_wool",
      qty: 1
    }, // "pink_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "pink_dye",
      5: "lime_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "pink_wool",
      qty: 1
    }, // "pink_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "pink_dye",
      5: "gray_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "pink_wool",
      qty: 1
    }, // "pink_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "pink_dye",
      5: "light_gray_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "pink_wool",
      qty: 1
    }, // "pink_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "pink_dye",
      5: "cyan_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "pink_wool",
      qty: 1
    }, // "pink_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "pink_dye",
      5: "purple_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "pink_wool",
      qty: 1
    }, // "pink_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "pink_dye",
      5: "blue_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "pink_wool",
      qty: 1
    }, // "pink_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "pink_dye",
      5: "brown_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "pink_wool",
      qty: 1
    }, // "pink_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "pink_dye",
      5: "green_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "pink_wool",
      qty: 1
    }, // "pink_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "pink_dye",
      5: "red_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "pink_wool",
      qty: 1
    }, // "pink_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "pink_dye",
      5: "black_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "pink_wool",
      qty: 1
    }, // "pink_wool"
  ],
  [
    {
      1: null,
      2: null,
      3: null,
      4: "gray_dye",
      5: "white_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "gray_wool",
      qty: 1
    }, // "gray_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "gray_dye",
      5: "orange_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "gray_wool",
      qty: 1
    }, // "gray_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "gray_dye",
      5: "magenta_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "gray_wool",
      qty: 1
    }, // "gray_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "gray_dye",
      5: "light_blue_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "gray_wool",
      qty: 1
    }, // "gray_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "gray_dye",
      5: "yellow_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "gray_wool",
      qty: 1
    }, // "gray_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "gray_dye",
      5: "lime_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "gray_wool",
      qty: 1
    }, // "gray_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "gray_dye",
      5: "pink_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "gray_wool",
      qty: 1
    }, // "gray_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "gray_dye",
      5: "light_gray_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "gray_wool",
      qty: 1
    }, // "gray_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "gray_dye",
      5: "cyan_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "gray_wool",
      qty: 1
    }, // "gray_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "gray_dye",
      5: "purple_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "gray_wool",
      qty: 1
    }, // "gray_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "gray_dye",
      5: "blue_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "gray_wool",
      qty: 1
    }, // "gray_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "gray_dye",
      5: "brown_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "gray_wool",
      qty: 1
    }, // "gray_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "gray_dye",
      5: "green_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "gray_wool",
      qty: 1
    }, // "gray_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "gray_dye",
      5: "red_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "gray_wool",
      qty: 1
    }, // "gray_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "gray_dye",
      5: "black_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "gray_wool",
      qty: 1
    }, // "gray_wool"
  ],
  [
    {
      1: null,
      2: null,
      3: null,
      4: "light_gray_dye",
      5: "white_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_gray_wool",
      qty: 1
    }, // "light_gray_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "light_gray_dye",
      5: "orange_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_gray_wool",
      qty: 1
    }, // "light_gray_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "light_gray_dye",
      5: "magenta_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_gray_wool",
      qty: 1
    }, // "light_gray_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "light_gray_dye",
      5: "light_blue_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_gray_wool",
      qty: 1
    }, // "light_gray_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "light_gray_dye",
      5: "yellow_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_gray_wool",
      qty: 1
    }, // "light_gray_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "light_gray_dye",
      5: "lime_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_gray_wool",
      qty: 1
    }, // "light_gray_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "light_gray_dye",
      5: "pink_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_gray_wool",
      qty: 1
    }, // "light_gray_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "light_gray_dye",
      5: "gray_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_gray_wool",
      qty: 1
    }, // "light_gray_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "light_gray_dye",
      5: "cyan_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_gray_wool",
      qty: 1
    }, // "light_gray_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "light_gray_dye",
      5: "purple_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_gray_wool",
      qty: 1
    }, // "light_gray_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "light_gray_dye",
      5: "blue_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_gray_wool",
      qty: 1
    }, // "light_gray_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "light_gray_dye",
      5: "brown_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_gray_wool",
      qty: 1
    }, // "light_gray_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "light_gray_dye",
      5: "green_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_gray_wool",
      qty: 1
    }, // "light_gray_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "light_gray_dye",
      5: "red_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_gray_wool",
      qty: 1
    }, // "light_gray_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "light_gray_dye",
      5: "black_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_gray_wool",
      qty: 1
    }, // "light_gray_wool"
  ],
  [
    {
      1: null,
      2: null,
      3: null,
      4: "cyan_dye",
      5: "white_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "cyan_wool",
      qty: 1
    }, // "cyan_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "cyan_dye",
      5: "orange_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "cyan_wool",
      qty: 1
    }, // "cyan_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "cyan_dye",
      5: "magenta_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "cyan_wool",
      qty: 1
    }, // "cyan_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "cyan_dye",
      5: "light_blue_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "cyan_wool",
      qty: 1
    }, // "cyan_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "cyan_dye",
      5: "yellow_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "cyan_wool",
      qty: 1
    }, // "cyan_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "cyan_dye",
      5: "lime_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "cyan_wool",
      qty: 1
    }, // "cyan_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "cyan_dye",
      5: "pink_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "cyan_wool",
      qty: 1
    }, // "cyan_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "cyan_dye",
      5: "gray_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "cyan_wool",
      qty: 1
    }, // "cyan_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "cyan_dye",
      5: "light_gray_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "cyan_wool",
      qty: 1
    }, // "cyan_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "cyan_dye",
      5: "purple_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "cyan_wool",
      qty: 1
    }, // "cyan_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "cyan_dye",
      5: "blue_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "cyan_wool",
      qty: 1
    }, // "cyan_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "cyan_dye",
      5: "brown_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "cyan_wool",
      qty: 1
    }, // "cyan_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "cyan_dye",
      5: "green_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "cyan_wool",
      qty: 1
    }, // "cyan_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "cyan_dye",
      5: "red_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "cyan_wool",
      qty: 1
    }, // "cyan_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "cyan_dye",
      5: "black_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "cyan_wool",
      qty: 1
    }, // "cyan_wool"
  ],
  [
    {
      1: null,
      2: null,
      3: null,
      4: "purple_dye",
      5: "white_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "purple_wool",
      qty: 1
    }, // "purple_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "purple_dye",
      5: "orange_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "purple_wool",
      qty: 1
    }, // "purple_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "purple_dye",
      5: "magenta_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "purple_wool",
      qty: 1
    }, // "purple_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "purple_dye",
      5: "light_blue_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "purple_wool",
      qty: 1
    }, // "purple_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "purple_dye",
      5: "yellow_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "purple_wool",
      qty: 1
    }, // "purple_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "purple_dye",
      5: "lime_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "purple_wool",
      qty: 1
    }, // "purple_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "purple_dye",
      5: "pink_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "purple_wool",
      qty: 1
    }, // "purple_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "purple_dye",
      5: "gray_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "purple_wool",
      qty: 1
    }, // "purple_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "purple_dye",
      5: "light_gray_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "purple_wool",
      qty: 1
    }, // "purple_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "purple_dye",
      5: "cyan_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "purple_wool",
      qty: 1
    }, // "purple_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "purple_dye",
      5: "blue_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "purple_wool",
      qty: 1
    }, // "purple_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "purple_dye",
      5: "brown_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "purple_wool",
      qty: 1
    }, // "purple_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "purple_dye",
      5: "green_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "purple_wool",
      qty: 1
    }, // "purple_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "purple_dye",
      5: "red_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "purple_wool",
      qty: 1
    }, // "purple_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "purple_dye",
      5: "black_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "purple_wool",
      qty: 1
    }, // "purple_wool"
  ],
  [
    {
      1: null,
      2: null,
      3: null,
      4: "blue_dye",
      5: "white_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "blue_wool",
      qty: 1
    }, // "blue_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "blue_dye",
      5: "orange_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "blue_wool",
      qty: 1
    }, // "blue_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "blue_dye",
      5: "magenta_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "blue_wool",
      qty: 1
    }, // "blue_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "blue_dye",
      5: "light_blue_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "blue_wool",
      qty: 1
    }, // "blue_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "blue_dye",
      5: "yellow_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "blue_wool",
      qty: 1
    }, // "blue_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "blue_dye",
      5: "lime_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "blue_wool",
      qty: 1
    }, // "blue_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "blue_dye",
      5: "pink_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "blue_wool",
      qty: 1
    }, // "blue_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "blue_dye",
      5: "gray_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "blue_wool",
      qty: 1
    }, // "blue_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "blue_dye",
      5: "light_gray_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "blue_wool",
      qty: 1
    }, // "blue_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "blue_dye",
      5: "cyan_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "blue_wool",
      qty: 1
    }, // "blue_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "blue_dye",
      5: "purple_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "blue_wool",
      qty: 1
    }, // "blue_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "blue_dye",
      5: "brown_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "blue_wool",
      qty: 1
    }, // "blue_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "blue_dye",
      5: "green_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "blue_wool",
      qty: 1
    }, // "blue_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "blue_dye",
      5: "red_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "blue_wool",
      qty: 1
    }, // "blue_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "blue_dye",
      5: "black_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "blue_wool",
      qty: 1
    }, // "blue_wool"
  ],
  [
    {
      1: null,
      2: null,
      3: null,
      4: "brown_dye",
      5: "white_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "brown_wool",
      qty: 1
    }, // "brown_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "brown_dye",
      5: "orange_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "brown_wool",
      qty: 1
    }, // "brown_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "brown_dye",
      5: "magenta_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "brown_wool",
      qty: 1
    }, // "brown_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "brown_dye",
      5: "light_blue_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "brown_wool",
      qty: 1
    }, // "brown_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "brown_dye",
      5: "yellow_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "brown_wool",
      qty: 1
    }, // "brown_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "brown_dye",
      5: "lime_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "brown_wool",
      qty: 1
    }, // "brown_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "brown_dye",
      5: "pink_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "brown_wool",
      qty: 1
    }, // "brown_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "brown_dye",
      5: "gray_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "brown_wool",
      qty: 1
    }, // "brown_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "brown_dye",
      5: "light_gray_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "brown_wool",
      qty: 1
    }, // "brown_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "brown_dye",
      5: "cyan_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "brown_wool",
      qty: 1
    }, // "brown_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "brown_dye",
      5: "purple_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "brown_wool",
      qty: 1
    }, // "brown_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "brown_dye",
      5: "blue_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "brown_wool",
      qty: 1
    }, // "brown_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "brown_dye",
      5: "green_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "brown_wool",
      qty: 1
    }, // "brown_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "brown_dye",
      5: "red_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "brown_wool",
      qty: 1
    }, // "brown_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "brown_dye",
      5: "black_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "brown_wool",
      qty: 1
    }, // "brown_wool"
  ],
  [
    {
      1: null,
      2: null,
      3: null,
      4: "green_dye",
      5: "white_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "green_wool",
      qty: 1
    }, // "green_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "green_dye",
      5: "orange_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "green_wool",
      qty: 1
    }, // "green_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "green_dye",
      5: "magenta_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "green_wool",
      qty: 1
    }, // "green_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "green_dye",
      5: "light_blue_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "green_wool",
      qty: 1
    }, // "green_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "green_dye",
      5: "yellow_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "green_wool",
      qty: 1
    }, // "green_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "green_dye",
      5: "lime_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "green_wool",
      qty: 1
    }, // "green_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "green_dye",
      5: "pink_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "green_wool",
      qty: 1
    }, // "green_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "green_dye",
      5: "gray_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "green_wool",
      qty: 1
    }, // "green_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "green_dye",
      5: "light_gray_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "green_wool",
      qty: 1
    }, // "green_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "green_dye",
      5: "cyan_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "green_wool",
      qty: 1
    }, // "green_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "green_dye",
      5: "purple_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "green_wool",
      qty: 1
    }, // "green_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "green_dye",
      5: "blue_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "green_wool",
      qty: 1
    }, // "green_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "green_dye",
      5: "brown_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "green_wool",
      qty: 1
    }, // "green_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "green_dye",
      5: "red_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "green_wool",
      qty: 1
    }, // "green_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "green_dye",
      5: "black_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "green_wool",
      qty: 1
    }, // "green_wool"
  ],
  [
    {
      1: null,
      2: null,
      3: null,
      4: "red_dye",
      5: "white_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "red_wool",
      qty: 1
    }, // "red_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "red_dye",
      5: "orange_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "red_wool",
      qty: 1
    }, // "red_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "red_dye",
      5: "magenta_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "red_wool",
      qty: 1
    }, // "red_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "red_dye",
      5: "light_blue_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "red_wool",
      qty: 1
    }, // "red_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "red_dye",
      5: "yellow_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "red_wool",
      qty: 1
    }, // "red_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "red_dye",
      5: "lime_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "red_wool",
      qty: 1
    }, // "red_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "red_dye",
      5: "pink_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "red_wool",
      qty: 1
    }, // "red_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "red_dye",
      5: "gray_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "red_wool",
      qty: 1
    }, // "red_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "red_dye",
      5: "light_gray_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "red_wool",
      qty: 1
    }, // "red_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "red_dye",
      5: "cyan_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "red_wool",
      qty: 1
    }, // "red_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "red_dye",
      5: "purple_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "red_wool",
      qty: 1
    }, // "red_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "red_dye",
      5: "blue_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "red_wool",
      qty: 1
    }, // "red_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "red_dye",
      5: "brown_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "red_wool",
      qty: 1
    }, // "red_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "red_dye",
      5: "green_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "red_wool",
      qty: 1
    }, // "red_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "red_dye",
      5: "black_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "red_wool",
      qty: 1
    }, // "red_wool"
  ],
  [
    {
      1: null,
      2: null,
      3: null,
      4: "black_dye",
      5: "white_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "black_wool",
      qty: 1
    }, // "black_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "black_dye",
      5: "orange_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "black_wool",
      qty: 1
    }, // "black_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "black_dye",
      5: "magenta_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "black_wool",
      qty: 1
    }, // "black_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "black_dye",
      5: "light_blue_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "black_wool",
      qty: 1
    }, // "black_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "black_dye",
      5: "yellow_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "black_wool",
      qty: 1
    }, // "black_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "black_dye",
      5: "lime_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "black_wool",
      qty: 1
    }, // "black_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "black_dye",
      5: "pink_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "black_wool",
      qty: 1
    }, // "black_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "black_dye",
      5: "gray_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "black_wool",
      qty: 1
    }, // "black_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "black_dye",
      5: "light_gray_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "black_wool",
      qty: 1
    }, // "black_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "black_dye",
      5: "cyan_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "black_wool",
      qty: 1
    }, // "black_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "black_dye",
      5: "purple_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "black_wool",
      qty: 1
    }, // "black_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "black_dye",
      5: "blue_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "black_wool",
      qty: 1
    }, // "black_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "black_dye",
      5: "brown_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "black_wool",
      qty: 1
    }, // "black_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "black_dye",
      5: "green_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "black_wool",
      qty: 1
    }, // "black_wool"
    {
      1: null,
      2: null,
      3: null,
      4: "black_dye",
      5: "red_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "black_wool",
      qty: 1
    }, // "black_wool"
  ],
  [
    {
      1: null,
      2: null,
      3: null,
      4: "white_wool",
      5: "white_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "white_carpet",
      qty: 3
    }, // "white_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "white_dye",
      5: "orange_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "white_carpet",
      qty: 1
    }, // "white_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "white_dye",
      5: "magenta_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "white_carpet",
      qty: 1
    }, // "white_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "white_dye",
      5: "light_blue_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "white_carpet",
      qty: 1
    }, // "white_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "white_dye",
      5: "yellow_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "white_carpet",
      qty: 1
    }, // "white_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "white_dye",
      5: "lime_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "white_carpet",
      qty: 1
    }, // "white_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "white_dye",
      5: "pink_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "white_carpet",
      qty: 1
    }, // "white_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "white_dye",
      5: "gray_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "white_carpet",
      qty: 1
    }, // "white_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "white_dye",
      5: "light_gray_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "white_carpet",
      qty: 1
    }, // "white_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "white_dye",
      5: "cyan_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "white_carpet",
      qty: 1
    }, // "white_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "white_dye",
      5: "purple_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "white_carpet",
      qty: 1
    }, // "white_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "white_dye",
      5: "blue_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "white_carpet",
      qty: 1
    }, // "white_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "white_dye",
      5: "brown_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "white_carpet",
      qty: 1
    }, // "white_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "white_dye",
      5: "green_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "white_carpet",
      qty: 1
    }, // "white_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "white_dye",
      5: "red_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "white_carpet",
      qty: 1
    }, // "white_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "white_dye",
      5: "black_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "white_carpet",
      qty: 1
    }, // "white_carpet"
  ],
  [
    {
      1: null,
      2: null,
      3: null,
      4: "orange_wool",
      5: "orange_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "orange_carpet",
      qty: 3
    }, // "orange_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "orange_dye",
      5: "white_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "orange_carpet",
      qty: 1
    }, // "orange_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "orange_dye",
      5: "magenta_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "orange_carpet",
      qty: 1
    }, // "orange_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "orange_dye",
      5: "light_blue_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "orange_carpet",
      qty: 1
    }, // "orange_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "orange_dye",
      5: "yellow_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "orange_carpet",
      qty: 1
    }, // "orange_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "orange_dye",
      5: "lime_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "orange_carpet",
      qty: 1
    }, // "orange_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "orange_dye",
      5: "pink_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "orange_carpet",
      qty: 1
    }, // "orange_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "orange_dye",
      5: "gray_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "orange_carpet",
      qty: 1
    }, // "orange_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "orange_dye",
      5: "light_gray_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "orange_carpet",
      qty: 1
    }, // "orange_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "orange_dye",
      5: "cyan_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "orange_carpet",
      qty: 1
    }, // "orange_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "orange_dye",
      5: "purple_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "orange_carpet",
      qty: 1
    }, // "orange_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "orange_dye",
      5: "blue_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "orange_carpet",
      qty: 1
    }, // "orange_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "orange_dye",
      5: "brown_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "orange_carpet",
      qty: 1
    }, // "orange_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "orange_dye",
      5: "green_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "orange_carpet",
      qty: 1
    }, // "orange_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "orange_dye",
      5: "red_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "orange_carpet",
      qty: 1
    }, // "orange_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "orange_dye",
      5: "black_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "orange_carpet",
      qty: 1
    }, // "orange_carpet"
  ],
  [
    {
      1: null,
      2: null,
      3: null,
      4: "magenta_wool",
      5: "magenta_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "magenta_carpet",
      qty: 3
    }, // "magenta_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "magenta_dye",
      5: "white_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "magenta_carpet",
      qty: 1
    }, // "magenta_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "magenta_dye",
      5: "orange_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "magenta_carpet",
      qty: 1
    }, // "magenta_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "magenta_dye",
      5: "light_blue_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "magenta_carpet",
      qty: 1
    }, // "magenta_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "magenta_dye",
      5: "yellow_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "magenta_carpet",
      qty: 1
    }, // "magenta_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "magenta_dye",
      5: "lime_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "magenta_carpet",
      qty: 1
    }, // "magenta_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "magenta_dye",
      5: "pink_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "magenta_carpet",
      qty: 1
    }, // "magenta_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "magenta_dye",
      5: "gray_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "magenta_carpet",
      qty: 1
    }, // "magenta_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "magenta_dye",
      5: "light_gray_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "magenta_carpet",
      qty: 1
    }, // "magenta_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "magenta_dye",
      5: "cyan_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "magenta_carpet",
      qty: 1
    }, // "magenta_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "magenta_dye",
      5: "purple_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "magenta_carpet",
      qty: 1
    }, // "magenta_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "magenta_dye",
      5: "blue_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "magenta_carpet",
      qty: 1
    }, // "magenta_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "magenta_dye",
      5: "brown_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "magenta_carpet",
      qty: 1
    }, // "magenta_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "magenta_dye",
      5: "green_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "magenta_carpet",
      qty: 1
    }, // "magenta_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "magenta_dye",
      5: "red_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "magenta_carpet",
      qty: 1
    }, // "magenta_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "magenta_dye",
      5: "black_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "magenta_carpet",
      qty: 1
    }, // "magenta_carpet"
  ],
  [
    {
      1: null,
      2: null,
      3: null,
      4: "light_blue_wool",
      5: "light_blue_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_blue_carpet",
      qty: 3
    }, // "light_blue_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "light_blue_dye",
      5: "white_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_blue_carpet",
      qty: 1
    }, // "light_blue_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "light_blue_dye",
      5: "orange_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_blue_carpet",
      qty: 1
    }, // "light_blue_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "light_blue_dye",
      5: "magenta_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_blue_carpet",
      qty: 1
    }, // "light_blue_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "light_blue_dye",
      5: "yellow_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_blue_carpet",
      qty: 1
    }, // "light_blue_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "light_blue_dye",
      5: "lime_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_blue_carpet",
      qty: 1
    }, // "light_blue_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "light_blue_dye",
      5: "pink_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_blue_carpet",
      qty: 1
    }, // "light_blue_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "light_blue_dye",
      5: "gray_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_blue_carpet",
      qty: 1
    }, // "light_blue_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "light_blue_dye",
      5: "light_gray_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_blue_carpet",
      qty: 1
    }, // "light_blue_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "light_blue_dye",
      5: "cyan_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_blue_carpet",
      qty: 1
    }, // "light_blue_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "light_blue_dye",
      5: "purple_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_blue_carpet",
      qty: 1
    }, // "light_blue_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "light_blue_dye",
      5: "blue_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_blue_carpet",
      qty: 1
    }, // "light_blue_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "light_blue_dye",
      5: "brown_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_blue_carpet",
      qty: 1
    }, // "light_blue_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "light_blue_dye",
      5: "green_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_blue_carpet",
      qty: 1
    }, // "light_blue_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "light_blue_dye",
      5: "red_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_blue_carpet",
      qty: 1
    }, // "light_blue_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "light_blue_dye",
      5: "black_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_blue_carpet",
      qty: 1
    }, // "light_blue_carpet"
  ],
  [
    {
      1: null,
      2: null,
      3: null,
      4: "yellow_wool",
      5: "yellow_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "yellow_carpet",
      qty: 3
    }, // "yellow_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "yellow_dye",
      5: "white_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "yellow_carpet",
      qty: 1
    }, // "yellow_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "yellow_dye",
      5: "orange_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "yellow_carpet",
      qty: 1
    }, // "yellow_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "yellow_dye",
      5: "magenta_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "yellow_carpet",
      qty: 1
    }, // "yellow_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "yellow_dye",
      5: "light_blue_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "yellow_carpet",
      qty: 1
    }, // "yellow_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "yellow_dye",
      5: "lime_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "yellow_carpet",
      qty: 1
    }, // "yellow_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "yellow_dye",
      5: "pink_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "yellow_carpet",
      qty: 1
    }, // "yellow_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "yellow_dye",
      5: "gray_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "yellow_carpet",
      qty: 1
    }, // "yellow_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "yellow_dye",
      5: "light_gray_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "yellow_carpet",
      qty: 1
    }, // "yellow_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "yellow_dye",
      5: "cyan_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "yellow_carpet",
      qty: 1
    }, // "yellow_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "yellow_dye",
      5: "purple_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "yellow_carpet",
      qty: 1
    }, // "yellow_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "yellow_dye",
      5: "blue_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "yellow_carpet",
      qty: 1
    }, // "yellow_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "yellow_dye",
      5: "brown_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "yellow_carpet",
      qty: 1
    }, // "yellow_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "yellow_dye",
      5: "green_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "yellow_carpet",
      qty: 1
    }, // "yellow_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "yellow_dye",
      5: "red_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "yellow_carpet",
      qty: 1
    }, // "yellow_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "yellow_dye",
      5: "black_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "yellow_carpet",
      qty: 1
    }, // "yellow_carpet"
  ],
  [
    {
      1: null,
      2: null,
      3: null,
      4: "lime_wool",
      5: "lime_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "lime_carpet",
      qty: 3
    }, // "lime_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "lime_dye",
      5: "white_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "lime_carpet",
      qty: 1
    }, // "lime_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "lime_dye",
      5: "orange_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "lime_carpet",
      qty: 1
    }, // "lime_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "lime_dye",
      5: "magenta_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "lime_carpet",
      qty: 1
    }, // "lime_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "lime_dye",
      5: "light_blue_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "lime_carpet",
      qty: 1
    }, // "lime_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "lime_dye",
      5: "yellow_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "lime_carpet",
      qty: 1
    }, // "lime_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "lime_dye",
      5: "pink_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "lime_carpet",
      qty: 1
    }, // "lime_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "lime_dye",
      5: "gray_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "lime_carpet",
      qty: 1
    }, // "lime_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "lime_dye",
      5: "light_gray_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "lime_carpet",
      qty: 1
    }, // "lime_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "lime_dye",
      5: "cyan_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "lime_carpet",
      qty: 1
    }, // "lime_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "lime_dye",
      5: "purple_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "lime_carpet",
      qty: 1
    }, // "lime_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "lime_dye",
      5: "blue_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "lime_carpet",
      qty: 1
    }, // "lime_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "lime_dye",
      5: "brown_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "lime_carpet",
      qty: 1
    }, // "lime_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "lime_dye",
      5: "green_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "lime_carpet",
      qty: 1
    }, // "lime_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "lime_dye",
      5: "red_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "lime_carpet",
      qty: 1
    }, // "lime_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "lime_dye",
      5: "black_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "lime_carpet",
      qty: 1
    }, // "lime_carpet"
  ],
  [
    {
      1: null,
      2: null,
      3: null,
      4: "pink_wool",
      5: "pink_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "pink_carpet",
      qty: 3
    }, // "pink_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "pink_dye",
      5: "white_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "pink_carpet",
      qty: 1
    }, // "pink_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "pink_dye",
      5: "orange_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "pink_carpet",
      qty: 1
    }, // "pink_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "pink_dye",
      5: "magenta_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "pink_carpet",
      qty: 1
    }, // "pink_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "pink_dye",
      5: "light_blue_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "pink_carpet",
      qty: 1
    }, // "pink_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "pink_dye",
      5: "yellow_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "pink_carpet",
      qty: 1
    }, // "pink_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "pink_dye",
      5: "lime_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "pink_carpet",
      qty: 1
    }, // "pink_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "pink_dye",
      5: "gray_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "pink_carpet",
      qty: 1
    }, // "pink_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "pink_dye",
      5: "light_gray_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "pink_carpet",
      qty: 1
    }, // "pink_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "pink_dye",
      5: "cyan_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "pink_carpet",
      qty: 1
    }, // "pink_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "pink_dye",
      5: "purple_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "pink_carpet",
      qty: 1
    }, // "pink_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "pink_dye",
      5: "blue_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "pink_carpet",
      qty: 1
    }, // "pink_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "pink_dye",
      5: "brown_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "pink_carpet",
      qty: 1
    }, // "pink_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "pink_dye",
      5: "green_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "pink_carpet",
      qty: 1
    }, // "pink_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "pink_dye",
      5: "red_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "pink_carpet",
      qty: 1
    }, // "pink_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "pink_dye",
      5: "black_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "pink_carpet",
      qty: 1
    }, // "pink_carpet"
  ],
  [
    {
      1: null,
      2: null,
      3: null,
      4: "gray_wool",
      5: "gray_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "gray_carpet",
      qty: 3
    }, // "gray_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "gray_dye",
      5: "white_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "gray_carpet",
      qty: 1
    }, // "gray_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "gray_dye",
      5: "orange_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "gray_carpet",
      qty: 1
    }, // "gray_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "gray_dye",
      5: "magenta_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "gray_carpet",
      qty: 1
    }, // "gray_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "gray_dye",
      5: "light_blue_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "gray_carpet",
      qty: 1
    }, // "gray_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "gray_dye",
      5: "yellow_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "gray_carpet",
      qty: 1
    }, // "gray_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "gray_dye",
      5: "lime_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "gray_carpet",
      qty: 1
    }, // "gray_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "gray_dye",
      5: "pink_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "gray_carpet",
      qty: 1
    }, // "gray_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "gray_dye",
      5: "light_gray_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "gray_carpet",
      qty: 1
    }, // "gray_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "gray_dye",
      5: "cyan_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "gray_carpet",
      qty: 1
    }, // "gray_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "gray_dye",
      5: "purple_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "gray_carpet",
      qty: 1
    }, // "gray_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "gray_dye",
      5: "blue_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "gray_carpet",
      qty: 1
    }, // "gray_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "gray_dye",
      5: "brown_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "gray_carpet",
      qty: 1
    }, // "gray_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "gray_dye",
      5: "green_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "gray_carpet",
      qty: 1
    }, // "gray_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "gray_dye",
      5: "red_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "gray_carpet",
      qty: 1
    }, // "gray_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "gray_dye",
      5: "black_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "gray_carpet",
      qty: 1
    }, // "gray_carpet"
  ],
  [
    {
      1: null,
      2: null,
      3: null,
      4: "light_gray_wool",
      5: "light_gray_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_gray_carpet",
      qty: 3
    }, // "light_gray_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "light_gray_dye",
      5: "white_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_gray_carpet",
      qty: 1
    }, // "light_gray_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "light_gray_dye",
      5: "orange_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_gray_carpet",
      qty: 1
    }, // "light_gray_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "light_gray_dye",
      5: "magenta_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_gray_carpet",
      qty: 1
    }, // "light_gray_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "light_gray_dye",
      5: "light_blue_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_gray_carpet",
      qty: 1
    }, // "light_gray_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "light_gray_dye",
      5: "yellow_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_gray_carpet",
      qty: 1
    }, // "light_gray_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "light_gray_dye",
      5: "lime_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_gray_carpet",
      qty: 1
    }, // "light_gray_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "light_gray_dye",
      5: "pink_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_gray_carpet",
      qty: 1
    }, // "light_gray_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "light_gray_dye",
      5: "gray_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_gray_carpet",
      qty: 1
    }, // "light_gray_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "light_gray_dye",
      5: "cyan_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_gray_carpet",
      qty: 1
    }, // "light_gray_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "light_gray_dye",
      5: "purple_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_gray_carpet",
      qty: 1
    }, // "light_gray_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "light_gray_dye",
      5: "blue_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_gray_carpet",
      qty: 1
    }, // "light_gray_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "light_gray_dye",
      5: "brown_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_gray_carpet",
      qty: 1
    }, // "light_gray_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "light_gray_dye",
      5: "green_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_gray_carpet",
      qty: 1
    }, // "light_gray_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "light_gray_dye",
      5: "red_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_gray_carpet",
      qty: 1
    }, // "light_gray_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "light_gray_dye",
      5: "black_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "light_gray_carpet",
      qty: 1
    }, // "light_gray_carpet"
  ],
  [
    {
      1: null,
      2: null,
      3: null,
      4: "cyan_wool",
      5: "cyan_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "cyan_carpet",
      qty: 3
    }, // "cyan_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "cyan_dye",
      5: "white_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "cyan_carpet",
      qty: 1
    }, // "cyan_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "cyan_dye",
      5: "orange_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "cyan_carpet",
      qty: 1
    }, // "cyan_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "cyan_dye",
      5: "magenta_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "cyan_carpet",
      qty: 1
    }, // "cyan_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "cyan_dye",
      5: "light_blue_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "cyan_carpet",
      qty: 1
    }, // "cyan_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "cyan_dye",
      5: "yellow_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "cyan_carpet",
      qty: 1
    }, // "cyan_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "cyan_dye",
      5: "lime_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "cyan_carpet",
      qty: 1
    }, // "cyan_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "cyan_dye",
      5: "pink_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "cyan_carpet",
      qty: 1
    }, // "cyan_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "cyan_dye",
      5: "gray_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "cyan_carpet",
      qty: 1
    }, // "cyan_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "cyan_dye",
      5: "light_gray_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "cyan_carpet",
      qty: 1
    }, // "cyan_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "cyan_dye",
      5: "purple_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "cyan_carpet",
      qty: 1
    }, // "cyan_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "cyan_dye",
      5: "blue_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "cyan_carpet",
      qty: 1
    }, // "cyan_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "cyan_dye",
      5: "brown_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "cyan_carpet",
      qty: 1
    }, // "cyan_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "cyan_dye",
      5: "green_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "cyan_carpet",
      qty: 1
    }, // "cyan_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "cyan_dye",
      5: "red_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "cyan_carpet",
      qty: 1
    }, // "cyan_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "cyan_dye",
      5: "black_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "cyan_carpet",
      qty: 1
    }, // "cyan_carpet"
  ],
  [
    {
      1: null,
      2: null,
      3: null,
      4: "purple_wool",
      5: "purple_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "purple_carpet",
      qty: 3
    }, // "purple_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "purple_dye",
      5: "white_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "purple_carpet",
      qty: 1
    }, // "purple_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "purple_dye",
      5: "orange_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "purple_carpet",
      qty: 1
    }, // "purple_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "purple_dye",
      5: "magenta_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "purple_carpet",
      qty: 1
    }, // "purple_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "purple_dye",
      5: "light_blue_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "purple_carpet",
      qty: 1
    }, // "purple_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "purple_dye",
      5: "yellow_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "purple_carpet",
      qty: 1
    }, // "purple_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "purple_dye",
      5: "lime_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "purple_carpet",
      qty: 1
    }, // "purple_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "purple_dye",
      5: "pink_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "purple_carpet",
      qty: 1
    }, // "purple_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "purple_dye",
      5: "gray_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "purple_carpet",
      qty: 1
    }, // "purple_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "purple_dye",
      5: "light_gray_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "purple_carpet",
      qty: 1
    }, // "purple_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "purple_dye",
      5: "cyan_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "purple_carpet",
      qty: 1
    }, // "purple_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "purple_dye",
      5: "blue_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "purple_carpet",
      qty: 1
    }, // "purple_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "purple_dye",
      5: "brown_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "purple_carpet",
      qty: 1
    }, // "purple_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "purple_dye",
      5: "green_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "purple_carpet",
      qty: 1
    }, // "purple_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "purple_dye",
      5: "red_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "purple_carpet",
      qty: 1
    }, // "purple_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "purple_dye",
      5: "black_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "purple_carpet",
      qty: 1
    }, // "purple_carpet"
  ],
  [
    {
      1: null,
      2: null,
      3: null,
      4: "blue_wool",
      5: "blue_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "blue_carpet",
      qty: 3
    }, // "blue_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "blue_dye",
      5: "white_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "blue_carpet",
      qty: 1
    }, // "blue_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "blue_dye",
      5: "orange_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "blue_carpet",
      qty: 1
    }, // "blue_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "blue_dye",
      5: "magenta_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "blue_carpet",
      qty: 1
    }, // "blue_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "blue_dye",
      5: "light_blue_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "blue_carpet",
      qty: 1
    }, // "blue_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "blue_dye",
      5: "yellow_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "blue_carpet",
      qty: 1
    }, // "blue_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "blue_dye",
      5: "lime_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "blue_carpet",
      qty: 1
    }, // "blue_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "blue_dye",
      5: "pink_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "blue_carpet",
      qty: 1
    }, // "blue_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "blue_dye",
      5: "gray_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "blue_carpet",
      qty: 1
    }, // "blue_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "blue_dye",
      5: "light_gray_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "blue_carpet",
      qty: 1
    }, // "blue_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "blue_dye",
      5: "cyan_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "blue_carpet",
      qty: 1
    }, // "blue_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "blue_dye",
      5: "purple_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "blue_carpet",
      qty: 1
    }, // "blue_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "blue_dye",
      5: "brown_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "blue_carpet",
      qty: 1
    }, // "blue_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "blue_dye",
      5: "green_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "blue_carpet",
      qty: 1
    }, // "blue_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "blue_dye",
      5: "red_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "blue_carpet",
      qty: 1
    }, // "blue_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "blue_dye",
      5: "black_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "blue_carpet",
      qty: 1
    }, // "blue_carpet"
  ],
  [
    {
      1: null,
      2: null,
      3: null,
      4: "brown_wool",
      5: "brown_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "brown_carpet",
      qty: 3
    }, // "brown_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "brown_dye",
      5: "white_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "brown_carpet",
      qty: 1
    }, // "brown_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "brown_dye",
      5: "orange_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "brown_carpet",
      qty: 1
    }, // "brown_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "brown_dye",
      5: "magenta_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "brown_carpet",
      qty: 1
    }, // "brown_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "brown_dye",
      5: "light_blue_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "brown_carpet",
      qty: 1
    }, // "brown_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "brown_dye",
      5: "yellow_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "brown_carpet",
      qty: 1
    }, // "brown_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "brown_dye",
      5: "lime_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "brown_carpet",
      qty: 1
    }, // "brown_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "brown_dye",
      5: "pink_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "brown_carpet",
      qty: 1
    }, // "brown_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "brown_dye",
      5: "gray_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "brown_carpet",
      qty: 1
    }, // "brown_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "brown_dye",
      5: "light_gray_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "brown_carpet",
      qty: 1
    }, // "brown_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "brown_dye",
      5: "cyan_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "brown_carpet",
      qty: 1
    }, // "brown_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "brown_dye",
      5: "purple_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "brown_carpet",
      qty: 1
    }, // "brown_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "brown_dye",
      5: "blue_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "brown_carpet",
      qty: 1
    }, // "brown_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "brown_dye",
      5: "green_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "brown_carpet",
      qty: 1
    }, // "brown_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "brown_dye",
      5: "red_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "brown_carpet",
      qty: 1
    }, // "brown_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "brown_dye",
      5: "black_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "brown_carpet",
      qty: 1
    }, // "brown_carpet"
  ],
  [
    {
      1: null,
      2: null,
      3: null,
      4: "green_wool",
      5: "green_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "green_carpet",
      qty: 3
    }, // "green_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "green_dye",
      5: "white_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "green_carpet",
      qty: 1
    }, // "green_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "green_dye",
      5: "orange_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "green_carpet",
      qty: 1
    }, // "green_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "green_dye",
      5: "magenta_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "green_carpet",
      qty: 1
    }, // "green_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "green_dye",
      5: "light_blue_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "green_carpet",
      qty: 1
    }, // "green_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "green_dye",
      5: "yellow_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "green_carpet",
      qty: 1
    }, // "green_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "green_dye",
      5: "lime_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "green_carpet",
      qty: 1
    }, // "green_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "green_dye",
      5: "pink_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "green_carpet",
      qty: 1
    }, // "green_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "green_dye",
      5: "gray_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "green_carpet",
      qty: 1
    }, // "green_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "green_dye",
      5: "light_gray_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "green_carpet",
      qty: 1
    }, // "green_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "green_dye",
      5: "cyan_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "green_carpet",
      qty: 1
    }, // "green_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "green_dye",
      5: "purple_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "green_carpet",
      qty: 1
    }, // "green_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "green_dye",
      5: "blue_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "green_carpet",
      qty: 1
    }, // "green_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "green_dye",
      5: "brown_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "green_carpet",
      qty: 1
    }, // "green_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "green_dye",
      5: "red_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "green_carpet",
      qty: 1
    }, // "green_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "green_dye",
      5: "black_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "green_carpet",
      qty: 1
    }, // "green_carpet"
  ],
  [
    {
      1: null,
      2: null,
      3: null,
      4: "red_wool",
      5: "red_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "red_carpet",
      qty: 3
    }, // "red_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "red_dye",
      5: "white_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "red_carpet",
      qty: 1
    }, // "red_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "red_dye",
      5: "orange_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "red_carpet",
      qty: 1
    }, // "red_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "red_dye",
      5: "magenta_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "red_carpet",
      qty: 1
    }, // "red_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "red_dye",
      5: "light_blue_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "red_carpet",
      qty: 1
    }, // "red_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "red_dye",
      5: "yellow_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "red_carpet",
      qty: 1
    }, // "red_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "red_dye",
      5: "lime_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "red_carpet",
      qty: 1
    }, // "red_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "red_dye",
      5: "pink_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "red_carpet",
      qty: 1
    }, // "red_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "red_dye",
      5: "gray_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "red_carpet",
      qty: 1
    }, // "red_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "red_dye",
      5: "light_gray_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "red_carpet",
      qty: 1
    }, // "red_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "red_dye",
      5: "cyan_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "red_carpet",
      qty: 1
    }, // "red_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "red_dye",
      5: "purple_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "red_carpet",
      qty: 1
    }, // "red_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "red_dye",
      5: "blue_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "red_carpet",
      qty: 1
    }, // "red_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "red_dye",
      5: "brown_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "red_carpet",
      qty: 1
    }, // "red_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "red_dye",
      5: "green_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "red_carpet",
      qty: 1
    }, // "red_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "red_dye",
      5: "black_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "red_carpet",
      qty: 1
    }, // "red_carpet"
  ],
  [
    {
      1: null,
      2: null,
      3: null,
      4: "black_wool",
      5: "black_wool",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "black_carpet",
      qty: 3
    }, // "black_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "black_dye",
      5: "white_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "black_carpet",
      qty: 1
    }, // "black_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "black_dye",
      5: "orange_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "black_carpet",
      qty: 1
    }, // "black_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "black_dye",
      5: "magenta_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "black_carpet",
      qty: 1
    }, // "black_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "black_dye",
      5: "light_blue_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "black_carpet",
      qty: 1
    }, // "black_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "black_dye",
      5: "yellow_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "black_carpet",
      qty: 1
    }, // "black_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "black_dye",
      5: "lime_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "black_carpet",
      qty: 1
    }, // "black_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "black_dye",
      5: "pink_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "black_carpet",
      qty: 1
    }, // "black_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "black_dye",
      5: "gray_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "black_carpet",
      qty: 1
    }, // "black_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "black_dye",
      5: "light_gray_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "black_carpet",
      qty: 1
    }, // "black_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "black_dye",
      5: "cyan_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "black_carpet",
      qty: 1
    }, // "black_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "black_dye",
      5: "purple_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "black_carpet",
      qty: 1
    }, // "black_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "black_dye",
      5: "blue_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "black_carpet",
      qty: 1
    }, // "black_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "black_dye",
      5: "brown_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "black_carpet",
      qty: 1
    }, // "black_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "black_dye",
      5: "green_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "black_carpet",
      qty: 1
    }, // "black_carpet"
    {
      1: null,
      2: null,
      3: null,
      4: "black_dye",
      5: "red_carpet",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "black_carpet",
      qty: 1
    }, // "black_carpet"
  ],
  {
    1: "glass",
    2: "glass",
    3: "glass",
    4: "glass",
    5: "white_dye",
    6: "glass",
    7: "glass",
    8: "glass",
    9: "glass",
    out: "white_stained_glass",
    qty: 8
  }, // "white_stained_glass"
  {
    1: "glass",
    2: "glass",
    3: "glass",
    4: "glass",
    5: "orange_dye",
    6: "glass",
    7: "glass",
    8: "glass",
    9: "glass",
    out: "orange_stained_glass",
    qty: 8
  }, // "orange_stained_glass"
  {
    1: "glass",
    2: "glass",
    3: "glass",
    4: "glass",
    5: "magenta_dye",
    6: "glass",
    7: "glass",
    8: "glass",
    9: "glass",
    out: "magenta_stained_glass",
    qty: 8
  }, // "magenta_stained_glass"
  {
    1: "glass",
    2: "glass",
    3: "glass",
    4: "glass",
    5: "light_blue_dye",
    6: "glass",
    7: "glass",
    8: "glass",
    9: "glass",
    out: "light_blue_stained_glass",
    qty: 8
  }, // "light_blue_stained_glass"
  {
    1: "glass",
    2: "glass",
    3: "glass",
    4: "glass",
    5: "yellow_dye",
    6: "glass",
    7: "glass",
    8: "glass",
    9: "glass",
    out: "yellow_stained_glass",
    qty: 8
  }, // "yellow_stained_glass"
  {
    1: "glass",
    2: "glass",
    3: "glass",
    4: "glass",
    5: "lime_dye",
    6: "glass",
    7: "glass",
    8: "glass",
    9: "glass",
    out: "lime_stained_glass",
    qty: 8
  }, // "lime_stained_glass"
  {
    1: "glass",
    2: "glass",
    3: "glass",
    4: "glass",
    5: "pink_dye",
    6: "glass",
    7: "glass",
    8: "glass",
    9: "glass",
    out: "pink_stained_glass",
    qty: 8
  }, // "pink_stained_glass"
  {
    1: "glass",
    2: "glass",
    3: "glass",
    4: "glass",
    5: "gray_dye",
    6: "glass",
    7: "glass",
    8: "glass",
    9: "glass",
    out: "gray_stained_glass",
    qty: 8
  }, // "gray_stained_glass"
  {
    1: "glass",
    2: "glass",
    3: "glass",
    4: "glass",
    5: "light_gray_dye",
    6: "glass",
    7: "glass",
    8: "glass",
    9: "glass",
    out: "light_gray_stained_glass",
    qty: 8
  }, // "light_gray_stained_glass"
  {
    1: "glass",
    2: "glass",
    3: "glass",
    4: "glass",
    5: "cyan_dye",
    6: "glass",
    7: "glass",
    8: "glass",
    9: "glass",
    out: "cyan_stained_glass",
    qty: 8
  }, // "cyan_stained_glass"
  {
    1: "glass",
    2: "glass",
    3: "glass",
    4: "glass",
    5: "purple_dye",
    6: "glass",
    7: "glass",
    8: "glass",
    9: "glass",
    out: "purple_stained_glass",
    qty: 8
  }, // "purple_stained_glass"
  {
    1: "glass",
    2: "glass",
    3: "glass",
    4: "glass",
    5: "blue_dye",
    6: "glass",
    7: "glass",
    8: "glass",
    9: "glass",
    out: "blue_stained_glass",
    qty: 8
  }, // "blue_stained_glass"
  {
    1: "glass",
    2: "glass",
    3: "glass",
    4: "glass",
    5: "brown_dye",
    6: "glass",
    7: "glass",
    8: "glass",
    9: "glass",
    out: "brown_stained_glass",
    qty: 8
  }, // "brown_stained_glass"
  {
    1: "glass",
    2: "glass",
    3: "glass",
    4: "glass",
    5: "green_dye",
    6: "glass",
    7: "glass",
    8: "glass",
    9: "glass",
    out: "green_stained_glass",
    qty: 8
  }, // "green_stained_glass"
  {
    1: "glass",
    2: "glass",
    3: "glass",
    4: "glass",
    5: "red_dye",
    6: "glass",
    7: "glass",
    8: "glass",
    9: "glass",
    out: "red_stained_glass",
    qty: 8
  }, // "red_stained_glass"
  {
    1: "glass",
    2: "glass",
    3: "glass",
    4: "glass",
    5: "black_dye",
    6: "glass",
    7: "glass",
    8: "glass",
    9: "glass",
    out: "black_stained_glass",
    qty: 8
  }, // "black_stained_glass"
  {
    1: null,
    2: null,
    3: null,
    4: "moss_block",
    5: "moss_block",
    6: null,
    7: null,
    8: null,
    9: null,
    out: "moss_carpet",
    qty: 3
  }, // "moss_carpet"
  {
    1: null,
    2: null,
    3: null,
    4: "oak_planks",
    5: "oak_planks",
    6: "oak_planks",
    7: null,
    8: null,
    9: null,
    out: "oak_slab",
    qty: 6
  }, // "oak_slab"
  {
    1: null,
    2: null,
    3: null,
    4: "spruce_planks",
    5: "spruce_planks",
    6: "spruce_planks",
    7: null,
    8: null,
    9: null,
    out: "spruce_slab",
    qty: 6
  }, // "spruce_slab"
  {
    1: null,
    2: null,
    3: null,
    4: "birch_planks",
    5: "birch_planks",
    6: "birch_planks",
    7: null,
    8: null,
    9: null,
    out: "birch_slab",
    qty: 6
  }, // "birch_slab"
  {
    1: null,
    2: null,
    3: null,
    4: "jungle_planks",
    5: "jungle_planks",
    6: "jungle_planks",
    7: null,
    8: null,
    9: null,
    out: "jungle_slab",
    qty: 6
  }, // "jungle_slab"
  {
    1: null,
    2: null,
    3: null,
    4: "acacia_planks",
    5: "acacia_planks",
    6: "acacia_planks",
    7: null,
    8: null,
    9: null,
    out: "acacia_slab",
    qty: 6
  }, // "acacia_slab"
  {
    1: null,
    2: null,
    3: null,
    4: "cherry_planks",
    5: "cherry_planks",
    6: "cherry_planks",
    7: null,
    8: null,
    9: null,
    out: "cherry_slab",
    qty: 6
  }, // "cherry_slab"
  {
    1: null,
    2: null,
    3: null,
    4: "dark_oak_planks",
    5: "dark_oak_planks",
    6: "dark_oak_planks",
    7: null,
    8: null,
    9: null,
    out: "dark_oak_slab",
    qty: 6
  }, // "dark_oak_slab"
  {
    1: null,
    2: null,
    3: null,
    4: "mangrove_planks",
    5: "mangrove_planks",
    6: "mangrove_planks",
    7: null,
    8: null,
    9: null,
    out: "mangrove_slab",
    qty: 6
  }, // "mangrove_slab"
  {
    1: null,
    2: null,
    3: null,
    4: "bamboo_planks",
    5: "bamboo_planks",
    6: "bamboo_planks",
    7: null,
    8: null,
    9: null,
    out: "bamboo_slab",
    qty: 6
  }, // "bamboo_slab"
  {
    1: null,
    2: null,
    3: null,
    4: "bamboo_mosaic",
    5: "bamboo_mosaic",
    6: "bamboo_mosaic",
    7: null,
    8: null,
    9: null,
    out: "bamboo_mosaic_slab",
    qty: 6
  }, // "bamboo_mosaic_slab"
  {
    1: null,
    2: null,
    3: null,
    4: "crimson_planks",
    5: "crimson_planks",
    6: "crimson_planks",
    7: null,
    8: null,
    9: null,
    out: "crimson_slab",
    qty: 6
  }, // "crimson_slab"
  {
    1: null,
    2: null,
    3: null,
    4: "warped_planks",
    5: "warped_planks",
    6: "warped_planks",
    7: null,
    8: null,
    9: null,
    out: "warped_slab",
    qty: 6
  }, // "warped_slab"
  {
    1: null,
    2: null,
    3: null,
    4: "stone",
    5: "stone",
    6: "stone",
    7: null,
    8: null,
    9: null,
    out: "stone_slab",
    qty: 6
  }, // "stone_slab"
  {
    1: null,
    2: null,
    3: null,
    4: "smooth_stone",
    5: "smooth_stone",
    6: "smooth_stone",
    7: null,
    8: null,
    9: null,
    out: "smooth_stone_slab",
    qty: 6
  }, // "smooth_stone_slab"
  {
    1: null,
    2: null,
    3: null,
    4: "sandstone",
    5: "sandstone",
    6: "sandstone",
    7: null,
    8: null,
    9: null,
    out: "sandstone_slab",
    qty: 6
  }, // "sandstone_slab"
  {
    1: null,
    2: null,
    3: null,
    4: "cut_sandstone",
    5: "cut_sandstone",
    6: "cut_sandstone",
    7: null,
    8: null,
    9: null,
    out: "cut_sandstone_slab",
    qty: 6
  }, // "cut_sandstone_slab"
  {
    1: null,
    2: null,
    3: null,
    4: "cobblestone",
    5: "cobblestone",
    6: "cobblestone",
    7: null,
    8: null,
    9: null,
    out: "cobblestone_slab",
    qty: 6
  }, // "cobblestone_slab"
  {
    1: null,
    2: null,
    3: null,
    4: "bricks",
    5: "bricks",
    6: "bricks",
    7: null,
    8: null,
    9: null,
    out: "brick_slab",
    qty: 6
  }, // "brick_slab"
  {
    1: null,
    2: null,
    3: null,
    4: "stone_bricks",
    5: "stone_bricks",
    6: "stone_bricks",
    7: null,
    8: null,
    9: null,
    out: "stone_brick_slab",
    qty: 6
  }, // "stone_brick_slab"
  {
    1: null,
    2: null,
    3: null,
    4: "mud_bricks",
    5: "mud_bricks",
    6: "mud_bricks",
    7: null,
    8: null,
    9: null,
    out: "mud_brick_slab",
    qty: 6
  }, // "mud_brick_slab"
  {
    1: null,
    2: null,
    3: null,
    4: "nether_bricks",
    5: "nether_bricks",
    6: "nether_bricks",
    7: null,
    8: null,
    9: null,
    out: "nether_brick_slab",
    qty: 6
  }, // "nether_brick_slab"
  {
    1: null,
    2: null,
    3: null,
    4: "chiseled_quartz_block",
    5: "chiseled_quartz_block",
    6: "chiseled_quartz_block",
    7: null,
    8: null,
    9: null,
    out: "quartz_slab",
    qty: 6
  }, // "quartz_slab"
  {
    1: null,
    2: null,
    3: null,
    4: "red_sandstone",
    5: "red_sandstone",
    6: "red_sandstone",
    7: null,
    8: null,
    9: null,
    out: "red_sandstone_slab",
    qty: 6
  }, // "red_sandstone_slab"
  {
    1: null,
    2: null,
    3: null,
    4: "cut_red_sandstone",
    5: "cut_red_sandstone",
    6: "cut_red_sandstone",
    7: null,
    8: null,
    9: null,
    out: "cut_red_sandstone_slab",
    qty: 6
  }, // "cut_red_sandstone_slab"
  {
    1: null,
    2: null,
    3: null,
    4: "purpur_block",
    5: "purpur_block",
    6: "purpur_block",
    7: null,
    8: null,
    9: null,
    out: "purpur_slab",
    qty: 6
  }, // "purpur_slab"
  {
    1: null,
    2: null,
    3: null,
    4: "prismarine",
    5: "prismarine",
    6: "prismarine",
    7: null,
    8: null,
    9: null,
    out: "prismarine_slab",
    qty: 6
  }, // "prismarine_slab"
  {
    1: null,
    2: null,
    3: null,
    4: "prismarine_bricks",
    5: "prismarine_bricks",
    6: "prismarine_bricks",
    7: null,
    8: null,
    9: null,
    out: "prismarine_brick_slab",
    qty: 6
  }, // "prismarine_brick_slab"
  {
    1: null,
    2: null,
    3: null,
    4: "dark_prismarine",
    5: "dark_prismarine",
    6: "dark_prismarine",
    7: null,
    8: null,
    9: null,
    out: "dark_prismarine_slab",
    qty: 6
  }, // "dark_prismarine_slab"
  {
    1: null,
    2: null,
    3: null,
    4: "brick",
    5: "brick",
    6: null,
    7: "brick",
    8: "brick",
    9: null,
    out: "bricks",
    qty: 1
  }, // "bricks"
  [
    {
      1: "oak_planks",
      2: "oak_planks",
      3: "oak_planks",
      4: "book",
      5: "book",
      6: "book",
      7: "oak_planks",
      8: "oak_planks",
      9: "oak_planks",
      out: "bookshelf",
      qty: 1
    }, // "bookshelf"
    {
      1: "spruce_planks",
      2: "spruce_planks",
      3: "spruce_planks",
      4: "book",
      5: "book",
      6: "book",
      7: "spruce_planks",
      8: "spruce_planks",
      9: "spruce_planks",
      out: "bookshelf",
      qty: 1
    }, // "bookshelf"
    {
      1: "birch_planks",
      2: "birch_planks",
      3: "birch_planks",
      4: "book",
      5: "book",
      6: "book",
      7: "birch_planks",
      8: "birch_planks",
      9: "birch_planks",
      out: "bookshelf",
      qty: 1
    }, // "bookshelf"
    {
      1: "jungle_planks",
      2: "jungle_planks",
      3: "jungle_planks",
      4: "book",
      5: "book",
      6: "book",
      7: "jungle_planks",
      8: "jungle_planks",
      9: "jungle_planks",
      out: "bookshelf",
      qty: 1
    }, // "bookshelf"
    {
      1: "acacia_planks",
      2: "acacia_planks",
      3: "acacia_planks",
      4: "book",
      5: "book",
      6: "book",
      7: "acacia_planks",
      8: "acacia_planks",
      9: "acacia_planks",
      out: "bookshelf",
      qty: 1
    }, // "bookshelf"
    {
      1: "cherry_planks",
      2: "cherry_planks",
      3: "cherry_planks",
      4: "book",
      5: "book",
      6: "book",
      7: "cherry_planks",
      8: "cherry_planks",
      9: "cherry_planks",
      out: "bookshelf",
      qty: 1
    }, // "bookshelf"
    {
      1: "dark_oak_planks",
      2: "dark_oak_planks",
      3: "dark_oak_planks",
      4: "book",
      5: "book",
      6: "book",
      7: "dark_oak_planks",
      8: "dark_oak_planks",
      9: "dark_oak_planks",
      out: "bookshelf",
      qty: 1
    }, // "bookshelf"
    {
      1: "mangrove_planks",
      2: "mangrove_planks",
      3: "mangrove_planks",
      4: "book",
      5: "book",
      6: "book",
      7: "mangrove_planks",
      8: "mangrove_planks",
      9: "mangrove_planks",
      out: "bookshelf",
      qty: 1
    }, // "bookshelf"
    {
      1: "bamboo_planks",
      2: "bamboo_planks",
      3: "bamboo_planks",
      4: "book",
      5: "book",
      6: "book",
      7: "bamboo_planks",
      8: "bamboo_planks",
      9: "bamboo_planks",
      out: "bookshelf",
      qty: 1
    }, // "bookshelf"
    {
      1: "crimson_planks",
      2: "crimson_planks",
      3: "crimson_planks",
      4: "book",
      5: "book",
      6: "book",
      7: "crimson_planks",
      8: "crimson_planks",
      9: "crimson_planks",
      out: "bookshelf",
      qty: 1
    }, // "bookshelf"
    {
      1: "warped_planks",
      2: "warped_planks",
      3: "warped_planks",
      4: "book",
      5: "book",
      6: "book",
      7: "warped_planks",
      8: "warped_planks",
      9: "warped_planks",
      out: "bookshelf",
      qty: 1
    }, // "bookshelf"
  ],
  [
    {
      1: "oak_planks",
      2: "oak_planks",
      3: "oak_planks",
      4: "oak_slab",
      5: "oak_slab",
      6: "oak_slab",
      7: "oak_planks",
      8: "oak_planks",
      9: "oak_planks",
      out: "chiseled_bookshelf",
      qty: 1
    }, // "chiseled_bookshelf"
    {
      1: "spruce_planks",
      2: "spruce_planks",
      3: "spruce_planks",
      4: "spruce_slab",
      5: "spruce_slab",
      6: "spruce_slab",
      7: "spruce_planks",
      8: "spruce_planks",
      9: "spruce_planks",
      out: "chiseled_bookshelf",
      qty: 1
    }, // "chiseled_bookshelf"
    {
      1: "birch_planks",
      2: "birch_planks",
      3: "birch_planks",
      4: "birch_slab",
      5: "birch_slab",
      6: "birch_slab",
      7: "birch_planks",
      8: "birch_planks",
      9: "birch_planks",
      out: "chiseled_bookshelf",
      qty: 1
    }, // "chiseled_bookshelf"
    {
      1: "jungle_planks",
      2: "jungle_planks",
      3: "jungle_planks",
      4: "jungle_slab",
      5: "jungle_slab",
      6: "jungle_slab",
      7: "jungle_planks",
      8: "jungle_planks",
      9: "jungle_planks",
      out: "chiseled_bookshelf",
      qty: 1
    }, // "chiseled_bookshelf"
    {
      1: "acacia_planks",
      2: "acacia_planks",
      3: "acacia_planks",
      4: "acacia_slab",
      5: "acacia_slab",
      6: "acacia_slab",
      7: "acacia_planks",
      8: "acacia_planks",
      9: "acacia_planks",
      out: "chiseled_bookshelf",
      qty: 1
    }, // "chiseled_bookshelf"
    {
      1: "cherry_planks",
      2: "cherry_planks",
      3: "cherry_planks",
      4: "cherry_slab",
      5: "cherry_slab",
      6: "cherry_slab",
      7: "cherry_planks",
      8: "cherry_planks",
      9: "cherry_planks",
      out: "chiseled_bookshelf",
      qty: 1
    }, // "chiseled_bookshelf"
    {
      1: "dark_oak_planks",
      2: "dark_oak_planks",
      3: "dark_oak_planks",
      4: "dark_oak_slab",
      5: "dark_oak_slab",
      6: "dark_oak_slab",
      7: "dark_oak_planks",
      8: "dark_oak_planks",
      9: "dark_oak_planks",
      out: "chiseled_bookshelf",
      qty: 1
    }, // "chiseled_bookshelf"
    {
      1: "mangrove_planks",
      2: "mangrove_planks",
      3: "mangrove_planks",
      4: "mangrove_slab",
      5: "mangrove_slab",
      6: "mangrove_slab",
      7: "mangrove_planks",
      8: "mangrove_planks",
      9: "mangrove_planks",
      out: "chiseled_bookshelf",
      qty: 1
    }, // "chiseled_bookshelf"
    {
      1: "bamboo_planks",
      2: "bamboo_planks",
      3: "bamboo_planks",
      4: "bamboo_slab",
      5: "bamboo_slab",
      6: "bamboo_slab",
      7: "bamboo_planks",
      8: "bamboo_planks",
      9: "bamboo_planks",
      out: "chiseled_bookshelf",
      qty: 1
    }, // "chiseled_bookshelf"
    {
      1: "crimson_planks",
      2: "crimson_planks",
      3: "crimson_planks",
      4: "crimson_slab",
      5: "crimson_slab",
      6: "crimson_slab",
      7: "crimson_planks",
      8: "crimson_planks",
      9: "crimson_planks",
      out: "chiseled_bookshelf",
      qty: 1
    }, // "chiseled_bookshelf"
    {
      1: "warped_planks",
      2: "warped_planks",
      3: "warped_planks",
      4: "warped_slab",
      5: "warped_slab",
      6: "warped_slab",
      7: "warped_planks",
      8: "warped_planks",
      9: "warped_planks",
      out: "chiseled_bookshelf",
      qty: 1
    }, // "chiseled_bookshelf"
  ],
  {
    1: null,
    2: "brick",
    3: null,
    4: "brick",
    5: null,
    6: "brick",
    7: null,
    8: "brick",
    9: null,
    out: "decorated_pot",
    qty: 1
  }, // "decorated_pot"
  [
    {
      1: null,
      2: null,
      3: null,
      4: "cobblestone",
      5: "moss_block",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "mossy_cobblestone",
      qty: 1
    }, // "mossy_cobblestone"
    {
      1: null,
      2: null,
      3: null,
      4: "cobblestone",
      5: "vine",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "mossy_cobblestone",
      qty: 1
    }, // "mossy_cobblestone"
  ],
  [
    {
      1: null,
      2: null,
      3: null,
      4: null,
      5: "coal",
      6: null,
      7: null,
      8: "stick",
      9: null,
      out: "torch",
      qty: 4
    }, // "torch"
    {
      1: null,
      2: null,
      3: null,
      4: null,
      5: "charcoal",
      6: null,
      7: null,
      8: "stick",
      9: null,
      out: "torch",
      qty: 4
    }, // "torch"
  ],
  {
    1: null,
    2: null,
    3: null,
    4: null,
    5: "blaze_rod",
    6: null,
    7: null,
    8: "popped_chorus_fruit",
    9: null,
    out: "end_rod",
    qty: 4
  }, // "end_rod"
  {
    1: null,
    2: null,
    3: null,
    4: "popped_chorus_fruit",
    5: "popped_chorus_fruit",
    6: null,
    7: "popped_chorus_fruit",
    8: "popped_chorus_fruit",
    9: null,
    out: "purpur_block",
    qty: 4
  }, // "purpur_block"
  {
    1: null,
    2: null,
    3: null,
    4: null,
    5: "purpur_slab",
    6: null,
    7: null,
    8: "purpur_slab",
    9: null,
    out: "purpur_pillar",
    qty: 1
  }, // "purpur_pillar"
  {
    1: "purpur_block",
    2: null,
    3: null,
    4: "purpur_block",
    5: "purpur_block",
    6: null,
    7: "purpur_block",
    8: "purpur_block",
    9: "purpur_block",
    out: "purpur_stairs",
    qty: 4
  }, // "purpur_stairs"
  [
    {
      1: "oak_planks",
      2: "oak_planks",
      3: "oak_planks",
      4: "oak_planks",
      5: null,
      6: "oak_planks",
      7: "oak_planks",
      8: "oak_planks",
      9: "oak_planks",
      out: "chest",
      qty: 1
    }, // "chest"
    {
      1: "spruce_planks",
      2: "spruce_planks",
      3: "spruce_planks",
      4: "spruce_planks",
      5: null,
      6: "spruce_planks",
      7: "spruce_planks",
      8: "spruce_planks",
      9: "spruce_planks",
      out: "chest",
      qty: 1
    }, // "chest"
    {
      1: "birch_planks",
      2: "birch_planks",
      3: "birch_planks",
      4: "birch_planks",
      5: null,
      6: "birch_planks",
      7: "birch_planks",
      8: "birch_planks",
      9: "birch_planks",
      out: "chest",
      qty: 1
    }, // "chest"
    {
      1: "jungle_planks",
      2: "jungle_planks",
      3: "jungle_planks",
      4: "jungle_planks",
      5: null,
      6: "jungle_planks",
      7: "jungle_planks",
      8: "jungle_planks",
      9: "jungle_planks",
      out: "chest",
      qty: 1
    }, // "chest"
    {
      1: "acacia_planks",
      2: "acacia_planks",
      3: "acacia_planks",
      4: "acacia_planks",
      5: null,
      6: "acacia_planks",
      7: "acacia_planks",
      8: "acacia_planks",
      9: "acacia_planks",
      out: "chest",
      qty: 1
    }, // "chest"
    {
      1: "cherry_planks",
      2: "cherry_planks",
      3: "cherry_planks",
      4: "cherry_planks",
      5: null,
      6: "cherry_planks",
      7: "cherry_planks",
      8: "cherry_planks",
      9: "cherry_planks",
      out: "chest",
      qty: 1
    }, // "chest"
    {
      1: "dark_oak_planks",
      2: "dark_oak_planks",
      3: "dark_oak_planks",
      4: "dark_oak_planks",
      5: null,
      6: "dark_oak_planks",
      7: "dark_oak_planks",
      8: "dark_oak_planks",
      9: "dark_oak_planks",
      out: "chest",
      qty: 1
    }, // "chest"
    {
      1: "mangrove_planks",
      2: "mangrove_planks",
      3: "mangrove_planks",
      4: "mangrove_planks",
      5: null,
      6: "mangrove_planks",
      7: "mangrove_planks",
      8: "mangrove_planks",
      9: "mangrove_planks",
      out: "chest",
      qty: 1
    }, // "chest"
    {
      1: "bamboo_planks",
      2: "bamboo_planks",
      3: "bamboo_planks",
      4: "bamboo_planks",
      5: null,
      6: "bamboo_planks",
      7: "bamboo_planks",
      8: "bamboo_planks",
      9: "bamboo_planks",
      out: "chest",
      qty: 1
    }, // "chest"
    {
      1: "crimson_planks",
      2: "crimson_planks",
      3: "crimson_planks",
      4: "crimson_planks",
      5: null,
      6: "crimson_planks",
      7: "crimson_planks",
      8: "crimson_planks",
      9: "crimson_planks",
      out: "chest",
      qty: 1
    }, // "chest"
    {
      1: "warped_planks",
      2: "warped_planks",
      3: "warped_planks",
      4: "warped_planks",
      5: null,
      6: "warped_planks",
      7: "warped_planks",
      8: "warped_planks",
      9: "warped_planks",
      out: "chest",
      qty: 1
    }, // "chest"
  ],
  [
    {
      1: null,
      2: null,
      3: null,
      4: "oak_planks",
      5: "oak_planks",
      6: null,
      7: "oak_planks",
      8: "oak_planks",
      9: null,
      out: "crafting_table",
      qty: 1
    }, // "crafting_table"
    {
      1: null,
      2: null,
      3: null,
      4: "spruce_planks",
      5: "spruce_planks",
      6: null,
      7: "spruce_planks",
      8: "spruce_planks",
      9: null,
      out: "crafting_table",
      qty: 1
    }, // "crafting_table"
    {
      1: null,
      2: null,
      3: null,
      4: "birch_planks",
      5: "birch_planks",
      6: null,
      7: "birch_planks",
      8: "birch_planks",
      9: null,
      out: "crafting_table",
      qty: 1
    }, // "crafting_table"
    {
      1: null,
      2: null,
      3: null,
      4: "jungle_planks",
      5: "jungle_planks",
      6: null,
      7: "jungle_planks",
      8: "jungle_planks",
      9: null,
      out: "crafting_table",
      qty: 1
    }, // "crafting_table"
    {
      1: null,
      2: null,
      3: null,
      4: "acacia_planks",
      5: "acacia_planks",
      6: null,
      7: "acacia_planks",
      8: "acacia_planks",
      9: null,
      out: "crafting_table",
      qty: 1
    }, // "crafting_table"
    {
      1: null,
      2: null,
      3: null,
      4: "cherry_planks",
      5: "cherry_planks",
      6: null,
      7: "cherry_planks",
      8: "cherry_planks",
      9: null,
      out: "crafting_table",
      qty: 1
    }, // "crafting_table"
    {
      1: null,
      2: null,
      3: null,
      4: "dark_oak_planks",
      5: "dark_oak_planks",
      6: null,
      7: "dark_oak_planks",
      8: "dark_oak_planks",
      9: null,
      out: "crafting_table",
      qty: 1
    }, // "crafting_table"
    {
      1: null,
      2: null,
      3: null,
      4: "mangrove_planks",
      5: "mangrove_planks",
      6: null,
      7: "mangrove_planks",
      8: "mangrove_planks",
      9: null,
      out: "crafting_table",
      qty: 1
    }, // "crafting_table"
    {
      1: null,
      2: null,
      3: null,
      4: "bamboo_planks",
      5: "bamboo_planks",
      6: null,
      7: "bamboo_planks",
      8: "bamboo_planks",
      9: null,
      out: "crafting_table",
      qty: 1
    }, // "crafting_table"
    {
      1: null,
      2: null,
      3: null,
      4: "crimson_planks",
      5: "crimson_planks",
      6: null,
      7: "crimson_planks",
      8: "crimson_planks",
      9: null,
      out: "crafting_table",
      qty: 1
    }, // "crafting_table"
    {
      1: null,
      2: null,
      3: null,
      4: "warped_planks",
      5: "warped_planks",
      6: null,
      7: "warped_planks",
      8: "warped_planks",
      9: null,
      out: "crafting_table",
      qty: 1
    }, // "crafting_table"
  ],
  [
    {
      1: "cobblestone",
      2: "cobblestone",
      3: "cobblestone",
      4: "cobblestone",
      5: null,
      6: "cobblestone",
      7: "cobblestone",
      8: "cobblestone",
      9: "cobblestone",
      out: "furnace",
      qty: 1
    }, // "furnace"
    {
      1: "cobbled_deepslate",
      2: "cobbled_deepslate",
      3: "cobbled_deepslate",
      4: "cobbled_deepslate",
      5: null,
      6: "cobbled_deepslate",
      7: "cobbled_deepslate",
      8: "cobbled_deepslate",
      9: "cobbled_deepslate",
      out: "furnace",
      qty: 1
    }, // "furnace"
    {
      1: "blackstone",
      2: "blackstone",
      3: "blackstone",
      4: "blackstone",
      5: null,
      6: "blackstone",
      7: "blackstone",
      8: "blackstone",
      9: "blackstone",
      out: "furnace",
      qty: 1
    }, // "furnace"
  ],
  {
    1: "stick",
    2: null,
    3: "stick",
    4: "stick",
    5: "stick",
    6: "stick",
    7: "stick",
    8: null,
    9: "stick",
    out: "ladder",
    qty: 3
  }, // "ladder"
  {
    1: "cobblestone",
    2: null,
    3: null,
    4: "cobblestone",
    5: "cobblestone",
    6: null,
    7: "cobblestone",
    8: "cobblestone",
    9: "cobblestone",
    out: "cobblestone_stairs",
    qty: 4
  }, // "cobblestone_stairs"
  {
    1: null,
    2: null,
    3: null,
    4: "snow_block",
    5: "snow_block",
    6: "snow_block",
    7: null,
    8: null,
    9: null,
    out: "snow",
    qty: 6
  }, // "snow"
  {
    1: null,
    2: null,
    3: null,
    4: "snowball",
    5: "snowball",
    6: null,
    7: "snowball",
    8: "snowball",
    9: null,
    out: "snow_block",
    qty: 1
  }, // "snow_block"
  {
    1: null,
    2: null,
    3: null,
    4: "clay_ball",
    5: "clay_ball",
    6: null,
    7: "clay_ball",
    8: "clay_ball",
    9: null,
    out: "clay",
    qty: 1
  }, // "clay"
  [
    {
      1: "oak_planks",
      2: "oak_planks",
      3: "oak_planks",
      4: "oak_planks",
      5: "diamond",
      6: "oak_planks",
      7: "oak_planks",
      8: "oak_planks",
      9: "oak_planks",
      out: "jukebox",
      qty: 1
    }, // "jukebox"
    {
      1: "spruce_planks",
      2: "spruce_planks",
      3: "spruce_planks",
      4: "spruce_planks",
      5: "diamond",
      6: "spruce_planks",
      7: "spruce_planks",
      8: "spruce_planks",
      9: "spruce_planks",
      out: "jukebox",
      qty: 1
    }, // "jukebox"
    {
      1: "birch_planks",
      2: "birch_planks",
      3: "birch_planks",
      4: "birch_planks",
      5: "diamond",
      6: "birch_planks",
      7: "birch_planks",
      8: "birch_planks",
      9: "birch_planks",
      out: "jukebox",
      qty: 1
    }, // "jukebox"
    {
      1: "jungle_planks",
      2: "jungle_planks",
      3: "jungle_planks",
      4: "jungle_planks",
      5: "diamond",
      6: "jungle_planks",
      7: "jungle_planks",
      8: "jungle_planks",
      9: "jungle_planks",
      out: "jukebox",
      qty: 1
    }, // "jukebox"
    {
      1: "acacia_planks",
      2: "acacia_planks",
      3: "acacia_planks",
      4: "acacia_planks",
      5: "diamond",
      6: "acacia_planks",
      7: "acacia_planks",
      8: "acacia_planks",
      9: "acacia_planks",
      out: "jukebox",
      qty: 1
    }, // "jukebox"
    {
      1: "cherry_planks",
      2: "cherry_planks",
      3: "cherry_planks",
      4: "cherry_planks",
      5: "diamond",
      6: "cherry_planks",
      7: "cherry_planks",
      8: "cherry_planks",
      9: "cherry_planks",
      out: "jukebox",
      qty: 1
    }, // "jukebox"
    {
      1: "dark_oak_planks",
      2: "dark_oak_planks",
      3: "dark_oak_planks",
      4: "dark_oak_planks",
      5: "diamond",
      6: "dark_oak_planks",
      7: "dark_oak_planks",
      8: "dark_oak_planks",
      9: "dark_oak_planks",
      out: "jukebox",
      qty: 1
    }, // "jukebox"
    {
      1: "mangrove_planks",
      2: "mangrove_planks",
      3: "mangrove_planks",
      4: "mangrove_planks",
      5: "diamond",
      6: "mangrove_planks",
      7: "mangrove_planks",
      8: "mangrove_planks",
      9: "mangrove_planks",
      out: "jukebox",
      qty: 1
    }, // "jukebox"
    {
      1: "bamboo_planks",
      2: "bamboo_planks",
      3: "bamboo_planks",
      4: "bamboo_planks",
      5: "diamond",
      6: "bamboo_planks",
      7: "bamboo_planks",
      8: "bamboo_planks",
      9: "bamboo_planks",
      out: "jukebox",
      qty: 1
    }, // "jukebox"
    {
      1: "crimson_planks",
      2: "crimson_planks",
      3: "crimson_planks",
      4: "crimson_planks",
      5: "diamond",
      6: "crimson_planks",
      7: "crimson_planks",
      8: "crimson_planks",
      9: "crimson_planks",
      out: "jukebox",
      qty: 1
    }, // "jukebox"
    {
      1: "warped_planks",
      2: "warped_planks",
      3: "warped_planks",
      4: "warped_planks",
      5: "diamond",
      6: "warped_planks",
      7: "warped_planks",
      8: "warped_planks",
      9: "warped_planks",
      out: "jukebox",
      qty: 1
    }, // "jukebox"
  ],
  {
    1: null,
    2: null,
    3: null,
    4: "oak_planks",
    5: "stick",
    6: "oak_planks",
    7: "oak_planks",
    8: "stick",
    9: "oak_planks",
    out: "oak_fence",
    qty: 3
  }, // "oak_fence"
  {
    1: null,
    2: null,
    3: null,
    4: "spruce_planks",
    5: "stick",
    6: "spruce_planks",
    7: "spruce_planks",
    8: "stick",
    9: "spruce_planks",
    out: "spruce_fence",
    qty: 3
  }, // "spruce_fence"
  {
    1: null,
    2: null,
    3: null,
    4: "birch_planks",
    5: "stick",
    6: "birch_planks",
    7: "birch_planks",
    8: "stick",
    9: "birch_planks",
    out: "birch_fence",
    qty: 3
  }, // "birch_fence"
  {
    1: null,
    2: null,
    3: null,
    4: "jungle_planks",
    5: "stick",
    6: "jungle_planks",
    7: "jungle_planks",
    8: "stick",
    9: "jungle_planks",
    out: "jungle_fence",
    qty: 3
  }, // "jungle_fence"
  {
    1: null,
    2: null,
    3: null,
    4: "acacia_planks",
    5: "stick",
    6: "acacia_planks",
    7: "acacia_planks",
    8: "stick",
    9: "acacia_planks",
    out: "acacia_fence",
    qty: 3
  }, // "acacia_fence"
  {
    1: null,
    2: null,
    3: null,
    4: "cherry_planks",
    5: "stick",
    6: "cherry_planks",
    7: "cherry_planks",
    8: "stick",
    9: "cherry_planks",
    out: "cherry_fence",
    qty: 3
  }, // "cherry_fence"
  {
    1: null,
    2: null,
    3: null,
    4: "dark_oak_planks",
    5: "stick",
    6: "dark_oak_planks",
    7: "dark_oak_planks",
    8: "stick",
    9: "dark_oak_planks",
    out: "dark_oak_fence",
    qty: 3
  }, // "dark_oak_fence"
  {
    1: null,
    2: null,
    3: null,
    4: "mangrove_planks",
    5: "stick",
    6: "mangrove_planks",
    7: "mangrove_planks",
    8: "stick",
    9: "mangrove_planks",
    out: "mangrove_fence",
    qty: 3
  }, // "mangrove_fence"
  {
    1: null,
    2: null,
    3: null,
    4: "mangrove_planks",
    5: "stick",
    6: "mangrove_planks",
    7: "mangrove_planks",
    8: "stick",
    9: "mangrove_planks",
    out: "mangrove_fence",
    qty: 3
  }, // "mangrove_fence"
  {
    1: null,
    2: null,
    3: null,
    4: "bamboo_planks",
    5: "stick",
    6: "bamboo_planks",
    7: "bamboo_planks",
    8: "stick",
    9: "bamboo_planks",
    out: "bamboo_fence",
    qty: 3
  }, // "bamboo_fence"
  {
    1: null,
    2: null,
    3: null,
    4: "crimson_planks",
    5: "stick",
    6: "crimson_planks",
    7: "crimson_planks",
    8: "stick",
    9: "crimson_planks",
    out: "crimson_fence",
    qty: 3
  }, // "crimson_fence"
  {
    1: null,
    2: null,
    3: null,
    4: "warped_planks",
    5: "stick",
    6: "warped_planks",
    7: "warped_planks",
    8: "stick",
    9: "warped_planks",
    out: "warped_fence",
    qty: 3
  }, // "warped_fence"
  {
    1: null,
    2: null,
    3: null,
    4: null,
    5: "carved_pumpkin",
    6: null,
    7: null,
    8: "torch",
    9: null,
    out: "jack_o_lantern",
    qty: 1
  }, // "jack_o_lantern"
  {
    1: null,
    2: null,
    3: null,
    4: "basalt",
    5: "basalt",
    6: null,
    7: "basalt",
    8: "basalt",
    9: null,
    out: "polished_basalt",
    qty: 4
  }, // "polished_basalt"
  [
    {
      1: null,
      2: "coal",
      3: null,
      4: null,
      5: "stick",
      6: null,
      7: null,
      8: "soul_sand",
      9: null,
      out: "soul_torch",
      qty: 4
    }, // "soul_torch"
    {
      1: null,
      2: "charcoal",
      3: null,
      4: null,
      5: "stick",
      6: null,
      7: null,
      8: "soul_sand",
      9: null,
      out: "soul_torch",
      qty: 4
    }, // "soul_torch"
    {
      1: null,
      2: "coal",
      3: null,
      4: null,
      5: "stick",
      6: null,
      7: null,
      8: "soul_soil",
      9: null,
      out: "soul_torch",
      qty: 4
    }, // "soul_torch"
    {
      1: null,
      2: "charcoal",
      3: null,
      4: null,
      5: "stick",
      6: null,
      7: null,
      8: "soul_soil",
      9: null,
      out: "soul_torch",
      qty: 4
    }, // "soul_torch"
  ],
  {
    1: null,
    2: null,
    3: null,
    4: "glowstone_dust",
    5: "glowstone_dust",
    6: null,
    7: "glowstone_dust",
    8: "glowstone_dust",
    9: null,
    out: "glowstone",
    qty: 1
  }, // "glowstone"
  {
    1: null,
    2: null,
    3: null,
    4: "stone",
    5: "stone",
    6: null,
    7: "stone",
    8: "stone",
    9: null,
    out: "stone_bricks",
    qty: 4
  }, // "stone_bricks"
  [
    {
      1: null,
      2: null,
      3: null,
      4: "stone_bricks",
      5: "moss_block",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "mossy_stone_bricks",
      qty: 1
    }, // "mossy_stone_bricks"
    {
      1: null,
      2: null,
      3: null,
      4: "stone_bricks",
      5: "vine",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "mossy_stone_bricks",
      qty: 1
    }, // "mossy_stone_bricks"
  ],
  {
    1: null,
    2: null,
    3: null,
    4: null,
    5: "stone_brick_slab",
    6: null,
    7: null,
    8: "stone_brick_slab",
    9: null,
    out: "chiseled_stone_bricks",
    qty: 1
  }, // "chiseled_stone_bricks"
  {
    1: null,
    2: null,
    3: null,
    4: "mud",
    5: "wheat",
    6: null,
    7: null,
    8: null,
    9: null,
    out: "packed_mud",
    qty: 1
  }, // "packed_mud"
  {
    1: null,
    2: null,
    3: null,
    4: "packed_mud",
    5: "packed_mud",
    6: null,
    7: "packed_mud",
    8: "packed_mud",
    9: null,
    out: "mud_bricks",
    qty: 4
  }, // "mud_bricks"
  {
    1: null,
    2: null,
    3: null,
    4: "polished_deepslate",
    5: "polished_deepslate",
    6: null,
    7: "polished_deepslate",
    8: "polished_deepslate",
    9: null,
    out: "deepslate_bricks",
    qty: 4
  }, // "deepslate_bricks"
  {
    1: null,
    2: null,
    3: null,
    4: "deepslate_bricks",
    5: "deepslate_bricks",
    6: null,
    7: "deepslate_bricks",
    8: "deepslate_bricks",
    9: null,
    out: "deepslate_tiles",
    qty: 4
  }, // "deepslate_tiles"
  {
    1: null,
    2: null,
    3: null,
    4: null,
    5: "cobbled_deepslate_slab",
    6: null,
    7: null,
    8: "cobbled_deepslate_slab",
    9: null,
    out: "chiseled_deepslate",
    qty: 1
  }, // "chiseled_deepslate"
  {
    1: null,
    2: null,
    3: null,
    4: "iron_ingot",
    5: "iron_ingot",
    6: "iron_ingot",
    7: "iron_ingot",
    8: "iron_ingot",
    9: "iron_ingot",
    out: "iron_bars",
    qty: 16
  }, // "iron_bars"
  {
    1: null,
    2: "iron_nugget",
    3: null,
    4: null,
    5: "iron_ingot",
    6: null,
    7: null,
    8: "iron_nugget",
    9: null,
    out: "chain",
    qty: 1
  }, // "chain"
  {
    1: null,
    2: null,
    3: null,
    4: "glass",
    5: "glass",
    6: "glass",
    7: "glass",
    8: "glass",
    9: "glass",
    out: "glass_pane",
    qty: 16
  }, // "glass_pane"
  {
    1: "melon_slice",
    2: "melon_slice",
    3: "melon_slice",
    4: "melon_slice",
    5: "melon_slice",
    6: "melon_slice",
    7: "melon_slice",
    8: "melon_slice",
    9: "melon_slice",
    out: "melon",
    qty: 1
  }, // "melon"
  {
    1: "bricks",
    2: null,
    3: null,
    4: "bricks",
    5: "bricks",
    6: null,
    7: "bricks",
    8: "bricks",
    9: "bricks",
    out: "brick_stairs",
    qty: 4
  }, // "brick_stairs"
  {
    1: "stone_bricks",
    2: null,
    3: null,
    4: "stone_bricks",
    5: "stone_bricks",
    6: null,
    7: "stone_bricks",
    8: "stone_bricks",
    9: "stone_bricks",
    out: "stone_brick_stairs",
    qty: 4
  }, // "stone_brick_stairs"
  {
    1: "mud_bricks",
    2: null,
    3: null,
    4: "mud_bricks",
    5: "mud_bricks",
    6: null,
    7: "mud_bricks",
    8: "mud_bricks",
    9: "mud_bricks",
    out: "mud_brick_stairs",
    qty: 4
  }, // "mud_brick_stairs"
  {
    1: null,
    2: null,
    3: null,
    4: "nether_brick",
    5: "nether_brick",
    6: null,
    7: "nether_brick",
    8: "nether_brick",
    9: null,
    out: "nether_bricks",
    qty: 1
  }, // "nether_bricks"
  {
    1: null,
    2: null,
    3: null,
    4: null,
    5: "nether_brick_slab",
    6: null,
    7: null,
    8: "nether_brick_slab",
    9: null,
    out: "chiseled_nether_bricks",
    qty: 1
  }, // "chiseled_nether_bricks"
  {
    1: null,
    2: null,
    3: null,
    4: "nether_bricks",
    5: "nether_brick",
    6: "nether_bricks",
    7: "nether_bricks",
    8: "nether_brick",
    9: "nether_bricks",
    out: "nether_brick_fence",
    qty: 6
  }, // "nether_brick_fence"
  {
    1: "nether_bricks",
    2: null,
    3: null,
    4: "nether_bricks",
    5: "nether_bricks",
    6: null,
    7: "nether_bricks",
    8: "nether_bricks",
    9: "nether_bricks",
    out: "nether_brick_stairs",
    qty: 4
  }, // "nether_brick_stairs"
  {
    1: null,
    2: "book",
    3: null,
    4: "diamond",
    5: "obsidian",
    6: "diamond",
    7: "obsidian",
    8: "obsidian",
    9: "obsidian",
    out: "enchanting_table",
    qty: 1
  }, // "enchanting_table"
  {
    1: null,
    2: null,
    3: null,
    4: "end_stone",
    5: "end_stone",
    6: null,
    7: "end_stone",
    8: "end_stone",
    9: null,
    out: "end_stone_bricks",
    qty: 4
  }, // "end_stone_bricks"
  {
    1: "sandstone",
    2: null,
    3: null,
    4: "sandstone",
    5: "sandstone",
    6: null,
    7: "sandstone",
    8: "sandstone",
    9: "sandstone",
    out: "sandstone_stairs",
    qty: 4
  }, // "sandstone_stairs"
  {
    1: "obsidian",
    2: "obsidian",
    3: "obsidian",
    4: "obsidian",
    5: "ender_eye",
    6: "obsidian",
    7: "obsidian",
    8: "obsidian",
    9: "obsidian",
    out: "ender_chest",
    qty: 1
  }, // "ender_chest"
  {
    1: "emerald",
    2: "emerald",
    3: "emerald",
    4: "emerald",
    5: "emerald",
    6: "emerald",
    7: "emerald",
    8: "emerald",
    9: "emerald",
    out: "emerald_block",
    qty: 1
  }, // "emerald_block"
  {
    1: "oak_planks",
    2: null,
    3: null,
    4: "oak_planks",
    5: "oak_planks",
    6: null,
    7: "oak_planks",
    8: "oak_planks",
    9: "oak_planks",
    out: "oak_stairs",
    qty: 4
  }, // "oak_stairs"
  {
    1: "spruce_planks",
    2: null,
    3: null,
    4: "spruce_planks",
    5: "spruce_planks",
    6: null,
    7: "spruce_planks",
    8: "spruce_planks",
    9: "spruce_planks",
    out: "spruce_stairs",
    qty: 4
  }, // "spruce_stairs"
  {
    1: "birch_planks",
    2: null,
    3: null,
    4: "birch_planks",
    5: "birch_planks",
    6: null,
    7: "birch_planks",
    8: "birch_planks",
    9: "birch_planks",
    out: "birch_stairs",
    qty: 4
  }, // "birch_stairs"
  {
    1: "jungle_planks",
    2: null,
    3: null,
    4: "jungle_planks",
    5: "jungle_planks",
    6: null,
    7: "jungle_planks",
    8: "jungle_planks",
    9: "jungle_planks",
    out: "jungle_stairs",
    qty: 4
  }, // "jungle_stairs"
  {
    1: "acacia_planks",
    2: null,
    3: null,
    4: "acacia_planks",
    5: "acacia_planks",
    6: null,
    7: "acacia_planks",
    8: "acacia_planks",
    9: "acacia_planks",
    out: "acacia_stairs",
    qty: 4
  }, // "acacia_stairs"
  {
    1: "cherry_planks",
    2: null,
    3: null,
    4: "cherry_planks",
    5: "cherry_planks",
    6: null,
    7: "cherry_planks",
    8: "cherry_planks",
    9: "cherry_planks",
    out: "cherry_stairs",
    qty: 4
  }, // "cherry_stairs"
  {
    1: "dark_oak_planks",
    2: null,
    3: null,
    4: "dark_oak_planks",
    5: "dark_oak_planks",
    6: null,
    7: "dark_oak_planks",
    8: "dark_oak_planks",
    9: "dark_oak_planks",
    out: "dark_oak_stairs",
    qty: 4
  }, // "dark_oak_stairs"
  {
    1: "mangrove_planks",
    2: null,
    3: null,
    4: "mangrove_planks",
    5: "mangrove_planks",
    6: null,
    7: "mangrove_planks",
    8: "mangrove_planks",
    9: "mangrove_planks",
    out: "mangrove_stairs",
    qty: 4
  }, // "mangrove_stairs"
  {
    1: "bamboo_planks",
    2: null,
    3: null,
    4: "bamboo_planks",
    5: "bamboo_planks",
    6: null,
    7: "bamboo_planks",
    8: "bamboo_planks",
    9: "bamboo_planks",
    out: "bamboo_stairs",
    qty: 4
  }, // "bamboo_stairs"
  {
    1: "bamboo_mosaic",
    2: null,
    3: null,
    4: "bamboo_mosaic",
    5: "bamboo_mosaic",
    6: null,
    7: "bamboo_mosaic",
    8: "bamboo_mosaic",
    9: "bamboo_mosaic",
    out: "bamboo_mosaic_stairs",
    qty: 4
  }, // "bamboo_mosaic_stairs"
  {
    1: "warped_planks",
    2: null,
    3: null,
    4: "warped_planks",
    5: "warped_planks",
    6: null,
    7: "warped_planks",
    8: "warped_planks",
    9: "warped_planks",
    out: "warped_stairs",
    qty: 4
  }, // "warped_stairs"
  {
    1: "crimson_planks",
    2: null,
    3: null,
    4: "crimson_planks",
    5: "crimson_planks",
    6: null,
    7: "crimson_planks",
    8: "crimson_planks",
    9: "crimson_planks",
    out: "crimson_stairs",
    qty: 4
  }, // "crimson_stairs"
  {
    1: "glass",
    2: "glass",
    3: "glass",
    4: "glass",
    5: "nether_star",
    6: "glass",
    7: "obsidian",
    8: "obsidian",
    9: "obsidian",
    out: "beacon",
    qty: 1
  }, // "beacon"
  {
    1: null,
    2: null,
    3: null,
    4: "cobblestone",
    5: "cobblestone",
    6: "cobblestone",
    7: "cobblestone",
    8: "cobblestone",
    9: "cobblestone",
    out: "cobblestone_wall",
    qty: 6
  }, // "cobblestone_wall"
  {
    1: null,
    2: null,
    3: null,
    4: "mossy_cobblestone",
    5: "mossy_cobblestone",
    6: "mossy_cobblestone",
    7: "mossy_cobblestone",
    8: "mossy_cobblestone",
    9: "mossy_cobblestone",
    out: "mossy_cobblestone_wall",
    qty: 6
  }, // "mossy_cobblestone_wall"
  {
    1: null,
    2: null,
    3: null,
    4: "bricks",
    5: "bricks",
    6: "bricks",
    7: "bricks",
    8: "bricks",
    9: "bricks",
    out: "brick_wall",
    qty: 6
  }, // "brick_wall"
  {
    1: null,
    2: null,
    3: null,
    4: "prismarine",
    5: "prismarine",
    6: "prismarine",
    7: "prismarine",
    8: "prismarine",
    9: "prismarine",
    out: "prismarine_wall",
    qty: 6
  }, // "prismarine_wall"
  {
    1: null,
    2: null,
    3: null,
    4: "red_sandstone",
    5: "red_sandstone",
    6: "red_sandstone",
    7: "red_sandstone",
    8: "red_sandstone",
    9: "red_sandstone",
    out: "red_sandstone_wall",
    qty: 6
  }, // "red_sandstone_wall"
  {
    1: null,
    2: null,
    3: null,
    4: "mossy_stone_bricks",
    5: "mossy_stone_bricks",
    6: "mossy_stone_bricks",
    7: "mossy_stone_bricks",
    8: "mossy_stone_bricks",
    9: "mossy_stone_bricks",
    out: "mossy_stone_brick_wall",
    qty: 6
  }, // "mossy_stone_brick_wall"
  {
    1: null,
    2: null,
    3: null,
    4: "granite",
    5: "granite",
    6: "granite",
    7: "granite",
    8: "granite",
    9: "granite",
    out: "granite_wall",
    qty: 6
  }, // "granite_wall"
  {
    1: null,
    2: null,
    3: null,
    4: "stone_bricks",
    5: "stone_bricks",
    6: "stone_bricks",
    7: "stone_bricks",
    8: "stone_bricks",
    9: "stone_bricks",
    out: "stone_brick_wall",
    qty: 6
  }, // "stone_brick_wall"
  {
    1: null,
    2: null,
    3: null,
    4: "mud_bricks",
    5: "mud_bricks",
    6: "mud_bricks",
    7: "mud_bricks",
    8: "mud_bricks",
    9: "mud_bricks",
    out: "mud_brick_wall",
    qty: 6
  }, // "mud_brick_wall"
  {
    1: null,
    2: null,
    3: null,
    4: "nether_bricks",
    5: "nether_bricks",
    6: "nether_bricks",
    7: "nether_bricks",
    8: "nether_bricks",
    9: "nether_bricks",
    out: "nether_brick_wall",
    qty: 6
  }, // "nether_brick_wall"
  {
    1: null,
    2: null,
    3: null,
    4: "andesite",
    5: "andesite",
    6: "andesite",
    7: "andesite",
    8: "andesite",
    9: "andesite",
    out: "andesite_wall",
    qty: 6
  }, // "andesite_wall"
  {
    1: null,
    2: null,
    3: null,
    4: "red_nether_bricks",
    5: "red_nether_bricks",
    6: "red_nether_bricks",
    7: "red_nether_bricks",
    8: "red_nether_bricks",
    9: "red_nether_bricks",
    out: "red_nether_brick_wall",
    qty: 6
  }, // "red_nether_brick_wall"
  {
    1: null,
    2: null,
    3: null,
    4: "sandstone",
    5: "sandstone",
    6: "sandstone",
    7: "sandstone",
    8: "sandstone",
    9: "sandstone",
    out: "sandstone_wall",
    qty: 6
  }, // "sandstone_wall"
  {
    1: null,
    2: null,
    3: null,
    4: "end_stone_bricks",
    5: "end_stone_bricks",
    6: "end_stone_bricks",
    7: "end_stone_bricks",
    8: "end_stone_bricks",
    9: "end_stone_bricks",
    out: "end_stone_brick_wall",
    qty: 6
  }, // "end_stone_brick_wall"
  {
    1: null,
    2: null,
    3: null,
    4: "diorite",
    5: "diorite",
    6: "diorite",
    7: "diorite",
    8: "diorite",
    9: "diorite",
    out: "diorite_wall",
    qty: 6
  }, // "diorite_wall"
  {
    1: null,
    2: null,
    3: null,
    4: "blackstone",
    5: "blackstone",
    6: "blackstone",
    7: "blackstone",
    8: "blackstone",
    9: "blackstone",
    out: "blackstone_wall",
    qty: 6
  }, // "blackstone_wall"
  {
    1: null,
    2: null,
    3: null,
    4: "polished_blackstone",
    5: "polished_blackstone",
    6: "polished_blackstone",
    7: "polished_blackstone",
    8: "polished_blackstone",
    9: "polished_blackstone",
    out: "polished_blackstone_wall",
    qty: 6
  }, // "polished_blackstone_wall"
  {
    1: null,
    2: null,
    3: null,
    4: "polished_blackstone_bricks",
    5: "polished_blackstone_bricks",
    6: "polished_blackstone_bricks",
    7: "polished_blackstone_bricks",
    8: "polished_blackstone_bricks",
    9: "polished_blackstone_bricks",
    out: "polished_blackstone_brick_wall",
    qty: 6
  }, // "polished_blackstone_brick_wall"
  {
    1: null,
    2: null,
    3: null,
    4: "cobbled_deepslate",
    5: "cobbled_deepslate",
    6: "cobbled_deepslate",
    7: "cobbled_deepslate",
    8: "cobbled_deepslate",
    9: "cobbled_deepslate",
    out: "cobbled_deepslate_wall",
    qty: 6
  }, // "cobbled_deepslate_wall"
  {
    1: null,
    2: null,
    3: null,
    4: "polished_deepslate",
    5: "polished_deepslate",
    6: "polished_deepslate",
    7: "polished_deepslate",
    8: "polished_deepslate",
    9: "polished_deepslate",
    out: "polished_deepslate_wall",
    qty: 6
  }, // "polished_deepslate_wall"
  {
    1: null,
    2: null,
    3: null,
    4: "deepslate_bricks",
    5: "deepslate_bricks",
    6: "deepslate_bricks",
    7: "deepslate_bricks",
    8: "deepslate_bricks",
    9: "deepslate_bricks",
    out: "deepslate_brick_wall",
    qty: 6
  }, // "deepslate_brick_wall"
  {
    1: null,
    2: null,
    3: null,
    4: "deepslate_tiles",
    5: "deepslate_tiles",
    6: "deepslate_tiles",
    7: "deepslate_tiles",
    8: "deepslate_tiles",
    9: "deepslate_tiles",
    out: "deepslate_tile_wall",
    qty: 6
  }, // "deepslate_tile_wall"
  {
    1: "iron_block",
    2: "iron_block",
    3: "iron_block",
    4: null,
    5: "iron_ingot",
    6: null,
    7: "iron_ingot",
    8: "iron_ingot",
    9: "iron_ingot",
    out: "anvil",
    qty: 1
  }, // "anvil"
  {
    1: null,
    2: null,
    3: null,
    4: null,
    5: "quartz_slab",
    6: null,
    7: null,
    8: "quartz_slab",
    9: null,
    out: "chiseled_quartz_block",
    qty: 1
  }, // "chiseled_quartz_block"
  {
    1: null,
    2: null,
    3: null,
    4: "quartz",
    5: "quartz",
    6: null,
    7: "quartz",
    8: "quartz",
    9: null,
    out: "quartz_block",
    qty: 1
  }, // "quartz_block"
  {
    1: null,
    2: null,
    3: null,
    4: "quartz_block",
    5: "quartz_block",
    6: null,
    7: "quartz_block",
    8: "quartz_block",
    9: null,
    out: "quartz_bricks",
    qty: 4
  }, // "quartz_bricks"
  {
    1: null,
    2: null,
    3: null,
    4: null,
    5: "quartz_block",
    6: null,
    7: null,
    8: "quartz_block",
    9: null,
    out: "quartz_pillar",
    qty: 2
  }, // "quartz_pillar"
  [
    {
      1: "quartz_block",
      2: null,
      3: null,
      4: "quartz_block",
      5: "quartz_block",
      6: null,
      7: "quartz_block",
      8: "quartz_block",
      9: "quartz_block",
      out: "quartz_stairs",
      qty: 4
    }, // "quartz_stairs"
    {
      1: "quartz_pillar",
      2: null,
      3: null,
      4: "quartz_pillar",
      5: "quartz_pillar",
      6: null,
      7: "quartz_pillar",
      8: "quartz_pillar",
      9: "quartz_pillar",
      out: "quartz_stairs",
      qty: 4
    }, // "quartz_stairs"
    {
      1: "chiseled_quartz_block",
      2: null,
      3: null,
      4: "chiseled_quartz_block",
      5: "chiseled_quartz_block",
      6: null,
      7: "chiseled_quartz_block",
      8: "chiseled_quartz_block",
      9: "chiseled_quartz_block",
      out: "quartz_stairs",
      qty: 4
    }, // "quartz_stairs"
  ],
  {
    1: "terracotta",
    2: "terracotta",
    3: "terracotta",
    4: "terracotta",
    5: "white_dye",
    6: "terracotta",
    7: "terracotta",
    8: "terracotta",
    9: "terracotta",
    out: "white_terracotta",
    qty: 8
  }, // "white_terracotta"
  {
    1: "terracotta",
    2: "terracotta",
    3: "terracotta",
    4: "terracotta",
    5: "orange_dye",
    6: "terracotta",
    7: "terracotta",
    8: "terracotta",
    9: "terracotta",
    out: "orange_terracotta",
    qty: 8
  }, // "orange_terracotta"
  {
    1: "terracotta",
    2: "terracotta",
    3: "terracotta",
    4: "terracotta",
    5: "magenta_dye",
    6: "terracotta",
    7: "terracotta",
    8: "terracotta",
    9: "terracotta",
    out: "magenta_terracotta",
    qty: 8
  }, // "magenta_terracotta"
  {
    1: "terracotta",
    2: "terracotta",
    3: "terracotta",
    4: "terracotta",
    5: "light_blue_dye",
    6: "terracotta",
    7: "terracotta",
    8: "terracotta",
    9: "terracotta",
    out: "light_blue_terracotta",
    qty: 8
  }, // "light_blue_terracotta"
  {
    1: "terracotta",
    2: "terracotta",
    3: "terracotta",
    4: "terracotta",
    5: "yellow_dye",
    6: "terracotta",
    7: "terracotta",
    8: "terracotta",
    9: "terracotta",
    out: "yellow_terracotta",
    qty: 8
  }, // "yellow_terracotta"
  {
    1: "terracotta",
    2: "terracotta",
    3: "terracotta",
    4: "terracotta",
    5: "lime_dye",
    6: "terracotta",
    7: "terracotta",
    8: "terracotta",
    9: "terracotta",
    out: "lime_terracotta",
    qty: 8
  }, // "lime_terracotta"
  {
    1: "terracotta",
    2: "terracotta",
    3: "terracotta",
    4: "terracotta",
    5: "pink_dye",
    6: "terracotta",
    7: "terracotta",
    8: "terracotta",
    9: "terracotta",
    out: "pink_terracotta",
    qty: 8
  }, // "pink_terracotta"
  {
    1: "terracotta",
    2: "terracotta",
    3: "terracotta",
    4: "terracotta",
    5: "gray_dye",
    6: "terracotta",
    7: "terracotta",
    8: "terracotta",
    9: "terracotta",
    out: "gray_terracotta",
    qty: 8
  }, // "gray_terracotta"
  {
    1: "terracotta",
    2: "terracotta",
    3: "terracotta",
    4: "terracotta",
    5: "light_gray_dye",
    6: "terracotta",
    7: "terracotta",
    8: "terracotta",
    9: "terracotta",
    out: "light_gray_terracotta",
    qty: 8
  }, // "light_gray_terracotta"
  {
    1: "terracotta",
    2: "terracotta",
    3: "terracotta",
    4: "terracotta",
    5: "cyan_dye",
    6: "terracotta",
    7: "terracotta",
    8: "terracotta",
    9: "terracotta",
    out: "cyan_terracotta",
    qty: 8
  }, // "cyan_terracotta"
  {
    1: "terracotta",
    2: "terracotta",
    3: "terracotta",
    4: "terracotta",
    5: "purple_dye",
    6: "terracotta",
    7: "terracotta",
    8: "terracotta",
    9: "terracotta",
    out: "purple_terracotta",
    qty: 8
  }, // "purple_terracotta"
  {
    1: "terracotta",
    2: "terracotta",
    3: "terracotta",
    4: "terracotta",
    5: "blue_dye",
    6: "terracotta",
    7: "terracotta",
    8: "terracotta",
    9: "terracotta",
    out: "blue_terracotta",
    qty: 8
  }, // "blue_terracotta"
  {
    1: "terracotta",
    2: "terracotta",
    3: "terracotta",
    4: "terracotta",
    5: "brown_dye",
    6: "terracotta",
    7: "terracotta",
    8: "terracotta",
    9: "terracotta",
    out: "brown_terracotta",
    qty: 8
  }, // "brown_terracotta"
  {
    1: "terracotta",
    2: "terracotta",
    3: "terracotta",
    4: "terracotta",
    5: "green_dye",
    6: "terracotta",
    7: "terracotta",
    8: "terracotta",
    9: "terracotta",
    out: "green_terracotta",
    qty: 8
  }, // "green_terracotta"
  {
    1: "terracotta",
    2: "terracotta",
    3: "terracotta",
    4: "terracotta",
    5: "red_dye",
    6: "terracotta",
    7: "terracotta",
    8: "terracotta",
    9: "terracotta",
    out: "red_terracotta",
    qty: 8
  }, // "red_terracotta"
  {
    1: "terracotta",
    2: "terracotta",
    3: "terracotta",
    4: "terracotta",
    5: "black_dye",
    6: "terracotta",
    7: "terracotta",
    8: "terracotta",
    9: "terracotta",
    out: "black_terracotta",
    qty: 8
  }, // "black_terracotta"
  {
    1: "wheat",
    2: "wheat",
    3: "wheat",
    4: "wheat",
    5: "wheat",
    6: "wheat",
    7: "wheat",
    8: "wheat",
    9: "wheat",
    out: "hay_block",
    qty: 1
  }, // "hay_block"
  {
    1: "ice",
    2: "ice",
    3: "ice",
    4: "ice",
    5: "ice",
    6: "ice",
    7: "ice",
    8: "ice",
    9: "ice",
    out: "packed_ice",
    qty: 1
  }, // "packed_ice"
  [
    {
      1: null,
      2: null,
      3: null,
      4: "white_stained_glass",
      5: "white_stained_glass",
      6: "white_stained_glass",
      7: "white_stained_glass",
      8: "white_stained_glass",
      9: "white_stained_glass",
      out: "white_stained_glass_pane",
      qty: 16
    }, // "white_stained_glass_pane"
    {
      1: "glass_pane",
      2: "glass_pane",
      3: "glass_pane",
      4: "glass_pane",
      5: "white_dye",
      6: "glass_pane",
      7: "glass_pane",
      8: "glass_pane",
      9: "glass_pane",
      out: "white_stained_glass_pane",
      qty: 1
    }, // "white_stained_glass_pane"
  ],
  [
    {
      1: null,
      2: null,
      3: null,
      4: "orange_stained_glass",
      5: "orange_stained_glass",
      6: "orange_stained_glass",
      7: "orange_stained_glass",
      8: "orange_stained_glass",
      9: "orange_stained_glass",
      out: "orange_stained_glass_pane",
      qty: 16
    }, // "orange_stained_glass_pane"
    {
      1: "glass_pane",
      2: "glass_pane",
      3: "glass_pane",
      4: "glass_pane",
      5: "orange_dye",
      6: "glass_pane",
      7: "glass_pane",
      8: "glass_pane",
      9: "glass_pane",
      out: "orange_stained_glass_pane",
      qty: 1
    }, // "orange_stained_glass_pane"
  ],
  [
    {
      1: null,
      2: null,
      3: null,
      4: "magenta_stained_glass",
      5: "magenta_stained_glass",
      6: "magenta_stained_glass",
      7: "magenta_stained_glass",
      8: "magenta_stained_glass",
      9: "magenta_stained_glass",
      out: "magenta_stained_glass_pane",
      qty: 16
    }, // "magenta_stained_glass_pane"
    {
      1: "glass_pane",
      2: "glass_pane",
      3: "glass_pane",
      4: "glass_pane",
      5: "magenta_dye",
      6: "glass_pane",
      7: "glass_pane",
      8: "glass_pane",
      9: "glass_pane",
      out: "magenta_stained_glass_pane",
      qty: 1
    }, // "magenta_stained_glass_pane"
  ],
  [
    {
      1: null,
      2: null,
      3: null,
      4: "light_blue_stained_glass",
      5: "light_blue_stained_glass",
      6: "light_blue_stained_glass",
      7: "light_blue_stained_glass",
      8: "light_blue_stained_glass",
      9: "light_blue_stained_glass",
      out: "light_blue_stained_glass_pane",
      qty: 16
    }, // "light_blue_stained_glass_pane"
    {
      1: "glass_pane",
      2: "glass_pane",
      3: "glass_pane",
      4: "glass_pane",
      5: "light_blue_dye",
      6: "glass_pane",
      7: "glass_pane",
      8: "glass_pane",
      9: "glass_pane",
      out: "light_blue_stained_glass_pane",
      qty: 1
    }, // "light_blue_stained_glass_pane"
  ],
  [
    {
      1: null,
      2: null,
      3: null,
      4: "yellow_stained_glass",
      5: "yellow_stained_glass",
      6: "yellow_stained_glass",
      7: "yellow_stained_glass",
      8: "yellow_stained_glass",
      9: "yellow_stained_glass",
      out: "yellow_stained_glass_pane",
      qty: 16
    }, // "yellow_stained_glass_pane"
    {
      1: "glass_pane",
      2: "glass_pane",
      3: "glass_pane",
      4: "glass_pane",
      5: "yellow_dye",
      6: "glass_pane",
      7: "glass_pane",
      8: "glass_pane",
      9: "glass_pane",
      out: "yellow_stained_glass_pane",
      qty: 1
    }, // "yellow_stained_glass_pane"
  ],
  [
    {
      1: null,
      2: null,
      3: null,
      4: "lime_stained_glass",
      5: "lime_stained_glass",
      6: "lime_stained_glass",
      7: "lime_stained_glass",
      8: "lime_stained_glass",
      9: "lime_stained_glass",
      out: "lime_stained_glass_pane",
      qty: 16
    }, // "lime_stained_glass_pane"
    {
      1: "glass_pane",
      2: "glass_pane",
      3: "glass_pane",
      4: "glass_pane",
      5: "lime_dye",
      6: "glass_pane",
      7: "glass_pane",
      8: "glass_pane",
      9: "glass_pane",
      out: "lime_stained_glass_pane",
      qty: 1
    }, // "lime_stained_glass_pane"
  ],
  [
    {
      1: null,
      2: null,
      3: null,
      4: "pink_stained_glass",
      5: "pink_stained_glass",
      6: "pink_stained_glass",
      7: "pink_stained_glass",
      8: "pink_stained_glass",
      9: "pink_stained_glass",
      out: "pink_stained_glass_pane",
      qty: 16
    }, // "pink_stained_glass_pane"
    {
      1: "glass_pane",
      2: "glass_pane",
      3: "glass_pane",
      4: "glass_pane",
      5: "pink_dye",
      6: "glass_pane",
      7: "glass_pane",
      8: "glass_pane",
      9: "glass_pane",
      out: "pink_stained_glass_pane",
      qty: 1
    }, // "pink_stained_glass_pane"
  ],
  [
    {
      1: null,
      2: null,
      3: null,
      4: "gray_stained_glass",
      5: "gray_stained_glass",
      6: "gray_stained_glass",
      7: "gray_stained_glass",
      8: "gray_stained_glass",
      9: "gray_stained_glass",
      out: "gray_stained_glass_pane",
      qty: 16
    }, // "gray_stained_glass_pane"
    {
      1: "glass_pane",
      2: "glass_pane",
      3: "glass_pane",
      4: "glass_pane",
      5: "gray_dye",
      6: "glass_pane",
      7: "glass_pane",
      8: "glass_pane",
      9: "glass_pane",
      out: "gray_stained_glass_pane",
      qty: 1
    }, // "gray_stained_glass_pane"
  ],
  [
    {
      1: null,
      2: null,
      3: null,
      4: "light_gray_stained_glass",
      5: "light_gray_stained_glass",
      6: "light_gray_stained_glass",
      7: "light_gray_stained_glass",
      8: "light_gray_stained_glass",
      9: "light_gray_stained_glass",
      out: "light_gray_stained_glass_pane",
      qty: 16
    }, // "light_gray_stained_glass_pane"
    {
      1: "glass_pane",
      2: "glass_pane",
      3: "glass_pane",
      4: "glass_pane",
      5: "light_gray_dye",
      6: "glass_pane",
      7: "glass_pane",
      8: "glass_pane",
      9: "glass_pane",
      out: "light_gray_stained_glass_pane",
      qty: 1
    }, // "light_gray_stained_glass_pane"
  ],
  [
    {
      1: null,
      2: null,
      3: null,
      4: "cyan_stained_glass",
      5: "cyan_stained_glass",
      6: "cyan_stained_glass",
      7: "cyan_stained_glass",
      8: "cyan_stained_glass",
      9: "cyan_stained_glass",
      out: "cyan_stained_glass_pane",
      qty: 16
    }, // "cyan_stained_glass_pane"
    {
      1: "glass_pane",
      2: "glass_pane",
      3: "glass_pane",
      4: "glass_pane",
      5: "cyan_dye",
      6: "glass_pane",
      7: "glass_pane",
      8: "glass_pane",
      9: "glass_pane",
      out: "cyan_stained_glass_pane",
      qty: 1
    }, // "cyan_stained_glass_pane"
  ],
  [
    {
      1: null,
      2: null,
      3: null,
      4: "purple_stained_glass",
      5: "purple_stained_glass",
      6: "purple_stained_glass",
      7: "purple_stained_glass",
      8: "purple_stained_glass",
      9: "purple_stained_glass",
      out: "purple_stained_glass_pane",
      qty: 16
    }, // "purple_stained_glass_pane"
    {
      1: "glass_pane",
      2: "glass_pane",
      3: "glass_pane",
      4: "glass_pane",
      5: "purple_dye",
      6: "glass_pane",
      7: "glass_pane",
      8: "glass_pane",
      9: "glass_pane",
      out: "purple_stained_glass_pane",
      qty: 1
    }, // "purple_stained_glass_pane"
  ],
  [
    {
      1: null,
      2: null,
      3: null,
      4: "blue_stained_glass",
      5: "blue_stained_glass",
      6: "blue_stained_glass",
      7: "blue_stained_glass",
      8: "blue_stained_glass",
      9: "blue_stained_glass",
      out: "blue_stained_glass_pane",
      qty: 16
    }, // "blue_stained_glass_pane"
    {
      1: "glass_pane",
      2: "glass_pane",
      3: "glass_pane",
      4: "glass_pane",
      5: "blue_dye",
      6: "glass_pane",
      7: "glass_pane",
      8: "glass_pane",
      9: "glass_pane",
      out: "blue_stained_glass_pane",
      qty: 1
    }, // "blue_stained_glass_pane"
  ],
  [
    {
      1: null,
      2: null,
      3: null,
      4: "brown_stained_glass",
      5: "brown_stained_glass",
      6: "brown_stained_glass",
      7: "brown_stained_glass",
      8: "brown_stained_glass",
      9: "brown_stained_glass",
      out: "brown_stained_glass_pane",
      qty: 16
    }, // "brown_stained_glass_pane"
    {
      1: "glass_pane",
      2: "glass_pane",
      3: "glass_pane",
      4: "glass_pane",
      5: "brown_dye",
      6: "glass_pane",
      7: "glass_pane",
      8: "glass_pane",
      9: "glass_pane",
      out: "brown_stained_glass_pane",
      qty: 1
    }, // "brown_stained_glass_pane"
  ],
  [
    {
      1: null,
      2: null,
      3: null,
      4: "green_stained_glass",
      5: "green_stained_glass",
      6: "green_stained_glass",
      7: "green_stained_glass",
      8: "green_stained_glass",
      9: "green_stained_glass",
      out: "green_stained_glass_pane",
      qty: 16
    }, // "green_stained_glass_pane"
    {
      1: "glass_pane",
      2: "glass_pane",
      3: "glass_pane",
      4: "glass_pane",
      5: "green_dye",
      6: "glass_pane",
      7: "glass_pane",
      8: "glass_pane",
      9: "glass_pane",
      out: "green_stained_glass_pane",
      qty: 1
    }, // "green_stained_glass_pane"
  ],
  [
    {
      1: null,
      2: null,
      3: null,
      4: "red_stained_glass",
      5: "red_stained_glass",
      6: "red_stained_glass",
      7: "red_stained_glass",
      8: "red_stained_glass",
      9: "red_stained_glass",
      out: "red_stained_glass_pane",
      qty: 16
    }, // "red_stained_glass_pane"
    {
      1: "glass_pane",
      2: "glass_pane",
      3: "glass_pane",
      4: "glass_pane",
      5: "red_dye",
      6: "glass_pane",
      7: "glass_pane",
      8: "glass_pane",
      9: "glass_pane",
      out: "red_stained_glass_pane",
      qty: 1
    }, // "red_stained_glass_pane"
  ],
  [
    {
      1: null,
      2: null,
      3: null,
      4: "black_stained_glass",
      5: "black_stained_glass",
      6: "black_stained_glass",
      7: "black_stained_glass",
      8: "black_stained_glass",
      9: "black_stained_glass",
      out: "black_stained_glass_pane",
      qty: 16
    }, // "black_stained_glass_pane"
    {
      1: "glass_pane",
      2: "glass_pane",
      3: "glass_pane",
      4: "glass_pane",
      5: "black_dye",
      6: "glass_pane",
      7: "glass_pane",
      8: "glass_pane",
      9: "glass_pane",
      out: "black_stained_glass_pane",
      qty: 1
    }, // "black_stained_glass_pane"
  ],
  {
    1: null,
    2: null,
    3: null,
    4: "prismarine_shard",
    5: "prismarine_shard",
    6: null,
    7: "prismarine_shard",
    8: "prismarine_shard",
    9: null,
    out: "prismarine",
    qty: 1
  }, // "prismarine"
  {
    1: "prismarine_shard",
    2: "prismarine_shard",
    3: "prismarine_shard",
    4: "prismarine_shard",
    5: "prismarine_shard",
    6: "prismarine_shard",
    7: "prismarine_shard",
    8: "prismarine_shard",
    9: "prismarine_shard",
    out: "prismarine_bricks",
    qty: 1
  }, // "prismarine_bricks"
  {
    1: "prismarine_shard",
    2: "prismarine_shard",
    3: "prismarine_shard",
    4: "prismarine_shard",
    5: "black_dye",
    6: "prismarine_shard",
    7: "prismarine_shard",
    8: "prismarine_shard",
    9: "prismarine_shard",
    out: "dark_prismarine",
    qty: 1
  }, // "dark_prismarine"
  {
    1: "prismarine",
    2: null,
    3: null,
    4: "prismarine",
    5: "prismarine",
    6: null,
    7: "prismarine",
    8: "prismarine",
    9: "prismarine",
    out: "prismarine_stairs",
    qty: 4
  }, // "prismarine_stairs"
  {
    1: "prismarine_bricks",
    2: null,
    3: null,
    4: "prismarine_bricks",
    5: "prismarine_bricks",
    6: null,
    7: "prismarine_bricks",
    8: "prismarine_bricks",
    9: "prismarine_bricks",
    out: "prismarine_brick_stairs",
    qty: 4
  }, // "prismarine_brick_stairs"
  {
    1: "dark_prismarine",
    2: null,
    3: null,
    4: "dark_prismarine",
    5: "dark_prismarine",
    6: null,
    7: "dark_prismarine",
    8: "dark_prismarine",
    9: "dark_prismarine",
    out: "dark_prismarine_stairs",
    qty: 4
  }, // "dark_prismarine_stairs"
  {
    1: "prismarine_shard",
    2: "prismarine_crystals",
    3: "prismarine_shard",
    4: "prismarine_crystals",
    5: "prismarine_crystals",
    6: "prismarine_crystals",
    7: "prismarine_shard",
    8: "prismarine_crystals",
    9: "prismarine_shard",
    out: "sea_lantern",
    qty: 1
  }, // "sea_lantern"
  {
    1: null,
    2: null,
    3: null,
    4: "red_sand",
    5: "red_sand",
    6: null,
    7: "red_sand",
    8: "red_sand",
    9: null,
    out: "red_sandstone",
    qty: 1
  }, // "red_sandstone"
  {
    1: null,
    2: null,
    3: null,
    4: null,
    5: "red_sandstone_slab",
    6: null,
    7: null,
    8: "red_sandstone_slab",
    9: null,
    out: "chiseled_red_sandstone",
    qty: 1
  }, // "chiseled_red_sandstone"
  {
    1: null,
    2: null,
    3: null,
    4: "red_sandstone",
    5: "red_sandstone",
    6: null,
    7: "red_sandstone",
    8: "red_sandstone",
    9: null,
    out: "cut_red_sandstone",
    qty: 4
  }, // "cut_red_sandstone"
  {
    1: "red_sandstone",
    2: null,
    3: null,
    4: "red_sandstone",
    5: "red_sandstone",
    6: null,
    7: "red_sandstone",
    8: "red_sandstone",
    9: "red_sandstone",
    out: "red_sandstone_stairs",
    qty: 4
  }, // "red_sandstone_stairs"
  {
    1: null,
    2: null,
    3: null,
    4: "magma_cream",
    5: "magma_cream",
    6: null,
    7: "magma_cream",
    8: "magma_cream",
    9: null,
    out: "magma_block",
    qty: 1
  }, // "magma_block"
  {
    1: "nether_wart",
    2: "nether_wart",
    3: "nether_wart",
    4: "nether_wart",
    5: "nether_wart",
    6: "nether_wart",
    7: "nether_wart",
    8: "nether_wart",
    9: "nether_wart",
    out: "nether_wart_block",
    qty: 1
  }, // "nether_wart_block"
  {
    1: null,
    2: null,
    3: null,
    4: "nether_brick",
    5: "nether_wart",
    6: null,
    7: "nether_wart",
    8: "nether_brick",
    9: null,
    out: "red_nether_bricks",
    qty: 1
  }, // "red_nether_bricks"
  {
    1: "bone_meal",
    2: "bone_meal",
    3: "bone_meal",
    4: "bone_meal",
    5: "bone_meal",
    6: "bone_meal",
    7: "bone_meal",
    8: "bone_meal",
    9: "bone_meal",
    out: "bone_block",
    qty: 1
  }, // "bone_block"
  {
    1: null,
    2: "shulker_shell",
    3: null,
    4: null,
    5: "chest",
    6: null,
    7: null,
    8: "shulker_shell",
    9: null,
    out: "shulker_box",
    qty: 1
  }, // "shulker_box"
  {
    1: "white_dye",
    2: "sand",
    3: "sand",
    4: "sand",
    5: "sand",
    6: "gravel",
    7: "gravel",
    8: "gravel",
    9: "gravel",
    out: "white_concrete_powder",
    qty: 8
  }, // "white_concrete_powder"
  {
    1: "orange_dye",
    2: "sand",
    3: "sand",
    4: "sand",
    5: "sand",
    6: "gravel",
    7: "gravel",
    8: "gravel",
    9: "gravel",
    out: "orange_concrete_powder",
    qty: 8
  }, // "orange_concrete_powder"
  {
    1: "magenta_dye",
    2: "sand",
    3: "sand",
    4: "sand",
    5: "sand",
    6: "gravel",
    7: "gravel",
    8: "gravel",
    9: "gravel",
    out: "magenta_concrete_powder",
    qty: 8
  }, // "magenta_concrete_powder"
  {
    1: "light_blue_dye",
    2: "sand",
    3: "sand",
    4: "sand",
    5: "sand",
    6: "gravel",
    7: "gravel",
    8: "gravel",
    9: "gravel",
    out: "light_blue_concrete_powder",
    qty: 8
  }, // "light_blue_concrete_powder"
  {
    1: "yellow_dye",
    2: "sand",
    3: "sand",
    4: "sand",
    5: "sand",
    6: "gravel",
    7: "gravel",
    8: "gravel",
    9: "gravel",
    out: "yellow_concrete_powder",
    qty: 8
  }, // "yellow_concrete_powder"
  {
    1: "lime_dye",
    2: "sand",
    3: "sand",
    4: "sand",
    5: "sand",
    6: "gravel",
    7: "gravel",
    8: "gravel",
    9: "gravel",
    out: "lime_concrete_powder",
    qty: 8
  }, // "lime_concrete_powder"
  {
    1: "pink_dye",
    2: "sand",
    3: "sand",
    4: "sand",
    5: "sand",
    6: "gravel",
    7: "gravel",
    8: "gravel",
    9: "gravel",
    out: "pink_concrete_powder",
    qty: 8
  }, // "pink_concrete_powder"
  {
    1: "gray_dye",
    2: "sand",
    3: "sand",
    4: "sand",
    5: "sand",
    6: "gravel",
    7: "gravel",
    8: "gravel",
    9: "gravel",
    out: "gray_concrete_powder",
    qty: 8
  }, // "gray_concrete_powder"
  {
    1: "light_gray_dye",
    2: "sand",
    3: "sand",
    4: "sand",
    5: "sand",
    6: "gravel",
    7: "gravel",
    8: "gravel",
    9: "gravel",
    out: "light_gray_concrete_powder",
    qty: 8
  }, // "light_gray_concrete_powder"
  {
    1: "cyan_dye",
    2: "sand",
    3: "sand",
    4: "sand",
    5: "sand",
    6: "gravel",
    7: "gravel",
    8: "gravel",
    9: "gravel",
    out: "cyan_concrete_powder",
    qty: 8
  }, // "cyan_concrete_powder"
  {
    1: "purple_dye",
    2: "sand",
    3: "sand",
    4: "sand",
    5: "sand",
    6: "gravel",
    7: "gravel",
    8: "gravel",
    9: "gravel",
    out: "purple_concrete_powder",
    qty: 8
  }, // "purple_concrete_powder"
  {
    1: "blue_dye",
    2: "sand",
    3: "sand",
    4: "sand",
    5: "sand",
    6: "gravel",
    7: "gravel",
    8: "gravel",
    9: "gravel",
    out: "blue_concrete_powder",
    qty: 8
  }, // "blue_concrete_powder"
  {
    1: "brown_dye",
    2: "sand",
    3: "sand",
    4: "sand",
    5: "sand",
    6: "gravel",
    7: "gravel",
    8: "gravel",
    9: "gravel",
    out: "brown_concrete_powder",
    qty: 8
  }, // "brown_concrete_powder"
  {
    1: "green_dye",
    2: "sand",
    3: "sand",
    4: "sand",
    5: "sand",
    6: "gravel",
    7: "gravel",
    8: "gravel",
    9: "gravel",
    out: "green_concrete_powder",
    qty: 8
  }, // "green_concrete_powder"
  {
    1: "red_dye",
    2: "sand",
    3: "sand",
    4: "sand",
    5: "sand",
    6: "gravel",
    7: "gravel",
    8: "gravel",
    9: "gravel",
    out: "red_concrete_powder",
    qty: 8
  }, // "red_concrete_powder"
  {
    1: "black_dye",
    2: "sand",
    3: "sand",
    4: "sand",
    5: "sand",
    6: "gravel",
    7: "gravel",
    8: "gravel",
    9: "gravel",
    out: "black_concrete_powder",
    qty: 8
  }, // "black_concrete_powder"
  {
    1: "packed_ice",
    2: "packed_ice",
    3: "packed_ice",
    4: "packed_ice",
    5: "packed_ice",
    6: "packed_ice",
    7: "packed_ice",
    8: "packed_ice",
    9: "packed_ice",
    out: "blue_ice",
    qty: 1
  }, // "blue_ice"
  {
    1: "nautilus_shell",
    2: "nautilus_shell",
    3: "nautilus_shell",
    4: "nautilus_shell",
    5: "heart_of_the_sea",
    6: "nautilus_shell",
    7: "nautilus_shell",
    8: "nautilus_shell",
    9: "nautilus_shell",
    out: "conduit",
    qty: 1
  }, // "conduit"
  [
    {
      1: null,
      2: null,
      3: null,
      4: null,
      5: "iron_block",
      6: null,
      7: null,
      8: null,
      9: null,
      out: "iron_ingot",
      qty: 9
    }, // "iron_ingot"
    {
      1: "iron_nugget",
      2: "iron_nugget",
      3: "iron_nugget",
      4: "iron_nugget",
      5: "iron_nugget",
      6: "iron_nugget",
      7: "iron_nugget",
      8: "iron_nugget",
      9: "iron_nugget",
      out: "iron_ingot",
      qty: 1
    }, // "iron_ingot"
  ],
  [
    {
      1: null,
      2: null,
      3: null,
      4: null,
      5: "oak_planks",
      6: null,
      7: null,
      8: "oak_planks",
      9: null,
      out: "stick",
      qty: 4
    }, // "stick"
    {
      1: null,
      2: null,
      3: null,
      4: null,
      5: "spruce_planks",
      6: null,
      7: null,
      8: "spruce_planks",
      9: null,
      out: "stick",
      qty: 4
    }, // "stick"
    {
      1: null,
      2: null,
      3: null,
      4: null,
      5: "birch_planks",
      6: null,
      7: null,
      8: "birch_planks",
      9: null,
      out: "stick",
      qty: 4
    }, // "stick"
    {
      1: null,
      2: null,
      3: null,
      4: null,
      5: "jungle_planks",
      6: null,
      7: null,
      8: "jungle_planks",
      9: null,
      out: "stick",
      qty: 4
    }, // "stick"
    {
      1: null,
      2: null,
      3: null,
      4: null,
      5: "acacia_planks",
      6: null,
      7: null,
      8: "acacia_planks",
      9: null,
      out: "stick",
      qty: 4
    }, // "stick"
    {
      1: null,
      2: null,
      3: null,
      4: null,
      5: "cherry_planks",
      6: null,
      7: null,
      8: "cherry_planks",
      9: null,
      out: "stick",
      qty: 4
    }, // "stick"
    {
      1: null,
      2: null,
      3: null,
      4: null,
      5: "dark_oak_planks",
      6: null,
      7: null,
      8: "dark_oak_planks",
      9: null,
      out: "stick",
      qty: 4
    }, // "stick"
    {
      1: null,
      2: null,
      3: null,
      4: null,
      5: "mangrove_planks",
      6: null,
      7: null,
      8: "mangrove_planks",
      9: null,
      out: "stick",
      qty: 4
    }, // "stick"
    {
      1: null,
      2: null,
      3: null,
      4: null,
      5: "bamboo_planks",
      6: null,
      7: null,
      8: "bamboo_planks",
      9: null,
      out: "stick",
      qty: 4
    }, // "stick"
    {
      1: null,
      2: null,
      3: null,
      4: null,
      5: "crimson_planks",
      6: null,
      7: null,
      8: "crimson_planks",
      9: null,
      out: "stick",
      qty: 4
    }, // "stick"
    {
      1: null,
      2: null,
      3: null,
      4: null,
      5: "warped_planks",
      6: null,
      7: null,
      8: "warped_planks",
      9: null,
      out: "stick",
      qty: 4
    }, // "stick"
    {
      1: null,
      2: null,
      3: null,
      4: null,
      5: "bamboo",
      6: null,
      7: null,
      8: "bamboo",
      9: null,
      out: "stick",
      qty: 1
    }, // "stick"
  ],

]

const craftAllSorted = craftAllNoSort.sort((a, b) => {
  const aOut = (typeof a === 'object' && 'out' in a) ? a.out : (Array.isArray(a) && 'out' in a[0]) ? a[0].out : null;
  const bOut = (typeof b === 'object' && 'out' in b) ? b.out : (Array.isArray(b) && 'out' in b[0]) ? b[0].out : null;

  if (aOut && bOut) {
    return aOut.localeCompare(bOut);
  }
  return 0;
});

air.push(...craftAllSorted);

module.exports.craftAll = air;