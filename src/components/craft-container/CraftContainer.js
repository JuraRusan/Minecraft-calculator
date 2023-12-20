import React, {useEffect, useMemo, useState} from 'react';
import classNames from "classnames";
import AOS from "aos";
import ViewOneItem from "../view-one-item/ViewOneItem";
import NameFormat from "../../functions/NameFormat";
import {recipes_array} from "../../data/recipes_array";
import Variables from "../../functions/Variables";
import LineOutput from "../line-output/LineOutput";
import roundToMultiple from "../../functions/RoundToMultiple";
import Decomposed from "../decomposed/decomposed";
import MiniButton from "../mini-button/MiniButton";

import styles from "./CraftContainer.module.scss";
import "aos/dist/aos.css";

const RECIPES = {
  "1_key": "air",
  "2_key": "air",
  "3_key": "air",
  "4_key": "air",
  "5_key": "air",
  "6_key": "air",
  "7_key": "air",
  "8_key": "air",
  "9_key": "air",
  "output_key": "air",
  "output_count": 1,
}
const VARIABLES = [
  {key: 1, globalTag: [], active: 0, max_length: 0, booleanModal: false},
  {key: 2, globalTag: [], active: 0, max_length: 0, booleanModal: false},
  {key: 3, globalTag: [], active: 0, max_length: 0, booleanModal: false},
  {key: 4, globalTag: [], active: 0, max_length: 0, booleanModal: false},
  {key: 5, globalTag: [], active: 0, max_length: 0, booleanModal: false},
  {key: 6, globalTag: [], active: 0, max_length: 0, booleanModal: false},
  {key: 7, globalTag: [], active: 0, max_length: 0, booleanModal: false},
  {key: 8, globalTag: [], active: 0, max_length: 0, booleanModal: false},
  {key: 9, globalTag: [], active: 0, max_length: 0, booleanModal: false},
]

const CraftContainer = ({indexGlobal, count, type}) => {

  const [indexVariables, setIndexVariables] = useState(VARIABLES)
  const [recipesActive, setRecipesActive] = useState(RECIPES)
  const [recipesVariables, setRecipesVariables] = useState(0)
  const [showButton, setShowButton] = useState(false)

  const decrementRecipesVariables = () => {
    if (recipesVariables > 0) {
      setRecipesVariables(recipesVariables - 1)
    }
  };

  const incrementRecipesVariables = () => {
    if (recipesVariables < recipes_array[indexGlobal].length - 1) {
      setRecipesVariables(recipesVariables + 1)
    }
  };

  const calculatedValues = useMemo(() => {
    const result = {};

    for (let i = 1; i <= 9; i++) {
      const key = `${i}_key`;
      const value = recipesActive[key];

      if (value !== 'air') {
        if (result[value]) {
          result[value] += 1;
        } else {
          result[value] = 1;
        }
      }
    }

    for (const key in result) {
      result[key] *= count;
    }

    return result;
  }, [recipesActive, count]);

  useEffect(() => {
    AOS.init({duration: 350});
  }, []);

  function updateIngredients(key, active, allIngredients, maxLength, booleanModal, item) {
    setIndexVariables(prevState => {
      return prevState.map(item => {
        if (item.key === key) {
          return {
            ...item,
            globalTag: allIngredients.map(obj => obj.item),
            active: active,
            max_length: maxLength,
            booleanModal: booleanModal,
          };
        }
        return item;
      });
    });
    return item;
  }

  useMemo(() => {
    setIndexVariables(VARIABLES)

    const currentRecipe = recipes_array[indexGlobal];
    const o = Array.isArray(currentRecipe)
      ? currentRecipe[recipesVariables]
      : currentRecipe;

    setShowButton(Array.isArray(currentRecipe));

    if (!o.ingredients) {
      setRecipesActive({
        "1_key": !o?.patterns?.pattern_row_1?.["1_key"]?.tag ? o?.patterns?.pattern_row_1?.["1_key"]?.item : Variables(1, indexVariables, setIndexVariables, o?.patterns?.pattern_row_1?.["1_key"]?.tag),
        "2_key": !o?.patterns?.pattern_row_1?.["2_key"]?.tag ? o?.patterns?.pattern_row_1?.["2_key"]?.item : Variables(2, indexVariables, setIndexVariables, o?.patterns?.pattern_row_1?.["2_key"]?.tag),
        "3_key": !o?.patterns?.pattern_row_1?.["3_key"]?.tag ? o?.patterns?.pattern_row_1?.["3_key"]?.item : Variables(3, indexVariables, setIndexVariables, o?.patterns?.pattern_row_1?.["3_key"]?.tag),
        "4_key": !o?.patterns?.pattern_row_2?.["1_key"]?.tag ? o?.patterns?.pattern_row_2?.["1_key"]?.item : Variables(4, indexVariables, setIndexVariables, o?.patterns?.pattern_row_2?.["1_key"]?.tag),
        "5_key": !o?.patterns?.pattern_row_2?.["2_key"]?.tag ? o?.patterns?.pattern_row_2?.["2_key"]?.item : Variables(5, indexVariables, setIndexVariables, o?.patterns?.pattern_row_2?.["2_key"]?.tag),
        "6_key": !o?.patterns?.pattern_row_2?.["3_key"]?.tag ? o?.patterns?.pattern_row_2?.["3_key"]?.item : Variables(6, indexVariables, setIndexVariables, o?.patterns?.pattern_row_2?.["3_key"]?.tag),
        "7_key": !o?.patterns?.pattern_row_3?.["1_key"]?.tag ? o?.patterns?.pattern_row_3?.["1_key"]?.item : Variables(7, indexVariables, setIndexVariables, o?.patterns?.pattern_row_3?.["1_key"]?.tag),
        "8_key": !o?.patterns?.pattern_row_3?.["2_key"]?.tag ? o?.patterns?.pattern_row_3?.["2_key"]?.item : Variables(8, indexVariables, setIndexVariables, o?.patterns?.pattern_row_3?.["2_key"]?.tag),
        "9_key": !o?.patterns?.pattern_row_3?.["3_key"]?.tag ? o?.patterns?.pattern_row_3?.["3_key"]?.item : Variables(9, indexVariables, setIndexVariables, o?.patterns?.pattern_row_3?.["3_key"]?.tag),
        "output_key": o.item,
        "output_count": o.count,
      })
    } else {
      const finalObject = {};
      for (let i = 1; i <= 9; i++) {
        const ingredientsArray = o.ingredients[i - 1];
        finalObject[`${i}_key`] = Array.isArray(ingredientsArray)
          ?
          (updateIngredients(i, indexVariables[i - 1].active, ingredientsArray, ingredientsArray.length, true, ingredientsArray[indexVariables[i - 1].active].item))
          :
          !ingredientsArray?.tag ?
            ingredientsArray?.item :
            Variables(i, indexVariables, setIndexVariables, ingredientsArray?.tag);
      }
      finalObject["output_key"] = o.item;
      finalObject["output_count"] = o.count;

      setRecipesActive(finalObject);
    }
    // eslint-disable-next-line
  }, [indexGlobal, recipesVariables, indexVariables[0].active, indexVariables[1].active, indexVariables[2].active, indexVariables[3].active, indexVariables[4].active, indexVariables[5].active, indexVariables[6].active, indexVariables[7].active, indexVariables[8].active])


  // useEffect(() => {
  //   const scrollContainer = document.getElementById("scroll_container");
  //   if (scrollContainer) {
  //     scrollContainer.scrollLeft = (scrollContainer.scrollWidth - scrollContainer.clientWidth) / 2;
  //   }
  // }, [calculatedValues.length, type]);

  return (
    <div
      // id="scroll_container"
      className={classNames(styles["craft_container"], {[styles["lock_wight"]]: type === true})}
    >
      <div className={classNames(styles["required_round_count"])}>
        <LineOutput numbers={roundToMultiple(count, recipesActive.output_count)}/>
      </div>
      <div className={classNames(styles["crafter"])}>
        <div className={classNames(styles["required_container"])}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
            <ViewOneItem
              key={number}
              itemName={recipesActive[`${number}_key`]}
              indexVariables={indexVariables}
              setIndexVariables={setIndexVariables}
              number={number.toString()}
            />
          ))}
        </div>
        <div className={classNames(styles["separator_container"])}>
          <span className={classNames(styles["arrow"])}>&#10132;</span>
        </div>
        <div className={classNames(styles["output_container"])}>
          {recipesActive.output_key === "air" ? null :
            <h2 className={classNames(styles["name"])}>{NameFormat(recipesActive.output_key)}</h2>
          }
          <div className={classNames(styles["output"])}>
            <img
              src={`./image/minecraft-item/${recipesActive.output_key}.webp`}
              alt="none"
              data-aos="flip-left"
              width="100%"
              height="100%"
            />
            {recipesActive.output_key === "air" ? null :
              <span className={classNames(styles["count"])}>{recipesActive.output_count}</span>
            }
          </div>
          {showButton &&
            <div className={classNames(styles["button_wrapper"])}>
              <MiniButton
                label="&#129144;"
                onClick={decrementRecipesVariables}
                disabled={recipesVariables === 0}
              />
              <MiniButton
                label="&#129146;"
                onClick={incrementRecipesVariables}
                disabled={recipesVariables === recipes_array[indexGlobal].length - 1}
              />
            </div>
          }
        </div>
      </div>
      <div className={classNames(styles["output_result_container"])}>
        {Object.keys(calculatedValues).map((key, i) => (
          <div key={i} className={classNames(styles["result_one"])}>
            <img
              src={`./image/minecraft-item/${key}.webp`}
              alt="none"
              width="24px"
              height="24px"
            />
            <p className={classNames(styles["name"])}>{NameFormat(key)}</p>
            <LineOutput numbers={calculatedValues[key]}/>
          </div>
        ))}
      </div>
      <Decomposed result={calculatedValues}/>
    </div>
  );
};

export default CraftContainer;