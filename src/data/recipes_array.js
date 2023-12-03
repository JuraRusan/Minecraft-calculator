const air = [
  {
    "item": "air",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
]

const recipes = [
  {
    "file": "acacia_boat.json",
    "item": "acacia_boat",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "acacia_planks"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "acacia_planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "acacia_planks"
        },
        "2_key": {
          "item": "acacia_planks"
        },
        "3_key": {
          "item": "acacia_planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "acacia_button.json",
    "item": "acacia_button",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "acacia_planks"
      }
    ]
  },
  {
    "file": "acacia_chest_boat.json",
    "item": "acacia_chest_boat",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "chest"
      },
      {
        "item": "acacia_boat"
      }
    ]
  },
  {
    "file": "acacia_door.json",
    "item": "acacia_door",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "acacia_planks"
        },
        "2_key": {
          "item": "acacia_planks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "acacia_planks"
        },
        "2_key": {
          "item": "acacia_planks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "acacia_planks"
        },
        "2_key": {
          "item": "acacia_planks"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "acacia_fence.json",
    "item": "acacia_fence",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "acacia_planks"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "acacia_planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "acacia_planks"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "acacia_planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "acacia_fence_gate.json",
    "item": "acacia_fence_gate",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "item": "acacia_planks"
        },
        "3_key": {
          "item": "stick"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "item": "acacia_planks"
        },
        "3_key": {
          "item": "stick"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "acacia_hanging_sign.json",
    "item": "acacia_hanging_sign",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "chain"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "chain"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "stripped_acacia_log"
        },
        "2_key": {
          "item": "stripped_acacia_log"
        },
        "3_key": {
          "item": "stripped_acacia_log"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "stripped_acacia_log"
        },
        "2_key": {
          "item": "stripped_acacia_log"
        },
        "3_key": {
          "item": "stripped_acacia_log"
        }
      }
    }
  },
  {
    "file": "acacia_planks.json",
    "item": "acacia_planks",
    "count": 4,
    "patterns": {},
    "ingredients": [
      {
        "tag": "acacia_logs"
      }
    ]
  },
  {
    "file": "acacia_pressure_plate.json",
    "item": "acacia_pressure_plate",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "acacia_planks"
        },
        "2_key": {
          "item": "acacia_planks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "acacia_sign.json",
    "item": "acacia_sign",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "acacia_planks"
        },
        "2_key": {
          "item": "acacia_planks"
        },
        "3_key": {
          "item": "acacia_planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "acacia_planks"
        },
        "2_key": {
          "item": "acacia_planks"
        },
        "3_key": {
          "item": "acacia_planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "acacia_slab.json",
    "item": "acacia_slab",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "acacia_planks"
        },
        "2_key": {
          "item": "acacia_planks"
        },
        "3_key": {
          "item": "acacia_planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "acacia_stairs.json",
    "item": "acacia_stairs",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "acacia_planks"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "acacia_planks"
        },
        "2_key": {
          "item": "acacia_planks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "acacia_planks"
        },
        "2_key": {
          "item": "acacia_planks"
        },
        "3_key": {
          "item": "acacia_planks"
        }
      }
    }
  },
  {
    "file": "acacia_trapdoor.json",
    "item": "acacia_trapdoor",
    "count": 2,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "acacia_planks"
        },
        "2_key": {
          "item": "acacia_planks"
        },
        "3_key": {
          "item": "acacia_planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "acacia_planks"
        },
        "2_key": {
          "item": "acacia_planks"
        },
        "3_key": {
          "item": "acacia_planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "acacia_wood.json",
    "item": "acacia_wood",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "acacia_log"
        },
        "2_key": {
          "item": "acacia_log"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "acacia_log"
        },
        "2_key": {
          "item": "acacia_log"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "activator_rail.json",
    "item": "activator_rail",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "iron_ingot"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "iron_ingot"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "iron_ingot"
        },
        "2_key": {
          "item": "redstone_torch"
        },
        "3_key": {
          "item": "iron_ingot"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "iron_ingot"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "iron_ingot"
        }
      }
    }
  },
  {
    "file": "amethyst_block.json",
    "item": "amethyst_block",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "amethyst_shard"
        },
        "2_key": {
          "item": "amethyst_shard"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "amethyst_shard"
        },
        "2_key": {
          "item": "amethyst_shard"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "andesite.json",
    "item": "andesite",
    "count": 2,
    "patterns": {},
    "ingredients": [
      {
        "item": "diorite"
      },
      {
        "item": "cobblestone"
      }
    ]
  },
  {
    "file": "andesite_slab.json",
    "item": "andesite_slab",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "andesite"
        },
        "2_key": {
          "item": "andesite"
        },
        "3_key": {
          "item": "andesite"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "andesite_stairs.json",
    "item": "andesite_stairs",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "andesite"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "andesite"
        },
        "2_key": {
          "item": "andesite"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "andesite"
        },
        "2_key": {
          "item": "andesite"
        },
        "3_key": {
          "item": "andesite"
        }
      }
    }
  },
  {
    "file": "andesite_wall.json",
    "item": "andesite_wall",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "andesite"
        },
        "2_key": {
          "item": "andesite"
        },
        "3_key": {
          "item": "andesite"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "andesite"
        },
        "2_key": {
          "item": "andesite"
        },
        "3_key": {
          "item": "andesite"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "anvil.json",
    "item": "anvil",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "iron_block"
        },
        "2_key": {
          "item": "iron_block"
        },
        "3_key": {
          "item": "iron_block"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "iron_ingot"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "iron_ingot"
        },
        "2_key": {
          "item": "iron_ingot"
        },
        "3_key": {
          "item": "iron_ingot"
        }
      }
    }
  },
  {
    "file": "armor_stand.json",
    "item": "armor_stand",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "stick"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "item": "smooth_stone_slab"
        },
        "3_key": {
          "item": "stick"
        }
      }
    }
  },
  {
    "file": "arrow.json",
    "item": "arrow",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "flint"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "feather"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "bamboo_block.json",
    "item": "bamboo_block",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "bamboo"
      },
      {
        "item": "bamboo"
      },
      {
        "item": "bamboo"
      },
      {
        "item": "bamboo"
      },
      {
        "item": "bamboo"
      },
      {
        "item": "bamboo"
      },
      {
        "item": "bamboo"
      },
      {
        "item": "bamboo"
      },
      {
        "item": "bamboo"
      }
    ]
  },
  {
    "file": "bamboo_button.json",
    "item": "bamboo_button",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "bamboo_planks"
      }
    ]
  },
  {
    "file": "bamboo_chest_raft.json",
    "item": "bamboo_chest_raft",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "chest"
      },
      {
        "item": "bamboo_raft"
      }
    ]
  },
  {
    "file": "bamboo_door.json",
    "item": "bamboo_door",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "bamboo_planks"
        },
        "2_key": {
          "item": "bamboo_planks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "bamboo_planks"
        },
        "2_key": {
          "item": "bamboo_planks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "bamboo_planks"
        },
        "2_key": {
          "item": "bamboo_planks"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "bamboo_fence.json",
    "item": "bamboo_fence",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "bamboo_planks"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "bamboo_planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "bamboo_planks"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "bamboo_planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "bamboo_fence_gate.json",
    "item": "bamboo_fence_gate",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "item": "bamboo_planks"
        },
        "3_key": {
          "item": "stick"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "item": "bamboo_planks"
        },
        "3_key": {
          "item": "stick"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "bamboo_hanging_sign.json",
    "item": "bamboo_hanging_sign",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "chain"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "chain"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "stripped_bamboo_block"
        },
        "2_key": {
          "item": "stripped_bamboo_block"
        },
        "3_key": {
          "item": "stripped_bamboo_block"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "stripped_bamboo_block"
        },
        "2_key": {
          "item": "stripped_bamboo_block"
        },
        "3_key": {
          "item": "stripped_bamboo_block"
        }
      }
    }
  },
  {
    "file": "bamboo_mosaic.json",
    "item": "bamboo_mosaic",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "bamboo_slab"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "bamboo_slab"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "bamboo_mosaic_slab.json",
    "item": "bamboo_mosaic_slab",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "bamboo_mosaic"
        },
        "2_key": {
          "item": "bamboo_mosaic"
        },
        "3_key": {
          "item": "bamboo_mosaic"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "bamboo_mosaic_stairs.json",
    "item": "bamboo_mosaic_stairs",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "bamboo_mosaic"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "bamboo_mosaic"
        },
        "2_key": {
          "item": "bamboo_mosaic"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "bamboo_mosaic"
        },
        "2_key": {
          "item": "bamboo_mosaic"
        },
        "3_key": {
          "item": "bamboo_mosaic"
        }
      }
    }
  },
  {
    "file": "bamboo_planks.json",
    "item": "bamboo_planks",
    "count": 2,
    "patterns": {},
    "ingredients": [
      {
        "tag": "bamboo_blocks"
      }
    ]
  },
  {
    "file": "bamboo_pressure_plate.json",
    "item": "bamboo_pressure_plate",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "bamboo_planks"
        },
        "2_key": {
          "item": "bamboo_planks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "bamboo_raft.json",
    "item": "bamboo_raft",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "bamboo_planks"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "bamboo_planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "bamboo_planks"
        },
        "2_key": {
          "item": "bamboo_planks"
        },
        "3_key": {
          "item": "bamboo_planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "bamboo_sign.json",
    "item": "bamboo_sign",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "bamboo_planks"
        },
        "2_key": {
          "item": "bamboo_planks"
        },
        "3_key": {
          "item": "bamboo_planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "bamboo_planks"
        },
        "2_key": {
          "item": "bamboo_planks"
        },
        "3_key": {
          "item": "bamboo_planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "bamboo_slab.json",
    "item": "bamboo_slab",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "bamboo_planks"
        },
        "2_key": {
          "item": "bamboo_planks"
        },
        "3_key": {
          "item": "bamboo_planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "bamboo_stairs.json",
    "item": "bamboo_stairs",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "bamboo_planks"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "bamboo_planks"
        },
        "2_key": {
          "item": "bamboo_planks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "bamboo_planks"
        },
        "2_key": {
          "item": "bamboo_planks"
        },
        "3_key": {
          "item": "bamboo_planks"
        }
      }
    }
  },
  {
    "file": "bamboo_trapdoor.json",
    "item": "bamboo_trapdoor",
    "count": 2,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "bamboo_planks"
        },
        "2_key": {
          "item": "bamboo_planks"
        },
        "3_key": {
          "item": "bamboo_planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "bamboo_planks"
        },
        "2_key": {
          "item": "bamboo_planks"
        },
        "3_key": {
          "item": "bamboo_planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "barrel.json",
    "item": "barrel",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "tag": "planks"
        },
        "2_key": {
          "tag": "wooden_slabs"
        },
        "3_key": {
          "tag": "planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "tag": "planks"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "tag": "planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "tag": "planks"
        },
        "2_key": {
          "tag": "wooden_slabs"
        },
        "3_key": {
          "tag": "planks"
        }
      }
    }
  },
  {
    "file": "beacon.json",
    "item": "beacon",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "glass"
        },
        "2_key": {
          "item": "glass"
        },
        "3_key": {
          "item": "glass"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "glass"
        },
        "2_key": {
          "item": "nether_star"
        },
        "3_key": {
          "item": "glass"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "obsidian"
        },
        "2_key": {
          "item": "obsidian"
        },
        "3_key": {
          "item": "obsidian"
        }
      }
    }
  },
  {
    "file": "beehive.json",
    "item": "beehive",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "tag": "planks"
        },
        "2_key": {
          "tag": "planks"
        },
        "3_key": {
          "tag": "planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "honeycomb"
        },
        "2_key": {
          "item": "honeycomb"
        },
        "3_key": {
          "item": "honeycomb"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "tag": "planks"
        },
        "2_key": {
          "tag": "planks"
        },
        "3_key": {
          "tag": "planks"
        }
      }
    }
  },
  {
    "file": "beetroot_soup.json",
    "item": "beetroot_soup",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "bowl"
      },
      {
        "item": "beetroot"
      },
      {
        "item": "beetroot"
      },
      {
        "item": "beetroot"
      },
      {
        "item": "beetroot"
      },
      {
        "item": "beetroot"
      },
      {
        "item": "beetroot"
      }
    ]
  },
  {
    "file": "birch_boat.json",
    "item": "birch_boat",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "birch_planks"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "birch_planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "birch_planks"
        },
        "2_key": {
          "item": "birch_planks"
        },
        "3_key": {
          "item": "birch_planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "birch_button.json",
    "item": "birch_button",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "birch_planks"
      }
    ]
  },
  {
    "file": "birch_chest_boat.json",
    "item": "birch_chest_boat",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "chest"
      },
      {
        "item": "birch_boat"
      }
    ]
  },
  {
    "file": "birch_door.json",
    "item": "birch_door",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "birch_planks"
        },
        "2_key": {
          "item": "birch_planks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "birch_planks"
        },
        "2_key": {
          "item": "birch_planks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "birch_planks"
        },
        "2_key": {
          "item": "birch_planks"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "birch_fence.json",
    "item": "birch_fence",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "birch_planks"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "birch_planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "birch_planks"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "birch_planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "birch_fence_gate.json",
    "item": "birch_fence_gate",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "item": "birch_planks"
        },
        "3_key": {
          "item": "stick"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "item": "birch_planks"
        },
        "3_key": {
          "item": "stick"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "birch_hanging_sign.json",
    "item": "birch_hanging_sign",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "chain"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "chain"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "stripped_birch_log"
        },
        "2_key": {
          "item": "stripped_birch_log"
        },
        "3_key": {
          "item": "stripped_birch_log"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "stripped_birch_log"
        },
        "2_key": {
          "item": "stripped_birch_log"
        },
        "3_key": {
          "item": "stripped_birch_log"
        }
      }
    }
  },
  {
    "file": "birch_planks.json",
    "item": "birch_planks",
    "count": 4,
    "patterns": {},
    "ingredients": [
      {
        "tag": "birch_logs"
      }
    ]
  },
  {
    "file": "birch_pressure_plate.json",
    "item": "birch_pressure_plate",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "birch_planks"
        },
        "2_key": {
          "item": "birch_planks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "birch_sign.json",
    "item": "birch_sign",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "birch_planks"
        },
        "2_key": {
          "item": "birch_planks"
        },
        "3_key": {
          "item": "birch_planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "birch_planks"
        },
        "2_key": {
          "item": "birch_planks"
        },
        "3_key": {
          "item": "birch_planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "birch_slab.json",
    "item": "birch_slab",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "birch_planks"
        },
        "2_key": {
          "item": "birch_planks"
        },
        "3_key": {
          "item": "birch_planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "birch_stairs.json",
    "item": "birch_stairs",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "birch_planks"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "birch_planks"
        },
        "2_key": {
          "item": "birch_planks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "birch_planks"
        },
        "2_key": {
          "item": "birch_planks"
        },
        "3_key": {
          "item": "birch_planks"
        }
      }
    }
  },
  {
    "file": "birch_trapdoor.json",
    "item": "birch_trapdoor",
    "count": 2,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "birch_planks"
        },
        "2_key": {
          "item": "birch_planks"
        },
        "3_key": {
          "item": "birch_planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "birch_planks"
        },
        "2_key": {
          "item": "birch_planks"
        },
        "3_key": {
          "item": "birch_planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "birch_wood.json",
    "item": "birch_wood",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "birch_log"
        },
        "2_key": {
          "item": "birch_log"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "birch_log"
        },
        "2_key": {
          "item": "birch_log"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "blackstone_slab.json",
    "item": "blackstone_slab",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "blackstone"
        },
        "2_key": {
          "item": "blackstone"
        },
        "3_key": {
          "item": "blackstone"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "blackstone_stairs.json",
    "item": "blackstone_stairs",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "blackstone"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "blackstone"
        },
        "2_key": {
          "item": "blackstone"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "blackstone"
        },
        "2_key": {
          "item": "blackstone"
        },
        "3_key": {
          "item": "blackstone"
        }
      }
    }
  },
  {
    "file": "blackstone_wall.json",
    "item": "blackstone_wall",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "blackstone"
        },
        "2_key": {
          "item": "blackstone"
        },
        "3_key": {
          "item": "blackstone"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "blackstone"
        },
        "2_key": {
          "item": "blackstone"
        },
        "3_key": {
          "item": "blackstone"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "black_banner.json",
    "item": "black_banner",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "black_wool"
        },
        "2_key": {
          "item": "black_wool"
        },
        "3_key": {
          "item": "black_wool"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "black_wool"
        },
        "2_key": {
          "item": "black_wool"
        },
        "3_key": {
          "item": "black_wool"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "black_bed.json",
    "item": "black_bed",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "black_wool"
        },
        "2_key": {
          "item": "black_wool"
        },
        "3_key": {
          "item": "black_wool"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "tag": "planks"
        },
        "2_key": {
          "tag": "planks"
        },
        "3_key": {
          "tag": "planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "black_candle.json",
    "item": "black_candle",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "candle"
      },
      {
        "item": "black_dye"
      }
    ]
  },
  {
    "file": "black_carpet.json",
    "item": "black_carpet",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "black_wool"
        },
        "2_key": {
          "item": "black_wool"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "black_concrete_powder.json",
    "item": "black_concrete_powder",
    "count": 8,
    "patterns": {},
    "ingredients": [
      {
        "item": "black_dye"
      },
      {
        "item": "sand"
      },
      {
        "item": "sand"
      },
      {
        "item": "sand"
      },
      {
        "item": "sand"
      },
      {
        "item": "gravel"
      },
      {
        "item": "gravel"
      },
      {
        "item": "gravel"
      },
      {
        "item": "gravel"
      }
    ]
  },
  {
    "file": "black_dye.json",
    "item": "black_dye",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "ink_sac"
      }
    ]
  },
  {
    "file": "black_dye_from_wither_rose.json",
    "item": "black_dye",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "wither_rose"
      }
    ]
  },
  {
    "file": "black_stained_glass.json",
    "item": "black_stained_glass",
    "count": 8,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "glass"
        },
        "2_key": {
          "item": "glass"
        },
        "3_key": {
          "item": "glass"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "glass"
        },
        "2_key": {
          "item": "black_dye"
        },
        "3_key": {
          "item": "glass"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "glass"
        },
        "2_key": {
          "item": "glass"
        },
        "3_key": {
          "item": "glass"
        }
      }
    }
  },
  {
    "file": "black_stained_glass_pane.json",
    "item": "black_stained_glass_pane",
    "count": 16,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "black_stained_glass"
        },
        "2_key": {
          "item": "black_stained_glass"
        },
        "3_key": {
          "item": "black_stained_glass"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "black_stained_glass"
        },
        "2_key": {
          "item": "black_stained_glass"
        },
        "3_key": {
          "item": "black_stained_glass"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "black_stained_glass_pane_from_glass_pane.json",
    "item": "black_stained_glass_pane",
    "count": 8,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "glass_pane"
        },
        "2_key": {
          "item": "glass_pane"
        },
        "3_key": {
          "item": "glass_pane"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "glass_pane"
        },
        "2_key": {
          "item": "black_dye"
        },
        "3_key": {
          "item": "glass_pane"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "glass_pane"
        },
        "2_key": {
          "item": "glass_pane"
        },
        "3_key": {
          "item": "glass_pane"
        }
      }
    }
  },
  {
    "file": "black_terracotta.json",
    "item": "black_terracotta",
    "count": 8,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "terracotta"
        },
        "2_key": {
          "item": "terracotta"
        },
        "3_key": {
          "item": "terracotta"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "terracotta"
        },
        "2_key": {
          "item": "black_dye"
        },
        "3_key": {
          "item": "terracotta"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "terracotta"
        },
        "2_key": {
          "item": "terracotta"
        },
        "3_key": {
          "item": "terracotta"
        }
      }
    }
  },
  {
    "file": "blast_furnace.json",
    "item": "blast_furnace",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "iron_ingot"
        },
        "2_key": {
          "item": "iron_ingot"
        },
        "3_key": {
          "item": "iron_ingot"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "iron_ingot"
        },
        "2_key": {
          "item": "furnace"
        },
        "3_key": {
          "item": "iron_ingot"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "smooth_stone"
        },
        "2_key": {
          "item": "smooth_stone"
        },
        "3_key": {
          "item": "smooth_stone"
        }
      }
    }
  },
  {
    "file": "blaze_powder.json",
    "item": "blaze_powder",
    "count": 2,
    "patterns": {},
    "ingredients": [
      {
        "item": "blaze_rod"
      }
    ]
  },
  {
    "file": "blue_banner.json",
    "item": "blue_banner",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "blue_wool"
        },
        "2_key": {
          "item": "blue_wool"
        },
        "3_key": {
          "item": "blue_wool"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "blue_wool"
        },
        "2_key": {
          "item": "blue_wool"
        },
        "3_key": {
          "item": "blue_wool"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "blue_bed.json",
    "item": "blue_bed",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "blue_wool"
        },
        "2_key": {
          "item": "blue_wool"
        },
        "3_key": {
          "item": "blue_wool"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "tag": "planks"
        },
        "2_key": {
          "tag": "planks"
        },
        "3_key": {
          "tag": "planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "blue_candle.json",
    "item": "blue_candle",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "candle"
      },
      {
        "item": "blue_dye"
      }
    ]
  },
  {
    "file": "blue_carpet.json",
    "item": "blue_carpet",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "blue_wool"
        },
        "2_key": {
          "item": "blue_wool"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "blue_concrete_powder.json",
    "item": "blue_concrete_powder",
    "count": 8,
    "patterns": {},
    "ingredients": [
      {
        "item": "blue_dye"
      },
      {
        "item": "sand"
      },
      {
        "item": "sand"
      },
      {
        "item": "sand"
      },
      {
        "item": "sand"
      },
      {
        "item": "gravel"
      },
      {
        "item": "gravel"
      },
      {
        "item": "gravel"
      },
      {
        "item": "gravel"
      }
    ]
  },
  {
    "file": "blue_dye.json",
    "item": "blue_dye",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "lapis_lazuli"
      }
    ]
  },
  {
    "file": "blue_dye_from_cornflower.json",
    "item": "blue_dye",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "cornflower"
      }
    ]
  },
  {
    "file": "blue_ice.json",
    "item": "blue_ice",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "packed_ice"
      },
      {
        "item": "packed_ice"
      },
      {
        "item": "packed_ice"
      },
      {
        "item": "packed_ice"
      },
      {
        "item": "packed_ice"
      },
      {
        "item": "packed_ice"
      },
      {
        "item": "packed_ice"
      },
      {
        "item": "packed_ice"
      },
      {
        "item": "packed_ice"
      }
    ]
  },
  {
    "file": "blue_stained_glass.json",
    "item": "blue_stained_glass",
    "count": 8,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "glass"
        },
        "2_key": {
          "item": "glass"
        },
        "3_key": {
          "item": "glass"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "glass"
        },
        "2_key": {
          "item": "blue_dye"
        },
        "3_key": {
          "item": "glass"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "glass"
        },
        "2_key": {
          "item": "glass"
        },
        "3_key": {
          "item": "glass"
        }
      }
    }
  },
  {
    "file": "blue_stained_glass_pane.json",
    "item": "blue_stained_glass_pane",
    "count": 16,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "blue_stained_glass"
        },
        "2_key": {
          "item": "blue_stained_glass"
        },
        "3_key": {
          "item": "blue_stained_glass"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "blue_stained_glass"
        },
        "2_key": {
          "item": "blue_stained_glass"
        },
        "3_key": {
          "item": "blue_stained_glass"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "blue_stained_glass_pane_from_glass_pane.json",
    "item": "blue_stained_glass_pane",
    "count": 8,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "glass_pane"
        },
        "2_key": {
          "item": "glass_pane"
        },
        "3_key": {
          "item": "glass_pane"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "glass_pane"
        },
        "2_key": {
          "item": "blue_dye"
        },
        "3_key": {
          "item": "glass_pane"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "glass_pane"
        },
        "2_key": {
          "item": "glass_pane"
        },
        "3_key": {
          "item": "glass_pane"
        }
      }
    }
  },
  {
    "file": "blue_terracotta.json",
    "item": "blue_terracotta",
    "count": 8,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "terracotta"
        },
        "2_key": {
          "item": "terracotta"
        },
        "3_key": {
          "item": "terracotta"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "terracotta"
        },
        "2_key": {
          "item": "blue_dye"
        },
        "3_key": {
          "item": "terracotta"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "terracotta"
        },
        "2_key": {
          "item": "terracotta"
        },
        "3_key": {
          "item": "terracotta"
        }
      }
    }
  },
  {
    "file": "bone_block.json",
    "item": "bone_block",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "bone_meal"
        },
        "2_key": {
          "item": "bone_meal"
        },
        "3_key": {
          "item": "bone_meal"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "bone_meal"
        },
        "2_key": {
          "item": "bone_meal"
        },
        "3_key": {
          "item": "bone_meal"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "bone_meal"
        },
        "2_key": {
          "item": "bone_meal"
        },
        "3_key": {
          "item": "bone_meal"
        }
      }
    }
  },
  {
    "file": "bone_meal.json",
    "item": "bone_meal",
    "count": 3,
    "patterns": {},
    "ingredients": [
      {
        "item": "bone"
      }
    ]
  },
  {
    "file": "bone_meal_from_bone_block.json",
    "item": "bone_meal",
    "count": 9,
    "patterns": {},
    "ingredients": [
      {
        "item": "bone_block"
      }
    ]
  },
  {
    "file": "book.json",
    "item": "book",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "paper"
      },
      {
        "item": "paper"
      },
      {
        "item": "paper"
      },
      {
        "item": "leather"
      }
    ]
  },
  {
    "file": "bookshelf.json",
    "item": "bookshelf",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "tag": "planks"
        },
        "2_key": {
          "tag": "planks"
        },
        "3_key": {
          "tag": "planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "book"
        },
        "2_key": {
          "item": "book"
        },
        "3_key": {
          "item": "book"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "tag": "planks"
        },
        "2_key": {
          "tag": "planks"
        },
        "3_key": {
          "tag": "planks"
        }
      }
    }
  },
  {
    "file": "bow.json",
    "item": "bow",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "string"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "string"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "string"
        }
      }
    }
  },
  {
    "file": "bowl.json",
    "item": "bowl",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "tag": "planks"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "tag": "planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "tag": "planks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "bread.json",
    "item": "bread",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "wheat"
        },
        "2_key": {
          "item": "wheat"
        },
        "3_key": {
          "item": "wheat"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "brewing_stand.json",
    "item": "brewing_stand",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "blaze_rod"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "tag": "stone_crafting_materials"
        },
        "2_key": {
          "tag": "stone_crafting_materials"
        },
        "3_key": {
          "tag": "stone_crafting_materials"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "bricks.json",
    "item": "bricks",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "brick"
        },
        "2_key": {
          "item": "brick"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "brick"
        },
        "2_key": {
          "item": "brick"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "brick_slab.json",
    "item": "brick_slab",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "bricks"
        },
        "2_key": {
          "item": "bricks"
        },
        "3_key": {
          "item": "bricks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "brick_stairs.json",
    "item": "brick_stairs",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "bricks"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "bricks"
        },
        "2_key": {
          "item": "bricks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "bricks"
        },
        "2_key": {
          "item": "bricks"
        },
        "3_key": {
          "item": "bricks"
        }
      }
    }
  },
  {
    "file": "brick_wall.json",
    "item": "brick_wall",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "bricks"
        },
        "2_key": {
          "item": "bricks"
        },
        "3_key": {
          "item": "bricks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "bricks"
        },
        "2_key": {
          "item": "bricks"
        },
        "3_key": {
          "item": "bricks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "brown_banner.json",
    "item": "brown_banner",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "brown_wool"
        },
        "2_key": {
          "item": "brown_wool"
        },
        "3_key": {
          "item": "brown_wool"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "brown_wool"
        },
        "2_key": {
          "item": "brown_wool"
        },
        "3_key": {
          "item": "brown_wool"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "brown_bed.json",
    "item": "brown_bed",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "brown_wool"
        },
        "2_key": {
          "item": "brown_wool"
        },
        "3_key": {
          "item": "brown_wool"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "tag": "planks"
        },
        "2_key": {
          "tag": "planks"
        },
        "3_key": {
          "tag": "planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "brown_candle.json",
    "item": "brown_candle",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "candle"
      },
      {
        "item": "brown_dye"
      }
    ]
  },
  {
    "file": "brown_carpet.json",
    "item": "brown_carpet",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "brown_wool"
        },
        "2_key": {
          "item": "brown_wool"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "brown_concrete_powder.json",
    "item": "brown_concrete_powder",
    "count": 8,
    "patterns": {},
    "ingredients": [
      {
        "item": "brown_dye"
      },
      {
        "item": "sand"
      },
      {
        "item": "sand"
      },
      {
        "item": "sand"
      },
      {
        "item": "sand"
      },
      {
        "item": "gravel"
      },
      {
        "item": "gravel"
      },
      {
        "item": "gravel"
      },
      {
        "item": "gravel"
      }
    ]
  },
  {
    "file": "brown_dye.json",
    "item": "brown_dye",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "cocoa_beans"
      }
    ]
  },
  {
    "file": "brown_stained_glass.json",
    "item": "brown_stained_glass",
    "count": 8,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "glass"
        },
        "2_key": {
          "item": "glass"
        },
        "3_key": {
          "item": "glass"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "glass"
        },
        "2_key": {
          "item": "brown_dye"
        },
        "3_key": {
          "item": "glass"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "glass"
        },
        "2_key": {
          "item": "glass"
        },
        "3_key": {
          "item": "glass"
        }
      }
    }
  },
  {
    "file": "brown_stained_glass_pane.json",
    "item": "brown_stained_glass_pane",
    "count": 16,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "brown_stained_glass"
        },
        "2_key": {
          "item": "brown_stained_glass"
        },
        "3_key": {
          "item": "brown_stained_glass"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "brown_stained_glass"
        },
        "2_key": {
          "item": "brown_stained_glass"
        },
        "3_key": {
          "item": "brown_stained_glass"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "brown_stained_glass_pane_from_glass_pane.json",
    "item": "brown_stained_glass_pane",
    "count": 8,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "glass_pane"
        },
        "2_key": {
          "item": "glass_pane"
        },
        "3_key": {
          "item": "glass_pane"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "glass_pane"
        },
        "2_key": {
          "item": "brown_dye"
        },
        "3_key": {
          "item": "glass_pane"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "glass_pane"
        },
        "2_key": {
          "item": "glass_pane"
        },
        "3_key": {
          "item": "glass_pane"
        }
      }
    }
  },
  {
    "file": "brown_terracotta.json",
    "item": "brown_terracotta",
    "count": 8,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "terracotta"
        },
        "2_key": {
          "item": "terracotta"
        },
        "3_key": {
          "item": "terracotta"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "terracotta"
        },
        "2_key": {
          "item": "brown_dye"
        },
        "3_key": {
          "item": "terracotta"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "terracotta"
        },
        "2_key": {
          "item": "terracotta"
        },
        "3_key": {
          "item": "terracotta"
        }
      }
    }
  },
  {
    "file": "brush.json",
    "item": "brush",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "feather"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "copper_ingot"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "bucket.json",
    "item": "bucket",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "iron_ingot"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "iron_ingot"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "iron_ingot"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "cake.json",
    "item": "cake",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "milk_bucket"
        },
        "2_key": {
          "item": "milk_bucket"
        },
        "3_key": {
          "item": "milk_bucket"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "sugar"
        },
        "2_key": {
          "item": "egg"
        },
        "3_key": {
          "item": "sugar"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "wheat"
        },
        "2_key": {
          "item": "wheat"
        },
        "3_key": {
          "item": "wheat"
        }
      }
    }
  },
  {
    "file": "calibrated_sculk_sensor.json",
    "item": "calibrated_sculk_sensor",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "amethyst_shard"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "amethyst_shard"
        },
        "2_key": {
          "item": "sculk_sensor"
        },
        "3_key": {
          "item": "amethyst_shard"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "campfire.json",
    "item": "campfire",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "tag": "coals"
        },
        "3_key": {
          "item": "stick"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "tag": "logs"
        },
        "2_key": {
          "tag": "logs"
        },
        "3_key": {
          "tag": "logs"
        }
      }
    }
  },
  {
    "file": "candle.json",
    "item": "candle",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "string"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "honeycomb"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "carrot_on_a_stick.json",
    "item": "carrot_on_a_stick",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "fishing_rod"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "carrot"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "cartography_table.json",
    "item": "cartography_table",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "paper"
        },
        "2_key": {
          "item": "paper"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "tag": "planks"
        },
        "2_key": {
          "tag": "planks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "tag": "planks"
        },
        "2_key": {
          "tag": "planks"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "cauldron.json",
    "item": "cauldron",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "iron_ingot"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "iron_ingot"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "iron_ingot"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "iron_ingot"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "iron_ingot"
        },
        "2_key": {
          "item": "iron_ingot"
        },
        "3_key": {
          "item": "iron_ingot"
        }
      }
    }
  },
  {
    "file": "chain.json",
    "item": "chain",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "iron_nugget"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "iron_ingot"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "iron_nugget"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "cherry_boat.json",
    "item": "cherry_boat",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "cherry_planks"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "cherry_planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "cherry_planks"
        },
        "2_key": {
          "item": "cherry_planks"
        },
        "3_key": {
          "item": "cherry_planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "cherry_button.json",
    "item": "cherry_button",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "cherry_planks"
      }
    ]
  },
  {
    "file": "cherry_chest_boat.json",
    "item": "cherry_chest_boat",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "chest"
      },
      {
        "item": "cherry_boat"
      }
    ]
  },
  {
    "file": "cherry_door.json",
    "item": "cherry_door",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "cherry_planks"
        },
        "2_key": {
          "item": "cherry_planks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "cherry_planks"
        },
        "2_key": {
          "item": "cherry_planks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "cherry_planks"
        },
        "2_key": {
          "item": "cherry_planks"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "cherry_fence.json",
    "item": "cherry_fence",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "cherry_planks"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "cherry_planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "cherry_planks"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "cherry_planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "cherry_fence_gate.json",
    "item": "cherry_fence_gate",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "item": "cherry_planks"
        },
        "3_key": {
          "item": "stick"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "item": "cherry_planks"
        },
        "3_key": {
          "item": "stick"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "cherry_hanging_sign.json",
    "item": "cherry_hanging_sign",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "chain"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "chain"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "stripped_cherry_log"
        },
        "2_key": {
          "item": "stripped_cherry_log"
        },
        "3_key": {
          "item": "stripped_cherry_log"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "stripped_cherry_log"
        },
        "2_key": {
          "item": "stripped_cherry_log"
        },
        "3_key": {
          "item": "stripped_cherry_log"
        }
      }
    }
  },
  {
    "file": "cherry_planks.json",
    "item": "cherry_planks",
    "count": 4,
    "patterns": {},
    "ingredients": [
      {
        "tag": "cherry_logs"
      }
    ]
  },
  {
    "file": "cherry_pressure_plate.json",
    "item": "cherry_pressure_plate",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "cherry_planks"
        },
        "2_key": {
          "item": "cherry_planks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "cherry_sign.json",
    "item": "cherry_sign",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "cherry_planks"
        },
        "2_key": {
          "item": "cherry_planks"
        },
        "3_key": {
          "item": "cherry_planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "cherry_planks"
        },
        "2_key": {
          "item": "cherry_planks"
        },
        "3_key": {
          "item": "cherry_planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "cherry_slab.json",
    "item": "cherry_slab",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "cherry_planks"
        },
        "2_key": {
          "item": "cherry_planks"
        },
        "3_key": {
          "item": "cherry_planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "cherry_stairs.json",
    "item": "cherry_stairs",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "cherry_planks"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "cherry_planks"
        },
        "2_key": {
          "item": "cherry_planks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "cherry_planks"
        },
        "2_key": {
          "item": "cherry_planks"
        },
        "3_key": {
          "item": "cherry_planks"
        }
      }
    }
  },
  {
    "file": "cherry_trapdoor.json",
    "item": "cherry_trapdoor",
    "count": 2,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "cherry_planks"
        },
        "2_key": {
          "item": "cherry_planks"
        },
        "3_key": {
          "item": "cherry_planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "cherry_planks"
        },
        "2_key": {
          "item": "cherry_planks"
        },
        "3_key": {
          "item": "cherry_planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "cherry_wood.json",
    "item": "cherry_wood",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "cherry_log"
        },
        "2_key": {
          "item": "cherry_log"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "cherry_log"
        },
        "2_key": {
          "item": "cherry_log"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "chest.json",
    "item": "chest",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "tag": "planks"
        },
        "2_key": {
          "tag": "planks"
        },
        "3_key": {
          "tag": "planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "tag": "planks"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "tag": "planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "tag": "planks"
        },
        "2_key": {
          "tag": "planks"
        },
        "3_key": {
          "tag": "planks"
        }
      }
    }
  },
  {
    "file": "chest_minecart.json",
    "item": "chest_minecart",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "chest"
      },
      {
        "item": "minecart"
      }
    ]
  },
  {
    "file": "chiseled_bookshelf.json",
    "item": "chiseled_bookshelf",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "tag": "planks"
        },
        "2_key": {
          "tag": "planks"
        },
        "3_key": {
          "tag": "planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "tag": "wooden_slabs"
        },
        "2_key": {
          "tag": "wooden_slabs"
        },
        "3_key": {
          "tag": "wooden_slabs"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "tag": "planks"
        },
        "2_key": {
          "tag": "planks"
        },
        "3_key": {
          "tag": "planks"
        }
      }
    }
  },
  {
    "file": "chiseled_deepslate.json",
    "item": "chiseled_deepslate",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "cobbled_deepslate_slab"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "cobbled_deepslate_slab"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "chiseled_nether_bricks.json",
    "item": "chiseled_nether_bricks",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "nether_brick_slab"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "nether_brick_slab"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "chiseled_polished_blackstone.json",
    "item": "chiseled_polished_blackstone",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "polished_blackstone_slab"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "polished_blackstone_slab"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "chiseled_quartz_block.json",
    "item": "chiseled_quartz_block",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "quartz_slab"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "quartz_slab"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "chiseled_red_sandstone.json",
    "item": "chiseled_red_sandstone",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "red_sandstone_slab"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "red_sandstone_slab"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "chiseled_sandstone.json",
    "item": "chiseled_sandstone",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "sandstone_slab"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "sandstone_slab"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "chiseled_stone_bricks.json",
    "item": "chiseled_stone_bricks",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "stone_brick_slab"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "stone_brick_slab"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "clay.json",
    "item": "clay",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "clay_ball"
        },
        "2_key": {
          "item": "clay_ball"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "clay_ball"
        },
        "2_key": {
          "item": "clay_ball"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "clock.json",
    "item": "clock",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "gold_ingot"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "gold_ingot"
        },
        "2_key": {
          "item": "redstone"
        },
        "3_key": {
          "item": "gold_ingot"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "gold_ingot"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "coal.json",
    "item": "coal",
    "count": 9,
    "patterns": {},
    "ingredients": [
      {
        "item": "coal_block"
      }
    ]
  },
  {
    "file": "coal_block.json",
    "item": "coal_block",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "coal"
        },
        "2_key": {
          "item": "coal"
        },
        "3_key": {
          "item": "coal"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "coal"
        },
        "2_key": {
          "item": "coal"
        },
        "3_key": {
          "item": "coal"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "coal"
        },
        "2_key": {
          "item": "coal"
        },
        "3_key": {
          "item": "coal"
        }
      }
    }
  },
  {
    "file": "coarse_dirt.json",
    "item": "coarse_dirt",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "dirt"
        },
        "2_key": {
          "item": "gravel"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "gravel"
        },
        "2_key": {
          "item": "dirt"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "coast_armor_trim_smithing_template.json",
    "item": "coast_armor_trim_smithing_template",
    "count": 2,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "coast_armor_trim_smithing_template"
        },
        "3_key": {
          "item": "diamond"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "cobblestone"
        },
        "3_key": {
          "item": "diamond"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "diamond"
        },
        "3_key": {
          "item": "diamond"
        }
      }
    }
  },
  {
    "file": "cobbled_deepslate_slab.json",
    "item": "cobbled_deepslate_slab",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "cobbled_deepslate"
        },
        "2_key": {
          "item": "cobbled_deepslate"
        },
        "3_key": {
          "item": "cobbled_deepslate"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "cobbled_deepslate_stairs.json",
    "item": "cobbled_deepslate_stairs",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "cobbled_deepslate"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "cobbled_deepslate"
        },
        "2_key": {
          "item": "cobbled_deepslate"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "cobbled_deepslate"
        },
        "2_key": {
          "item": "cobbled_deepslate"
        },
        "3_key": {
          "item": "cobbled_deepslate"
        }
      }
    }
  },
  {
    "file": "cobbled_deepslate_wall.json",
    "item": "cobbled_deepslate_wall",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "cobbled_deepslate"
        },
        "2_key": {
          "item": "cobbled_deepslate"
        },
        "3_key": {
          "item": "cobbled_deepslate"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "cobbled_deepslate"
        },
        "2_key": {
          "item": "cobbled_deepslate"
        },
        "3_key": {
          "item": "cobbled_deepslate"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "cobblestone_slab.json",
    "item": "cobblestone_slab",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "cobblestone"
        },
        "2_key": {
          "item": "cobblestone"
        },
        "3_key": {
          "item": "cobblestone"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "cobblestone_stairs.json",
    "item": "cobblestone_stairs",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "cobblestone"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "cobblestone"
        },
        "2_key": {
          "item": "cobblestone"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "cobblestone"
        },
        "2_key": {
          "item": "cobblestone"
        },
        "3_key": {
          "item": "cobblestone"
        }
      }
    }
  },
  {
    "file": "cobblestone_wall.json",
    "item": "cobblestone_wall",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "cobblestone"
        },
        "2_key": {
          "item": "cobblestone"
        },
        "3_key": {
          "item": "cobblestone"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "cobblestone"
        },
        "2_key": {
          "item": "cobblestone"
        },
        "3_key": {
          "item": "cobblestone"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "comparator.json",
    "item": "comparator",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "redstone_torch"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "redstone_torch"
        },
        "2_key": {
          "item": "quartz"
        },
        "3_key": {
          "item": "redstone_torch"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "stone"
        },
        "2_key": {
          "item": "stone"
        },
        "3_key": {
          "item": "stone"
        }
      }
    }
  },
  {
    "file": "compass.json",
    "item": "compass",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "iron_ingot"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "iron_ingot"
        },
        "2_key": {
          "item": "redstone"
        },
        "3_key": {
          "item": "iron_ingot"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "iron_ingot"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "composter.json",
    "item": "composter",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "tag": "wooden_slabs"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "tag": "wooden_slabs"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "tag": "wooden_slabs"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "tag": "wooden_slabs"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "tag": "wooden_slabs"
        },
        "2_key": {
          "tag": "wooden_slabs"
        },
        "3_key": {
          "tag": "wooden_slabs"
        }
      }
    }
  },
  {
    "file": "conduit.json",
    "item": "conduit",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "nautilus_shell"
        },
        "2_key": {
          "item": "nautilus_shell"
        },
        "3_key": {
          "item": "nautilus_shell"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "nautilus_shell"
        },
        "2_key": {
          "item": "heart_of_the_sea"
        },
        "3_key": {
          "item": "nautilus_shell"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "nautilus_shell"
        },
        "2_key": {
          "item": "nautilus_shell"
        },
        "3_key": {
          "item": "nautilus_shell"
        }
      }
    }
  },
  {
    "file": "cookie.json",
    "item": "cookie",
    "count": 8,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "wheat"
        },
        "2_key": {
          "item": "cocoa_beans"
        },
        "3_key": {
          "item": "wheat"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "copper_block.json",
    "item": "copper_block",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "copper_ingot"
        },
        "2_key": {
          "item": "copper_ingot"
        },
        "3_key": {
          "item": "copper_ingot"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "copper_ingot"
        },
        "2_key": {
          "item": "copper_ingot"
        },
        "3_key": {
          "item": "copper_ingot"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "copper_ingot"
        },
        "2_key": {
          "item": "copper_ingot"
        },
        "3_key": {
          "item": "copper_ingot"
        }
      }
    }
  },
  {
    "file": "copper_ingot.json",
    "item": "copper_ingot",
    "count": 9,
    "patterns": {},
    "ingredients": [
      {
        "item": "copper_block"
      }
    ]
  },
  {
    "file": "copper_ingot_from_waxed_copper_block.json",
    "item": "copper_ingot",
    "count": 9,
    "patterns": {},
    "ingredients": [
      {
        "item": "waxed_copper_block"
      }
    ]
  },
  {
    "file": "crafting_table.json",
    "item": "crafting_table",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "tag": "planks"
        },
        "2_key": {
          "tag": "planks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "tag": "planks"
        },
        "2_key": {
          "tag": "planks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "creeper_banner_pattern.json",
    "item": "creeper_banner_pattern",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "paper"
      },
      {
        "item": "creeper_head"
      }
    ]
  },
  {
    "file": "crimson_button.json",
    "item": "crimson_button",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "crimson_planks"
      }
    ]
  },
  {
    "file": "crimson_door.json",
    "item": "crimson_door",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "crimson_planks"
        },
        "2_key": {
          "item": "crimson_planks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "crimson_planks"
        },
        "2_key": {
          "item": "crimson_planks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "crimson_planks"
        },
        "2_key": {
          "item": "crimson_planks"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "crimson_fence.json",
    "item": "crimson_fence",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "crimson_planks"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "crimson_planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "crimson_planks"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "crimson_planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "crimson_fence_gate.json",
    "item": "crimson_fence_gate",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "item": "crimson_planks"
        },
        "3_key": {
          "item": "stick"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "item": "crimson_planks"
        },
        "3_key": {
          "item": "stick"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "crimson_hanging_sign.json",
    "item": "crimson_hanging_sign",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "chain"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "chain"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "stripped_crimson_stem"
        },
        "2_key": {
          "item": "stripped_crimson_stem"
        },
        "3_key": {
          "item": "stripped_crimson_stem"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "stripped_crimson_stem"
        },
        "2_key": {
          "item": "stripped_crimson_stem"
        },
        "3_key": {
          "item": "stripped_crimson_stem"
        }
      }
    }
  },
  {
    "file": "crimson_hyphae.json",
    "item": "crimson_hyphae",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "crimson_stem"
        },
        "2_key": {
          "item": "crimson_stem"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "crimson_stem"
        },
        "2_key": {
          "item": "crimson_stem"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "crimson_planks.json",
    "item": "crimson_planks",
    "count": 4,
    "patterns": {},
    "ingredients": [
      {
        "tag": "crimson_stems"
      }
    ]
  },
  {
    "file": "crimson_pressure_plate.json",
    "item": "crimson_pressure_plate",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "crimson_planks"
        },
        "2_key": {
          "item": "crimson_planks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "crimson_sign.json",
    "item": "crimson_sign",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "crimson_planks"
        },
        "2_key": {
          "item": "crimson_planks"
        },
        "3_key": {
          "item": "crimson_planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "crimson_planks"
        },
        "2_key": {
          "item": "crimson_planks"
        },
        "3_key": {
          "item": "crimson_planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "crimson_slab.json",
    "item": "crimson_slab",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "crimson_planks"
        },
        "2_key": {
          "item": "crimson_planks"
        },
        "3_key": {
          "item": "crimson_planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "crimson_stairs.json",
    "item": "crimson_stairs",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "crimson_planks"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "crimson_planks"
        },
        "2_key": {
          "item": "crimson_planks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "crimson_planks"
        },
        "2_key": {
          "item": "crimson_planks"
        },
        "3_key": {
          "item": "crimson_planks"
        }
      }
    }
  },
  {
    "file": "crimson_trapdoor.json",
    "item": "crimson_trapdoor",
    "count": 2,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "crimson_planks"
        },
        "2_key": {
          "item": "crimson_planks"
        },
        "3_key": {
          "item": "crimson_planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "crimson_planks"
        },
        "2_key": {
          "item": "crimson_planks"
        },
        "3_key": {
          "item": "crimson_planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "crossbow.json",
    "item": "crossbow",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "item": "iron_ingot"
        },
        "3_key": {
          "item": "stick"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "string"
        },
        "2_key": {
          "item": "tripwire_hook"
        },
        "3_key": {
          "item": "string"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "cut_copper.json",
    "item": "cut_copper",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "copper_block"
        },
        "2_key": {
          "item": "copper_block"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "copper_block"
        },
        "2_key": {
          "item": "copper_block"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "cut_copper_slab.json",
    "item": "cut_copper_slab",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "cut_copper"
        },
        "2_key": {
          "item": "cut_copper"
        },
        "3_key": {
          "item": "cut_copper"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "cut_copper_stairs.json",
    "item": "cut_copper_stairs",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "cut_copper"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "cut_copper"
        },
        "2_key": {
          "item": "cut_copper"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "cut_copper"
        },
        "2_key": {
          "item": "cut_copper"
        },
        "3_key": {
          "item": "cut_copper"
        }
      }
    }
  },
  {
    "file": "cut_red_sandstone.json",
    "item": "cut_red_sandstone",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "red_sandstone"
        },
        "2_key": {
          "item": "red_sandstone"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "red_sandstone"
        },
        "2_key": {
          "item": "red_sandstone"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "cut_red_sandstone_slab.json",
    "item": "cut_red_sandstone_slab",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "cut_red_sandstone"
        },
        "2_key": {
          "item": "cut_red_sandstone"
        },
        "3_key": {
          "item": "cut_red_sandstone"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "cut_sandstone.json",
    "item": "cut_sandstone",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "sandstone"
        },
        "2_key": {
          "item": "sandstone"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "sandstone"
        },
        "2_key": {
          "item": "sandstone"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "cut_sandstone_slab.json",
    "item": "cut_sandstone_slab",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "cut_sandstone"
        },
        "2_key": {
          "item": "cut_sandstone"
        },
        "3_key": {
          "item": "cut_sandstone"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "cyan_banner.json",
    "item": "cyan_banner",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "cyan_wool"
        },
        "2_key": {
          "item": "cyan_wool"
        },
        "3_key": {
          "item": "cyan_wool"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "cyan_wool"
        },
        "2_key": {
          "item": "cyan_wool"
        },
        "3_key": {
          "item": "cyan_wool"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "cyan_bed.json",
    "item": "cyan_bed",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "cyan_wool"
        },
        "2_key": {
          "item": "cyan_wool"
        },
        "3_key": {
          "item": "cyan_wool"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "tag": "planks"
        },
        "2_key": {
          "tag": "planks"
        },
        "3_key": {
          "tag": "planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "cyan_candle.json",
    "item": "cyan_candle",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "candle"
      },
      {
        "item": "cyan_dye"
      }
    ]
  },
  {
    "file": "cyan_carpet.json",
    "item": "cyan_carpet",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "cyan_wool"
        },
        "2_key": {
          "item": "cyan_wool"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "cyan_concrete_powder.json",
    "item": "cyan_concrete_powder",
    "count": 8,
    "patterns": {},
    "ingredients": [
      {
        "item": "cyan_dye"
      },
      {
        "item": "sand"
      },
      {
        "item": "sand"
      },
      {
        "item": "sand"
      },
      {
        "item": "sand"
      },
      {
        "item": "gravel"
      },
      {
        "item": "gravel"
      },
      {
        "item": "gravel"
      },
      {
        "item": "gravel"
      }
    ]
  },
  {
    "file": "cyan_dye.json",
    "item": "cyan_dye",
    "count": 2,
    "patterns": {},
    "ingredients": [
      {
        "item": "blue_dye"
      },
      {
        "item": "green_dye"
      }
    ]
  },
  {
    "file": "cyan_dye_from_pitcher_plant.json",
    "item": "cyan_dye",
    "count": 2,
    "patterns": {},
    "ingredients": [
      {
        "item": "pitcher_plant"
      }
    ]
  },
  {
    "file": "cyan_stained_glass.json",
    "item": "cyan_stained_glass",
    "count": 8,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "glass"
        },
        "2_key": {
          "item": "glass"
        },
        "3_key": {
          "item": "glass"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "glass"
        },
        "2_key": {
          "item": "cyan_dye"
        },
        "3_key": {
          "item": "glass"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "glass"
        },
        "2_key": {
          "item": "glass"
        },
        "3_key": {
          "item": "glass"
        }
      }
    }
  },
  {
    "file": "cyan_stained_glass_pane.json",
    "item": "cyan_stained_glass_pane",
    "count": 16,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "cyan_stained_glass"
        },
        "2_key": {
          "item": "cyan_stained_glass"
        },
        "3_key": {
          "item": "cyan_stained_glass"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "cyan_stained_glass"
        },
        "2_key": {
          "item": "cyan_stained_glass"
        },
        "3_key": {
          "item": "cyan_stained_glass"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "cyan_stained_glass_pane_from_glass_pane.json",
    "item": "cyan_stained_glass_pane",
    "count": 8,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "glass_pane"
        },
        "2_key": {
          "item": "glass_pane"
        },
        "3_key": {
          "item": "glass_pane"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "glass_pane"
        },
        "2_key": {
          "item": "cyan_dye"
        },
        "3_key": {
          "item": "glass_pane"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "glass_pane"
        },
        "2_key": {
          "item": "glass_pane"
        },
        "3_key": {
          "item": "glass_pane"
        }
      }
    }
  },
  {
    "file": "cyan_terracotta.json",
    "item": "cyan_terracotta",
    "count": 8,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "terracotta"
        },
        "2_key": {
          "item": "terracotta"
        },
        "3_key": {
          "item": "terracotta"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "terracotta"
        },
        "2_key": {
          "item": "cyan_dye"
        },
        "3_key": {
          "item": "terracotta"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "terracotta"
        },
        "2_key": {
          "item": "terracotta"
        },
        "3_key": {
          "item": "terracotta"
        }
      }
    }
  },
  {
    "file": "dark_oak_boat.json",
    "item": "dark_oak_boat",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "dark_oak_planks"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "dark_oak_planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "dark_oak_planks"
        },
        "2_key": {
          "item": "dark_oak_planks"
        },
        "3_key": {
          "item": "dark_oak_planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "dark_oak_button.json",
    "item": "dark_oak_button",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "dark_oak_planks"
      }
    ]
  },
  {
    "file": "dark_oak_chest_boat.json",
    "item": "dark_oak_chest_boat",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "chest"
      },
      {
        "item": "dark_oak_boat"
      }
    ]
  },
  {
    "file": "dark_oak_door.json",
    "item": "dark_oak_door",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "dark_oak_planks"
        },
        "2_key": {
          "item": "dark_oak_planks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "dark_oak_planks"
        },
        "2_key": {
          "item": "dark_oak_planks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "dark_oak_planks"
        },
        "2_key": {
          "item": "dark_oak_planks"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "dark_oak_fence.json",
    "item": "dark_oak_fence",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "dark_oak_planks"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "dark_oak_planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "dark_oak_planks"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "dark_oak_planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "dark_oak_fence_gate.json",
    "item": "dark_oak_fence_gate",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "item": "dark_oak_planks"
        },
        "3_key": {
          "item": "stick"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "item": "dark_oak_planks"
        },
        "3_key": {
          "item": "stick"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "dark_oak_hanging_sign.json",
    "item": "dark_oak_hanging_sign",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "chain"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "chain"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "stripped_dark_oak_log"
        },
        "2_key": {
          "item": "stripped_dark_oak_log"
        },
        "3_key": {
          "item": "stripped_dark_oak_log"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "stripped_dark_oak_log"
        },
        "2_key": {
          "item": "stripped_dark_oak_log"
        },
        "3_key": {
          "item": "stripped_dark_oak_log"
        }
      }
    }
  },
  {
    "file": "dark_oak_planks.json",
    "item": "dark_oak_planks",
    "count": 4,
    "patterns": {},
    "ingredients": [
      {
        "tag": "dark_oak_logs"
      }
    ]
  },
  {
    "file": "dark_oak_pressure_plate.json",
    "item": "dark_oak_pressure_plate",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "dark_oak_planks"
        },
        "2_key": {
          "item": "dark_oak_planks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "dark_oak_sign.json",
    "item": "dark_oak_sign",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "dark_oak_planks"
        },
        "2_key": {
          "item": "dark_oak_planks"
        },
        "3_key": {
          "item": "dark_oak_planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "dark_oak_planks"
        },
        "2_key": {
          "item": "dark_oak_planks"
        },
        "3_key": {
          "item": "dark_oak_planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "dark_oak_slab.json",
    "item": "dark_oak_slab",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "dark_oak_planks"
        },
        "2_key": {
          "item": "dark_oak_planks"
        },
        "3_key": {
          "item": "dark_oak_planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "dark_oak_stairs.json",
    "item": "dark_oak_stairs",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "dark_oak_planks"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "dark_oak_planks"
        },
        "2_key": {
          "item": "dark_oak_planks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "dark_oak_planks"
        },
        "2_key": {
          "item": "dark_oak_planks"
        },
        "3_key": {
          "item": "dark_oak_planks"
        }
      }
    }
  },
  {
    "file": "dark_oak_trapdoor.json",
    "item": "dark_oak_trapdoor",
    "count": 2,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "dark_oak_planks"
        },
        "2_key": {
          "item": "dark_oak_planks"
        },
        "3_key": {
          "item": "dark_oak_planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "dark_oak_planks"
        },
        "2_key": {
          "item": "dark_oak_planks"
        },
        "3_key": {
          "item": "dark_oak_planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "dark_oak_wood.json",
    "item": "dark_oak_wood",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "dark_oak_log"
        },
        "2_key": {
          "item": "dark_oak_log"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "dark_oak_log"
        },
        "2_key": {
          "item": "dark_oak_log"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "dark_prismarine.json",
    "item": "dark_prismarine",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "prismarine_shard"
        },
        "2_key": {
          "item": "prismarine_shard"
        },
        "3_key": {
          "item": "prismarine_shard"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "prismarine_shard"
        },
        "2_key": {
          "item": "black_dye"
        },
        "3_key": {
          "item": "prismarine_shard"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "prismarine_shard"
        },
        "2_key": {
          "item": "prismarine_shard"
        },
        "3_key": {
          "item": "prismarine_shard"
        }
      }
    }
  },
  {
    "file": "dark_prismarine_slab.json",
    "item": "dark_prismarine_slab",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "dark_prismarine"
        },
        "2_key": {
          "item": "dark_prismarine"
        },
        "3_key": {
          "item": "dark_prismarine"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "dark_prismarine_stairs.json",
    "item": "dark_prismarine_stairs",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "dark_prismarine"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "dark_prismarine"
        },
        "2_key": {
          "item": "dark_prismarine"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "dark_prismarine"
        },
        "2_key": {
          "item": "dark_prismarine"
        },
        "3_key": {
          "item": "dark_prismarine"
        }
      }
    }
  },
  {
    "file": "daylight_detector.json",
    "item": "daylight_detector",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "glass"
        },
        "2_key": {
          "item": "glass"
        },
        "3_key": {
          "item": "glass"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "quartz"
        },
        "2_key": {
          "item": "quartz"
        },
        "3_key": {
          "item": "quartz"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "tag": "wooden_slabs"
        },
        "2_key": {
          "tag": "wooden_slabs"
        },
        "3_key": {
          "tag": "wooden_slabs"
        }
      }
    }
  },
  {
    "file": "decorated_pot_simple.json",
    "item": "decorated_pot",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "brick"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "brick"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "brick"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "brick"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "deepslate_bricks.json",
    "item": "deepslate_bricks",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "polished_deepslate"
        },
        "2_key": {
          "item": "polished_deepslate"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "polished_deepslate"
        },
        "2_key": {
          "item": "polished_deepslate"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "deepslate_brick_slab.json",
    "item": "deepslate_brick_slab",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "deepslate_bricks"
        },
        "2_key": {
          "item": "deepslate_bricks"
        },
        "3_key": {
          "item": "deepslate_bricks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "deepslate_brick_stairs.json",
    "item": "deepslate_brick_stairs",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "deepslate_bricks"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "deepslate_bricks"
        },
        "2_key": {
          "item": "deepslate_bricks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "deepslate_bricks"
        },
        "2_key": {
          "item": "deepslate_bricks"
        },
        "3_key": {
          "item": "deepslate_bricks"
        }
      }
    }
  },
  {
    "file": "deepslate_brick_wall.json",
    "item": "deepslate_brick_wall",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "deepslate_bricks"
        },
        "2_key": {
          "item": "deepslate_bricks"
        },
        "3_key": {
          "item": "deepslate_bricks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "deepslate_bricks"
        },
        "2_key": {
          "item": "deepslate_bricks"
        },
        "3_key": {
          "item": "deepslate_bricks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "deepslate_tiles.json",
    "item": "deepslate_tiles",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "deepslate_bricks"
        },
        "2_key": {
          "item": "deepslate_bricks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "deepslate_bricks"
        },
        "2_key": {
          "item": "deepslate_bricks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "deepslate_tile_slab.json",
    "item": "deepslate_tile_slab",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "deepslate_tiles"
        },
        "2_key": {
          "item": "deepslate_tiles"
        },
        "3_key": {
          "item": "deepslate_tiles"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "deepslate_tile_stairs.json",
    "item": "deepslate_tile_stairs",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "deepslate_tiles"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "deepslate_tiles"
        },
        "2_key": {
          "item": "deepslate_tiles"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "deepslate_tiles"
        },
        "2_key": {
          "item": "deepslate_tiles"
        },
        "3_key": {
          "item": "deepslate_tiles"
        }
      }
    }
  },
  {
    "file": "deepslate_tile_wall.json",
    "item": "deepslate_tile_wall",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "deepslate_tiles"
        },
        "2_key": {
          "item": "deepslate_tiles"
        },
        "3_key": {
          "item": "deepslate_tiles"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "deepslate_tiles"
        },
        "2_key": {
          "item": "deepslate_tiles"
        },
        "3_key": {
          "item": "deepslate_tiles"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "detector_rail.json",
    "item": "detector_rail",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "iron_ingot"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "iron_ingot"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "iron_ingot"
        },
        "2_key": {
          "item": "stone_pressure_plate"
        },
        "3_key": {
          "item": "iron_ingot"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "iron_ingot"
        },
        "2_key": {
          "item": "redstone"
        },
        "3_key": {
          "item": "iron_ingot"
        }
      }
    }
  },
  {
    "file": "diamond.json",
    "item": "diamond",
    "count": 9,
    "patterns": {},
    "ingredients": [
      {
        "item": "diamond_block"
      }
    ]
  },
  {
    "file": "diamond_axe.json",
    "item": "diamond_axe",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "diamond"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "diamond_block.json",
    "item": "diamond_block",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "diamond"
        },
        "3_key": {
          "item": "diamond"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "diamond"
        },
        "3_key": {
          "item": "diamond"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "diamond"
        },
        "3_key": {
          "item": "diamond"
        }
      }
    }
  },
  {
    "file": "diamond_boots.json",
    "item": "diamond_boots",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "diamond"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "diamond"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "diamond_chestplate.json",
    "item": "diamond_chestplate",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "diamond"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "diamond"
        },
        "3_key": {
          "item": "diamond"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "diamond"
        },
        "3_key": {
          "item": "diamond"
        }
      }
    }
  },
  {
    "file": "diamond_helmet.json",
    "item": "diamond_helmet",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "diamond"
        },
        "3_key": {
          "item": "diamond"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "diamond"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "diamond_hoe.json",
    "item": "diamond_hoe",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "diamond"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "diamond_leggings.json",
    "item": "diamond_leggings",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "diamond"
        },
        "3_key": {
          "item": "diamond"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "diamond"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "diamond"
        }
      }
    }
  },
  {
    "file": "diamond_pickaxe.json",
    "item": "diamond_pickaxe",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "diamond"
        },
        "3_key": {
          "item": "diamond"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "diamond_shovel.json",
    "item": "diamond_shovel",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "diamond_sword.json",
    "item": "diamond_sword",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "diorite.json",
    "item": "diorite",
    "count": 2,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "cobblestone"
        },
        "2_key": {
          "item": "quartz"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "quartz"
        },
        "2_key": {
          "item": "cobblestone"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "diorite_slab.json",
    "item": "diorite_slab",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "diorite"
        },
        "2_key": {
          "item": "diorite"
        },
        "3_key": {
          "item": "diorite"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "diorite_stairs.json",
    "item": "diorite_stairs",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "diorite"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "diorite"
        },
        "2_key": {
          "item": "diorite"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "diorite"
        },
        "2_key": {
          "item": "diorite"
        },
        "3_key": {
          "item": "diorite"
        }
      }
    }
  },
  {
    "file": "diorite_wall.json",
    "item": "diorite_wall",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "diorite"
        },
        "2_key": {
          "item": "diorite"
        },
        "3_key": {
          "item": "diorite"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "diorite"
        },
        "2_key": {
          "item": "diorite"
        },
        "3_key": {
          "item": "diorite"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "dispenser.json",
    "item": "dispenser",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "cobblestone"
        },
        "2_key": {
          "item": "cobblestone"
        },
        "3_key": {
          "item": "cobblestone"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "cobblestone"
        },
        "2_key": {
          "item": "bow"
        },
        "3_key": {
          "item": "cobblestone"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "cobblestone"
        },
        "2_key": {
          "item": "redstone"
        },
        "3_key": {
          "item": "cobblestone"
        }
      }
    }
  },
  {
    "file": "dried_kelp.json",
    "item": "dried_kelp",
    "count": 9,
    "patterns": {},
    "ingredients": [
      {
        "item": "dried_kelp_block"
      }
    ]
  },
  {
    "file": "dried_kelp_block.json",
    "item": "dried_kelp_block",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "dried_kelp"
        },
        "2_key": {
          "item": "dried_kelp"
        },
        "3_key": {
          "item": "dried_kelp"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "dried_kelp"
        },
        "2_key": {
          "item": "dried_kelp"
        },
        "3_key": {
          "item": "dried_kelp"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "dried_kelp"
        },
        "2_key": {
          "item": "dried_kelp"
        },
        "3_key": {
          "item": "dried_kelp"
        }
      }
    }
  },
  {
    "file": "dripstone_block.json",
    "item": "dripstone_block",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "pointed_dripstone"
        },
        "2_key": {
          "item": "pointed_dripstone"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "pointed_dripstone"
        },
        "2_key": {
          "item": "pointed_dripstone"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "dropper.json",
    "item": "dropper",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "cobblestone"
        },
        "2_key": {
          "item": "cobblestone"
        },
        "3_key": {
          "item": "cobblestone"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "cobblestone"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "cobblestone"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "cobblestone"
        },
        "2_key": {
          "item": "redstone"
        },
        "3_key": {
          "item": "cobblestone"
        }
      }
    }
  },
  {
    "file": "dune_armor_trim_smithing_template.json",
    "item": "dune_armor_trim_smithing_template",
    "count": 2,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "dune_armor_trim_smithing_template"
        },
        "3_key": {
          "item": "diamond"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "sandstone"
        },
        "3_key": {
          "item": "diamond"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "diamond"
        },
        "3_key": {
          "item": "diamond"
        }
      }
    }
  },
  {
    "file": "dye_black_bed.json",
    "item": "black_bed",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "black_dye"
      },
      [
        {
          "item": "blue_bed"
        },
        {
          "item": "brown_bed"
        },
        {
          "item": "cyan_bed"
        },
        {
          "item": "gray_bed"
        },
        {
          "item": "green_bed"
        },
        {
          "item": "light_blue_bed"
        },
        {
          "item": "light_gray_bed"
        },
        {
          "item": "lime_bed"
        },
        {
          "item": "magenta_bed"
        },
        {
          "item": "orange_bed"
        },
        {
          "item": "pink_bed"
        },
        {
          "item": "purple_bed"
        },
        {
          "item": "red_bed"
        },
        {
          "item": "yellow_bed"
        },
        {
          "item": "white_bed"
        }
      ]
    ]
  },
  {
    "file": "dye_black_carpet.json",
    "item": "black_carpet",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "black_dye"
      },
      [
        {
          "item": "blue_carpet"
        },
        {
          "item": "brown_carpet"
        },
        {
          "item": "cyan_carpet"
        },
        {
          "item": "gray_carpet"
        },
        {
          "item": "green_carpet"
        },
        {
          "item": "light_blue_carpet"
        },
        {
          "item": "light_gray_carpet"
        },
        {
          "item": "lime_carpet"
        },
        {
          "item": "magenta_carpet"
        },
        {
          "item": "orange_carpet"
        },
        {
          "item": "pink_carpet"
        },
        {
          "item": "purple_carpet"
        },
        {
          "item": "red_carpet"
        },
        {
          "item": "yellow_carpet"
        },
        {
          "item": "white_carpet"
        }
      ]
    ]
  },
  {
    "file": "dye_black_wool.json",
    "item": "black_wool",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "black_dye"
      },
      [
        {
          "item": "blue_wool"
        },
        {
          "item": "brown_wool"
        },
        {
          "item": "cyan_wool"
        },
        {
          "item": "gray_wool"
        },
        {
          "item": "green_wool"
        },
        {
          "item": "light_blue_wool"
        },
        {
          "item": "light_gray_wool"
        },
        {
          "item": "lime_wool"
        },
        {
          "item": "magenta_wool"
        },
        {
          "item": "orange_wool"
        },
        {
          "item": "pink_wool"
        },
        {
          "item": "purple_wool"
        },
        {
          "item": "red_wool"
        },
        {
          "item": "yellow_wool"
        },
        {
          "item": "white_wool"
        }
      ]
    ]
  },
  {
    "file": "dye_blue_bed.json",
    "item": "blue_bed",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "blue_dye"
      },
      [
        {
          "item": "black_bed"
        },
        {
          "item": "brown_bed"
        },
        {
          "item": "cyan_bed"
        },
        {
          "item": "gray_bed"
        },
        {
          "item": "green_bed"
        },
        {
          "item": "light_blue_bed"
        },
        {
          "item": "light_gray_bed"
        },
        {
          "item": "lime_bed"
        },
        {
          "item": "magenta_bed"
        },
        {
          "item": "orange_bed"
        },
        {
          "item": "pink_bed"
        },
        {
          "item": "purple_bed"
        },
        {
          "item": "red_bed"
        },
        {
          "item": "yellow_bed"
        },
        {
          "item": "white_bed"
        }
      ]
    ]
  },
  {
    "file": "dye_blue_carpet.json",
    "item": "blue_carpet",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "blue_dye"
      },
      [
        {
          "item": "black_carpet"
        },
        {
          "item": "brown_carpet"
        },
        {
          "item": "cyan_carpet"
        },
        {
          "item": "gray_carpet"
        },
        {
          "item": "green_carpet"
        },
        {
          "item": "light_blue_carpet"
        },
        {
          "item": "light_gray_carpet"
        },
        {
          "item": "lime_carpet"
        },
        {
          "item": "magenta_carpet"
        },
        {
          "item": "orange_carpet"
        },
        {
          "item": "pink_carpet"
        },
        {
          "item": "purple_carpet"
        },
        {
          "item": "red_carpet"
        },
        {
          "item": "yellow_carpet"
        },
        {
          "item": "white_carpet"
        }
      ]
    ]
  },
  {
    "file": "dye_blue_wool.json",
    "item": "blue_wool",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "blue_dye"
      },
      [
        {
          "item": "black_wool"
        },
        {
          "item": "brown_wool"
        },
        {
          "item": "cyan_wool"
        },
        {
          "item": "gray_wool"
        },
        {
          "item": "green_wool"
        },
        {
          "item": "light_blue_wool"
        },
        {
          "item": "light_gray_wool"
        },
        {
          "item": "lime_wool"
        },
        {
          "item": "magenta_wool"
        },
        {
          "item": "orange_wool"
        },
        {
          "item": "pink_wool"
        },
        {
          "item": "purple_wool"
        },
        {
          "item": "red_wool"
        },
        {
          "item": "yellow_wool"
        },
        {
          "item": "white_wool"
        }
      ]
    ]
  },
  {
    "file": "dye_brown_bed.json",
    "item": "brown_bed",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "brown_dye"
      },
      [
        {
          "item": "black_bed"
        },
        {
          "item": "blue_bed"
        },
        {
          "item": "cyan_bed"
        },
        {
          "item": "gray_bed"
        },
        {
          "item": "green_bed"
        },
        {
          "item": "light_blue_bed"
        },
        {
          "item": "light_gray_bed"
        },
        {
          "item": "lime_bed"
        },
        {
          "item": "magenta_bed"
        },
        {
          "item": "orange_bed"
        },
        {
          "item": "pink_bed"
        },
        {
          "item": "purple_bed"
        },
        {
          "item": "red_bed"
        },
        {
          "item": "yellow_bed"
        },
        {
          "item": "white_bed"
        }
      ]
    ]
  },
  {
    "file": "dye_brown_carpet.json",
    "item": "brown_carpet",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "brown_dye"
      },
      [
        {
          "item": "black_carpet"
        },
        {
          "item": "blue_carpet"
        },
        {
          "item": "cyan_carpet"
        },
        {
          "item": "gray_carpet"
        },
        {
          "item": "green_carpet"
        },
        {
          "item": "light_blue_carpet"
        },
        {
          "item": "light_gray_carpet"
        },
        {
          "item": "lime_carpet"
        },
        {
          "item": "magenta_carpet"
        },
        {
          "item": "orange_carpet"
        },
        {
          "item": "pink_carpet"
        },
        {
          "item": "purple_carpet"
        },
        {
          "item": "red_carpet"
        },
        {
          "item": "yellow_carpet"
        },
        {
          "item": "white_carpet"
        }
      ]
    ]
  },
  {
    "file": "dye_brown_wool.json",
    "item": "brown_wool",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "brown_dye"
      },
      [
        {
          "item": "black_wool"
        },
        {
          "item": "blue_wool"
        },
        {
          "item": "cyan_wool"
        },
        {
          "item": "gray_wool"
        },
        {
          "item": "green_wool"
        },
        {
          "item": "light_blue_wool"
        },
        {
          "item": "light_gray_wool"
        },
        {
          "item": "lime_wool"
        },
        {
          "item": "magenta_wool"
        },
        {
          "item": "orange_wool"
        },
        {
          "item": "pink_wool"
        },
        {
          "item": "purple_wool"
        },
        {
          "item": "red_wool"
        },
        {
          "item": "yellow_wool"
        },
        {
          "item": "white_wool"
        }
      ]
    ]
  },
  {
    "file": "dye_cyan_bed.json",
    "item": "cyan_bed",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "cyan_dye"
      },
      [
        {
          "item": "black_bed"
        },
        {
          "item": "blue_bed"
        },
        {
          "item": "brown_bed"
        },
        {
          "item": "gray_bed"
        },
        {
          "item": "green_bed"
        },
        {
          "item": "light_blue_bed"
        },
        {
          "item": "light_gray_bed"
        },
        {
          "item": "lime_bed"
        },
        {
          "item": "magenta_bed"
        },
        {
          "item": "orange_bed"
        },
        {
          "item": "pink_bed"
        },
        {
          "item": "purple_bed"
        },
        {
          "item": "red_bed"
        },
        {
          "item": "yellow_bed"
        },
        {
          "item": "white_bed"
        }
      ]
    ]
  },
  {
    "file": "dye_cyan_carpet.json",
    "item": "cyan_carpet",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "cyan_dye"
      },
      [
        {
          "item": "black_carpet"
        },
        {
          "item": "blue_carpet"
        },
        {
          "item": "brown_carpet"
        },
        {
          "item": "gray_carpet"
        },
        {
          "item": "green_carpet"
        },
        {
          "item": "light_blue_carpet"
        },
        {
          "item": "light_gray_carpet"
        },
        {
          "item": "lime_carpet"
        },
        {
          "item": "magenta_carpet"
        },
        {
          "item": "orange_carpet"
        },
        {
          "item": "pink_carpet"
        },
        {
          "item": "purple_carpet"
        },
        {
          "item": "red_carpet"
        },
        {
          "item": "yellow_carpet"
        },
        {
          "item": "white_carpet"
        }
      ]
    ]
  },
  {
    "file": "dye_cyan_wool.json",
    "item": "cyan_wool",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "cyan_dye"
      },
      [
        {
          "item": "black_wool"
        },
        {
          "item": "blue_wool"
        },
        {
          "item": "brown_wool"
        },
        {
          "item": "gray_wool"
        },
        {
          "item": "green_wool"
        },
        {
          "item": "light_blue_wool"
        },
        {
          "item": "light_gray_wool"
        },
        {
          "item": "lime_wool"
        },
        {
          "item": "magenta_wool"
        },
        {
          "item": "orange_wool"
        },
        {
          "item": "pink_wool"
        },
        {
          "item": "purple_wool"
        },
        {
          "item": "red_wool"
        },
        {
          "item": "yellow_wool"
        },
        {
          "item": "white_wool"
        }
      ]
    ]
  },
  {
    "file": "dye_gray_bed.json",
    "item": "gray_bed",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "gray_dye"
      },
      [
        {
          "item": "black_bed"
        },
        {
          "item": "blue_bed"
        },
        {
          "item": "brown_bed"
        },
        {
          "item": "cyan_bed"
        },
        {
          "item": "green_bed"
        },
        {
          "item": "light_blue_bed"
        },
        {
          "item": "light_gray_bed"
        },
        {
          "item": "lime_bed"
        },
        {
          "item": "magenta_bed"
        },
        {
          "item": "orange_bed"
        },
        {
          "item": "pink_bed"
        },
        {
          "item": "purple_bed"
        },
        {
          "item": "red_bed"
        },
        {
          "item": "yellow_bed"
        },
        {
          "item": "white_bed"
        }
      ]
    ]
  },
  {
    "file": "dye_gray_carpet.json",
    "item": "gray_carpet",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "gray_dye"
      },
      [
        {
          "item": "black_carpet"
        },
        {
          "item": "blue_carpet"
        },
        {
          "item": "brown_carpet"
        },
        {
          "item": "cyan_carpet"
        },
        {
          "item": "green_carpet"
        },
        {
          "item": "light_blue_carpet"
        },
        {
          "item": "light_gray_carpet"
        },
        {
          "item": "lime_carpet"
        },
        {
          "item": "magenta_carpet"
        },
        {
          "item": "orange_carpet"
        },
        {
          "item": "pink_carpet"
        },
        {
          "item": "purple_carpet"
        },
        {
          "item": "red_carpet"
        },
        {
          "item": "yellow_carpet"
        },
        {
          "item": "white_carpet"
        }
      ]
    ]
  },
  {
    "file": "dye_gray_wool.json",
    "item": "gray_wool",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "gray_dye"
      },
      [
        {
          "item": "black_wool"
        },
        {
          "item": "blue_wool"
        },
        {
          "item": "brown_wool"
        },
        {
          "item": "cyan_wool"
        },
        {
          "item": "green_wool"
        },
        {
          "item": "light_blue_wool"
        },
        {
          "item": "light_gray_wool"
        },
        {
          "item": "lime_wool"
        },
        {
          "item": "magenta_wool"
        },
        {
          "item": "orange_wool"
        },
        {
          "item": "pink_wool"
        },
        {
          "item": "purple_wool"
        },
        {
          "item": "red_wool"
        },
        {
          "item": "yellow_wool"
        },
        {
          "item": "white_wool"
        }
      ]
    ]
  },
  {
    "file": "dye_green_bed.json",
    "item": "green_bed",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "green_dye"
      },
      [
        {
          "item": "black_bed"
        },
        {
          "item": "blue_bed"
        },
        {
          "item": "brown_bed"
        },
        {
          "item": "cyan_bed"
        },
        {
          "item": "gray_bed"
        },
        {
          "item": "light_blue_bed"
        },
        {
          "item": "light_gray_bed"
        },
        {
          "item": "lime_bed"
        },
        {
          "item": "magenta_bed"
        },
        {
          "item": "orange_bed"
        },
        {
          "item": "pink_bed"
        },
        {
          "item": "purple_bed"
        },
        {
          "item": "red_bed"
        },
        {
          "item": "yellow_bed"
        },
        {
          "item": "white_bed"
        }
      ]
    ]
  },
  {
    "file": "dye_green_carpet.json",
    "item": "green_carpet",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "green_dye"
      },
      [
        {
          "item": "black_carpet"
        },
        {
          "item": "blue_carpet"
        },
        {
          "item": "brown_carpet"
        },
        {
          "item": "cyan_carpet"
        },
        {
          "item": "gray_carpet"
        },
        {
          "item": "light_blue_carpet"
        },
        {
          "item": "light_gray_carpet"
        },
        {
          "item": "lime_carpet"
        },
        {
          "item": "magenta_carpet"
        },
        {
          "item": "orange_carpet"
        },
        {
          "item": "pink_carpet"
        },
        {
          "item": "purple_carpet"
        },
        {
          "item": "red_carpet"
        },
        {
          "item": "yellow_carpet"
        },
        {
          "item": "white_carpet"
        }
      ]
    ]
  },
  {
    "file": "dye_green_wool.json",
    "item": "green_wool",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "green_dye"
      },
      [
        {
          "item": "black_wool"
        },
        {
          "item": "blue_wool"
        },
        {
          "item": "brown_wool"
        },
        {
          "item": "cyan_wool"
        },
        {
          "item": "gray_wool"
        },
        {
          "item": "light_blue_wool"
        },
        {
          "item": "light_gray_wool"
        },
        {
          "item": "lime_wool"
        },
        {
          "item": "magenta_wool"
        },
        {
          "item": "orange_wool"
        },
        {
          "item": "pink_wool"
        },
        {
          "item": "purple_wool"
        },
        {
          "item": "red_wool"
        },
        {
          "item": "yellow_wool"
        },
        {
          "item": "white_wool"
        }
      ]
    ]
  },
  {
    "file": "dye_light_blue_bed.json",
    "item": "light_blue_bed",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "light_blue_dye"
      },
      [
        {
          "item": "black_bed"
        },
        {
          "item": "blue_bed"
        },
        {
          "item": "brown_bed"
        },
        {
          "item": "cyan_bed"
        },
        {
          "item": "gray_bed"
        },
        {
          "item": "green_bed"
        },
        {
          "item": "light_gray_bed"
        },
        {
          "item": "lime_bed"
        },
        {
          "item": "magenta_bed"
        },
        {
          "item": "orange_bed"
        },
        {
          "item": "pink_bed"
        },
        {
          "item": "purple_bed"
        },
        {
          "item": "red_bed"
        },
        {
          "item": "yellow_bed"
        },
        {
          "item": "white_bed"
        }
      ]
    ]
  },
  {
    "file": "dye_light_blue_carpet.json",
    "item": "light_blue_carpet",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "light_blue_dye"
      },
      [
        {
          "item": "black_carpet"
        },
        {
          "item": "blue_carpet"
        },
        {
          "item": "brown_carpet"
        },
        {
          "item": "cyan_carpet"
        },
        {
          "item": "gray_carpet"
        },
        {
          "item": "green_carpet"
        },
        {
          "item": "light_gray_carpet"
        },
        {
          "item": "lime_carpet"
        },
        {
          "item": "magenta_carpet"
        },
        {
          "item": "orange_carpet"
        },
        {
          "item": "pink_carpet"
        },
        {
          "item": "purple_carpet"
        },
        {
          "item": "red_carpet"
        },
        {
          "item": "yellow_carpet"
        },
        {
          "item": "white_carpet"
        }
      ]
    ]
  },
  {
    "file": "dye_light_blue_wool.json",
    "item": "light_blue_wool",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "light_blue_dye"
      },
      [
        {
          "item": "black_wool"
        },
        {
          "item": "blue_wool"
        },
        {
          "item": "brown_wool"
        },
        {
          "item": "cyan_wool"
        },
        {
          "item": "gray_wool"
        },
        {
          "item": "green_wool"
        },
        {
          "item": "light_gray_wool"
        },
        {
          "item": "lime_wool"
        },
        {
          "item": "magenta_wool"
        },
        {
          "item": "orange_wool"
        },
        {
          "item": "pink_wool"
        },
        {
          "item": "purple_wool"
        },
        {
          "item": "red_wool"
        },
        {
          "item": "yellow_wool"
        },
        {
          "item": "white_wool"
        }
      ]
    ]
  },
  {
    "file": "dye_light_gray_bed.json",
    "item": "light_gray_bed",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "light_gray_dye"
      },
      [
        {
          "item": "black_bed"
        },
        {
          "item": "blue_bed"
        },
        {
          "item": "brown_bed"
        },
        {
          "item": "cyan_bed"
        },
        {
          "item": "gray_bed"
        },
        {
          "item": "green_bed"
        },
        {
          "item": "light_blue_bed"
        },
        {
          "item": "lime_bed"
        },
        {
          "item": "magenta_bed"
        },
        {
          "item": "orange_bed"
        },
        {
          "item": "pink_bed"
        },
        {
          "item": "purple_bed"
        },
        {
          "item": "red_bed"
        },
        {
          "item": "yellow_bed"
        },
        {
          "item": "white_bed"
        }
      ]
    ]
  },
  {
    "file": "dye_light_gray_carpet.json",
    "item": "light_gray_carpet",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "light_gray_dye"
      },
      [
        {
          "item": "black_carpet"
        },
        {
          "item": "blue_carpet"
        },
        {
          "item": "brown_carpet"
        },
        {
          "item": "cyan_carpet"
        },
        {
          "item": "gray_carpet"
        },
        {
          "item": "green_carpet"
        },
        {
          "item": "light_blue_carpet"
        },
        {
          "item": "lime_carpet"
        },
        {
          "item": "magenta_carpet"
        },
        {
          "item": "orange_carpet"
        },
        {
          "item": "pink_carpet"
        },
        {
          "item": "purple_carpet"
        },
        {
          "item": "red_carpet"
        },
        {
          "item": "yellow_carpet"
        },
        {
          "item": "white_carpet"
        }
      ]
    ]
  },
  {
    "file": "dye_light_gray_wool.json",
    "item": "light_gray_wool",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "light_gray_dye"
      },
      [
        {
          "item": "black_wool"
        },
        {
          "item": "blue_wool"
        },
        {
          "item": "brown_wool"
        },
        {
          "item": "cyan_wool"
        },
        {
          "item": "gray_wool"
        },
        {
          "item": "green_wool"
        },
        {
          "item": "light_blue_wool"
        },
        {
          "item": "lime_wool"
        },
        {
          "item": "magenta_wool"
        },
        {
          "item": "orange_wool"
        },
        {
          "item": "pink_wool"
        },
        {
          "item": "purple_wool"
        },
        {
          "item": "red_wool"
        },
        {
          "item": "yellow_wool"
        },
        {
          "item": "white_wool"
        }
      ]
    ]
  },
  {
    "file": "dye_lime_bed.json",
    "item": "lime_bed",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "lime_dye"
      },
      [
        {
          "item": "black_bed"
        },
        {
          "item": "blue_bed"
        },
        {
          "item": "brown_bed"
        },
        {
          "item": "cyan_bed"
        },
        {
          "item": "gray_bed"
        },
        {
          "item": "green_bed"
        },
        {
          "item": "light_blue_bed"
        },
        {
          "item": "light_gray_bed"
        },
        {
          "item": "magenta_bed"
        },
        {
          "item": "orange_bed"
        },
        {
          "item": "pink_bed"
        },
        {
          "item": "purple_bed"
        },
        {
          "item": "red_bed"
        },
        {
          "item": "yellow_bed"
        },
        {
          "item": "white_bed"
        }
      ]
    ]
  },
  {
    "file": "dye_lime_carpet.json",
    "item": "lime_carpet",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "lime_dye"
      },
      [
        {
          "item": "black_carpet"
        },
        {
          "item": "blue_carpet"
        },
        {
          "item": "brown_carpet"
        },
        {
          "item": "cyan_carpet"
        },
        {
          "item": "gray_carpet"
        },
        {
          "item": "green_carpet"
        },
        {
          "item": "light_blue_carpet"
        },
        {
          "item": "light_gray_carpet"
        },
        {
          "item": "magenta_carpet"
        },
        {
          "item": "orange_carpet"
        },
        {
          "item": "pink_carpet"
        },
        {
          "item": "purple_carpet"
        },
        {
          "item": "red_carpet"
        },
        {
          "item": "yellow_carpet"
        },
        {
          "item": "white_carpet"
        }
      ]
    ]
  },
  {
    "file": "dye_lime_wool.json",
    "item": "lime_wool",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "lime_dye"
      },
      [
        {
          "item": "black_wool"
        },
        {
          "item": "blue_wool"
        },
        {
          "item": "brown_wool"
        },
        {
          "item": "cyan_wool"
        },
        {
          "item": "gray_wool"
        },
        {
          "item": "green_wool"
        },
        {
          "item": "light_blue_wool"
        },
        {
          "item": "light_gray_wool"
        },
        {
          "item": "magenta_wool"
        },
        {
          "item": "orange_wool"
        },
        {
          "item": "pink_wool"
        },
        {
          "item": "purple_wool"
        },
        {
          "item": "red_wool"
        },
        {
          "item": "yellow_wool"
        },
        {
          "item": "white_wool"
        }
      ]
    ]
  },
  {
    "file": "dye_magenta_bed.json",
    "item": "magenta_bed",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "magenta_dye"
      },
      [
        {
          "item": "black_bed"
        },
        {
          "item": "blue_bed"
        },
        {
          "item": "brown_bed"
        },
        {
          "item": "cyan_bed"
        },
        {
          "item": "gray_bed"
        },
        {
          "item": "green_bed"
        },
        {
          "item": "light_blue_bed"
        },
        {
          "item": "light_gray_bed"
        },
        {
          "item": "lime_bed"
        },
        {
          "item": "orange_bed"
        },
        {
          "item": "pink_bed"
        },
        {
          "item": "purple_bed"
        },
        {
          "item": "red_bed"
        },
        {
          "item": "yellow_bed"
        },
        {
          "item": "white_bed"
        }
      ]
    ]
  },
  {
    "file": "dye_magenta_carpet.json",
    "item": "magenta_carpet",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "magenta_dye"
      },
      [
        {
          "item": "black_carpet"
        },
        {
          "item": "blue_carpet"
        },
        {
          "item": "brown_carpet"
        },
        {
          "item": "cyan_carpet"
        },
        {
          "item": "gray_carpet"
        },
        {
          "item": "green_carpet"
        },
        {
          "item": "light_blue_carpet"
        },
        {
          "item": "light_gray_carpet"
        },
        {
          "item": "lime_carpet"
        },
        {
          "item": "orange_carpet"
        },
        {
          "item": "pink_carpet"
        },
        {
          "item": "purple_carpet"
        },
        {
          "item": "red_carpet"
        },
        {
          "item": "yellow_carpet"
        },
        {
          "item": "white_carpet"
        }
      ]
    ]
  },
  {
    "file": "dye_magenta_wool.json",
    "item": "magenta_wool",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "magenta_dye"
      },
      [
        {
          "item": "black_wool"
        },
        {
          "item": "blue_wool"
        },
        {
          "item": "brown_wool"
        },
        {
          "item": "cyan_wool"
        },
        {
          "item": "gray_wool"
        },
        {
          "item": "green_wool"
        },
        {
          "item": "light_blue_wool"
        },
        {
          "item": "light_gray_wool"
        },
        {
          "item": "lime_wool"
        },
        {
          "item": "orange_wool"
        },
        {
          "item": "pink_wool"
        },
        {
          "item": "purple_wool"
        },
        {
          "item": "red_wool"
        },
        {
          "item": "yellow_wool"
        },
        {
          "item": "white_wool"
        }
      ]
    ]
  },
  {
    "file": "dye_orange_bed.json",
    "item": "orange_bed",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "orange_dye"
      },
      [
        {
          "item": "black_bed"
        },
        {
          "item": "blue_bed"
        },
        {
          "item": "brown_bed"
        },
        {
          "item": "cyan_bed"
        },
        {
          "item": "gray_bed"
        },
        {
          "item": "green_bed"
        },
        {
          "item": "light_blue_bed"
        },
        {
          "item": "light_gray_bed"
        },
        {
          "item": "lime_bed"
        },
        {
          "item": "magenta_bed"
        },
        {
          "item": "pink_bed"
        },
        {
          "item": "purple_bed"
        },
        {
          "item": "red_bed"
        },
        {
          "item": "yellow_bed"
        },
        {
          "item": "white_bed"
        }
      ]
    ]
  },
  {
    "file": "dye_orange_carpet.json",
    "item": "orange_carpet",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "orange_dye"
      },
      [
        {
          "item": "black_carpet"
        },
        {
          "item": "blue_carpet"
        },
        {
          "item": "brown_carpet"
        },
        {
          "item": "cyan_carpet"
        },
        {
          "item": "gray_carpet"
        },
        {
          "item": "green_carpet"
        },
        {
          "item": "light_blue_carpet"
        },
        {
          "item": "light_gray_carpet"
        },
        {
          "item": "lime_carpet"
        },
        {
          "item": "magenta_carpet"
        },
        {
          "item": "pink_carpet"
        },
        {
          "item": "purple_carpet"
        },
        {
          "item": "red_carpet"
        },
        {
          "item": "yellow_carpet"
        },
        {
          "item": "white_carpet"
        }
      ]
    ]
  },
  {
    "file": "dye_orange_wool.json",
    "item": "orange_wool",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "orange_dye"
      },
      [
        {
          "item": "black_wool"
        },
        {
          "item": "blue_wool"
        },
        {
          "item": "brown_wool"
        },
        {
          "item": "cyan_wool"
        },
        {
          "item": "gray_wool"
        },
        {
          "item": "green_wool"
        },
        {
          "item": "light_blue_wool"
        },
        {
          "item": "light_gray_wool"
        },
        {
          "item": "lime_wool"
        },
        {
          "item": "magenta_wool"
        },
        {
          "item": "pink_wool"
        },
        {
          "item": "purple_wool"
        },
        {
          "item": "red_wool"
        },
        {
          "item": "yellow_wool"
        },
        {
          "item": "white_wool"
        }
      ]
    ]
  },
  {
    "file": "dye_pink_bed.json",
    "item": "pink_bed",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "pink_dye"
      },
      [
        {
          "item": "black_bed"
        },
        {
          "item": "blue_bed"
        },
        {
          "item": "brown_bed"
        },
        {
          "item": "cyan_bed"
        },
        {
          "item": "gray_bed"
        },
        {
          "item": "green_bed"
        },
        {
          "item": "light_blue_bed"
        },
        {
          "item": "light_gray_bed"
        },
        {
          "item": "lime_bed"
        },
        {
          "item": "magenta_bed"
        },
        {
          "item": "orange_bed"
        },
        {
          "item": "purple_bed"
        },
        {
          "item": "red_bed"
        },
        {
          "item": "yellow_bed"
        },
        {
          "item": "white_bed"
        }
      ]
    ]
  },
  {
    "file": "dye_pink_carpet.json",
    "item": "pink_carpet",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "pink_dye"
      },
      [
        {
          "item": "black_carpet"
        },
        {
          "item": "blue_carpet"
        },
        {
          "item": "brown_carpet"
        },
        {
          "item": "cyan_carpet"
        },
        {
          "item": "gray_carpet"
        },
        {
          "item": "green_carpet"
        },
        {
          "item": "light_blue_carpet"
        },
        {
          "item": "light_gray_carpet"
        },
        {
          "item": "lime_carpet"
        },
        {
          "item": "magenta_carpet"
        },
        {
          "item": "orange_carpet"
        },
        {
          "item": "purple_carpet"
        },
        {
          "item": "red_carpet"
        },
        {
          "item": "yellow_carpet"
        },
        {
          "item": "white_carpet"
        }
      ]
    ]
  },
  {
    "file": "dye_pink_wool.json",
    "item": "pink_wool",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "pink_dye"
      },
      [
        {
          "item": "black_wool"
        },
        {
          "item": "blue_wool"
        },
        {
          "item": "brown_wool"
        },
        {
          "item": "cyan_wool"
        },
        {
          "item": "gray_wool"
        },
        {
          "item": "green_wool"
        },
        {
          "item": "light_blue_wool"
        },
        {
          "item": "light_gray_wool"
        },
        {
          "item": "lime_wool"
        },
        {
          "item": "magenta_wool"
        },
        {
          "item": "orange_wool"
        },
        {
          "item": "purple_wool"
        },
        {
          "item": "red_wool"
        },
        {
          "item": "yellow_wool"
        },
        {
          "item": "white_wool"
        }
      ]
    ]
  },
  {
    "file": "dye_purple_bed.json",
    "item": "purple_bed",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "purple_dye"
      },
      [
        {
          "item": "black_bed"
        },
        {
          "item": "blue_bed"
        },
        {
          "item": "brown_bed"
        },
        {
          "item": "cyan_bed"
        },
        {
          "item": "gray_bed"
        },
        {
          "item": "green_bed"
        },
        {
          "item": "light_blue_bed"
        },
        {
          "item": "light_gray_bed"
        },
        {
          "item": "lime_bed"
        },
        {
          "item": "magenta_bed"
        },
        {
          "item": "orange_bed"
        },
        {
          "item": "pink_bed"
        },
        {
          "item": "red_bed"
        },
        {
          "item": "yellow_bed"
        },
        {
          "item": "white_bed"
        }
      ]
    ]
  },
  {
    "file": "dye_purple_carpet.json",
    "item": "purple_carpet",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "purple_dye"
      },
      [
        {
          "item": "black_carpet"
        },
        {
          "item": "blue_carpet"
        },
        {
          "item": "brown_carpet"
        },
        {
          "item": "cyan_carpet"
        },
        {
          "item": "gray_carpet"
        },
        {
          "item": "green_carpet"
        },
        {
          "item": "light_blue_carpet"
        },
        {
          "item": "light_gray_carpet"
        },
        {
          "item": "lime_carpet"
        },
        {
          "item": "magenta_carpet"
        },
        {
          "item": "orange_carpet"
        },
        {
          "item": "pink_carpet"
        },
        {
          "item": "red_carpet"
        },
        {
          "item": "yellow_carpet"
        },
        {
          "item": "white_carpet"
        }
      ]
    ]
  },
  {
    "file": "dye_purple_wool.json",
    "item": "purple_wool",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "purple_dye"
      },
      [
        {
          "item": "black_wool"
        },
        {
          "item": "blue_wool"
        },
        {
          "item": "brown_wool"
        },
        {
          "item": "cyan_wool"
        },
        {
          "item": "gray_wool"
        },
        {
          "item": "green_wool"
        },
        {
          "item": "light_blue_wool"
        },
        {
          "item": "light_gray_wool"
        },
        {
          "item": "lime_wool"
        },
        {
          "item": "magenta_wool"
        },
        {
          "item": "orange_wool"
        },
        {
          "item": "pink_wool"
        },
        {
          "item": "red_wool"
        },
        {
          "item": "yellow_wool"
        },
        {
          "item": "white_wool"
        }
      ]
    ]
  },
  {
    "file": "dye_red_bed.json",
    "item": "red_bed",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "red_dye"
      },
      [
        {
          "item": "black_bed"
        },
        {
          "item": "blue_bed"
        },
        {
          "item": "brown_bed"
        },
        {
          "item": "cyan_bed"
        },
        {
          "item": "gray_bed"
        },
        {
          "item": "green_bed"
        },
        {
          "item": "light_blue_bed"
        },
        {
          "item": "light_gray_bed"
        },
        {
          "item": "lime_bed"
        },
        {
          "item": "magenta_bed"
        },
        {
          "item": "orange_bed"
        },
        {
          "item": "pink_bed"
        },
        {
          "item": "purple_bed"
        },
        {
          "item": "yellow_bed"
        },
        {
          "item": "white_bed"
        }
      ]
    ]
  },
  {
    "file": "dye_red_carpet.json",
    "item": "red_carpet",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "red_dye"
      },
      [
        {
          "item": "black_carpet"
        },
        {
          "item": "blue_carpet"
        },
        {
          "item": "brown_carpet"
        },
        {
          "item": "cyan_carpet"
        },
        {
          "item": "gray_carpet"
        },
        {
          "item": "green_carpet"
        },
        {
          "item": "light_blue_carpet"
        },
        {
          "item": "light_gray_carpet"
        },
        {
          "item": "lime_carpet"
        },
        {
          "item": "magenta_carpet"
        },
        {
          "item": "orange_carpet"
        },
        {
          "item": "pink_carpet"
        },
        {
          "item": "purple_carpet"
        },
        {
          "item": "yellow_carpet"
        },
        {
          "item": "white_carpet"
        }
      ]
    ]
  },
  {
    "file": "dye_red_wool.json",
    "item": "red_wool",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "red_dye"
      },
      [
        {
          "item": "black_wool"
        },
        {
          "item": "blue_wool"
        },
        {
          "item": "brown_wool"
        },
        {
          "item": "cyan_wool"
        },
        {
          "item": "gray_wool"
        },
        {
          "item": "green_wool"
        },
        {
          "item": "light_blue_wool"
        },
        {
          "item": "light_gray_wool"
        },
        {
          "item": "lime_wool"
        },
        {
          "item": "magenta_wool"
        },
        {
          "item": "orange_wool"
        },
        {
          "item": "pink_wool"
        },
        {
          "item": "purple_wool"
        },
        {
          "item": "yellow_wool"
        },
        {
          "item": "white_wool"
        }
      ]
    ]
  },
  {
    "file": "dye_white_bed.json",
    "item": "white_bed",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "white_dye"
      },
      [
        {
          "item": "black_bed"
        },
        {
          "item": "blue_bed"
        },
        {
          "item": "brown_bed"
        },
        {
          "item": "cyan_bed"
        },
        {
          "item": "gray_bed"
        },
        {
          "item": "green_bed"
        },
        {
          "item": "light_blue_bed"
        },
        {
          "item": "light_gray_bed"
        },
        {
          "item": "lime_bed"
        },
        {
          "item": "magenta_bed"
        },
        {
          "item": "orange_bed"
        },
        {
          "item": "pink_bed"
        },
        {
          "item": "purple_bed"
        },
        {
          "item": "red_bed"
        },
        {
          "item": "yellow_bed"
        }
      ]
    ]
  },
  {
    "file": "dye_white_carpet.json",
    "item": "white_carpet",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "white_dye"
      },
      [
        {
          "item": "black_carpet"
        },
        {
          "item": "blue_carpet"
        },
        {
          "item": "brown_carpet"
        },
        {
          "item": "cyan_carpet"
        },
        {
          "item": "gray_carpet"
        },
        {
          "item": "green_carpet"
        },
        {
          "item": "light_blue_carpet"
        },
        {
          "item": "light_gray_carpet"
        },
        {
          "item": "lime_carpet"
        },
        {
          "item": "magenta_carpet"
        },
        {
          "item": "orange_carpet"
        },
        {
          "item": "pink_carpet"
        },
        {
          "item": "purple_carpet"
        },
        {
          "item": "red_carpet"
        },
        {
          "item": "yellow_carpet"
        }
      ]
    ]
  },
  {
    "file": "dye_white_wool.json",
    "item": "white_wool",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "white_dye"
      },
      [
        {
          "item": "black_wool"
        },
        {
          "item": "blue_wool"
        },
        {
          "item": "brown_wool"
        },
        {
          "item": "cyan_wool"
        },
        {
          "item": "gray_wool"
        },
        {
          "item": "green_wool"
        },
        {
          "item": "light_blue_wool"
        },
        {
          "item": "light_gray_wool"
        },
        {
          "item": "lime_wool"
        },
        {
          "item": "magenta_wool"
        },
        {
          "item": "orange_wool"
        },
        {
          "item": "pink_wool"
        },
        {
          "item": "purple_wool"
        },
        {
          "item": "red_wool"
        },
        {
          "item": "yellow_wool"
        }
      ]
    ]
  },
  {
    "file": "dye_yellow_bed.json",
    "item": "yellow_bed",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "yellow_dye"
      },
      [
        {
          "item": "black_bed"
        },
        {
          "item": "blue_bed"
        },
        {
          "item": "brown_bed"
        },
        {
          "item": "cyan_bed"
        },
        {
          "item": "gray_bed"
        },
        {
          "item": "green_bed"
        },
        {
          "item": "light_blue_bed"
        },
        {
          "item": "light_gray_bed"
        },
        {
          "item": "lime_bed"
        },
        {
          "item": "magenta_bed"
        },
        {
          "item": "orange_bed"
        },
        {
          "item": "pink_bed"
        },
        {
          "item": "purple_bed"
        },
        {
          "item": "red_bed"
        },
        {
          "item": "white_bed"
        }
      ]
    ]
  },
  {
    "file": "dye_yellow_carpet.json",
    "item": "yellow_carpet",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "yellow_dye"
      },
      [
        {
          "item": "black_carpet"
        },
        {
          "item": "blue_carpet"
        },
        {
          "item": "brown_carpet"
        },
        {
          "item": "cyan_carpet"
        },
        {
          "item": "gray_carpet"
        },
        {
          "item": "green_carpet"
        },
        {
          "item": "light_blue_carpet"
        },
        {
          "item": "light_gray_carpet"
        },
        {
          "item": "lime_carpet"
        },
        {
          "item": "magenta_carpet"
        },
        {
          "item": "orange_carpet"
        },
        {
          "item": "pink_carpet"
        },
        {
          "item": "purple_carpet"
        },
        {
          "item": "red_carpet"
        },
        {
          "item": "white_carpet"
        }
      ]
    ]
  },
  {
    "file": "dye_yellow_wool.json",
    "item": "yellow_wool",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "yellow_dye"
      },
      [
        {
          "item": "black_wool"
        },
        {
          "item": "blue_wool"
        },
        {
          "item": "brown_wool"
        },
        {
          "item": "cyan_wool"
        },
        {
          "item": "gray_wool"
        },
        {
          "item": "green_wool"
        },
        {
          "item": "light_blue_wool"
        },
        {
          "item": "light_gray_wool"
        },
        {
          "item": "lime_wool"
        },
        {
          "item": "magenta_wool"
        },
        {
          "item": "orange_wool"
        },
        {
          "item": "pink_wool"
        },
        {
          "item": "purple_wool"
        },
        {
          "item": "red_wool"
        },
        {
          "item": "white_wool"
        }
      ]
    ]
  },
  {
    "file": "emerald.json",
    "item": "emerald",
    "count": 9,
    "patterns": {},
    "ingredients": [
      {
        "item": "emerald_block"
      }
    ]
  },
  {
    "file": "emerald_block.json",
    "item": "emerald_block",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "emerald"
        },
        "2_key": {
          "item": "emerald"
        },
        "3_key": {
          "item": "emerald"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "emerald"
        },
        "2_key": {
          "item": "emerald"
        },
        "3_key": {
          "item": "emerald"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "emerald"
        },
        "2_key": {
          "item": "emerald"
        },
        "3_key": {
          "item": "emerald"
        }
      }
    }
  },
  {
    "file": "enchanting_table.json",
    "item": "enchanting_table",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "book"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "obsidian"
        },
        "3_key": {
          "item": "diamond"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "obsidian"
        },
        "2_key": {
          "item": "obsidian"
        },
        "3_key": {
          "item": "obsidian"
        }
      }
    }
  },
  {
    "file": "ender_chest.json",
    "item": "ender_chest",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "obsidian"
        },
        "2_key": {
          "item": "obsidian"
        },
        "3_key": {
          "item": "obsidian"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "obsidian"
        },
        "2_key": {
          "item": "ender_eye"
        },
        "3_key": {
          "item": "obsidian"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "obsidian"
        },
        "2_key": {
          "item": "obsidian"
        },
        "3_key": {
          "item": "obsidian"
        }
      }
    }
  },
  {
    "file": "ender_eye.json",
    "item": "ender_eye",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "ender_pearl"
      },
      {
        "item": "blaze_powder"
      }
    ]
  },
  {
    "file": "end_crystal.json",
    "item": "end_crystal",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "glass"
        },
        "2_key": {
          "item": "glass"
        },
        "3_key": {
          "item": "glass"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "glass"
        },
        "2_key": {
          "item": "ender_eye"
        },
        "3_key": {
          "item": "glass"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "glass"
        },
        "2_key": {
          "item": "ghast_tear"
        },
        "3_key": {
          "item": "glass"
        }
      }
    }
  },
  {
    "file": "end_rod.json",
    "item": "end_rod",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "blaze_rod"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "popped_chorus_fruit"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "end_stone_bricks.json",
    "item": "end_stone_bricks",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "end_stone"
        },
        "2_key": {
          "item": "end_stone"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "end_stone"
        },
        "2_key": {
          "item": "end_stone"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "end_stone_brick_slab.json",
    "item": "end_stone_brick_slab",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "end_stone_bricks"
        },
        "2_key": {
          "item": "end_stone_bricks"
        },
        "3_key": {
          "item": "end_stone_bricks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "end_stone_brick_stairs.json",
    "item": "end_stone_brick_stairs",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "end_stone_bricks"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "end_stone_bricks"
        },
        "2_key": {
          "item": "end_stone_bricks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "end_stone_bricks"
        },
        "2_key": {
          "item": "end_stone_bricks"
        },
        "3_key": {
          "item": "end_stone_bricks"
        }
      }
    }
  },
  {
    "file": "end_stone_brick_wall.json",
    "item": "end_stone_brick_wall",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "end_stone_bricks"
        },
        "2_key": {
          "item": "end_stone_bricks"
        },
        "3_key": {
          "item": "end_stone_bricks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "end_stone_bricks"
        },
        "2_key": {
          "item": "end_stone_bricks"
        },
        "3_key": {
          "item": "end_stone_bricks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "exposed_cut_copper.json",
    "item": "exposed_cut_copper",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "exposed_copper"
        },
        "2_key": {
          "item": "exposed_copper"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "exposed_copper"
        },
        "2_key": {
          "item": "exposed_copper"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "exposed_cut_copper_slab.json",
    "item": "exposed_cut_copper_slab",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "exposed_cut_copper"
        },
        "2_key": {
          "item": "exposed_cut_copper"
        },
        "3_key": {
          "item": "exposed_cut_copper"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "exposed_cut_copper_stairs.json",
    "item": "exposed_cut_copper_stairs",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "exposed_cut_copper"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "exposed_cut_copper"
        },
        "2_key": {
          "item": "exposed_cut_copper"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "exposed_cut_copper"
        },
        "2_key": {
          "item": "exposed_cut_copper"
        },
        "3_key": {
          "item": "exposed_cut_copper"
        }
      }
    }
  },
  {
    "file": "eye_armor_trim_smithing_template.json",
    "item": "eye_armor_trim_smithing_template",
    "count": 2,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "eye_armor_trim_smithing_template"
        },
        "3_key": {
          "item": "diamond"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "end_stone"
        },
        "3_key": {
          "item": "diamond"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "diamond"
        },
        "3_key": {
          "item": "diamond"
        }
      }
    }
  },
  {
    "file": "fermented_spider_eye.json",
    "item": "fermented_spider_eye",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "spider_eye"
      },
      {
        "item": "brown_mushroom"
      },
      {
        "item": "sugar"
      }
    ]
  },
  {
    "file": "firework_rocket_simple.json",
    "item": "firework_rocket",
    "count": 3,
    "patterns": {},
    "ingredients": [
      {
        "item": "gunpowder"
      },
      {
        "item": "paper"
      }
    ]
  },
  {
    "file": "fire_charge.json",
    "item": "fire_charge",
    "count": 3,
    "patterns": {},
    "ingredients": [
      {
        "item": "gunpowder"
      },
      {
        "item": "blaze_powder"
      },
      [
        {
          "item": "coal"
        },
        {
          "item": "charcoal"
        }
      ]
    ]
  },
  {
    "file": "fishing_rod.json",
    "item": "fishing_rod",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "stick"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "string"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "string"
        }
      }
    }
  },
  {
    "file": "fletching_table.json",
    "item": "fletching_table",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "flint"
        },
        "2_key": {
          "item": "flint"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "tag": "planks"
        },
        "2_key": {
          "tag": "planks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "tag": "planks"
        },
        "2_key": {
          "tag": "planks"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "flint_and_steel.json",
    "item": "flint_and_steel",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "iron_ingot"
      },
      {
        "item": "flint"
      }
    ]
  },
  {
    "file": "flower_banner_pattern.json",
    "item": "flower_banner_pattern",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "paper"
      },
      {
        "item": "oxeye_daisy"
      }
    ]
  },
  {
    "file": "flower_pot.json",
    "item": "flower_pot",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "brick"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "brick"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "brick"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "furnace.json",
    "item": "furnace",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "tag": "stone_crafting_materials"
        },
        "2_key": {
          "tag": "stone_crafting_materials"
        },
        "3_key": {
          "tag": "stone_crafting_materials"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "tag": "stone_crafting_materials"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "tag": "stone_crafting_materials"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "tag": "stone_crafting_materials"
        },
        "2_key": {
          "tag": "stone_crafting_materials"
        },
        "3_key": {
          "tag": "stone_crafting_materials"
        }
      }
    }
  },
  {
    "file": "furnace_minecart.json",
    "item": "furnace_minecart",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "furnace"
      },
      {
        "item": "minecart"
      }
    ]
  },
  {
    "file": "glass_bottle.json",
    "item": "glass_bottle",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "glass"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "glass"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "glass"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "glass_pane.json",
    "item": "glass_pane",
    "count": 16,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "glass"
        },
        "2_key": {
          "item": "glass"
        },
        "3_key": {
          "item": "glass"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "glass"
        },
        "2_key": {
          "item": "glass"
        },
        "3_key": {
          "item": "glass"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "glistering_melon_slice.json",
    "item": "glistering_melon_slice",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "gold_nugget"
        },
        "2_key": {
          "item": "gold_nugget"
        },
        "3_key": {
          "item": "gold_nugget"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "gold_nugget"
        },
        "2_key": {
          "item": "melon_slice"
        },
        "3_key": {
          "item": "gold_nugget"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "gold_nugget"
        },
        "2_key": {
          "item": "gold_nugget"
        },
        "3_key": {
          "item": "gold_nugget"
        }
      }
    }
  },
  {
    "file": "glowstone.json",
    "item": "glowstone",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "glowstone_dust"
        },
        "2_key": {
          "item": "glowstone_dust"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "glowstone_dust"
        },
        "2_key": {
          "item": "glowstone_dust"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "glow_item_frame.json",
    "item": "glow_item_frame",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "item_frame"
      },
      {
        "item": "glow_ink_sac"
      }
    ]
  },
  {
    "file": "golden_apple.json",
    "item": "golden_apple",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "gold_ingot"
        },
        "2_key": {
          "item": "gold_ingot"
        },
        "3_key": {
          "item": "gold_ingot"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "gold_ingot"
        },
        "2_key": {
          "item": "apple"
        },
        "3_key": {
          "item": "gold_ingot"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "gold_ingot"
        },
        "2_key": {
          "item": "gold_ingot"
        },
        "3_key": {
          "item": "gold_ingot"
        }
      }
    }
  },
  {
    "file": "golden_axe.json",
    "item": "golden_axe",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "gold_ingot"
        },
        "2_key": {
          "item": "gold_ingot"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "gold_ingot"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "golden_boots.json",
    "item": "golden_boots",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "gold_ingot"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "gold_ingot"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "gold_ingot"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "gold_ingot"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "golden_carrot.json",
    "item": "golden_carrot",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "gold_nugget"
        },
        "2_key": {
          "item": "gold_nugget"
        },
        "3_key": {
          "item": "gold_nugget"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "gold_nugget"
        },
        "2_key": {
          "item": "carrot"
        },
        "3_key": {
          "item": "gold_nugget"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "gold_nugget"
        },
        "2_key": {
          "item": "gold_nugget"
        },
        "3_key": {
          "item": "gold_nugget"
        }
      }
    }
  },
  {
    "file": "golden_chestplate.json",
    "item": "golden_chestplate",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "gold_ingot"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "gold_ingot"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "gold_ingot"
        },
        "2_key": {
          "item": "gold_ingot"
        },
        "3_key": {
          "item": "gold_ingot"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "gold_ingot"
        },
        "2_key": {
          "item": "gold_ingot"
        },
        "3_key": {
          "item": "gold_ingot"
        }
      }
    }
  },
  {
    "file": "golden_helmet.json",
    "item": "golden_helmet",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "gold_ingot"
        },
        "2_key": {
          "item": "gold_ingot"
        },
        "3_key": {
          "item": "gold_ingot"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "gold_ingot"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "gold_ingot"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "golden_hoe.json",
    "item": "golden_hoe",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "gold_ingot"
        },
        "2_key": {
          "item": "gold_ingot"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "golden_leggings.json",
    "item": "golden_leggings",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "gold_ingot"
        },
        "2_key": {
          "item": "gold_ingot"
        },
        "3_key": {
          "item": "gold_ingot"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "gold_ingot"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "gold_ingot"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "gold_ingot"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "gold_ingot"
        }
      }
    }
  },
  {
    "file": "golden_pickaxe.json",
    "item": "golden_pickaxe",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "gold_ingot"
        },
        "2_key": {
          "item": "gold_ingot"
        },
        "3_key": {
          "item": "gold_ingot"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "golden_shovel.json",
    "item": "golden_shovel",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "gold_ingot"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "golden_sword.json",
    "item": "golden_sword",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "gold_ingot"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "gold_ingot"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "gold_block.json",
    "item": "gold_block",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "gold_ingot"
        },
        "2_key": {
          "item": "gold_ingot"
        },
        "3_key": {
          "item": "gold_ingot"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "gold_ingot"
        },
        "2_key": {
          "item": "gold_ingot"
        },
        "3_key": {
          "item": "gold_ingot"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "gold_ingot"
        },
        "2_key": {
          "item": "gold_ingot"
        },
        "3_key": {
          "item": "gold_ingot"
        }
      }
    }
  },
  {
    "file": "gold_ingot_from_gold_block.json",
    "item": "gold_ingot",
    "count": 9,
    "patterns": {},
    "ingredients": [
      {
        "item": "gold_block"
      }
    ]
  },
  {
    "file": "gold_ingot_from_nuggets.json",
    "item": "gold_ingot",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "gold_nugget"
        },
        "2_key": {
          "item": "gold_nugget"
        },
        "3_key": {
          "item": "gold_nugget"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "gold_nugget"
        },
        "2_key": {
          "item": "gold_nugget"
        },
        "3_key": {
          "item": "gold_nugget"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "gold_nugget"
        },
        "2_key": {
          "item": "gold_nugget"
        },
        "3_key": {
          "item": "gold_nugget"
        }
      }
    }
  },
  {
    "file": "gold_nugget.json",
    "item": "gold_nugget",
    "count": 9,
    "patterns": {},
    "ingredients": [
      {
        "item": "gold_ingot"
      }
    ]
  },
  {
    "file": "granite.json",
    "item": "granite",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "diorite"
      },
      {
        "item": "quartz"
      }
    ]
  },
  {
    "file": "granite_slab.json",
    "item": "granite_slab",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "granite"
        },
        "2_key": {
          "item": "granite"
        },
        "3_key": {
          "item": "granite"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "granite_stairs.json",
    "item": "granite_stairs",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "granite"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "granite"
        },
        "2_key": {
          "item": "granite"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "granite"
        },
        "2_key": {
          "item": "granite"
        },
        "3_key": {
          "item": "granite"
        }
      }
    }
  },
  {
    "file": "granite_wall.json",
    "item": "granite_wall",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "granite"
        },
        "2_key": {
          "item": "granite"
        },
        "3_key": {
          "item": "granite"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "granite"
        },
        "2_key": {
          "item": "granite"
        },
        "3_key": {
          "item": "granite"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "gray_banner.json",
    "item": "gray_banner",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "gray_wool"
        },
        "2_key": {
          "item": "gray_wool"
        },
        "3_key": {
          "item": "gray_wool"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "gray_wool"
        },
        "2_key": {
          "item": "gray_wool"
        },
        "3_key": {
          "item": "gray_wool"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "gray_bed.json",
    "item": "gray_bed",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "gray_wool"
        },
        "2_key": {
          "item": "gray_wool"
        },
        "3_key": {
          "item": "gray_wool"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "tag": "planks"
        },
        "2_key": {
          "tag": "planks"
        },
        "3_key": {
          "tag": "planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "gray_candle.json",
    "item": "gray_candle",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "candle"
      },
      {
        "item": "gray_dye"
      }
    ]
  },
  {
    "file": "gray_carpet.json",
    "item": "gray_carpet",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "gray_wool"
        },
        "2_key": {
          "item": "gray_wool"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "gray_concrete_powder.json",
    "item": "gray_concrete_powder",
    "count": 8,
    "patterns": {},
    "ingredients": [
      {
        "item": "gray_dye"
      },
      {
        "item": "sand"
      },
      {
        "item": "sand"
      },
      {
        "item": "sand"
      },
      {
        "item": "sand"
      },
      {
        "item": "gravel"
      },
      {
        "item": "gravel"
      },
      {
        "item": "gravel"
      },
      {
        "item": "gravel"
      }
    ]
  },
  {
    "file": "gray_dye.json",
    "item": "gray_dye",
    "count": 2,
    "patterns": {},
    "ingredients": [
      {
        "item": "black_dye"
      },
      {
        "item": "white_dye"
      }
    ]
  },
  {
    "file": "gray_stained_glass.json",
    "item": "gray_stained_glass",
    "count": 8,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "glass"
        },
        "2_key": {
          "item": "glass"
        },
        "3_key": {
          "item": "glass"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "glass"
        },
        "2_key": {
          "item": "gray_dye"
        },
        "3_key": {
          "item": "glass"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "glass"
        },
        "2_key": {
          "item": "glass"
        },
        "3_key": {
          "item": "glass"
        }
      }
    }
  },
  {
    "file": "gray_stained_glass_pane.json",
    "item": "gray_stained_glass_pane",
    "count": 16,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "gray_stained_glass"
        },
        "2_key": {
          "item": "gray_stained_glass"
        },
        "3_key": {
          "item": "gray_stained_glass"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "gray_stained_glass"
        },
        "2_key": {
          "item": "gray_stained_glass"
        },
        "3_key": {
          "item": "gray_stained_glass"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "gray_stained_glass_pane_from_glass_pane.json",
    "item": "gray_stained_glass_pane",
    "count": 8,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "glass_pane"
        },
        "2_key": {
          "item": "glass_pane"
        },
        "3_key": {
          "item": "glass_pane"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "glass_pane"
        },
        "2_key": {
          "item": "gray_dye"
        },
        "3_key": {
          "item": "glass_pane"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "glass_pane"
        },
        "2_key": {
          "item": "glass_pane"
        },
        "3_key": {
          "item": "glass_pane"
        }
      }
    }
  },
  {
    "file": "gray_terracotta.json",
    "item": "gray_terracotta",
    "count": 8,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "terracotta"
        },
        "2_key": {
          "item": "terracotta"
        },
        "3_key": {
          "item": "terracotta"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "terracotta"
        },
        "2_key": {
          "item": "gray_dye"
        },
        "3_key": {
          "item": "terracotta"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "terracotta"
        },
        "2_key": {
          "item": "terracotta"
        },
        "3_key": {
          "item": "terracotta"
        }
      }
    }
  },
  {
    "file": "green_banner.json",
    "item": "green_banner",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "green_wool"
        },
        "2_key": {
          "item": "green_wool"
        },
        "3_key": {
          "item": "green_wool"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "green_wool"
        },
        "2_key": {
          "item": "green_wool"
        },
        "3_key": {
          "item": "green_wool"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "green_bed.json",
    "item": "green_bed",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "green_wool"
        },
        "2_key": {
          "item": "green_wool"
        },
        "3_key": {
          "item": "green_wool"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "tag": "planks"
        },
        "2_key": {
          "tag": "planks"
        },
        "3_key": {
          "tag": "planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "green_candle.json",
    "item": "green_candle",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "candle"
      },
      {
        "item": "green_dye"
      }
    ]
  },
  {
    "file": "green_carpet.json",
    "item": "green_carpet",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "green_wool"
        },
        "2_key": {
          "item": "green_wool"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "green_concrete_powder.json",
    "item": "green_concrete_powder",
    "count": 8,
    "patterns": {},
    "ingredients": [
      {
        "item": "green_dye"
      },
      {
        "item": "sand"
      },
      {
        "item": "sand"
      },
      {
        "item": "sand"
      },
      {
        "item": "sand"
      },
      {
        "item": "gravel"
      },
      {
        "item": "gravel"
      },
      {
        "item": "gravel"
      },
      {
        "item": "gravel"
      }
    ]
  },
  {
    "file": "green_stained_glass.json",
    "item": "green_stained_glass",
    "count": 8,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "glass"
        },
        "2_key": {
          "item": "glass"
        },
        "3_key": {
          "item": "glass"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "glass"
        },
        "2_key": {
          "item": "green_dye"
        },
        "3_key": {
          "item": "glass"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "glass"
        },
        "2_key": {
          "item": "glass"
        },
        "3_key": {
          "item": "glass"
        }
      }
    }
  },
  {
    "file": "green_stained_glass_pane.json",
    "item": "green_stained_glass_pane",
    "count": 16,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "green_stained_glass"
        },
        "2_key": {
          "item": "green_stained_glass"
        },
        "3_key": {
          "item": "green_stained_glass"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "green_stained_glass"
        },
        "2_key": {
          "item": "green_stained_glass"
        },
        "3_key": {
          "item": "green_stained_glass"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "green_stained_glass_pane_from_glass_pane.json",
    "item": "green_stained_glass_pane",
    "count": 8,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "glass_pane"
        },
        "2_key": {
          "item": "glass_pane"
        },
        "3_key": {
          "item": "glass_pane"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "glass_pane"
        },
        "2_key": {
          "item": "green_dye"
        },
        "3_key": {
          "item": "glass_pane"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "glass_pane"
        },
        "2_key": {
          "item": "glass_pane"
        },
        "3_key": {
          "item": "glass_pane"
        }
      }
    }
  },
  {
    "file": "green_terracotta.json",
    "item": "green_terracotta",
    "count": 8,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "terracotta"
        },
        "2_key": {
          "item": "terracotta"
        },
        "3_key": {
          "item": "terracotta"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "terracotta"
        },
        "2_key": {
          "item": "green_dye"
        },
        "3_key": {
          "item": "terracotta"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "terracotta"
        },
        "2_key": {
          "item": "terracotta"
        },
        "3_key": {
          "item": "terracotta"
        }
      }
    }
  },
  {
    "file": "grindstone.json",
    "item": "grindstone",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "item": "stone_slab"
        },
        "3_key": {
          "item": "stick"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "tag": "planks"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "tag": "planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "hay_block.json",
    "item": "hay_block",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "wheat"
      },
      {
        "item": "wheat"
      },
      {
        "item": "wheat"
      },
      {
        "item": "wheat"
      },
      {
        "item": "wheat"
      },
      {
        "item": "wheat"
      },
      {
        "item": "wheat"
      },
      {
        "item": "wheat"
      },
      {
        "item": "wheat"
      }
    ]
  },
  {
    "file": "heavy_weighted_pressure_plate.json",
    "item": "heavy_weighted_pressure_plate",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "iron_ingot"
        },
        "2_key": {
          "item": "iron_ingot"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "honeycomb_block.json",
    "item": "honeycomb_block",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "honeycomb"
        },
        "2_key": {
          "item": "honeycomb"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "honeycomb"
        },
        "2_key": {
          "item": "honeycomb"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "honey_block.json",
    "item": "honey_block",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "honey_bottle"
        },
        "2_key": {
          "item": "honey_bottle"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "honey_bottle"
        },
        "2_key": {
          "item": "honey_bottle"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "honey_bottle.json",
    "item": "honey_bottle",
    "count": 4,
    "patterns": {},
    "ingredients": [
      {
        "item": "honey_block"
      },
      {
        "item": "glass_bottle"
      },
      {
        "item": "glass_bottle"
      },
      {
        "item": "glass_bottle"
      },
      {
        "item": "glass_bottle"
      }
    ]
  },
  {
    "file": "hopper.json",
    "item": "hopper",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "iron_ingot"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "iron_ingot"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "iron_ingot"
        },
        "2_key": {
          "item": "chest"
        },
        "3_key": {
          "item": "iron_ingot"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "iron_ingot"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "hopper_minecart.json",
    "item": "hopper_minecart",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "hopper"
      },
      {
        "item": "minecart"
      }
    ]
  },
  {
    "file": "host_armor_trim_smithing_template.json",
    "item": "host_armor_trim_smithing_template",
    "count": 2,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "host_armor_trim_smithing_template"
        },
        "3_key": {
          "item": "diamond"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "terracotta"
        },
        "3_key": {
          "item": "diamond"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "diamond"
        },
        "3_key": {
          "item": "diamond"
        }
      }
    }
  },
  {
    "file": "iron_axe.json",
    "item": "iron_axe",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "iron_ingot"
        },
        "2_key": {
          "item": "iron_ingot"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "iron_ingot"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "iron_bars.json",
    "item": "iron_bars",
    "count": 16,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "iron_ingot"
        },
        "2_key": {
          "item": "iron_ingot"
        },
        "3_key": {
          "item": "iron_ingot"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "iron_ingot"
        },
        "2_key": {
          "item": "iron_ingot"
        },
        "3_key": {
          "item": "iron_ingot"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "iron_block.json",
    "item": "iron_block",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "iron_ingot"
        },
        "2_key": {
          "item": "iron_ingot"
        },
        "3_key": {
          "item": "iron_ingot"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "iron_ingot"
        },
        "2_key": {
          "item": "iron_ingot"
        },
        "3_key": {
          "item": "iron_ingot"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "iron_ingot"
        },
        "2_key": {
          "item": "iron_ingot"
        },
        "3_key": {
          "item": "iron_ingot"
        }
      }
    }
  },
  {
    "file": "iron_boots.json",
    "item": "iron_boots",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "iron_ingot"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "iron_ingot"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "iron_ingot"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "iron_ingot"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "iron_chestplate.json",
    "item": "iron_chestplate",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "iron_ingot"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "iron_ingot"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "iron_ingot"
        },
        "2_key": {
          "item": "iron_ingot"
        },
        "3_key": {
          "item": "iron_ingot"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "iron_ingot"
        },
        "2_key": {
          "item": "iron_ingot"
        },
        "3_key": {
          "item": "iron_ingot"
        }
      }
    }
  },
  {
    "file": "iron_door.json",
    "item": "iron_door",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "iron_ingot"
        },
        "2_key": {
          "item": "iron_ingot"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "iron_ingot"
        },
        "2_key": {
          "item": "iron_ingot"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "iron_ingot"
        },
        "2_key": {
          "item": "iron_ingot"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "iron_helmet.json",
    "item": "iron_helmet",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "iron_ingot"
        },
        "2_key": {
          "item": "iron_ingot"
        },
        "3_key": {
          "item": "iron_ingot"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "iron_ingot"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "iron_ingot"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "iron_hoe.json",
    "item": "iron_hoe",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "iron_ingot"
        },
        "2_key": {
          "item": "iron_ingot"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "iron_ingot_from_iron_block.json",
    "item": "iron_ingot",
    "count": 9,
    "patterns": {},
    "ingredients": [
      {
        "item": "iron_block"
      }
    ]
  },
  {
    "file": "iron_ingot_from_nuggets.json",
    "item": "iron_ingot",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "iron_nugget"
        },
        "2_key": {
          "item": "iron_nugget"
        },
        "3_key": {
          "item": "iron_nugget"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "iron_nugget"
        },
        "2_key": {
          "item": "iron_nugget"
        },
        "3_key": {
          "item": "iron_nugget"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "iron_nugget"
        },
        "2_key": {
          "item": "iron_nugget"
        },
        "3_key": {
          "item": "iron_nugget"
        }
      }
    }
  },
  {
    "file": "iron_leggings.json",
    "item": "iron_leggings",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "iron_ingot"
        },
        "2_key": {
          "item": "iron_ingot"
        },
        "3_key": {
          "item": "iron_ingot"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "iron_ingot"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "iron_ingot"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "iron_ingot"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "iron_ingot"
        }
      }
    }
  },
  {
    "file": "iron_nugget.json",
    "item": "iron_nugget",
    "count": 9,
    "patterns": {},
    "ingredients": [
      {
        "item": "iron_ingot"
      }
    ]
  },
  {
    "file": "iron_pickaxe.json",
    "item": "iron_pickaxe",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "iron_ingot"
        },
        "2_key": {
          "item": "iron_ingot"
        },
        "3_key": {
          "item": "iron_ingot"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "iron_shovel.json",
    "item": "iron_shovel",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "iron_ingot"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "iron_sword.json",
    "item": "iron_sword",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "iron_ingot"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "iron_ingot"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "iron_trapdoor.json",
    "item": "iron_trapdoor",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "iron_ingot"
        },
        "2_key": {
          "item": "iron_ingot"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "iron_ingot"
        },
        "2_key": {
          "item": "iron_ingot"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "item_frame.json",
    "item": "item_frame",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "stick"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "item": "leather"
        },
        "3_key": {
          "item": "stick"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "stick"
        }
      }
    }
  },
  {
    "file": "jack_o_lantern.json",
    "item": "jack_o_lantern",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "carved_pumpkin"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "torch"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "jukebox.json",
    "item": "jukebox",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "tag": "planks"
        },
        "2_key": {
          "tag": "planks"
        },
        "3_key": {
          "tag": "planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "tag": "planks"
        },
        "2_key": {
          "item": "diamond"
        },
        "3_key": {
          "tag": "planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "tag": "planks"
        },
        "2_key": {
          "tag": "planks"
        },
        "3_key": {
          "tag": "planks"
        }
      }
    }
  },
  {
    "file": "jungle_boat.json",
    "item": "jungle_boat",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "jungle_planks"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "jungle_planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "jungle_planks"
        },
        "2_key": {
          "item": "jungle_planks"
        },
        "3_key": {
          "item": "jungle_planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "jungle_button.json",
    "item": "jungle_button",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "jungle_planks"
      }
    ]
  },
  {
    "file": "jungle_chest_boat.json",
    "item": "jungle_chest_boat",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "chest"
      },
      {
        "item": "jungle_boat"
      }
    ]
  },
  {
    "file": "jungle_door.json",
    "item": "jungle_door",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "jungle_planks"
        },
        "2_key": {
          "item": "jungle_planks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "jungle_planks"
        },
        "2_key": {
          "item": "jungle_planks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "jungle_planks"
        },
        "2_key": {
          "item": "jungle_planks"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "jungle_fence.json",
    "item": "jungle_fence",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "jungle_planks"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "jungle_planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "jungle_planks"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "jungle_planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "jungle_fence_gate.json",
    "item": "jungle_fence_gate",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "item": "jungle_planks"
        },
        "3_key": {
          "item": "stick"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "item": "jungle_planks"
        },
        "3_key": {
          "item": "stick"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "jungle_hanging_sign.json",
    "item": "jungle_hanging_sign",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "chain"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "chain"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "stripped_jungle_log"
        },
        "2_key": {
          "item": "stripped_jungle_log"
        },
        "3_key": {
          "item": "stripped_jungle_log"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "stripped_jungle_log"
        },
        "2_key": {
          "item": "stripped_jungle_log"
        },
        "3_key": {
          "item": "stripped_jungle_log"
        }
      }
    }
  },
  {
    "file": "jungle_planks.json",
    "item": "jungle_planks",
    "count": 4,
    "patterns": {},
    "ingredients": [
      {
        "tag": "jungle_logs"
      }
    ]
  },
  {
    "file": "jungle_pressure_plate.json",
    "item": "jungle_pressure_plate",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "jungle_planks"
        },
        "2_key": {
          "item": "jungle_planks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "jungle_sign.json",
    "item": "jungle_sign",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "jungle_planks"
        },
        "2_key": {
          "item": "jungle_planks"
        },
        "3_key": {
          "item": "jungle_planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "jungle_planks"
        },
        "2_key": {
          "item": "jungle_planks"
        },
        "3_key": {
          "item": "jungle_planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "jungle_slab.json",
    "item": "jungle_slab",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "jungle_planks"
        },
        "2_key": {
          "item": "jungle_planks"
        },
        "3_key": {
          "item": "jungle_planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "jungle_stairs.json",
    "item": "jungle_stairs",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "jungle_planks"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "jungle_planks"
        },
        "2_key": {
          "item": "jungle_planks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "jungle_planks"
        },
        "2_key": {
          "item": "jungle_planks"
        },
        "3_key": {
          "item": "jungle_planks"
        }
      }
    }
  },
  {
    "file": "jungle_trapdoor.json",
    "item": "jungle_trapdoor",
    "count": 2,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "jungle_planks"
        },
        "2_key": {
          "item": "jungle_planks"
        },
        "3_key": {
          "item": "jungle_planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "jungle_planks"
        },
        "2_key": {
          "item": "jungle_planks"
        },
        "3_key": {
          "item": "jungle_planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "jungle_wood.json",
    "item": "jungle_wood",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "jungle_log"
        },
        "2_key": {
          "item": "jungle_log"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "jungle_log"
        },
        "2_key": {
          "item": "jungle_log"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "ladder.json",
    "item": "ladder",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "stick"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "stick"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "stick"
        }
      }
    }
  },
  {
    "file": "lantern.json",
    "item": "lantern",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "iron_nugget"
        },
        "2_key": {
          "item": "iron_nugget"
        },
        "3_key": {
          "item": "iron_nugget"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "iron_nugget"
        },
        "2_key": {
          "item": "torch"
        },
        "3_key": {
          "item": "iron_nugget"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "iron_nugget"
        },
        "2_key": {
          "item": "iron_nugget"
        },
        "3_key": {
          "item": "iron_nugget"
        }
      }
    }
  },
  {
    "file": "lapis_block.json",
    "item": "lapis_block",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "lapis_lazuli"
        },
        "2_key": {
          "item": "lapis_lazuli"
        },
        "3_key": {
          "item": "lapis_lazuli"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "lapis_lazuli"
        },
        "2_key": {
          "item": "lapis_lazuli"
        },
        "3_key": {
          "item": "lapis_lazuli"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "lapis_lazuli"
        },
        "2_key": {
          "item": "lapis_lazuli"
        },
        "3_key": {
          "item": "lapis_lazuli"
        }
      }
    }
  },
  {
    "file": "lapis_lazuli.json",
    "item": "lapis_lazuli",
    "count": 9,
    "patterns": {},
    "ingredients": [
      {
        "item": "lapis_block"
      }
    ]
  },
  {
    "file": "lead.json",
    "item": "lead",
    "count": 2,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "string"
        },
        "2_key": {
          "item": "string"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "string"
        },
        "2_key": {
          "item": "slime_ball"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "string"
        }
      }
    }
  },
  {
    "file": "leather.json",
    "item": "leather",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "rabbit_hide"
        },
        "2_key": {
          "item": "rabbit_hide"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "rabbit_hide"
        },
        "2_key": {
          "item": "rabbit_hide"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "leather_boots.json",
    "item": "leather_boots",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "leather"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "leather"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "leather"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "leather"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "leather_chestplate.json",
    "item": "leather_chestplate",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "leather"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "leather"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "leather"
        },
        "2_key": {
          "item": "leather"
        },
        "3_key": {
          "item": "leather"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "leather"
        },
        "2_key": {
          "item": "leather"
        },
        "3_key": {
          "item": "leather"
        }
      }
    }
  },
  {
    "file": "leather_helmet.json",
    "item": "leather_helmet",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "leather"
        },
        "2_key": {
          "item": "leather"
        },
        "3_key": {
          "item": "leather"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "leather"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "leather"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "leather_horse_armor.json",
    "item": "leather_horse_armor",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "leather"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "leather"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "leather"
        },
        "2_key": {
          "item": "leather"
        },
        "3_key": {
          "item": "leather"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "leather"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "leather"
        }
      }
    }
  },
  {
    "file": "leather_leggings.json",
    "item": "leather_leggings",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "leather"
        },
        "2_key": {
          "item": "leather"
        },
        "3_key": {
          "item": "leather"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "leather"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "leather"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "leather"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "leather"
        }
      }
    }
  },
  {
    "file": "lectern.json",
    "item": "lectern",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "tag": "wooden_slabs"
        },
        "2_key": {
          "tag": "wooden_slabs"
        },
        "3_key": {
          "tag": "wooden_slabs"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "bookshelf"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "tag": "wooden_slabs"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "lever.json",
    "item": "lever",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "cobblestone"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "lightning_rod.json",
    "item": "lightning_rod",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "copper_ingot"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "copper_ingot"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "copper_ingot"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "light_blue_banner.json",
    "item": "light_blue_banner",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "light_blue_wool"
        },
        "2_key": {
          "item": "light_blue_wool"
        },
        "3_key": {
          "item": "light_blue_wool"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "light_blue_wool"
        },
        "2_key": {
          "item": "light_blue_wool"
        },
        "3_key": {
          "item": "light_blue_wool"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "light_blue_bed.json",
    "item": "light_blue_bed",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "light_blue_wool"
        },
        "2_key": {
          "item": "light_blue_wool"
        },
        "3_key": {
          "item": "light_blue_wool"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "tag": "planks"
        },
        "2_key": {
          "tag": "planks"
        },
        "3_key": {
          "tag": "planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "light_blue_candle.json",
    "item": "light_blue_candle",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "candle"
      },
      {
        "item": "light_blue_dye"
      }
    ]
  },
  {
    "file": "light_blue_carpet.json",
    "item": "light_blue_carpet",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "light_blue_wool"
        },
        "2_key": {
          "item": "light_blue_wool"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "light_blue_concrete_powder.json",
    "item": "light_blue_concrete_powder",
    "count": 8,
    "patterns": {},
    "ingredients": [
      {
        "item": "light_blue_dye"
      },
      {
        "item": "sand"
      },
      {
        "item": "sand"
      },
      {
        "item": "sand"
      },
      {
        "item": "sand"
      },
      {
        "item": "gravel"
      },
      {
        "item": "gravel"
      },
      {
        "item": "gravel"
      },
      {
        "item": "gravel"
      }
    ]
  },
  {
    "file": "light_blue_dye_from_blue_orchid.json",
    "item": "light_blue_dye",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "blue_orchid"
      }
    ]
  },
  {
    "file": "light_blue_dye_from_blue_white_dye.json",
    "item": "light_blue_dye",
    "count": 2,
    "patterns": {},
    "ingredients": [
      {
        "item": "blue_dye"
      },
      {
        "item": "white_dye"
      }
    ]
  },
  {
    "file": "light_blue_stained_glass.json",
    "item": "light_blue_stained_glass",
    "count": 8,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "glass"
        },
        "2_key": {
          "item": "glass"
        },
        "3_key": {
          "item": "glass"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "glass"
        },
        "2_key": {
          "item": "light_blue_dye"
        },
        "3_key": {
          "item": "glass"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "glass"
        },
        "2_key": {
          "item": "glass"
        },
        "3_key": {
          "item": "glass"
        }
      }
    }
  },
  {
    "file": "light_blue_stained_glass_pane.json",
    "item": "light_blue_stained_glass_pane",
    "count": 16,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "light_blue_stained_glass"
        },
        "2_key": {
          "item": "light_blue_stained_glass"
        },
        "3_key": {
          "item": "light_blue_stained_glass"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "light_blue_stained_glass"
        },
        "2_key": {
          "item": "light_blue_stained_glass"
        },
        "3_key": {
          "item": "light_blue_stained_glass"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "light_blue_stained_glass_pane_from_glass_pane.json",
    "item": "light_blue_stained_glass_pane",
    "count": 8,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "glass_pane"
        },
        "2_key": {
          "item": "glass_pane"
        },
        "3_key": {
          "item": "glass_pane"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "glass_pane"
        },
        "2_key": {
          "item": "light_blue_dye"
        },
        "3_key": {
          "item": "glass_pane"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "glass_pane"
        },
        "2_key": {
          "item": "glass_pane"
        },
        "3_key": {
          "item": "glass_pane"
        }
      }
    }
  },
  {
    "file": "light_blue_terracotta.json",
    "item": "light_blue_terracotta",
    "count": 8,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "terracotta"
        },
        "2_key": {
          "item": "terracotta"
        },
        "3_key": {
          "item": "terracotta"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "terracotta"
        },
        "2_key": {
          "item": "light_blue_dye"
        },
        "3_key": {
          "item": "terracotta"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "terracotta"
        },
        "2_key": {
          "item": "terracotta"
        },
        "3_key": {
          "item": "terracotta"
        }
      }
    }
  },
  {
    "file": "light_gray_banner.json",
    "item": "light_gray_banner",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "light_gray_wool"
        },
        "2_key": {
          "item": "light_gray_wool"
        },
        "3_key": {
          "item": "light_gray_wool"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "light_gray_wool"
        },
        "2_key": {
          "item": "light_gray_wool"
        },
        "3_key": {
          "item": "light_gray_wool"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "light_gray_bed.json",
    "item": "light_gray_bed",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "light_gray_wool"
        },
        "2_key": {
          "item": "light_gray_wool"
        },
        "3_key": {
          "item": "light_gray_wool"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "tag": "planks"
        },
        "2_key": {
          "tag": "planks"
        },
        "3_key": {
          "tag": "planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "light_gray_candle.json",
    "item": "light_gray_candle",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "candle"
      },
      {
        "item": "light_gray_dye"
      }
    ]
  },
  {
    "file": "light_gray_carpet.json",
    "item": "light_gray_carpet",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "light_gray_wool"
        },
        "2_key": {
          "item": "light_gray_wool"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "light_gray_concrete_powder.json",
    "item": "light_gray_concrete_powder",
    "count": 8,
    "patterns": {},
    "ingredients": [
      {
        "item": "light_gray_dye"
      },
      {
        "item": "sand"
      },
      {
        "item": "sand"
      },
      {
        "item": "sand"
      },
      {
        "item": "sand"
      },
      {
        "item": "gravel"
      },
      {
        "item": "gravel"
      },
      {
        "item": "gravel"
      },
      {
        "item": "gravel"
      }
    ]
  },
  {
    "file": "light_gray_dye_from_azure_bluet.json",
    "item": "light_gray_dye",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "azure_bluet"
      }
    ]
  },
  {
    "file": "light_gray_dye_from_black_white_dye.json",
    "item": "light_gray_dye",
    "count": 3,
    "patterns": {},
    "ingredients": [
      {
        "item": "black_dye"
      },
      {
        "item": "white_dye"
      },
      {
        "item": "white_dye"
      }
    ]
  },
  {
    "file": "light_gray_dye_from_gray_white_dye.json",
    "item": "light_gray_dye",
    "count": 2,
    "patterns": {},
    "ingredients": [
      {
        "item": "gray_dye"
      },
      {
        "item": "white_dye"
      }
    ]
  },
  {
    "file": "light_gray_dye_from_oxeye_daisy.json",
    "item": "light_gray_dye",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "oxeye_daisy"
      }
    ]
  },
  {
    "file": "light_gray_dye_from_white_tulip.json",
    "item": "light_gray_dye",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "white_tulip"
      }
    ]
  },
  {
    "file": "light_gray_stained_glass.json",
    "item": "light_gray_stained_glass",
    "count": 8,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "glass"
        },
        "2_key": {
          "item": "glass"
        },
        "3_key": {
          "item": "glass"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "glass"
        },
        "2_key": {
          "item": "light_gray_dye"
        },
        "3_key": {
          "item": "glass"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "glass"
        },
        "2_key": {
          "item": "glass"
        },
        "3_key": {
          "item": "glass"
        }
      }
    }
  },
  {
    "file": "light_gray_stained_glass_pane.json",
    "item": "light_gray_stained_glass_pane",
    "count": 16,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "light_gray_stained_glass"
        },
        "2_key": {
          "item": "light_gray_stained_glass"
        },
        "3_key": {
          "item": "light_gray_stained_glass"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "light_gray_stained_glass"
        },
        "2_key": {
          "item": "light_gray_stained_glass"
        },
        "3_key": {
          "item": "light_gray_stained_glass"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "light_gray_stained_glass_pane_from_glass_pane.json",
    "item": "light_gray_stained_glass_pane",
    "count": 8,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "glass_pane"
        },
        "2_key": {
          "item": "glass_pane"
        },
        "3_key": {
          "item": "glass_pane"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "glass_pane"
        },
        "2_key": {
          "item": "light_gray_dye"
        },
        "3_key": {
          "item": "glass_pane"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "glass_pane"
        },
        "2_key": {
          "item": "glass_pane"
        },
        "3_key": {
          "item": "glass_pane"
        }
      }
    }
  },
  {
    "file": "light_gray_terracotta.json",
    "item": "light_gray_terracotta",
    "count": 8,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "terracotta"
        },
        "2_key": {
          "item": "terracotta"
        },
        "3_key": {
          "item": "terracotta"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "terracotta"
        },
        "2_key": {
          "item": "light_gray_dye"
        },
        "3_key": {
          "item": "terracotta"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "terracotta"
        },
        "2_key": {
          "item": "terracotta"
        },
        "3_key": {
          "item": "terracotta"
        }
      }
    }
  },
  {
    "file": "light_weighted_pressure_plate.json",
    "item": "light_weighted_pressure_plate",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "gold_ingot"
        },
        "2_key": {
          "item": "gold_ingot"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "lime_banner.json",
    "item": "lime_banner",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "lime_wool"
        },
        "2_key": {
          "item": "lime_wool"
        },
        "3_key": {
          "item": "lime_wool"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "lime_wool"
        },
        "2_key": {
          "item": "lime_wool"
        },
        "3_key": {
          "item": "lime_wool"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "lime_bed.json",
    "item": "lime_bed",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "lime_wool"
        },
        "2_key": {
          "item": "lime_wool"
        },
        "3_key": {
          "item": "lime_wool"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "tag": "planks"
        },
        "2_key": {
          "tag": "planks"
        },
        "3_key": {
          "tag": "planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "lime_candle.json",
    "item": "lime_candle",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "candle"
      },
      {
        "item": "lime_dye"
      }
    ]
  },
  {
    "file": "lime_carpet.json",
    "item": "lime_carpet",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "lime_wool"
        },
        "2_key": {
          "item": "lime_wool"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "lime_concrete_powder.json",
    "item": "lime_concrete_powder",
    "count": 8,
    "patterns": {},
    "ingredients": [
      {
        "item": "lime_dye"
      },
      {
        "item": "sand"
      },
      {
        "item": "sand"
      },
      {
        "item": "sand"
      },
      {
        "item": "sand"
      },
      {
        "item": "gravel"
      },
      {
        "item": "gravel"
      },
      {
        "item": "gravel"
      },
      {
        "item": "gravel"
      }
    ]
  },
  {
    "file": "lime_dye.json",
    "item": "lime_dye",
    "count": 2,
    "patterns": {},
    "ingredients": [
      {
        "item": "green_dye"
      },
      {
        "item": "white_dye"
      }
    ]
  },
  {
    "file": "lime_stained_glass.json",
    "item": "lime_stained_glass",
    "count": 8,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "glass"
        },
        "2_key": {
          "item": "glass"
        },
        "3_key": {
          "item": "glass"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "glass"
        },
        "2_key": {
          "item": "lime_dye"
        },
        "3_key": {
          "item": "glass"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "glass"
        },
        "2_key": {
          "item": "glass"
        },
        "3_key": {
          "item": "glass"
        }
      }
    }
  },
  {
    "file": "lime_stained_glass_pane.json",
    "item": "lime_stained_glass_pane",
    "count": 16,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "lime_stained_glass"
        },
        "2_key": {
          "item": "lime_stained_glass"
        },
        "3_key": {
          "item": "lime_stained_glass"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "lime_stained_glass"
        },
        "2_key": {
          "item": "lime_stained_glass"
        },
        "3_key": {
          "item": "lime_stained_glass"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "lime_stained_glass_pane_from_glass_pane.json",
    "item": "lime_stained_glass_pane",
    "count": 8,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "glass_pane"
        },
        "2_key": {
          "item": "glass_pane"
        },
        "3_key": {
          "item": "glass_pane"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "glass_pane"
        },
        "2_key": {
          "item": "lime_dye"
        },
        "3_key": {
          "item": "glass_pane"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "glass_pane"
        },
        "2_key": {
          "item": "glass_pane"
        },
        "3_key": {
          "item": "glass_pane"
        }
      }
    }
  },
  {
    "file": "lime_terracotta.json",
    "item": "lime_terracotta",
    "count": 8,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "terracotta"
        },
        "2_key": {
          "item": "terracotta"
        },
        "3_key": {
          "item": "terracotta"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "terracotta"
        },
        "2_key": {
          "item": "lime_dye"
        },
        "3_key": {
          "item": "terracotta"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "terracotta"
        },
        "2_key": {
          "item": "terracotta"
        },
        "3_key": {
          "item": "terracotta"
        }
      }
    }
  },
  {
    "file": "lodestone.json",
    "item": "lodestone",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "chiseled_stone_bricks"
        },
        "2_key": {
          "item": "chiseled_stone_bricks"
        },
        "3_key": {
          "item": "chiseled_stone_bricks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "chiseled_stone_bricks"
        },
        "2_key": {
          "item": "netherite_ingot"
        },
        "3_key": {
          "item": "chiseled_stone_bricks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "chiseled_stone_bricks"
        },
        "2_key": {
          "item": "chiseled_stone_bricks"
        },
        "3_key": {
          "item": "chiseled_stone_bricks"
        }
      }
    }
  },
  {
    "file": "loom.json",
    "item": "loom",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "string"
        },
        "2_key": {
          "item": "string"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "tag": "planks"
        },
        "2_key": {
          "tag": "planks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "magenta_banner.json",
    "item": "magenta_banner",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "magenta_wool"
        },
        "2_key": {
          "item": "magenta_wool"
        },
        "3_key": {
          "item": "magenta_wool"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "magenta_wool"
        },
        "2_key": {
          "item": "magenta_wool"
        },
        "3_key": {
          "item": "magenta_wool"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "magenta_bed.json",
    "item": "magenta_bed",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "magenta_wool"
        },
        "2_key": {
          "item": "magenta_wool"
        },
        "3_key": {
          "item": "magenta_wool"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "tag": "planks"
        },
        "2_key": {
          "tag": "planks"
        },
        "3_key": {
          "tag": "planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "magenta_candle.json",
    "item": "magenta_candle",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "candle"
      },
      {
        "item": "magenta_dye"
      }
    ]
  },
  {
    "file": "magenta_carpet.json",
    "item": "magenta_carpet",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "magenta_wool"
        },
        "2_key": {
          "item": "magenta_wool"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "magenta_concrete_powder.json",
    "item": "magenta_concrete_powder",
    "count": 8,
    "patterns": {},
    "ingredients": [
      {
        "item": "magenta_dye"
      },
      {
        "item": "sand"
      },
      {
        "item": "sand"
      },
      {
        "item": "sand"
      },
      {
        "item": "sand"
      },
      {
        "item": "gravel"
      },
      {
        "item": "gravel"
      },
      {
        "item": "gravel"
      },
      {
        "item": "gravel"
      }
    ]
  },
  {
    "file": "magenta_dye_from_allium.json",
    "item": "magenta_dye",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "allium"
      }
    ]
  },
  {
    "file": "magenta_dye_from_blue_red_pink.json",
    "item": "magenta_dye",
    "count": 3,
    "patterns": {},
    "ingredients": [
      {
        "item": "blue_dye"
      },
      {
        "item": "red_dye"
      },
      {
        "item": "pink_dye"
      }
    ]
  },
  {
    "file": "magenta_dye_from_blue_red_white_dye.json",
    "item": "magenta_dye",
    "count": 4,
    "patterns": {},
    "ingredients": [
      {
        "item": "blue_dye"
      },
      {
        "item": "red_dye"
      },
      {
        "item": "red_dye"
      },
      {
        "item": "white_dye"
      }
    ]
  },
  {
    "file": "magenta_dye_from_lilac.json",
    "item": "magenta_dye",
    "count": 2,
    "patterns": {},
    "ingredients": [
      {
        "item": "lilac"
      }
    ]
  },
  {
    "file": "magenta_dye_from_purple_and_pink.json",
    "item": "magenta_dye",
    "count": 2,
    "patterns": {},
    "ingredients": [
      {
        "item": "purple_dye"
      },
      {
        "item": "pink_dye"
      }
    ]
  },
  {
    "file": "magenta_stained_glass.json",
    "item": "magenta_stained_glass",
    "count": 8,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "glass"
        },
        "2_key": {
          "item": "glass"
        },
        "3_key": {
          "item": "glass"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "glass"
        },
        "2_key": {
          "item": "magenta_dye"
        },
        "3_key": {
          "item": "glass"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "glass"
        },
        "2_key": {
          "item": "glass"
        },
        "3_key": {
          "item": "glass"
        }
      }
    }
  },
  {
    "file": "magenta_stained_glass_pane.json",
    "item": "magenta_stained_glass_pane",
    "count": 16,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "magenta_stained_glass"
        },
        "2_key": {
          "item": "magenta_stained_glass"
        },
        "3_key": {
          "item": "magenta_stained_glass"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "magenta_stained_glass"
        },
        "2_key": {
          "item": "magenta_stained_glass"
        },
        "3_key": {
          "item": "magenta_stained_glass"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "magenta_stained_glass_pane_from_glass_pane.json",
    "item": "magenta_stained_glass_pane",
    "count": 8,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "glass_pane"
        },
        "2_key": {
          "item": "glass_pane"
        },
        "3_key": {
          "item": "glass_pane"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "glass_pane"
        },
        "2_key": {
          "item": "magenta_dye"
        },
        "3_key": {
          "item": "glass_pane"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "glass_pane"
        },
        "2_key": {
          "item": "glass_pane"
        },
        "3_key": {
          "item": "glass_pane"
        }
      }
    }
  },
  {
    "file": "magenta_terracotta.json",
    "item": "magenta_terracotta",
    "count": 8,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "terracotta"
        },
        "2_key": {
          "item": "terracotta"
        },
        "3_key": {
          "item": "terracotta"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "terracotta"
        },
        "2_key": {
          "item": "magenta_dye"
        },
        "3_key": {
          "item": "terracotta"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "terracotta"
        },
        "2_key": {
          "item": "terracotta"
        },
        "3_key": {
          "item": "terracotta"
        }
      }
    }
  },
  {
    "file": "magma_block.json",
    "item": "magma_block",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "magma_cream"
        },
        "2_key": {
          "item": "magma_cream"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "magma_cream"
        },
        "2_key": {
          "item": "magma_cream"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "magma_cream.json",
    "item": "magma_cream",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "blaze_powder"
      },
      {
        "item": "slime_ball"
      }
    ]
  },
  {
    "file": "mangrove_boat.json",
    "item": "mangrove_boat",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "mangrove_planks"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "mangrove_planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "mangrove_planks"
        },
        "2_key": {
          "item": "mangrove_planks"
        },
        "3_key": {
          "item": "mangrove_planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "mangrove_button.json",
    "item": "mangrove_button",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "mangrove_planks"
      }
    ]
  },
  {
    "file": "mangrove_chest_boat.json",
    "item": "mangrove_chest_boat",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "chest"
      },
      {
        "item": "mangrove_boat"
      }
    ]
  },
  {
    "file": "mangrove_door.json",
    "item": "mangrove_door",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "mangrove_planks"
        },
        "2_key": {
          "item": "mangrove_planks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "mangrove_planks"
        },
        "2_key": {
          "item": "mangrove_planks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "mangrove_planks"
        },
        "2_key": {
          "item": "mangrove_planks"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "mangrove_fence.json",
    "item": "mangrove_fence",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "mangrove_planks"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "mangrove_planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "mangrove_planks"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "mangrove_planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "mangrove_fence_gate.json",
    "item": "mangrove_fence_gate",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "item": "mangrove_planks"
        },
        "3_key": {
          "item": "stick"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "item": "mangrove_planks"
        },
        "3_key": {
          "item": "stick"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "mangrove_hanging_sign.json",
    "item": "mangrove_hanging_sign",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "chain"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "chain"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "stripped_mangrove_log"
        },
        "2_key": {
          "item": "stripped_mangrove_log"
        },
        "3_key": {
          "item": "stripped_mangrove_log"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "stripped_mangrove_log"
        },
        "2_key": {
          "item": "stripped_mangrove_log"
        },
        "3_key": {
          "item": "stripped_mangrove_log"
        }
      }
    }
  },
  {
    "file": "mangrove_planks.json",
    "item": "mangrove_planks",
    "count": 4,
    "patterns": {},
    "ingredients": [
      {
        "tag": "mangrove_logs"
      }
    ]
  },
  {
    "file": "mangrove_pressure_plate.json",
    "item": "mangrove_pressure_plate",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "mangrove_planks"
        },
        "2_key": {
          "item": "mangrove_planks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "mangrove_sign.json",
    "item": "mangrove_sign",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "mangrove_planks"
        },
        "2_key": {
          "item": "mangrove_planks"
        },
        "3_key": {
          "item": "mangrove_planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "mangrove_planks"
        },
        "2_key": {
          "item": "mangrove_planks"
        },
        "3_key": {
          "item": "mangrove_planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "mangrove_slab.json",
    "item": "mangrove_slab",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "mangrove_planks"
        },
        "2_key": {
          "item": "mangrove_planks"
        },
        "3_key": {
          "item": "mangrove_planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "mangrove_stairs.json",
    "item": "mangrove_stairs",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "mangrove_planks"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "mangrove_planks"
        },
        "2_key": {
          "item": "mangrove_planks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "mangrove_planks"
        },
        "2_key": {
          "item": "mangrove_planks"
        },
        "3_key": {
          "item": "mangrove_planks"
        }
      }
    }
  },
  {
    "file": "mangrove_trapdoor.json",
    "item": "mangrove_trapdoor",
    "count": 2,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "mangrove_planks"
        },
        "2_key": {
          "item": "mangrove_planks"
        },
        "3_key": {
          "item": "mangrove_planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "mangrove_planks"
        },
        "2_key": {
          "item": "mangrove_planks"
        },
        "3_key": {
          "item": "mangrove_planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "mangrove_wood.json",
    "item": "mangrove_wood",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "mangrove_log"
        },
        "2_key": {
          "item": "mangrove_log"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "mangrove_log"
        },
        "2_key": {
          "item": "mangrove_log"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "map.json",
    "item": "map",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "paper"
        },
        "2_key": {
          "item": "paper"
        },
        "3_key": {
          "item": "paper"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "paper"
        },
        "2_key": {
          "item": "compass"
        },
        "3_key": {
          "item": "paper"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "paper"
        },
        "2_key": {
          "item": "paper"
        },
        "3_key": {
          "item": "paper"
        }
      }
    }
  },
  {
    "file": "melon.json",
    "item": "melon",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "melon_slice"
      },
      {
        "item": "melon_slice"
      },
      {
        "item": "melon_slice"
      },
      {
        "item": "melon_slice"
      },
      {
        "item": "melon_slice"
      },
      {
        "item": "melon_slice"
      },
      {
        "item": "melon_slice"
      },
      {
        "item": "melon_slice"
      },
      {
        "item": "melon_slice"
      }
    ]
  },
  {
    "file": "melon_seeds.json",
    "item": "melon_seeds",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "melon_slice"
      }
    ]
  },
  {
    "file": "minecart.json",
    "item": "minecart",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "iron_ingot"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "iron_ingot"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "iron_ingot"
        },
        "2_key": {
          "item": "iron_ingot"
        },
        "3_key": {
          "item": "iron_ingot"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "mojang_banner_pattern.json",
    "item": "mojang_banner_pattern",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "paper"
      },
      {
        "item": "enchanted_golden_apple"
      }
    ]
  },
  {
    "file": "mossy_cobblestone_from_moss_block.json",
    "item": "mossy_cobblestone",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "cobblestone"
      },
      {
        "item": "moss_block"
      }
    ]
  },
  {
    "file": "mossy_cobblestone_from_vine.json",
    "item": "mossy_cobblestone",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "cobblestone"
      },
      {
        "item": "vine"
      }
    ]
  },
  {
    "file": "mossy_cobblestone_slab.json",
    "item": "mossy_cobblestone_slab",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "mossy_cobblestone"
        },
        "2_key": {
          "item": "mossy_cobblestone"
        },
        "3_key": {
          "item": "mossy_cobblestone"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "mossy_cobblestone_stairs.json",
    "item": "mossy_cobblestone_stairs",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "mossy_cobblestone"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "mossy_cobblestone"
        },
        "2_key": {
          "item": "mossy_cobblestone"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "mossy_cobblestone"
        },
        "2_key": {
          "item": "mossy_cobblestone"
        },
        "3_key": {
          "item": "mossy_cobblestone"
        }
      }
    }
  },
  {
    "file": "mossy_cobblestone_wall.json",
    "item": "mossy_cobblestone_wall",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "mossy_cobblestone"
        },
        "2_key": {
          "item": "mossy_cobblestone"
        },
        "3_key": {
          "item": "mossy_cobblestone"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "mossy_cobblestone"
        },
        "2_key": {
          "item": "mossy_cobblestone"
        },
        "3_key": {
          "item": "mossy_cobblestone"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "mossy_stone_bricks_from_moss_block.json",
    "item": "mossy_stone_bricks",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "stone_bricks"
      },
      {
        "item": "moss_block"
      }
    ]
  },
  {
    "file": "mossy_stone_bricks_from_vine.json",
    "item": "mossy_stone_bricks",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "stone_bricks"
      },
      {
        "item": "vine"
      }
    ]
  },
  {
    "file": "mossy_stone_brick_slab.json",
    "item": "mossy_stone_brick_slab",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "mossy_stone_bricks"
        },
        "2_key": {
          "item": "mossy_stone_bricks"
        },
        "3_key": {
          "item": "mossy_stone_bricks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "mossy_stone_brick_stairs.json",
    "item": "mossy_stone_brick_stairs",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "mossy_stone_bricks"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "mossy_stone_bricks"
        },
        "2_key": {
          "item": "mossy_stone_bricks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "mossy_stone_bricks"
        },
        "2_key": {
          "item": "mossy_stone_bricks"
        },
        "3_key": {
          "item": "mossy_stone_bricks"
        }
      }
    }
  },
  {
    "file": "mossy_stone_brick_wall.json",
    "item": "mossy_stone_brick_wall",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "mossy_stone_bricks"
        },
        "2_key": {
          "item": "mossy_stone_bricks"
        },
        "3_key": {
          "item": "mossy_stone_bricks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "mossy_stone_bricks"
        },
        "2_key": {
          "item": "mossy_stone_bricks"
        },
        "3_key": {
          "item": "mossy_stone_bricks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "moss_carpet.json",
    "item": "moss_carpet",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "moss_block"
        },
        "2_key": {
          "item": "moss_block"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "muddy_mangrove_roots.json",
    "item": "muddy_mangrove_roots",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "mud"
      },
      {
        "item": "mangrove_roots"
      }
    ]
  },
  {
    "file": "mud_bricks.json",
    "item": "mud_bricks",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "packed_mud"
        },
        "2_key": {
          "item": "packed_mud"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "packed_mud"
        },
        "2_key": {
          "item": "packed_mud"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "mud_brick_slab.json",
    "item": "mud_brick_slab",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "mud_bricks"
        },
        "2_key": {
          "item": "mud_bricks"
        },
        "3_key": {
          "item": "mud_bricks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "mud_brick_stairs.json",
    "item": "mud_brick_stairs",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "mud_bricks"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "mud_bricks"
        },
        "2_key": {
          "item": "mud_bricks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "mud_bricks"
        },
        "2_key": {
          "item": "mud_bricks"
        },
        "3_key": {
          "item": "mud_bricks"
        }
      }
    }
  },
  {
    "file": "mud_brick_wall.json",
    "item": "mud_brick_wall",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "mud_bricks"
        },
        "2_key": {
          "item": "mud_bricks"
        },
        "3_key": {
          "item": "mud_bricks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "mud_bricks"
        },
        "2_key": {
          "item": "mud_bricks"
        },
        "3_key": {
          "item": "mud_bricks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "mushroom_stew.json",
    "item": "mushroom_stew",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "brown_mushroom"
      },
      {
        "item": "red_mushroom"
      },
      {
        "item": "bowl"
      }
    ]
  },
  {
    "file": "music_disc_5.json",
    "item": "music_disc_5",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "disc_fragment_5"
      },
      {
        "item": "disc_fragment_5"
      },
      {
        "item": "disc_fragment_5"
      },
      {
        "item": "disc_fragment_5"
      },
      {
        "item": "disc_fragment_5"
      },
      {
        "item": "disc_fragment_5"
      },
      {
        "item": "disc_fragment_5"
      },
      {
        "item": "disc_fragment_5"
      },
      {
        "item": "disc_fragment_5"
      }
    ]
  },
  {
    "file": "netherite_axe_smithing.json",
    "item": "netherite_axe",
    "count": 1,
    "patterns": {}
  },
  {
    "file": "netherite_block.json",
    "item": "netherite_block",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "netherite_ingot"
        },
        "2_key": {
          "item": "netherite_ingot"
        },
        "3_key": {
          "item": "netherite_ingot"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "netherite_ingot"
        },
        "2_key": {
          "item": "netherite_ingot"
        },
        "3_key": {
          "item": "netherite_ingot"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "netherite_ingot"
        },
        "2_key": {
          "item": "netherite_ingot"
        },
        "3_key": {
          "item": "netherite_ingot"
        }
      }
    }
  },
  {
    "file": "netherite_boots_smithing.json",
    "item": "netherite_boots",
    "count": 1,
    "patterns": {}
  },
  {
    "file": "netherite_chestplate_smithing.json",
    "item": "netherite_chestplate",
    "count": 1,
    "patterns": {}
  },
  {
    "file": "netherite_helmet_smithing.json",
    "item": "netherite_helmet",
    "count": 1,
    "patterns": {}
  },
  {
    "file": "netherite_hoe_smithing.json",
    "item": "netherite_hoe",
    "count": 1,
    "patterns": {}
  },
  {
    "file": "netherite_ingot.json",
    "item": "netherite_ingot",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "netherite_scrap"
      },
      {
        "item": "netherite_scrap"
      },
      {
        "item": "netherite_scrap"
      },
      {
        "item": "netherite_scrap"
      },
      {
        "item": "gold_ingot"
      },
      {
        "item": "gold_ingot"
      },
      {
        "item": "gold_ingot"
      },
      {
        "item": "gold_ingot"
      }
    ]
  },
  {
    "file": "netherite_ingot_from_netherite_block.json",
    "item": "netherite_ingot",
    "count": 9,
    "patterns": {},
    "ingredients": [
      {
        "item": "netherite_block"
      }
    ]
  },
  {
    "file": "netherite_leggings_smithing.json",
    "item": "netherite_leggings",
    "count": 1,
    "patterns": {}
  },
  {
    "file": "netherite_pickaxe_smithing.json",
    "item": "netherite_pickaxe",
    "count": 1,
    "patterns": {}
  },
  {
    "file": "netherite_shovel_smithing.json",
    "item": "netherite_shovel",
    "count": 1,
    "patterns": {}
  },
  {
    "file": "netherite_sword_smithing.json",
    "item": "netherite_sword",
    "count": 1,
    "patterns": {}
  },
  {
    "file": "netherite_upgrade_smithing_template.json",
    "item": "netherite_upgrade_smithing_template",
    "count": 2,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "netherite_upgrade_smithing_template"
        },
        "3_key": {
          "item": "diamond"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "netherrack"
        },
        "3_key": {
          "item": "diamond"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "diamond"
        },
        "3_key": {
          "item": "diamond"
        }
      }
    }
  },
  {
    "file": "nether_bricks.json",
    "item": "nether_bricks",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "nether_brick"
        },
        "2_key": {
          "item": "nether_brick"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "nether_brick"
        },
        "2_key": {
          "item": "nether_brick"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "nether_brick_fence.json",
    "item": "nether_brick_fence",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "nether_bricks"
        },
        "2_key": {
          "item": "nether_brick"
        },
        "3_key": {
          "item": "nether_bricks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "nether_bricks"
        },
        "2_key": {
          "item": "nether_brick"
        },
        "3_key": {
          "item": "nether_bricks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "nether_brick_slab.json",
    "item": "nether_brick_slab",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "nether_bricks"
        },
        "2_key": {
          "item": "nether_bricks"
        },
        "3_key": {
          "item": "nether_bricks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "nether_brick_stairs.json",
    "item": "nether_brick_stairs",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "nether_bricks"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "nether_bricks"
        },
        "2_key": {
          "item": "nether_bricks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "nether_bricks"
        },
        "2_key": {
          "item": "nether_bricks"
        },
        "3_key": {
          "item": "nether_bricks"
        }
      }
    }
  },
  {
    "file": "nether_brick_wall.json",
    "item": "nether_brick_wall",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "nether_bricks"
        },
        "2_key": {
          "item": "nether_bricks"
        },
        "3_key": {
          "item": "nether_bricks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "nether_bricks"
        },
        "2_key": {
          "item": "nether_bricks"
        },
        "3_key": {
          "item": "nether_bricks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "nether_wart_block.json",
    "item": "nether_wart_block",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "nether_wart"
      },
      {
        "item": "nether_wart"
      },
      {
        "item": "nether_wart"
      },
      {
        "item": "nether_wart"
      },
      {
        "item": "nether_wart"
      },
      {
        "item": "nether_wart"
      },
      {
        "item": "nether_wart"
      },
      {
        "item": "nether_wart"
      },
      {
        "item": "nether_wart"
      }
    ]
  },
  {
    "file": "note_block.json",
    "item": "note_block",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "tag": "planks"
        },
        "2_key": {
          "tag": "planks"
        },
        "3_key": {
          "tag": "planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "tag": "planks"
        },
        "2_key": {
          "item": "redstone"
        },
        "3_key": {
          "tag": "planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "tag": "planks"
        },
        "2_key": {
          "tag": "planks"
        },
        "3_key": {
          "tag": "planks"
        }
      }
    }
  },
  {
    "file": "oak_boat.json",
    "item": "oak_boat",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "oak_planks"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "oak_planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "oak_planks"
        },
        "2_key": {
          "item": "oak_planks"
        },
        "3_key": {
          "item": "oak_planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "oak_button.json",
    "item": "oak_button",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "oak_planks"
      }
    ]
  },
  {
    "file": "oak_chest_boat.json",
    "item": "oak_chest_boat",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "chest"
      },
      {
        "item": "oak_boat"
      }
    ]
  },
  {
    "file": "oak_door.json",
    "item": "oak_door",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "oak_planks"
        },
        "2_key": {
          "item": "oak_planks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "oak_planks"
        },
        "2_key": {
          "item": "oak_planks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "oak_planks"
        },
        "2_key": {
          "item": "oak_planks"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "oak_fence.json",
    "item": "oak_fence",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "oak_planks"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "oak_planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "oak_planks"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "oak_planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "oak_fence_gate.json",
    "item": "oak_fence_gate",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "item": "oak_planks"
        },
        "3_key": {
          "item": "stick"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "item": "oak_planks"
        },
        "3_key": {
          "item": "stick"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "oak_hanging_sign.json",
    "item": "oak_hanging_sign",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "chain"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "chain"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "stripped_oak_log"
        },
        "2_key": {
          "item": "stripped_oak_log"
        },
        "3_key": {
          "item": "stripped_oak_log"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "stripped_oak_log"
        },
        "2_key": {
          "item": "stripped_oak_log"
        },
        "3_key": {
          "item": "stripped_oak_log"
        }
      }
    }
  },
  {
    "file": "oak_planks.json",
    "item": "oak_planks",
    "count": 4,
    "patterns": {},
    "ingredients": [
      {
        "tag": "oak_logs"
      }
    ]
  },
  {
    "file": "oak_pressure_plate.json",
    "item": "oak_pressure_plate",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "oak_planks"
        },
        "2_key": {
          "item": "oak_planks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "oak_sign.json",
    "item": "oak_sign",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "oak_planks"
        },
        "2_key": {
          "item": "oak_planks"
        },
        "3_key": {
          "item": "oak_planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "oak_planks"
        },
        "2_key": {
          "item": "oak_planks"
        },
        "3_key": {
          "item": "oak_planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "oak_slab.json",
    "item": "oak_slab",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "oak_planks"
        },
        "2_key": {
          "item": "oak_planks"
        },
        "3_key": {
          "item": "oak_planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "oak_stairs.json",
    "item": "oak_stairs",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "oak_planks"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "oak_planks"
        },
        "2_key": {
          "item": "oak_planks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "oak_planks"
        },
        "2_key": {
          "item": "oak_planks"
        },
        "3_key": {
          "item": "oak_planks"
        }
      }
    }
  },
  {
    "file": "oak_trapdoor.json",
    "item": "oak_trapdoor",
    "count": 2,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "oak_planks"
        },
        "2_key": {
          "item": "oak_planks"
        },
        "3_key": {
          "item": "oak_planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "oak_planks"
        },
        "2_key": {
          "item": "oak_planks"
        },
        "3_key": {
          "item": "oak_planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "oak_wood.json",
    "item": "oak_wood",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "oak_log"
        },
        "2_key": {
          "item": "oak_log"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "oak_log"
        },
        "2_key": {
          "item": "oak_log"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "observer.json",
    "item": "observer",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "cobblestone"
        },
        "2_key": {
          "item": "cobblestone"
        },
        "3_key": {
          "item": "cobblestone"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "redstone"
        },
        "2_key": {
          "item": "redstone"
        },
        "3_key": {
          "item": "quartz"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "cobblestone"
        },
        "2_key": {
          "item": "cobblestone"
        },
        "3_key": {
          "item": "cobblestone"
        }
      }
    }
  },
  {
    "file": "orange_banner.json",
    "item": "orange_banner",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "orange_wool"
        },
        "2_key": {
          "item": "orange_wool"
        },
        "3_key": {
          "item": "orange_wool"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "orange_wool"
        },
        "2_key": {
          "item": "orange_wool"
        },
        "3_key": {
          "item": "orange_wool"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "orange_bed.json",
    "item": "orange_bed",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "orange_wool"
        },
        "2_key": {
          "item": "orange_wool"
        },
        "3_key": {
          "item": "orange_wool"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "tag": "planks"
        },
        "2_key": {
          "tag": "planks"
        },
        "3_key": {
          "tag": "planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "orange_candle.json",
    "item": "orange_candle",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "candle"
      },
      {
        "item": "orange_dye"
      }
    ]
  },
  {
    "file": "orange_carpet.json",
    "item": "orange_carpet",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "orange_wool"
        },
        "2_key": {
          "item": "orange_wool"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "orange_concrete_powder.json",
    "item": "orange_concrete_powder",
    "count": 8,
    "patterns": {},
    "ingredients": [
      {
        "item": "orange_dye"
      },
      {
        "item": "sand"
      },
      {
        "item": "sand"
      },
      {
        "item": "sand"
      },
      {
        "item": "sand"
      },
      {
        "item": "gravel"
      },
      {
        "item": "gravel"
      },
      {
        "item": "gravel"
      },
      {
        "item": "gravel"
      }
    ]
  },
  {
    "file": "orange_dye_from_orange_tulip.json",
    "item": "orange_dye",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "orange_tulip"
      }
    ]
  },
  {
    "file": "orange_dye_from_red_yellow.json",
    "item": "orange_dye",
    "count": 2,
    "patterns": {},
    "ingredients": [
      {
        "item": "red_dye"
      },
      {
        "item": "yellow_dye"
      }
    ]
  },
  {
    "file": "orange_dye_from_torchflower.json",
    "item": "orange_dye",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "torchflower"
      }
    ]
  },
  {
    "file": "orange_stained_glass.json",
    "item": "orange_stained_glass",
    "count": 8,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "glass"
        },
        "2_key": {
          "item": "glass"
        },
        "3_key": {
          "item": "glass"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "glass"
        },
        "2_key": {
          "item": "orange_dye"
        },
        "3_key": {
          "item": "glass"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "glass"
        },
        "2_key": {
          "item": "glass"
        },
        "3_key": {
          "item": "glass"
        }
      }
    }
  },
  {
    "file": "orange_stained_glass_pane.json",
    "item": "orange_stained_glass_pane",
    "count": 16,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "orange_stained_glass"
        },
        "2_key": {
          "item": "orange_stained_glass"
        },
        "3_key": {
          "item": "orange_stained_glass"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "orange_stained_glass"
        },
        "2_key": {
          "item": "orange_stained_glass"
        },
        "3_key": {
          "item": "orange_stained_glass"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "orange_stained_glass_pane_from_glass_pane.json",
    "item": "orange_stained_glass_pane",
    "count": 8,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "glass_pane"
        },
        "2_key": {
          "item": "glass_pane"
        },
        "3_key": {
          "item": "glass_pane"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "glass_pane"
        },
        "2_key": {
          "item": "orange_dye"
        },
        "3_key": {
          "item": "glass_pane"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "glass_pane"
        },
        "2_key": {
          "item": "glass_pane"
        },
        "3_key": {
          "item": "glass_pane"
        }
      }
    }
  },
  {
    "file": "orange_terracotta.json",
    "item": "orange_terracotta",
    "count": 8,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "terracotta"
        },
        "2_key": {
          "item": "terracotta"
        },
        "3_key": {
          "item": "terracotta"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "terracotta"
        },
        "2_key": {
          "item": "orange_dye"
        },
        "3_key": {
          "item": "terracotta"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "terracotta"
        },
        "2_key": {
          "item": "terracotta"
        },
        "3_key": {
          "item": "terracotta"
        }
      }
    }
  },
  {
    "file": "oxidized_cut_copper.json",
    "item": "oxidized_cut_copper",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "oxidized_copper"
        },
        "2_key": {
          "item": "oxidized_copper"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "oxidized_copper"
        },
        "2_key": {
          "item": "oxidized_copper"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "oxidized_cut_copper_slab.json",
    "item": "oxidized_cut_copper_slab",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "oxidized_cut_copper"
        },
        "2_key": {
          "item": "oxidized_cut_copper"
        },
        "3_key": {
          "item": "oxidized_cut_copper"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "oxidized_cut_copper_stairs.json",
    "item": "oxidized_cut_copper_stairs",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "oxidized_cut_copper"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "oxidized_cut_copper"
        },
        "2_key": {
          "item": "oxidized_cut_copper"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "oxidized_cut_copper"
        },
        "2_key": {
          "item": "oxidized_cut_copper"
        },
        "3_key": {
          "item": "oxidized_cut_copper"
        }
      }
    }
  },
  {
    "file": "packed_ice.json",
    "item": "packed_ice",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "ice"
      },
      {
        "item": "ice"
      },
      {
        "item": "ice"
      },
      {
        "item": "ice"
      },
      {
        "item": "ice"
      },
      {
        "item": "ice"
      },
      {
        "item": "ice"
      },
      {
        "item": "ice"
      },
      {
        "item": "ice"
      }
    ]
  },
  {
    "file": "packed_mud.json",
    "item": "packed_mud",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "mud"
      },
      {
        "item": "wheat"
      }
    ]
  },
  {
    "file": "painting.json",
    "item": "painting",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "stick"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "tag": "wool"
        },
        "3_key": {
          "item": "stick"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "stick"
        }
      }
    }
  },
  {
    "file": "paper.json",
    "item": "paper",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "sugar_cane"
        },
        "2_key": {
          "item": "sugar_cane"
        },
        "3_key": {
          "item": "sugar_cane"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "pink_banner.json",
    "item": "pink_banner",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "pink_wool"
        },
        "2_key": {
          "item": "pink_wool"
        },
        "3_key": {
          "item": "pink_wool"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "pink_wool"
        },
        "2_key": {
          "item": "pink_wool"
        },
        "3_key": {
          "item": "pink_wool"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "pink_bed.json",
    "item": "pink_bed",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "pink_wool"
        },
        "2_key": {
          "item": "pink_wool"
        },
        "3_key": {
          "item": "pink_wool"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "tag": "planks"
        },
        "2_key": {
          "tag": "planks"
        },
        "3_key": {
          "tag": "planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "pink_candle.json",
    "item": "pink_candle",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "candle"
      },
      {
        "item": "pink_dye"
      }
    ]
  },
  {
    "file": "pink_carpet.json",
    "item": "pink_carpet",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "pink_wool"
        },
        "2_key": {
          "item": "pink_wool"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "pink_concrete_powder.json",
    "item": "pink_concrete_powder",
    "count": 8,
    "patterns": {},
    "ingredients": [
      {
        "item": "pink_dye"
      },
      {
        "item": "sand"
      },
      {
        "item": "sand"
      },
      {
        "item": "sand"
      },
      {
        "item": "sand"
      },
      {
        "item": "gravel"
      },
      {
        "item": "gravel"
      },
      {
        "item": "gravel"
      },
      {
        "item": "gravel"
      }
    ]
  },
  {
    "file": "pink_dye_from_peony.json",
    "item": "pink_dye",
    "count": 2,
    "patterns": {},
    "ingredients": [
      {
        "item": "peony"
      }
    ]
  },
  {
    "file": "pink_dye_from_pink_petals.json",
    "item": "pink_dye",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "pink_petals"
      }
    ]
  },
  {
    "file": "pink_dye_from_pink_tulip.json",
    "item": "pink_dye",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "pink_tulip"
      }
    ]
  },
  {
    "file": "pink_dye_from_red_white_dye.json",
    "item": "pink_dye",
    "count": 2,
    "patterns": {},
    "ingredients": [
      {
        "item": "red_dye"
      },
      {
        "item": "white_dye"
      }
    ]
  },
  {
    "file": "pink_stained_glass.json",
    "item": "pink_stained_glass",
    "count": 8,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "glass"
        },
        "2_key": {
          "item": "glass"
        },
        "3_key": {
          "item": "glass"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "glass"
        },
        "2_key": {
          "item": "pink_dye"
        },
        "3_key": {
          "item": "glass"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "glass"
        },
        "2_key": {
          "item": "glass"
        },
        "3_key": {
          "item": "glass"
        }
      }
    }
  },
  {
    "file": "pink_stained_glass_pane.json",
    "item": "pink_stained_glass_pane",
    "count": 16,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "pink_stained_glass"
        },
        "2_key": {
          "item": "pink_stained_glass"
        },
        "3_key": {
          "item": "pink_stained_glass"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "pink_stained_glass"
        },
        "2_key": {
          "item": "pink_stained_glass"
        },
        "3_key": {
          "item": "pink_stained_glass"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "pink_stained_glass_pane_from_glass_pane.json",
    "item": "pink_stained_glass_pane",
    "count": 8,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "glass_pane"
        },
        "2_key": {
          "item": "glass_pane"
        },
        "3_key": {
          "item": "glass_pane"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "glass_pane"
        },
        "2_key": {
          "item": "pink_dye"
        },
        "3_key": {
          "item": "glass_pane"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "glass_pane"
        },
        "2_key": {
          "item": "glass_pane"
        },
        "3_key": {
          "item": "glass_pane"
        }
      }
    }
  },
  {
    "file": "pink_terracotta.json",
    "item": "pink_terracotta",
    "count": 8,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "terracotta"
        },
        "2_key": {
          "item": "terracotta"
        },
        "3_key": {
          "item": "terracotta"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "terracotta"
        },
        "2_key": {
          "item": "pink_dye"
        },
        "3_key": {
          "item": "terracotta"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "terracotta"
        },
        "2_key": {
          "item": "terracotta"
        },
        "3_key": {
          "item": "terracotta"
        }
      }
    }
  },
  {
    "file": "piston.json",
    "item": "piston",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "tag": "planks"
        },
        "2_key": {
          "tag": "planks"
        },
        "3_key": {
          "tag": "planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "cobblestone"
        },
        "2_key": {
          "item": "iron_ingot"
        },
        "3_key": {
          "item": "cobblestone"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "cobblestone"
        },
        "2_key": {
          "item": "redstone"
        },
        "3_key": {
          "item": "cobblestone"
        }
      }
    }
  },
  {
    "file": "polished_andesite.json",
    "item": "polished_andesite",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "andesite"
        },
        "2_key": {
          "item": "andesite"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "andesite"
        },
        "2_key": {
          "item": "andesite"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "polished_andesite_slab.json",
    "item": "polished_andesite_slab",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "polished_andesite"
        },
        "2_key": {
          "item": "polished_andesite"
        },
        "3_key": {
          "item": "polished_andesite"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "polished_andesite_stairs.json",
    "item": "polished_andesite_stairs",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "polished_andesite"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "polished_andesite"
        },
        "2_key": {
          "item": "polished_andesite"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "polished_andesite"
        },
        "2_key": {
          "item": "polished_andesite"
        },
        "3_key": {
          "item": "polished_andesite"
        }
      }
    }
  },
  {
    "file": "polished_basalt.json",
    "item": "polished_basalt",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "basalt"
        },
        "2_key": {
          "item": "basalt"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "basalt"
        },
        "2_key": {
          "item": "basalt"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "polished_blackstone.json",
    "item": "polished_blackstone",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "blackstone"
        },
        "2_key": {
          "item": "blackstone"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "blackstone"
        },
        "2_key": {
          "item": "blackstone"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "polished_blackstone_bricks.json",
    "item": "polished_blackstone_bricks",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "polished_blackstone"
        },
        "2_key": {
          "item": "polished_blackstone"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "polished_blackstone"
        },
        "2_key": {
          "item": "polished_blackstone"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "polished_blackstone_brick_slab.json",
    "item": "polished_blackstone_brick_slab",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "polished_blackstone_bricks"
        },
        "2_key": {
          "item": "polished_blackstone_bricks"
        },
        "3_key": {
          "item": "polished_blackstone_bricks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "polished_blackstone_brick_stairs.json",
    "item": "polished_blackstone_brick_stairs",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "polished_blackstone_bricks"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "polished_blackstone_bricks"
        },
        "2_key": {
          "item": "polished_blackstone_bricks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "polished_blackstone_bricks"
        },
        "2_key": {
          "item": "polished_blackstone_bricks"
        },
        "3_key": {
          "item": "polished_blackstone_bricks"
        }
      }
    }
  },
  {
    "file": "polished_blackstone_brick_wall.json",
    "item": "polished_blackstone_brick_wall",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "polished_blackstone_bricks"
        },
        "2_key": {
          "item": "polished_blackstone_bricks"
        },
        "3_key": {
          "item": "polished_blackstone_bricks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "polished_blackstone_bricks"
        },
        "2_key": {
          "item": "polished_blackstone_bricks"
        },
        "3_key": {
          "item": "polished_blackstone_bricks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "polished_blackstone_button.json",
    "item": "polished_blackstone_button",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "polished_blackstone"
      }
    ]
  },
  {
    "file": "polished_blackstone_pressure_plate.json",
    "item": "polished_blackstone_pressure_plate",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "polished_blackstone"
        },
        "2_key": {
          "item": "polished_blackstone"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "polished_blackstone_slab.json",
    "item": "polished_blackstone_slab",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "polished_blackstone"
        },
        "2_key": {
          "item": "polished_blackstone"
        },
        "3_key": {
          "item": "polished_blackstone"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "polished_blackstone_stairs.json",
    "item": "polished_blackstone_stairs",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "polished_blackstone"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "polished_blackstone"
        },
        "2_key": {
          "item": "polished_blackstone"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "polished_blackstone"
        },
        "2_key": {
          "item": "polished_blackstone"
        },
        "3_key": {
          "item": "polished_blackstone"
        }
      }
    }
  },
  {
    "file": "polished_blackstone_wall.json",
    "item": "polished_blackstone_wall",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "polished_blackstone"
        },
        "2_key": {
          "item": "polished_blackstone"
        },
        "3_key": {
          "item": "polished_blackstone"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "polished_blackstone"
        },
        "2_key": {
          "item": "polished_blackstone"
        },
        "3_key": {
          "item": "polished_blackstone"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "polished_deepslate.json",
    "item": "polished_deepslate",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "cobbled_deepslate"
        },
        "2_key": {
          "item": "cobbled_deepslate"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "cobbled_deepslate"
        },
        "2_key": {
          "item": "cobbled_deepslate"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "polished_deepslate_slab.json",
    "item": "polished_deepslate_slab",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "polished_deepslate"
        },
        "2_key": {
          "item": "polished_deepslate"
        },
        "3_key": {
          "item": "polished_deepslate"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "polished_deepslate_stairs.json",
    "item": "polished_deepslate_stairs",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "polished_deepslate"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "polished_deepslate"
        },
        "2_key": {
          "item": "polished_deepslate"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "polished_deepslate"
        },
        "2_key": {
          "item": "polished_deepslate"
        },
        "3_key": {
          "item": "polished_deepslate"
        }
      }
    }
  },
  {
    "file": "polished_deepslate_wall.json",
    "item": "polished_deepslate_wall",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "polished_deepslate"
        },
        "2_key": {
          "item": "polished_deepslate"
        },
        "3_key": {
          "item": "polished_deepslate"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "polished_deepslate"
        },
        "2_key": {
          "item": "polished_deepslate"
        },
        "3_key": {
          "item": "polished_deepslate"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "polished_diorite.json",
    "item": "polished_diorite",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "diorite"
        },
        "2_key": {
          "item": "diorite"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "diorite"
        },
        "2_key": {
          "item": "diorite"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "polished_diorite_slab.json",
    "item": "polished_diorite_slab",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "polished_diorite"
        },
        "2_key": {
          "item": "polished_diorite"
        },
        "3_key": {
          "item": "polished_diorite"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "polished_diorite_stairs.json",
    "item": "polished_diorite_stairs",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "polished_diorite"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "polished_diorite"
        },
        "2_key": {
          "item": "polished_diorite"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "polished_diorite"
        },
        "2_key": {
          "item": "polished_diorite"
        },
        "3_key": {
          "item": "polished_diorite"
        }
      }
    }
  },
  {
    "file": "polished_granite.json",
    "item": "polished_granite",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "granite"
        },
        "2_key": {
          "item": "granite"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "granite"
        },
        "2_key": {
          "item": "granite"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "polished_granite_slab.json",
    "item": "polished_granite_slab",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "polished_granite"
        },
        "2_key": {
          "item": "polished_granite"
        },
        "3_key": {
          "item": "polished_granite"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "polished_granite_stairs.json",
    "item": "polished_granite_stairs",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "polished_granite"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "polished_granite"
        },
        "2_key": {
          "item": "polished_granite"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "polished_granite"
        },
        "2_key": {
          "item": "polished_granite"
        },
        "3_key": {
          "item": "polished_granite"
        }
      }
    }
  },
  {
    "file": "powered_rail.json",
    "item": "powered_rail",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "gold_ingot"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "gold_ingot"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "gold_ingot"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "gold_ingot"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "gold_ingot"
        },
        "2_key": {
          "item": "redstone"
        },
        "3_key": {
          "item": "gold_ingot"
        }
      }
    }
  },
  {
    "file": "prismarine.json",
    "item": "prismarine",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "prismarine_shard"
        },
        "2_key": {
          "item": "prismarine_shard"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "prismarine_shard"
        },
        "2_key": {
          "item": "prismarine_shard"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "prismarine_bricks.json",
    "item": "prismarine_bricks",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "prismarine_shard"
      },
      {
        "item": "prismarine_shard"
      },
      {
        "item": "prismarine_shard"
      },
      {
        "item": "prismarine_shard"
      },
      {
        "item": "prismarine_shard"
      },
      {
        "item": "prismarine_shard"
      },
      {
        "item": "prismarine_shard"
      },
      {
        "item": "prismarine_shard"
      },
      {
        "item": "prismarine_shard"
      }
    ]
  },
  {
    "file": "prismarine_brick_slab.json",
    "item": "prismarine_brick_slab",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "prismarine_bricks"
        },
        "2_key": {
          "item": "prismarine_bricks"
        },
        "3_key": {
          "item": "prismarine_bricks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "prismarine_brick_stairs.json",
    "item": "prismarine_brick_stairs",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "prismarine_bricks"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "prismarine_bricks"
        },
        "2_key": {
          "item": "prismarine_bricks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "prismarine_bricks"
        },
        "2_key": {
          "item": "prismarine_bricks"
        },
        "3_key": {
          "item": "prismarine_bricks"
        }
      }
    }
  },
  {
    "file": "prismarine_slab.json",
    "item": "prismarine_slab",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "prismarine"
        },
        "2_key": {
          "item": "prismarine"
        },
        "3_key": {
          "item": "prismarine"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "prismarine_stairs.json",
    "item": "prismarine_stairs",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "prismarine"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "prismarine"
        },
        "2_key": {
          "item": "prismarine"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "prismarine"
        },
        "2_key": {
          "item": "prismarine"
        },
        "3_key": {
          "item": "prismarine"
        }
      }
    }
  },
  {
    "file": "prismarine_wall.json",
    "item": "prismarine_wall",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "prismarine"
        },
        "2_key": {
          "item": "prismarine"
        },
        "3_key": {
          "item": "prismarine"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "prismarine"
        },
        "2_key": {
          "item": "prismarine"
        },
        "3_key": {
          "item": "prismarine"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "pumpkin_pie.json",
    "item": "pumpkin_pie",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "pumpkin"
      },
      {
        "item": "sugar"
      },
      {
        "item": "egg"
      }
    ]
  },
  {
    "file": "pumpkin_seeds.json",
    "item": "pumpkin_seeds",
    "count": 4,
    "patterns": {},
    "ingredients": [
      {
        "item": "pumpkin"
      }
    ]
  },
  {
    "file": "purple_banner.json",
    "item": "purple_banner",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "purple_wool"
        },
        "2_key": {
          "item": "purple_wool"
        },
        "3_key": {
          "item": "purple_wool"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "purple_wool"
        },
        "2_key": {
          "item": "purple_wool"
        },
        "3_key": {
          "item": "purple_wool"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "purple_bed.json",
    "item": "purple_bed",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "purple_wool"
        },
        "2_key": {
          "item": "purple_wool"
        },
        "3_key": {
          "item": "purple_wool"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "tag": "planks"
        },
        "2_key": {
          "tag": "planks"
        },
        "3_key": {
          "tag": "planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "purple_candle.json",
    "item": "purple_candle",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "candle"
      },
      {
        "item": "purple_dye"
      }
    ]
  },
  {
    "file": "purple_carpet.json",
    "item": "purple_carpet",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "purple_wool"
        },
        "2_key": {
          "item": "purple_wool"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "purple_concrete_powder.json",
    "item": "purple_concrete_powder",
    "count": 8,
    "patterns": {},
    "ingredients": [
      {
        "item": "purple_dye"
      },
      {
        "item": "sand"
      },
      {
        "item": "sand"
      },
      {
        "item": "sand"
      },
      {
        "item": "sand"
      },
      {
        "item": "gravel"
      },
      {
        "item": "gravel"
      },
      {
        "item": "gravel"
      },
      {
        "item": "gravel"
      }
    ]
  },
  {
    "file": "purple_dye.json",
    "item": "purple_dye",
    "count": 2,
    "patterns": {},
    "ingredients": [
      {
        "item": "blue_dye"
      },
      {
        "item": "red_dye"
      }
    ]
  },
  {
    "file": "purple_stained_glass.json",
    "item": "purple_stained_glass",
    "count": 8,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "glass"
        },
        "2_key": {
          "item": "glass"
        },
        "3_key": {
          "item": "glass"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "glass"
        },
        "2_key": {
          "item": "purple_dye"
        },
        "3_key": {
          "item": "glass"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "glass"
        },
        "2_key": {
          "item": "glass"
        },
        "3_key": {
          "item": "glass"
        }
      }
    }
  },
  {
    "file": "purple_stained_glass_pane.json",
    "item": "purple_stained_glass_pane",
    "count": 16,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "purple_stained_glass"
        },
        "2_key": {
          "item": "purple_stained_glass"
        },
        "3_key": {
          "item": "purple_stained_glass"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "purple_stained_glass"
        },
        "2_key": {
          "item": "purple_stained_glass"
        },
        "3_key": {
          "item": "purple_stained_glass"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "purple_stained_glass_pane_from_glass_pane.json",
    "item": "purple_stained_glass_pane",
    "count": 8,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "glass_pane"
        },
        "2_key": {
          "item": "glass_pane"
        },
        "3_key": {
          "item": "glass_pane"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "glass_pane"
        },
        "2_key": {
          "item": "purple_dye"
        },
        "3_key": {
          "item": "glass_pane"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "glass_pane"
        },
        "2_key": {
          "item": "glass_pane"
        },
        "3_key": {
          "item": "glass_pane"
        }
      }
    }
  },
  {
    "file": "purple_terracotta.json",
    "item": "purple_terracotta",
    "count": 8,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "terracotta"
        },
        "2_key": {
          "item": "terracotta"
        },
        "3_key": {
          "item": "terracotta"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "terracotta"
        },
        "2_key": {
          "item": "purple_dye"
        },
        "3_key": {
          "item": "terracotta"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "terracotta"
        },
        "2_key": {
          "item": "terracotta"
        },
        "3_key": {
          "item": "terracotta"
        }
      }
    }
  },
  {
    "file": "purpur_block.json",
    "item": "purpur_block",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "popped_chorus_fruit"
        },
        "2_key": {
          "item": "popped_chorus_fruit"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "popped_chorus_fruit"
        },
        "2_key": {
          "item": "popped_chorus_fruit"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "purpur_pillar.json",
    "item": "purpur_pillar",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "purpur_slab"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "purpur_slab"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "purpur_slab.json",
    "item": "purpur_slab",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": [
          {
            "item": "purpur_block"
          },
          {
            "item": "purpur_pillar"
          }
        ],
        "2_key": [
          {
            "item": "purpur_block"
          },
          {
            "item": "purpur_pillar"
          }
        ],
        "3_key": [
          {
            "item": "purpur_block"
          },
          {
            "item": "purpur_pillar"
          }
        ]
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "purpur_stairs.json",
    "item": "purpur_stairs",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": [
          {
            "item": "purpur_block"
          },
          {
            "item": "purpur_pillar"
          }
        ],
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": [
          {
            "item": "purpur_block"
          },
          {
            "item": "purpur_pillar"
          }
        ],
        "2_key": [
          {
            "item": "purpur_block"
          },
          {
            "item": "purpur_pillar"
          }
        ],
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": [
          {
            "item": "purpur_block"
          },
          {
            "item": "purpur_pillar"
          }
        ],
        "2_key": [
          {
            "item": "purpur_block"
          },
          {
            "item": "purpur_pillar"
          }
        ],
        "3_key": [
          {
            "item": "purpur_block"
          },
          {
            "item": "purpur_pillar"
          }
        ]
      }
    }
  },
  {
    "file": "quartz_block.json",
    "item": "quartz_block",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "quartz"
        },
        "2_key": {
          "item": "quartz"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "quartz"
        },
        "2_key": {
          "item": "quartz"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "quartz_bricks.json",
    "item": "quartz_bricks",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "quartz_block"
        },
        "2_key": {
          "item": "quartz_block"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "quartz_block"
        },
        "2_key": {
          "item": "quartz_block"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "quartz_pillar.json",
    "item": "quartz_pillar",
    "count": 2,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "quartz_block"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "quartz_block"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "quartz_slab.json",
    "item": "quartz_slab",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": [
          {
            "item": "chiseled_quartz_block"
          },
          {
            "item": "quartz_block"
          },
          {
            "item": "quartz_pillar"
          }
        ],
        "2_key": [
          {
            "item": "chiseled_quartz_block"
          },
          {
            "item": "quartz_block"
          },
          {
            "item": "quartz_pillar"
          }
        ],
        "3_key": [
          {
            "item": "chiseled_quartz_block"
          },
          {
            "item": "quartz_block"
          },
          {
            "item": "quartz_pillar"
          }
        ]
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "quartz_stairs.json",
    "item": "quartz_stairs",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": [
          {
            "item": "chiseled_quartz_block"
          },
          {
            "item": "quartz_block"
          },
          {
            "item": "quartz_pillar"
          }
        ],
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": [
          {
            "item": "chiseled_quartz_block"
          },
          {
            "item": "quartz_block"
          },
          {
            "item": "quartz_pillar"
          }
        ],
        "2_key": [
          {
            "item": "chiseled_quartz_block"
          },
          {
            "item": "quartz_block"
          },
          {
            "item": "quartz_pillar"
          }
        ],
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": [
          {
            "item": "chiseled_quartz_block"
          },
          {
            "item": "quartz_block"
          },
          {
            "item": "quartz_pillar"
          }
        ],
        "2_key": [
          {
            "item": "chiseled_quartz_block"
          },
          {
            "item": "quartz_block"
          },
          {
            "item": "quartz_pillar"
          }
        ],
        "3_key": [
          {
            "item": "chiseled_quartz_block"
          },
          {
            "item": "quartz_block"
          },
          {
            "item": "quartz_pillar"
          }
        ]
      }
    }
  },
  {
    "file": "rabbit_stew_from_brown_mushroom.json",
    "item": "rabbit_stew",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "baked_potato"
      },
      {
        "item": "cooked_rabbit"
      },
      {
        "item": "bowl"
      },
      {
        "item": "carrot"
      },
      {
        "item": "brown_mushroom"
      }
    ]
  },
  {
    "file": "rabbit_stew_from_red_mushroom.json",
    "item": "rabbit_stew",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "baked_potato"
      },
      {
        "item": "cooked_rabbit"
      },
      {
        "item": "bowl"
      },
      {
        "item": "carrot"
      },
      {
        "item": "red_mushroom"
      }
    ]
  },
  {
    "file": "rail.json",
    "item": "rail",
    "count": 16,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "iron_ingot"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "iron_ingot"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "iron_ingot"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "iron_ingot"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "iron_ingot"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "iron_ingot"
        }
      }
    }
  },
  {
    "file": "raiser_armor_trim_smithing_template.json",
    "item": "raiser_armor_trim_smithing_template",
    "count": 2,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "raiser_armor_trim_smithing_template"
        },
        "3_key": {
          "item": "diamond"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "terracotta"
        },
        "3_key": {
          "item": "diamond"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "diamond"
        },
        "3_key": {
          "item": "diamond"
        }
      }
    }
  },
  {
    "file": "raw_copper.json",
    "item": "raw_copper",
    "count": 9,
    "patterns": {},
    "ingredients": [
      {
        "item": "raw_copper_block"
      }
    ]
  },
  {
    "file": "raw_copper_block.json",
    "item": "raw_copper_block",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "raw_copper"
        },
        "2_key": {
          "item": "raw_copper"
        },
        "3_key": {
          "item": "raw_copper"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "raw_copper"
        },
        "2_key": {
          "item": "raw_copper"
        },
        "3_key": {
          "item": "raw_copper"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "raw_copper"
        },
        "2_key": {
          "item": "raw_copper"
        },
        "3_key": {
          "item": "raw_copper"
        }
      }
    }
  },
  {
    "file": "raw_gold.json",
    "item": "raw_gold",
    "count": 9,
    "patterns": {},
    "ingredients": [
      {
        "item": "raw_gold_block"
      }
    ]
  },
  {
    "file": "raw_gold_block.json",
    "item": "raw_gold_block",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "raw_gold"
        },
        "2_key": {
          "item": "raw_gold"
        },
        "3_key": {
          "item": "raw_gold"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "raw_gold"
        },
        "2_key": {
          "item": "raw_gold"
        },
        "3_key": {
          "item": "raw_gold"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "raw_gold"
        },
        "2_key": {
          "item": "raw_gold"
        },
        "3_key": {
          "item": "raw_gold"
        }
      }
    }
  },
  {
    "file": "raw_iron.json",
    "item": "raw_iron",
    "count": 9,
    "patterns": {},
    "ingredients": [
      {
        "item": "raw_iron_block"
      }
    ]
  },
  {
    "file": "raw_iron_block.json",
    "item": "raw_iron_block",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "raw_iron"
        },
        "2_key": {
          "item": "raw_iron"
        },
        "3_key": {
          "item": "raw_iron"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "raw_iron"
        },
        "2_key": {
          "item": "raw_iron"
        },
        "3_key": {
          "item": "raw_iron"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "raw_iron"
        },
        "2_key": {
          "item": "raw_iron"
        },
        "3_key": {
          "item": "raw_iron"
        }
      }
    }
  },
  {
    "file": "recovery_compass.json",
    "item": "recovery_compass",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "echo_shard"
        },
        "2_key": {
          "item": "echo_shard"
        },
        "3_key": {
          "item": "echo_shard"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "echo_shard"
        },
        "2_key": {
          "item": "compass"
        },
        "3_key": {
          "item": "echo_shard"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "echo_shard"
        },
        "2_key": {
          "item": "echo_shard"
        },
        "3_key": {
          "item": "echo_shard"
        }
      }
    }
  },
  {
    "file": "redstone.json",
    "item": "redstone",
    "count": 9,
    "patterns": {},
    "ingredients": [
      {
        "item": "redstone_block"
      }
    ]
  },
  {
    "file": "redstone_block.json",
    "item": "redstone_block",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "redstone"
        },
        "2_key": {
          "item": "redstone"
        },
        "3_key": {
          "item": "redstone"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "redstone"
        },
        "2_key": {
          "item": "redstone"
        },
        "3_key": {
          "item": "redstone"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "redstone"
        },
        "2_key": {
          "item": "redstone"
        },
        "3_key": {
          "item": "redstone"
        }
      }
    }
  },
  {
    "file": "redstone_lamp.json",
    "item": "redstone_lamp",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "redstone"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "redstone"
        },
        "2_key": {
          "item": "glowstone"
        },
        "3_key": {
          "item": "redstone"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "redstone"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "redstone_torch.json",
    "item": "redstone_torch",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "redstone"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "red_banner.json",
    "item": "red_banner",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "red_wool"
        },
        "2_key": {
          "item": "red_wool"
        },
        "3_key": {
          "item": "red_wool"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "red_wool"
        },
        "2_key": {
          "item": "red_wool"
        },
        "3_key": {
          "item": "red_wool"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "red_bed.json",
    "item": "red_bed",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "red_wool"
        },
        "2_key": {
          "item": "red_wool"
        },
        "3_key": {
          "item": "red_wool"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "tag": "planks"
        },
        "2_key": {
          "tag": "planks"
        },
        "3_key": {
          "tag": "planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "red_candle.json",
    "item": "red_candle",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "candle"
      },
      {
        "item": "red_dye"
      }
    ]
  },
  {
    "file": "red_carpet.json",
    "item": "red_carpet",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "red_wool"
        },
        "2_key": {
          "item": "red_wool"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "red_concrete_powder.json",
    "item": "red_concrete_powder",
    "count": 8,
    "patterns": {},
    "ingredients": [
      {
        "item": "red_dye"
      },
      {
        "item": "sand"
      },
      {
        "item": "sand"
      },
      {
        "item": "sand"
      },
      {
        "item": "sand"
      },
      {
        "item": "gravel"
      },
      {
        "item": "gravel"
      },
      {
        "item": "gravel"
      },
      {
        "item": "gravel"
      }
    ]
  },
  {
    "file": "red_dye_from_beetroot.json",
    "item": "red_dye",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "beetroot"
      }
    ]
  },
  {
    "file": "red_dye_from_poppy.json",
    "item": "red_dye",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "poppy"
      }
    ]
  },
  {
    "file": "red_dye_from_rose_bush.json",
    "item": "red_dye",
    "count": 2,
    "patterns": {},
    "ingredients": [
      {
        "item": "rose_bush"
      }
    ]
  },
  {
    "file": "red_dye_from_tulip.json",
    "item": "red_dye",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "red_tulip"
      }
    ]
  },
  {
    "file": "red_nether_bricks.json",
    "item": "red_nether_bricks",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "nether_brick"
        },
        "2_key": {
          "item": "nether_wart"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "nether_wart"
        },
        "2_key": {
          "item": "nether_brick"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "red_nether_brick_slab.json",
    "item": "red_nether_brick_slab",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "red_nether_bricks"
        },
        "2_key": {
          "item": "red_nether_bricks"
        },
        "3_key": {
          "item": "red_nether_bricks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "red_nether_brick_stairs.json",
    "item": "red_nether_brick_stairs",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "red_nether_bricks"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "red_nether_bricks"
        },
        "2_key": {
          "item": "red_nether_bricks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "red_nether_bricks"
        },
        "2_key": {
          "item": "red_nether_bricks"
        },
        "3_key": {
          "item": "red_nether_bricks"
        }
      }
    }
  },
  {
    "file": "red_nether_brick_wall.json",
    "item": "red_nether_brick_wall",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "red_nether_bricks"
        },
        "2_key": {
          "item": "red_nether_bricks"
        },
        "3_key": {
          "item": "red_nether_bricks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "red_nether_bricks"
        },
        "2_key": {
          "item": "red_nether_bricks"
        },
        "3_key": {
          "item": "red_nether_bricks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "red_sandstone.json",
    "item": "red_sandstone",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "red_sand"
        },
        "2_key": {
          "item": "red_sand"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "red_sand"
        },
        "2_key": {
          "item": "red_sand"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "red_sandstone_slab.json",
    "item": "red_sandstone_slab",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": [
          {
            "item": "red_sandstone"
          },
          {
            "item": "chiseled_red_sandstone"
          }
        ],
        "2_key": [
          {
            "item": "red_sandstone"
          },
          {
            "item": "chiseled_red_sandstone"
          }
        ],
        "3_key": [
          {
            "item": "red_sandstone"
          },
          {
            "item": "chiseled_red_sandstone"
          }
        ]
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "red_sandstone_stairs.json",
    "item": "red_sandstone_stairs",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": [
          {
            "item": "red_sandstone"
          },
          {
            "item": "chiseled_red_sandstone"
          },
          {
            "item": "cut_red_sandstone"
          }
        ],
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": [
          {
            "item": "red_sandstone"
          },
          {
            "item": "chiseled_red_sandstone"
          },
          {
            "item": "cut_red_sandstone"
          }
        ],
        "2_key": [
          {
            "item": "red_sandstone"
          },
          {
            "item": "chiseled_red_sandstone"
          },
          {
            "item": "cut_red_sandstone"
          }
        ],
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": [
          {
            "item": "red_sandstone"
          },
          {
            "item": "chiseled_red_sandstone"
          },
          {
            "item": "cut_red_sandstone"
          }
        ],
        "2_key": [
          {
            "item": "red_sandstone"
          },
          {
            "item": "chiseled_red_sandstone"
          },
          {
            "item": "cut_red_sandstone"
          }
        ],
        "3_key": [
          {
            "item": "red_sandstone"
          },
          {
            "item": "chiseled_red_sandstone"
          },
          {
            "item": "cut_red_sandstone"
          }
        ]
      }
    }
  },
  {
    "file": "red_sandstone_wall.json",
    "item": "red_sandstone_wall",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "red_sandstone"
        },
        "2_key": {
          "item": "red_sandstone"
        },
        "3_key": {
          "item": "red_sandstone"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "red_sandstone"
        },
        "2_key": {
          "item": "red_sandstone"
        },
        "3_key": {
          "item": "red_sandstone"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "red_stained_glass.json",
    "item": "red_stained_glass",
    "count": 8,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "glass"
        },
        "2_key": {
          "item": "glass"
        },
        "3_key": {
          "item": "glass"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "glass"
        },
        "2_key": {
          "item": "red_dye"
        },
        "3_key": {
          "item": "glass"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "glass"
        },
        "2_key": {
          "item": "glass"
        },
        "3_key": {
          "item": "glass"
        }
      }
    }
  },
  {
    "file": "red_stained_glass_pane.json",
    "item": "red_stained_glass_pane",
    "count": 16,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "red_stained_glass"
        },
        "2_key": {
          "item": "red_stained_glass"
        },
        "3_key": {
          "item": "red_stained_glass"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "red_stained_glass"
        },
        "2_key": {
          "item": "red_stained_glass"
        },
        "3_key": {
          "item": "red_stained_glass"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "red_stained_glass_pane_from_glass_pane.json",
    "item": "red_stained_glass_pane",
    "count": 8,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "glass_pane"
        },
        "2_key": {
          "item": "glass_pane"
        },
        "3_key": {
          "item": "glass_pane"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "glass_pane"
        },
        "2_key": {
          "item": "red_dye"
        },
        "3_key": {
          "item": "glass_pane"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "glass_pane"
        },
        "2_key": {
          "item": "glass_pane"
        },
        "3_key": {
          "item": "glass_pane"
        }
      }
    }
  },
  {
    "file": "red_terracotta.json",
    "item": "red_terracotta",
    "count": 8,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "terracotta"
        },
        "2_key": {
          "item": "terracotta"
        },
        "3_key": {
          "item": "terracotta"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "terracotta"
        },
        "2_key": {
          "item": "red_dye"
        },
        "3_key": {
          "item": "terracotta"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "terracotta"
        },
        "2_key": {
          "item": "terracotta"
        },
        "3_key": {
          "item": "terracotta"
        }
      }
    }
  },
  {
    "file": "repeater.json",
    "item": "repeater",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "redstone_torch"
        },
        "2_key": {
          "item": "redstone"
        },
        "3_key": {
          "item": "redstone_torch"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "stone"
        },
        "2_key": {
          "item": "stone"
        },
        "3_key": {
          "item": "stone"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "respawn_anchor.json",
    "item": "respawn_anchor",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "crying_obsidian"
        },
        "2_key": {
          "item": "crying_obsidian"
        },
        "3_key": {
          "item": "crying_obsidian"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "glowstone"
        },
        "2_key": {
          "item": "glowstone"
        },
        "3_key": {
          "item": "glowstone"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "crying_obsidian"
        },
        "2_key": {
          "item": "crying_obsidian"
        },
        "3_key": {
          "item": "crying_obsidian"
        }
      }
    }
  },
  {
    "file": "rib_armor_trim_smithing_template.json",
    "item": "rib_armor_trim_smithing_template",
    "count": 2,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "rib_armor_trim_smithing_template"
        },
        "3_key": {
          "item": "diamond"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "netherrack"
        },
        "3_key": {
          "item": "diamond"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "diamond"
        },
        "3_key": {
          "item": "diamond"
        }
      }
    }
  },
  {
    "file": "sandstone.json",
    "item": "sandstone",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "sand"
        },
        "2_key": {
          "item": "sand"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "sand"
        },
        "2_key": {
          "item": "sand"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "sandstone_slab.json",
    "item": "sandstone_slab",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": [
          {
            "item": "sandstone"
          },
          {
            "item": "chiseled_sandstone"
          }
        ],
        "2_key": [
          {
            "item": "sandstone"
          },
          {
            "item": "chiseled_sandstone"
          }
        ],
        "3_key": [
          {
            "item": "sandstone"
          },
          {
            "item": "chiseled_sandstone"
          }
        ]
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "sandstone_stairs.json",
    "item": "sandstone_stairs",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": [
          {
            "item": "sandstone"
          },
          {
            "item": "chiseled_sandstone"
          },
          {
            "item": "cut_sandstone"
          }
        ],
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": [
          {
            "item": "sandstone"
          },
          {
            "item": "chiseled_sandstone"
          },
          {
            "item": "cut_sandstone"
          }
        ],
        "2_key": [
          {
            "item": "sandstone"
          },
          {
            "item": "chiseled_sandstone"
          },
          {
            "item": "cut_sandstone"
          }
        ],
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": [
          {
            "item": "sandstone"
          },
          {
            "item": "chiseled_sandstone"
          },
          {
            "item": "cut_sandstone"
          }
        ],
        "2_key": [
          {
            "item": "sandstone"
          },
          {
            "item": "chiseled_sandstone"
          },
          {
            "item": "cut_sandstone"
          }
        ],
        "3_key": [
          {
            "item": "sandstone"
          },
          {
            "item": "chiseled_sandstone"
          },
          {
            "item": "cut_sandstone"
          }
        ]
      }
    }
  },
  {
    "file": "sandstone_wall.json",
    "item": "sandstone_wall",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "sandstone"
        },
        "2_key": {
          "item": "sandstone"
        },
        "3_key": {
          "item": "sandstone"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "sandstone"
        },
        "2_key": {
          "item": "sandstone"
        },
        "3_key": {
          "item": "sandstone"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "scaffolding.json",
    "item": "scaffolding",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "bamboo"
        },
        "2_key": {
          "item": "string"
        },
        "3_key": {
          "item": "bamboo"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "bamboo"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "bamboo"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "bamboo"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "bamboo"
        }
      }
    }
  },
  {
    "file": "sea_lantern.json",
    "item": "sea_lantern",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "prismarine_shard"
        },
        "2_key": {
          "item": "prismarine_crystals"
        },
        "3_key": {
          "item": "prismarine_shard"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "prismarine_crystals"
        },
        "2_key": {
          "item": "prismarine_crystals"
        },
        "3_key": {
          "item": "prismarine_crystals"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "prismarine_shard"
        },
        "2_key": {
          "item": "prismarine_crystals"
        },
        "3_key": {
          "item": "prismarine_shard"
        }
      }
    }
  },
  {
    "file": "sentry_armor_trim_smithing_template.json",
    "item": "sentry_armor_trim_smithing_template",
    "count": 2,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "sentry_armor_trim_smithing_template"
        },
        "3_key": {
          "item": "diamond"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "cobblestone"
        },
        "3_key": {
          "item": "diamond"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "diamond"
        },
        "3_key": {
          "item": "diamond"
        }
      }
    }
  },
  {
    "file": "shaper_armor_trim_smithing_template.json",
    "item": "shaper_armor_trim_smithing_template",
    "count": 2,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "shaper_armor_trim_smithing_template"
        },
        "3_key": {
          "item": "diamond"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "terracotta"
        },
        "3_key": {
          "item": "diamond"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "diamond"
        },
        "3_key": {
          "item": "diamond"
        }
      }
    }
  },
  {
    "file": "shears.json",
    "item": "shears",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "iron_ingot"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "iron_ingot"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "shield.json",
    "item": "shield",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "tag": "planks"
        },
        "2_key": {
          "item": "iron_ingot"
        },
        "3_key": {
          "tag": "planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "tag": "planks"
        },
        "2_key": {
          "tag": "planks"
        },
        "3_key": {
          "tag": "planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "tag": "planks"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "shulker_box.json",
    "item": "shulker_box",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "shulker_shell"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "chest"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "shulker_shell"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "silence_armor_trim_smithing_template.json",
    "item": "silence_armor_trim_smithing_template",
    "count": 2,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "silence_armor_trim_smithing_template"
        },
        "3_key": {
          "item": "diamond"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "cobbled_deepslate"
        },
        "3_key": {
          "item": "diamond"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "diamond"
        },
        "3_key": {
          "item": "diamond"
        }
      }
    }
  },
  {
    "file": "skull_banner_pattern.json",
    "item": "skull_banner_pattern",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "paper"
      },
      {
        "item": "wither_skeleton_skull"
      }
    ]
  },
  {
    "file": "slime_ball.json",
    "item": "slime_ball",
    "count": 9,
    "patterns": {},
    "ingredients": [
      {
        "item": "slime_block"
      }
    ]
  },
  {
    "file": "slime_block.json",
    "item": "slime_block",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "slime_ball"
        },
        "2_key": {
          "item": "slime_ball"
        },
        "3_key": {
          "item": "slime_ball"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "slime_ball"
        },
        "2_key": {
          "item": "slime_ball"
        },
        "3_key": {
          "item": "slime_ball"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "slime_ball"
        },
        "2_key": {
          "item": "slime_ball"
        },
        "3_key": {
          "item": "slime_ball"
        }
      }
    }
  },
  {
    "file": "smithing_table.json",
    "item": "smithing_table",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "iron_ingot"
        },
        "2_key": {
          "item": "iron_ingot"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "tag": "planks"
        },
        "2_key": {
          "tag": "planks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "tag": "planks"
        },
        "2_key": {
          "tag": "planks"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "smoker.json",
    "item": "smoker",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "tag": "logs"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "tag": "logs"
        },
        "2_key": {
          "item": "furnace"
        },
        "3_key": {
          "tag": "logs"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "tag": "logs"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "smooth_quartz_slab.json",
    "item": "smooth_quartz_slab",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "smooth_quartz"
        },
        "2_key": {
          "item": "smooth_quartz"
        },
        "3_key": {
          "item": "smooth_quartz"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "smooth_quartz_stairs.json",
    "item": "smooth_quartz_stairs",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "smooth_quartz"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "smooth_quartz"
        },
        "2_key": {
          "item": "smooth_quartz"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "smooth_quartz"
        },
        "2_key": {
          "item": "smooth_quartz"
        },
        "3_key": {
          "item": "smooth_quartz"
        }
      }
    }
  },
  {
    "file": "smooth_red_sandstone_slab.json",
    "item": "smooth_red_sandstone_slab",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "smooth_red_sandstone"
        },
        "2_key": {
          "item": "smooth_red_sandstone"
        },
        "3_key": {
          "item": "smooth_red_sandstone"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "smooth_red_sandstone_stairs.json",
    "item": "smooth_red_sandstone_stairs",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "smooth_red_sandstone"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "smooth_red_sandstone"
        },
        "2_key": {
          "item": "smooth_red_sandstone"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "smooth_red_sandstone"
        },
        "2_key": {
          "item": "smooth_red_sandstone"
        },
        "3_key": {
          "item": "smooth_red_sandstone"
        }
      }
    }
  },
  {
    "file": "smooth_sandstone_slab.json",
    "item": "smooth_sandstone_slab",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "smooth_sandstone"
        },
        "2_key": {
          "item": "smooth_sandstone"
        },
        "3_key": {
          "item": "smooth_sandstone"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "smooth_sandstone_stairs.json",
    "item": "smooth_sandstone_stairs",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "smooth_sandstone"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "smooth_sandstone"
        },
        "2_key": {
          "item": "smooth_sandstone"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "smooth_sandstone"
        },
        "2_key": {
          "item": "smooth_sandstone"
        },
        "3_key": {
          "item": "smooth_sandstone"
        }
      }
    }
  },
  {
    "file": "smooth_stone_slab.json",
    "item": "smooth_stone_slab",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "smooth_stone"
        },
        "2_key": {
          "item": "smooth_stone"
        },
        "3_key": {
          "item": "smooth_stone"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "snout_armor_trim_smithing_template.json",
    "item": "snout_armor_trim_smithing_template",
    "count": 2,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "snout_armor_trim_smithing_template"
        },
        "3_key": {
          "item": "diamond"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "blackstone"
        },
        "3_key": {
          "item": "diamond"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "diamond"
        },
        "3_key": {
          "item": "diamond"
        }
      }
    }
  },
  {
    "file": "snow.json",
    "item": "snow",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "snow_block"
        },
        "2_key": {
          "item": "snow_block"
        },
        "3_key": {
          "item": "snow_block"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "snow_block.json",
    "item": "snow_block",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "snowball"
        },
        "2_key": {
          "item": "snowball"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "snowball"
        },
        "2_key": {
          "item": "snowball"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "soul_campfire.json",
    "item": "soul_campfire",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "tag": "soul_fire_base_blocks"
        },
        "3_key": {
          "item": "stick"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "tag": "logs"
        },
        "2_key": {
          "tag": "logs"
        },
        "3_key": {
          "tag": "logs"
        }
      }
    }
  },
  {
    "file": "soul_lantern.json",
    "item": "soul_lantern",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "iron_nugget"
        },
        "2_key": {
          "item": "iron_nugget"
        },
        "3_key": {
          "item": "iron_nugget"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "iron_nugget"
        },
        "2_key": {
          "item": "soul_torch"
        },
        "3_key": {
          "item": "iron_nugget"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "iron_nugget"
        },
        "2_key": {
          "item": "iron_nugget"
        },
        "3_key": {
          "item": "iron_nugget"
        }
      }
    }
  },
  {
    "file": "soul_torch.json",
    "item": "soul_torch",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": [
          {
            "item": "coal"
          },
          {
            "item": "charcoal"
          }
        ],
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "tag": "soul_fire_base_blocks"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "spectral_arrow.json",
    "item": "spectral_arrow",
    "count": 2,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "glowstone_dust"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "glowstone_dust"
        },
        "2_key": {
          "item": "arrow"
        },
        "3_key": {
          "item": "glowstone_dust"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "glowstone_dust"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "spire_armor_trim_smithing_template.json",
    "item": "spire_armor_trim_smithing_template",
    "count": 2,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "spire_armor_trim_smithing_template"
        },
        "3_key": {
          "item": "diamond"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "purpur_block"
        },
        "3_key": {
          "item": "diamond"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "diamond"
        },
        "3_key": {
          "item": "diamond"
        }
      }
    }
  },
  {
    "file": "spruce_boat.json",
    "item": "spruce_boat",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "spruce_planks"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "spruce_planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "spruce_planks"
        },
        "2_key": {
          "item": "spruce_planks"
        },
        "3_key": {
          "item": "spruce_planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "spruce_button.json",
    "item": "spruce_button",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "spruce_planks"
      }
    ]
  },
  {
    "file": "spruce_chest_boat.json",
    "item": "spruce_chest_boat",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "chest"
      },
      {
        "item": "spruce_boat"
      }
    ]
  },
  {
    "file": "spruce_door.json",
    "item": "spruce_door",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "spruce_planks"
        },
        "2_key": {
          "item": "spruce_planks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "spruce_planks"
        },
        "2_key": {
          "item": "spruce_planks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "spruce_planks"
        },
        "2_key": {
          "item": "spruce_planks"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "spruce_fence.json",
    "item": "spruce_fence",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "spruce_planks"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "spruce_planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "spruce_planks"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "spruce_planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "spruce_fence_gate.json",
    "item": "spruce_fence_gate",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "item": "spruce_planks"
        },
        "3_key": {
          "item": "stick"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "item": "spruce_planks"
        },
        "3_key": {
          "item": "stick"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "spruce_hanging_sign.json",
    "item": "spruce_hanging_sign",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "chain"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "chain"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "stripped_spruce_log"
        },
        "2_key": {
          "item": "stripped_spruce_log"
        },
        "3_key": {
          "item": "stripped_spruce_log"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "stripped_spruce_log"
        },
        "2_key": {
          "item": "stripped_spruce_log"
        },
        "3_key": {
          "item": "stripped_spruce_log"
        }
      }
    }
  },
  {
    "file": "spruce_planks.json",
    "item": "spruce_planks",
    "count": 4,
    "patterns": {},
    "ingredients": [
      {
        "tag": "spruce_logs"
      }
    ]
  },
  {
    "file": "spruce_pressure_plate.json",
    "item": "spruce_pressure_plate",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "spruce_planks"
        },
        "2_key": {
          "item": "spruce_planks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "spruce_sign.json",
    "item": "spruce_sign",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "spruce_planks"
        },
        "2_key": {
          "item": "spruce_planks"
        },
        "3_key": {
          "item": "spruce_planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "spruce_planks"
        },
        "2_key": {
          "item": "spruce_planks"
        },
        "3_key": {
          "item": "spruce_planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "spruce_slab.json",
    "item": "spruce_slab",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "spruce_planks"
        },
        "2_key": {
          "item": "spruce_planks"
        },
        "3_key": {
          "item": "spruce_planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "spruce_stairs.json",
    "item": "spruce_stairs",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "spruce_planks"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "spruce_planks"
        },
        "2_key": {
          "item": "spruce_planks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "spruce_planks"
        },
        "2_key": {
          "item": "spruce_planks"
        },
        "3_key": {
          "item": "spruce_planks"
        }
      }
    }
  },
  {
    "file": "spruce_trapdoor.json",
    "item": "spruce_trapdoor",
    "count": 2,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "spruce_planks"
        },
        "2_key": {
          "item": "spruce_planks"
        },
        "3_key": {
          "item": "spruce_planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "spruce_planks"
        },
        "2_key": {
          "item": "spruce_planks"
        },
        "3_key": {
          "item": "spruce_planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "spruce_wood.json",
    "item": "spruce_wood",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "spruce_log"
        },
        "2_key": {
          "item": "spruce_log"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "spruce_log"
        },
        "2_key": {
          "item": "spruce_log"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "spyglass.json",
    "item": "spyglass",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "amethyst_shard"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "copper_ingot"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "copper_ingot"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "stick.json",
    "item": "stick",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "tag": "planks"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "tag": "planks"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "sticky_piston.json",
    "item": "sticky_piston",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "slime_ball"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "piston"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "stick_from_bamboo_item.json",
    "item": "stick",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "bamboo"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "bamboo"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "stonecutter.json",
    "item": "stonecutter",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "iron_ingot"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "stone"
        },
        "2_key": {
          "item": "stone"
        },
        "3_key": {
          "item": "stone"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "stone_axe.json",
    "item": "stone_axe",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "tag": "stone_tool_materials"
        },
        "2_key": {
          "tag": "stone_tool_materials"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "tag": "stone_tool_materials"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "stone_bricks.json",
    "item": "stone_bricks",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "stone"
        },
        "2_key": {
          "item": "stone"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "stone"
        },
        "2_key": {
          "item": "stone"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "stone_brick_slab.json",
    "item": "stone_brick_slab",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "stone_bricks"
        },
        "2_key": {
          "item": "stone_bricks"
        },
        "3_key": {
          "item": "stone_bricks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "stone_brick_stairs.json",
    "item": "stone_brick_stairs",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "stone_bricks"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "stone_bricks"
        },
        "2_key": {
          "item": "stone_bricks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "stone_bricks"
        },
        "2_key": {
          "item": "stone_bricks"
        },
        "3_key": {
          "item": "stone_bricks"
        }
      }
    }
  },
  {
    "file": "stone_brick_wall.json",
    "item": "stone_brick_wall",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "stone_bricks"
        },
        "2_key": {
          "item": "stone_bricks"
        },
        "3_key": {
          "item": "stone_bricks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "stone_bricks"
        },
        "2_key": {
          "item": "stone_bricks"
        },
        "3_key": {
          "item": "stone_bricks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "stone_button.json",
    "item": "stone_button",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "stone"
      }
    ]
  },
  {
    "file": "stone_hoe.json",
    "item": "stone_hoe",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "tag": "stone_tool_materials"
        },
        "2_key": {
          "tag": "stone_tool_materials"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "stone_pickaxe.json",
    "item": "stone_pickaxe",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "tag": "stone_tool_materials"
        },
        "2_key": {
          "tag": "stone_tool_materials"
        },
        "3_key": {
          "tag": "stone_tool_materials"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "stone_pressure_plate.json",
    "item": "stone_pressure_plate",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "stone"
        },
        "2_key": {
          "item": "stone"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "stone_shovel.json",
    "item": "stone_shovel",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "tag": "stone_tool_materials"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "stone_slab.json",
    "item": "stone_slab",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "stone"
        },
        "2_key": {
          "item": "stone"
        },
        "3_key": {
          "item": "stone"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "stone_stairs.json",
    "item": "stone_stairs",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "stone"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "stone"
        },
        "2_key": {
          "item": "stone"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "stone"
        },
        "2_key": {
          "item": "stone"
        },
        "3_key": {
          "item": "stone"
        }
      }
    }
  },
  {
    "file": "stone_sword.json",
    "item": "stone_sword",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "tag": "stone_tool_materials"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "tag": "stone_tool_materials"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "stripped_acacia_wood.json",
    "item": "stripped_acacia_wood",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "stripped_acacia_log"
        },
        "2_key": {
          "item": "stripped_acacia_log"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "stripped_acacia_log"
        },
        "2_key": {
          "item": "stripped_acacia_log"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "stripped_birch_wood.json",
    "item": "stripped_birch_wood",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "stripped_birch_log"
        },
        "2_key": {
          "item": "stripped_birch_log"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "stripped_birch_log"
        },
        "2_key": {
          "item": "stripped_birch_log"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "stripped_cherry_wood.json",
    "item": "stripped_cherry_wood",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "stripped_cherry_log"
        },
        "2_key": {
          "item": "stripped_cherry_log"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "stripped_cherry_log"
        },
        "2_key": {
          "item": "stripped_cherry_log"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "stripped_crimson_hyphae.json",
    "item": "stripped_crimson_hyphae",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "stripped_crimson_stem"
        },
        "2_key": {
          "item": "stripped_crimson_stem"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "stripped_crimson_stem"
        },
        "2_key": {
          "item": "stripped_crimson_stem"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "stripped_dark_oak_wood.json",
    "item": "stripped_dark_oak_wood",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "stripped_dark_oak_log"
        },
        "2_key": {
          "item": "stripped_dark_oak_log"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "stripped_dark_oak_log"
        },
        "2_key": {
          "item": "stripped_dark_oak_log"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "stripped_jungle_wood.json",
    "item": "stripped_jungle_wood",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "stripped_jungle_log"
        },
        "2_key": {
          "item": "stripped_jungle_log"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "stripped_jungle_log"
        },
        "2_key": {
          "item": "stripped_jungle_log"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "stripped_mangrove_wood.json",
    "item": "stripped_mangrove_wood",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "stripped_mangrove_log"
        },
        "2_key": {
          "item": "stripped_mangrove_log"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "stripped_mangrove_log"
        },
        "2_key": {
          "item": "stripped_mangrove_log"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "stripped_oak_wood.json",
    "item": "stripped_oak_wood",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "stripped_oak_log"
        },
        "2_key": {
          "item": "stripped_oak_log"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "stripped_oak_log"
        },
        "2_key": {
          "item": "stripped_oak_log"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "stripped_spruce_wood.json",
    "item": "stripped_spruce_wood",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "stripped_spruce_log"
        },
        "2_key": {
          "item": "stripped_spruce_log"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "stripped_spruce_log"
        },
        "2_key": {
          "item": "stripped_spruce_log"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "stripped_warped_hyphae.json",
    "item": "stripped_warped_hyphae",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "stripped_warped_stem"
        },
        "2_key": {
          "item": "stripped_warped_stem"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "stripped_warped_stem"
        },
        "2_key": {
          "item": "stripped_warped_stem"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "sugar_from_honey_bottle.json",
    "item": "sugar",
    "count": 3,
    "patterns": {},
    "ingredients": [
      {
        "item": "honey_bottle"
      }
    ]
  },
  {
    "file": "sugar_from_sugar_cane.json",
    "item": "sugar",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "sugar_cane"
      }
    ]
  },
  {
    "file": "target.json",
    "item": "target",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "redstone"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "redstone"
        },
        "2_key": {
          "item": "hay_block"
        },
        "3_key": {
          "item": "redstone"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "redstone"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "tide_armor_trim_smithing_template.json",
    "item": "tide_armor_trim_smithing_template",
    "count": 2,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "tide_armor_trim_smithing_template"
        },
        "3_key": {
          "item": "diamond"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "prismarine"
        },
        "3_key": {
          "item": "diamond"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "diamond"
        },
        "3_key": {
          "item": "diamond"
        }
      }
    }
  },
  {
    "file": "tinted_glass.json",
    "item": "tinted_glass",
    "count": 2,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "amethyst_shard"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "amethyst_shard"
        },
        "2_key": {
          "item": "glass"
        },
        "3_key": {
          "item": "amethyst_shard"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "amethyst_shard"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "tnt.json",
    "item": "tnt",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "gunpowder"
        },
        "2_key": [
          {
            "item": "sand"
          },
          {
            "item": "red_sand"
          }
        ],
        "3_key": {
          "item": "gunpowder"
        }
      },
      "pattern_row_2": {
        "1_key": [
          {
            "item": "sand"
          },
          {
            "item": "red_sand"
          }
        ],
        "2_key": {
          "item": "gunpowder"
        },
        "3_key": [
          {
            "item": "sand"
          },
          {
            "item": "red_sand"
          }
        ]
      },
      "pattern_row_3": {
        "1_key": {
          "item": "gunpowder"
        },
        "2_key": [
          {
            "item": "sand"
          },
          {
            "item": "red_sand"
          }
        ],
        "3_key": {
          "item": "gunpowder"
        }
      }
    }
  },
  {
    "file": "tnt_minecart.json",
    "item": "tnt_minecart",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "tnt"
      },
      {
        "item": "minecart"
      }
    ]
  },
  {
    "file": "torch.json",
    "item": "torch",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": [
          {
            "item": "coal"
          },
          {
            "item": "charcoal"
          }
        ],
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "trapped_chest.json",
    "item": "trapped_chest",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "chest"
      },
      {
        "item": "tripwire_hook"
      }
    ]
  },
  {
    "file": "tripwire_hook.json",
    "item": "tripwire_hook",
    "count": 2,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "iron_ingot"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "tag": "planks"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "turtle_helmet.json",
    "item": "turtle_helmet",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "scute"
        },
        "2_key": {
          "item": "scute"
        },
        "3_key": {
          "item": "scute"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "scute"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "scute"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "vex_armor_trim_smithing_template.json",
    "item": "vex_armor_trim_smithing_template",
    "count": 2,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "vex_armor_trim_smithing_template"
        },
        "3_key": {
          "item": "diamond"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "cobblestone"
        },
        "3_key": {
          "item": "diamond"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "diamond"
        },
        "3_key": {
          "item": "diamond"
        }
      }
    }
  },
  {
    "file": "ward_armor_trim_smithing_template.json",
    "item": "ward_armor_trim_smithing_template",
    "count": 2,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "ward_armor_trim_smithing_template"
        },
        "3_key": {
          "item": "diamond"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "cobbled_deepslate"
        },
        "3_key": {
          "item": "diamond"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "diamond"
        },
        "3_key": {
          "item": "diamond"
        }
      }
    }
  },
  {
    "file": "warped_button.json",
    "item": "warped_button",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "warped_planks"
      }
    ]
  },
  {
    "file": "warped_door.json",
    "item": "warped_door",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "warped_planks"
        },
        "2_key": {
          "item": "warped_planks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "warped_planks"
        },
        "2_key": {
          "item": "warped_planks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "warped_planks"
        },
        "2_key": {
          "item": "warped_planks"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "warped_fence.json",
    "item": "warped_fence",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "warped_planks"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "warped_planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "warped_planks"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "warped_planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "warped_fence_gate.json",
    "item": "warped_fence_gate",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "item": "warped_planks"
        },
        "3_key": {
          "item": "stick"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "item": "warped_planks"
        },
        "3_key": {
          "item": "stick"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "warped_fungus_on_a_stick.json",
    "item": "warped_fungus_on_a_stick",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "fishing_rod"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "warped_fungus"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "warped_hanging_sign.json",
    "item": "warped_hanging_sign",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "chain"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "chain"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "stripped_warped_stem"
        },
        "2_key": {
          "item": "stripped_warped_stem"
        },
        "3_key": {
          "item": "stripped_warped_stem"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "stripped_warped_stem"
        },
        "2_key": {
          "item": "stripped_warped_stem"
        },
        "3_key": {
          "item": "stripped_warped_stem"
        }
      }
    }
  },
  {
    "file": "warped_hyphae.json",
    "item": "warped_hyphae",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "warped_stem"
        },
        "2_key": {
          "item": "warped_stem"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "warped_stem"
        },
        "2_key": {
          "item": "warped_stem"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "warped_planks.json",
    "item": "warped_planks",
    "count": 4,
    "patterns": {},
    "ingredients": [
      {
        "tag": "warped_stems"
      }
    ]
  },
  {
    "file": "warped_pressure_plate.json",
    "item": "warped_pressure_plate",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "warped_planks"
        },
        "2_key": {
          "item": "warped_planks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "warped_sign.json",
    "item": "warped_sign",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "warped_planks"
        },
        "2_key": {
          "item": "warped_planks"
        },
        "3_key": {
          "item": "warped_planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "warped_planks"
        },
        "2_key": {
          "item": "warped_planks"
        },
        "3_key": {
          "item": "warped_planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "warped_slab.json",
    "item": "warped_slab",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "warped_planks"
        },
        "2_key": {
          "item": "warped_planks"
        },
        "3_key": {
          "item": "warped_planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "warped_stairs.json",
    "item": "warped_stairs",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "warped_planks"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "warped_planks"
        },
        "2_key": {
          "item": "warped_planks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "warped_planks"
        },
        "2_key": {
          "item": "warped_planks"
        },
        "3_key": {
          "item": "warped_planks"
        }
      }
    }
  },
  {
    "file": "warped_trapdoor.json",
    "item": "warped_trapdoor",
    "count": 2,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "warped_planks"
        },
        "2_key": {
          "item": "warped_planks"
        },
        "3_key": {
          "item": "warped_planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "warped_planks"
        },
        "2_key": {
          "item": "warped_planks"
        },
        "3_key": {
          "item": "warped_planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "waxed_copper_block_from_honeycomb.json",
    "item": "waxed_copper_block",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "copper_block"
      },
      {
        "item": "honeycomb"
      }
    ]
  },
  {
    "file": "waxed_cut_copper.json",
    "item": "waxed_cut_copper",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "waxed_copper_block"
        },
        "2_key": {
          "item": "waxed_copper_block"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "waxed_copper_block"
        },
        "2_key": {
          "item": "waxed_copper_block"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "waxed_cut_copper_from_honeycomb.json",
    "item": "waxed_cut_copper",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "cut_copper"
      },
      {
        "item": "honeycomb"
      }
    ]
  },
  {
    "file": "waxed_cut_copper_slab.json",
    "item": "waxed_cut_copper_slab",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "waxed_cut_copper"
        },
        "2_key": {
          "item": "waxed_cut_copper"
        },
        "3_key": {
          "item": "waxed_cut_copper"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "waxed_cut_copper_slab_from_honeycomb.json",
    "item": "waxed_cut_copper_slab",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "cut_copper_slab"
      },
      {
        "item": "honeycomb"
      }
    ]
  },
  {
    "file": "waxed_cut_copper_stairs.json",
    "item": "waxed_cut_copper_stairs",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "waxed_cut_copper"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "waxed_cut_copper"
        },
        "2_key": {
          "item": "waxed_cut_copper"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "waxed_cut_copper"
        },
        "2_key": {
          "item": "waxed_cut_copper"
        },
        "3_key": {
          "item": "waxed_cut_copper"
        }
      }
    }
  },
  {
    "file": "waxed_cut_copper_stairs_from_honeycomb.json",
    "item": "waxed_cut_copper_stairs",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "cut_copper_stairs"
      },
      {
        "item": "honeycomb"
      }
    ]
  },
  {
    "file": "waxed_exposed_copper_from_honeycomb.json",
    "item": "waxed_exposed_copper",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "exposed_copper"
      },
      {
        "item": "honeycomb"
      }
    ]
  },
  {
    "file": "waxed_exposed_cut_copper.json",
    "item": "waxed_exposed_cut_copper",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "waxed_exposed_copper"
        },
        "2_key": {
          "item": "waxed_exposed_copper"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "waxed_exposed_copper"
        },
        "2_key": {
          "item": "waxed_exposed_copper"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "waxed_exposed_cut_copper_from_honeycomb.json",
    "item": "waxed_exposed_cut_copper",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "exposed_cut_copper"
      },
      {
        "item": "honeycomb"
      }
    ]
  },
  {
    "file": "waxed_exposed_cut_copper_slab.json",
    "item": "waxed_exposed_cut_copper_slab",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "waxed_exposed_cut_copper"
        },
        "2_key": {
          "item": "waxed_exposed_cut_copper"
        },
        "3_key": {
          "item": "waxed_exposed_cut_copper"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "waxed_exposed_cut_copper_slab_from_honeycomb.json",
    "item": "waxed_exposed_cut_copper_slab",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "exposed_cut_copper_slab"
      },
      {
        "item": "honeycomb"
      }
    ]
  },
  {
    "file": "waxed_exposed_cut_copper_stairs.json",
    "item": "waxed_exposed_cut_copper_stairs",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "waxed_exposed_cut_copper"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "waxed_exposed_cut_copper"
        },
        "2_key": {
          "item": "waxed_exposed_cut_copper"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "waxed_exposed_cut_copper"
        },
        "2_key": {
          "item": "waxed_exposed_cut_copper"
        },
        "3_key": {
          "item": "waxed_exposed_cut_copper"
        }
      }
    }
  },
  {
    "file": "waxed_exposed_cut_copper_stairs_from_honeycomb.json",
    "item": "waxed_exposed_cut_copper_stairs",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "exposed_cut_copper_stairs"
      },
      {
        "item": "honeycomb"
      }
    ]
  },
  {
    "file": "waxed_oxidized_copper_from_honeycomb.json",
    "item": "waxed_oxidized_copper",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "oxidized_copper"
      },
      {
        "item": "honeycomb"
      }
    ]
  },
  {
    "file": "waxed_oxidized_cut_copper.json",
    "item": "waxed_oxidized_cut_copper",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "waxed_oxidized_copper"
        },
        "2_key": {
          "item": "waxed_oxidized_copper"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "waxed_oxidized_copper"
        },
        "2_key": {
          "item": "waxed_oxidized_copper"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "waxed_oxidized_cut_copper_from_honeycomb.json",
    "item": "waxed_oxidized_cut_copper",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "oxidized_cut_copper"
      },
      {
        "item": "honeycomb"
      }
    ]
  },
  {
    "file": "waxed_oxidized_cut_copper_slab.json",
    "item": "waxed_oxidized_cut_copper_slab",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "waxed_oxidized_cut_copper"
        },
        "2_key": {
          "item": "waxed_oxidized_cut_copper"
        },
        "3_key": {
          "item": "waxed_oxidized_cut_copper"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "waxed_oxidized_cut_copper_slab_from_honeycomb.json",
    "item": "waxed_oxidized_cut_copper_slab",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "oxidized_cut_copper_slab"
      },
      {
        "item": "honeycomb"
      }
    ]
  },
  {
    "file": "waxed_oxidized_cut_copper_stairs.json",
    "item": "waxed_oxidized_cut_copper_stairs",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "waxed_oxidized_cut_copper"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "waxed_oxidized_cut_copper"
        },
        "2_key": {
          "item": "waxed_oxidized_cut_copper"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "waxed_oxidized_cut_copper"
        },
        "2_key": {
          "item": "waxed_oxidized_cut_copper"
        },
        "3_key": {
          "item": "waxed_oxidized_cut_copper"
        }
      }
    }
  },
  {
    "file": "waxed_oxidized_cut_copper_stairs_from_honeycomb.json",
    "item": "waxed_oxidized_cut_copper_stairs",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "oxidized_cut_copper_stairs"
      },
      {
        "item": "honeycomb"
      }
    ]
  },
  {
    "file": "waxed_weathered_copper_from_honeycomb.json",
    "item": "waxed_weathered_copper",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "weathered_copper"
      },
      {
        "item": "honeycomb"
      }
    ]
  },
  {
    "file": "waxed_weathered_cut_copper.json",
    "item": "waxed_weathered_cut_copper",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "waxed_weathered_copper"
        },
        "2_key": {
          "item": "waxed_weathered_copper"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "waxed_weathered_copper"
        },
        "2_key": {
          "item": "waxed_weathered_copper"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "waxed_weathered_cut_copper_from_honeycomb.json",
    "item": "waxed_weathered_cut_copper",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "weathered_cut_copper"
      },
      {
        "item": "honeycomb"
      }
    ]
  },
  {
    "file": "waxed_weathered_cut_copper_slab.json",
    "item": "waxed_weathered_cut_copper_slab",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "waxed_weathered_cut_copper"
        },
        "2_key": {
          "item": "waxed_weathered_cut_copper"
        },
        "3_key": {
          "item": "waxed_weathered_cut_copper"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "waxed_weathered_cut_copper_slab_from_honeycomb.json",
    "item": "waxed_weathered_cut_copper_slab",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "weathered_cut_copper_slab"
      },
      {
        "item": "honeycomb"
      }
    ]
  },
  {
    "file": "waxed_weathered_cut_copper_stairs.json",
    "item": "waxed_weathered_cut_copper_stairs",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "waxed_weathered_cut_copper"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "waxed_weathered_cut_copper"
        },
        "2_key": {
          "item": "waxed_weathered_cut_copper"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "waxed_weathered_cut_copper"
        },
        "2_key": {
          "item": "waxed_weathered_cut_copper"
        },
        "3_key": {
          "item": "waxed_weathered_cut_copper"
        }
      }
    }
  },
  {
    "file": "waxed_weathered_cut_copper_stairs_from_honeycomb.json",
    "item": "waxed_weathered_cut_copper_stairs",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "weathered_cut_copper_stairs"
      },
      {
        "item": "honeycomb"
      }
    ]
  },
  {
    "file": "wayfinder_armor_trim_smithing_template.json",
    "item": "wayfinder_armor_trim_smithing_template",
    "count": 2,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "wayfinder_armor_trim_smithing_template"
        },
        "3_key": {
          "item": "diamond"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "terracotta"
        },
        "3_key": {
          "item": "diamond"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "diamond"
        },
        "3_key": {
          "item": "diamond"
        }
      }
    }
  },
  {
    "file": "weathered_cut_copper.json",
    "item": "weathered_cut_copper",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "weathered_copper"
        },
        "2_key": {
          "item": "weathered_copper"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "weathered_copper"
        },
        "2_key": {
          "item": "weathered_copper"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "weathered_cut_copper_slab.json",
    "item": "weathered_cut_copper_slab",
    "count": 6,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "weathered_cut_copper"
        },
        "2_key": {
          "item": "weathered_cut_copper"
        },
        "3_key": {
          "item": "weathered_cut_copper"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "weathered_cut_copper_stairs.json",
    "item": "weathered_cut_copper_stairs",
    "count": 4,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "weathered_cut_copper"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "weathered_cut_copper"
        },
        "2_key": {
          "item": "weathered_cut_copper"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "weathered_cut_copper"
        },
        "2_key": {
          "item": "weathered_cut_copper"
        },
        "3_key": {
          "item": "weathered_cut_copper"
        }
      }
    }
  },
  {
    "file": "wheat.json",
    "item": "wheat",
    "count": 9,
    "patterns": {},
    "ingredients": [
      {
        "item": "hay_block"
      }
    ]
  },
  {
    "file": "white_banner.json",
    "item": "white_banner",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "white_wool"
        },
        "2_key": {
          "item": "white_wool"
        },
        "3_key": {
          "item": "white_wool"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "white_wool"
        },
        "2_key": {
          "item": "white_wool"
        },
        "3_key": {
          "item": "white_wool"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "white_bed.json",
    "item": "white_bed",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "white_wool"
        },
        "2_key": {
          "item": "white_wool"
        },
        "3_key": {
          "item": "white_wool"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "tag": "planks"
        },
        "2_key": {
          "tag": "planks"
        },
        "3_key": {
          "tag": "planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "white_candle.json",
    "item": "white_candle",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "candle"
      },
      {
        "item": "white_dye"
      }
    ]
  },
  {
    "file": "white_carpet.json",
    "item": "white_carpet",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "white_wool"
        },
        "2_key": {
          "item": "white_wool"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "white_concrete_powder.json",
    "item": "white_concrete_powder",
    "count": 8,
    "patterns": {},
    "ingredients": [
      {
        "item": "white_dye"
      },
      {
        "item": "sand"
      },
      {
        "item": "sand"
      },
      {
        "item": "sand"
      },
      {
        "item": "sand"
      },
      {
        "item": "gravel"
      },
      {
        "item": "gravel"
      },
      {
        "item": "gravel"
      },
      {
        "item": "gravel"
      }
    ]
  },
  {
    "file": "white_dye.json",
    "item": "white_dye",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "bone_meal"
      }
    ]
  },
  {
    "file": "white_dye_from_lily_of_the_valley.json",
    "item": "white_dye",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "lily_of_the_valley"
      }
    ]
  },
  {
    "file": "white_stained_glass.json",
    "item": "white_stained_glass",
    "count": 8,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "glass"
        },
        "2_key": {
          "item": "glass"
        },
        "3_key": {
          "item": "glass"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "glass"
        },
        "2_key": {
          "item": "white_dye"
        },
        "3_key": {
          "item": "glass"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "glass"
        },
        "2_key": {
          "item": "glass"
        },
        "3_key": {
          "item": "glass"
        }
      }
    }
  },
  {
    "file": "white_stained_glass_pane.json",
    "item": "white_stained_glass_pane",
    "count": 16,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "white_stained_glass"
        },
        "2_key": {
          "item": "white_stained_glass"
        },
        "3_key": {
          "item": "white_stained_glass"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "white_stained_glass"
        },
        "2_key": {
          "item": "white_stained_glass"
        },
        "3_key": {
          "item": "white_stained_glass"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "white_stained_glass_pane_from_glass_pane.json",
    "item": "white_stained_glass_pane",
    "count": 8,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "glass_pane"
        },
        "2_key": {
          "item": "glass_pane"
        },
        "3_key": {
          "item": "glass_pane"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "glass_pane"
        },
        "2_key": {
          "item": "white_dye"
        },
        "3_key": {
          "item": "glass_pane"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "glass_pane"
        },
        "2_key": {
          "item": "glass_pane"
        },
        "3_key": {
          "item": "glass_pane"
        }
      }
    }
  },
  {
    "file": "white_terracotta.json",
    "item": "white_terracotta",
    "count": 8,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "terracotta"
        },
        "2_key": {
          "item": "terracotta"
        },
        "3_key": {
          "item": "terracotta"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "terracotta"
        },
        "2_key": {
          "item": "white_dye"
        },
        "3_key": {
          "item": "terracotta"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "terracotta"
        },
        "2_key": {
          "item": "terracotta"
        },
        "3_key": {
          "item": "terracotta"
        }
      }
    }
  },
  {
    "file": "white_wool_from_string.json",
    "item": "white_wool",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "string"
        },
        "2_key": {
          "item": "string"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "string"
        },
        "2_key": {
          "item": "string"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "wild_armor_trim_smithing_template.json",
    "item": "wild_armor_trim_smithing_template",
    "count": 2,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "wild_armor_trim_smithing_template"
        },
        "3_key": {
          "item": "diamond"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "mossy_cobblestone"
        },
        "3_key": {
          "item": "diamond"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "diamond"
        },
        "2_key": {
          "item": "diamond"
        },
        "3_key": {
          "item": "diamond"
        }
      }
    }
  },
  {
    "file": "wooden_axe.json",
    "item": "wooden_axe",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "tag": "planks"
        },
        "2_key": {
          "tag": "planks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "tag": "planks"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "wooden_hoe.json",
    "item": "wooden_hoe",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "tag": "planks"
        },
        "2_key": {
          "tag": "planks"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "wooden_pickaxe.json",
    "item": "wooden_pickaxe",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "tag": "planks"
        },
        "2_key": {
          "tag": "planks"
        },
        "3_key": {
          "tag": "planks"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "wooden_shovel.json",
    "item": "wooden_shovel",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "tag": "planks"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "wooden_sword.json",
    "item": "wooden_sword",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "tag": "planks"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "tag": "planks"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "stick"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "writable_book.json",
    "item": "writable_book",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "book"
      },
      {
        "item": "ink_sac"
      },
      {
        "item": "feather"
      }
    ]
  },
  {
    "file": "yellow_banner.json",
    "item": "yellow_banner",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "yellow_wool"
        },
        "2_key": {
          "item": "yellow_wool"
        },
        "3_key": {
          "item": "yellow_wool"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "yellow_wool"
        },
        "2_key": {
          "item": "yellow_wool"
        },
        "3_key": {
          "item": "yellow_wool"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "stick"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "yellow_bed.json",
    "item": "yellow_bed",
    "count": 1,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "yellow_wool"
        },
        "2_key": {
          "item": "yellow_wool"
        },
        "3_key": {
          "item": "yellow_wool"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "tag": "planks"
        },
        "2_key": {
          "tag": "planks"
        },
        "3_key": {
          "tag": "planks"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "yellow_candle.json",
    "item": "yellow_candle",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "candle"
      },
      {
        "item": "yellow_dye"
      }
    ]
  },
  {
    "file": "yellow_carpet.json",
    "item": "yellow_carpet",
    "count": 3,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "yellow_wool"
        },
        "2_key": {
          "item": "yellow_wool"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "yellow_concrete_powder.json",
    "item": "yellow_concrete_powder",
    "count": 8,
    "patterns": {},
    "ingredients": [
      {
        "item": "yellow_dye"
      },
      {
        "item": "sand"
      },
      {
        "item": "sand"
      },
      {
        "item": "sand"
      },
      {
        "item": "sand"
      },
      {
        "item": "gravel"
      },
      {
        "item": "gravel"
      },
      {
        "item": "gravel"
      },
      {
        "item": "gravel"
      }
    ]
  },
  {
    "file": "yellow_dye_from_dandelion.json",
    "item": "yellow_dye",
    "count": 1,
    "patterns": {},
    "ingredients": [
      {
        "item": "dandelion"
      }
    ]
  },
  {
    "file": "yellow_dye_from_sunflower.json",
    "item": "yellow_dye",
    "count": 2,
    "patterns": {},
    "ingredients": [
      {
        "item": "sunflower"
      }
    ]
  },
  {
    "file": "yellow_stained_glass.json",
    "item": "yellow_stained_glass",
    "count": 8,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "glass"
        },
        "2_key": {
          "item": "glass"
        },
        "3_key": {
          "item": "glass"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "glass"
        },
        "2_key": {
          "item": "yellow_dye"
        },
        "3_key": {
          "item": "glass"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "glass"
        },
        "2_key": {
          "item": "glass"
        },
        "3_key": {
          "item": "glass"
        }
      }
    }
  },
  {
    "file": "yellow_stained_glass_pane.json",
    "item": "yellow_stained_glass_pane",
    "count": 16,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "yellow_stained_glass"
        },
        "2_key": {
          "item": "yellow_stained_glass"
        },
        "3_key": {
          "item": "yellow_stained_glass"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "yellow_stained_glass"
        },
        "2_key": {
          "item": "yellow_stained_glass"
        },
        "3_key": {
          "item": "yellow_stained_glass"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "air"
        },
        "2_key": {
          "item": "air"
        },
        "3_key": {
          "item": "air"
        }
      }
    }
  },
  {
    "file": "yellow_stained_glass_pane_from_glass_pane.json",
    "item": "yellow_stained_glass_pane",
    "count": 8,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "glass_pane"
        },
        "2_key": {
          "item": "glass_pane"
        },
        "3_key": {
          "item": "glass_pane"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "glass_pane"
        },
        "2_key": {
          "item": "yellow_dye"
        },
        "3_key": {
          "item": "glass_pane"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "glass_pane"
        },
        "2_key": {
          "item": "glass_pane"
        },
        "3_key": {
          "item": "glass_pane"
        }
      }
    }
  },
  {
    "file": "yellow_terracotta.json",
    "item": "yellow_terracotta",
    "count": 8,
    "patterns": {
      "pattern_row_1": {
        "1_key": {
          "item": "terracotta"
        },
        "2_key": {
          "item": "terracotta"
        },
        "3_key": {
          "item": "terracotta"
        }
      },
      "pattern_row_2": {
        "1_key": {
          "item": "terracotta"
        },
        "2_key": {
          "item": "yellow_dye"
        },
        "3_key": {
          "item": "terracotta"
        }
      },
      "pattern_row_3": {
        "1_key": {
          "item": "terracotta"
        },
        "2_key": {
          "item": "terracotta"
        },
        "3_key": {
          "item": "terracotta"
        }
      }
    }
  }
];

air.push(...recipes)

export const recipes_array = air
