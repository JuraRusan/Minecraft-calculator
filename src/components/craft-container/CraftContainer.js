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

  useEffect(() => {
    setIndexVariables(VARIABLES)
  }, [indexGlobal]);

  useEffect(() => {
    if (!recipes_array[indexGlobal].ingredients) {
      setRecipesActive({
        "1_key": !recipes_array[indexGlobal]?.patterns?.pattern_row_1?.["1_key"]?.tag ? recipes_array[indexGlobal]?.patterns?.pattern_row_1?.["1_key"]?.item : Variables(1, indexVariables, setIndexVariables, recipes_array[indexGlobal]?.patterns?.pattern_row_1?.["1_key"]?.tag),
        "2_key": !recipes_array[indexGlobal]?.patterns?.pattern_row_1?.["2_key"]?.tag ? recipes_array[indexGlobal]?.patterns?.pattern_row_1?.["2_key"]?.item : Variables(2, indexVariables, setIndexVariables, recipes_array[indexGlobal]?.patterns?.pattern_row_1?.["2_key"]?.tag),
        "3_key": !recipes_array[indexGlobal]?.patterns?.pattern_row_1?.["3_key"]?.tag ? recipes_array[indexGlobal]?.patterns?.pattern_row_1?.["3_key"]?.item : Variables(3, indexVariables, setIndexVariables, recipes_array[indexGlobal]?.patterns?.pattern_row_1?.["3_key"]?.tag),
        "4_key": !recipes_array[indexGlobal]?.patterns?.pattern_row_2?.["1_key"]?.tag ? recipes_array[indexGlobal]?.patterns?.pattern_row_2?.["1_key"]?.item : Variables(4, indexVariables, setIndexVariables, recipes_array[indexGlobal]?.patterns?.pattern_row_2?.["1_key"]?.tag),
        "5_key": !recipes_array[indexGlobal]?.patterns?.pattern_row_2?.["2_key"]?.tag ? recipes_array[indexGlobal]?.patterns?.pattern_row_2?.["2_key"]?.item : Variables(5, indexVariables, setIndexVariables, recipes_array[indexGlobal]?.patterns?.pattern_row_2?.["2_key"]?.tag),
        "6_key": !recipes_array[indexGlobal]?.patterns?.pattern_row_2?.["3_key"]?.tag ? recipes_array[indexGlobal]?.patterns?.pattern_row_2?.["3_key"]?.item : Variables(6, indexVariables, setIndexVariables, recipes_array[indexGlobal]?.patterns?.pattern_row_2?.["3_key"]?.tag),
        "7_key": !recipes_array[indexGlobal]?.patterns?.pattern_row_3?.["1_key"]?.tag ? recipes_array[indexGlobal]?.patterns?.pattern_row_3?.["1_key"]?.item : Variables(7, indexVariables, setIndexVariables, recipes_array[indexGlobal]?.patterns?.pattern_row_3?.["1_key"]?.tag),
        "8_key": !recipes_array[indexGlobal]?.patterns?.pattern_row_3?.["2_key"]?.tag ? recipes_array[indexGlobal]?.patterns?.pattern_row_3?.["2_key"]?.item : Variables(8, indexVariables, setIndexVariables, recipes_array[indexGlobal]?.patterns?.pattern_row_3?.["2_key"]?.tag),
        "9_key": !recipes_array[indexGlobal]?.patterns?.pattern_row_3?.["3_key"]?.tag ? recipes_array[indexGlobal]?.patterns?.pattern_row_3?.["3_key"]?.item : Variables(9, indexVariables, setIndexVariables, recipes_array[indexGlobal]?.patterns?.pattern_row_3?.["3_key"]?.tag),
        "output_key": recipes_array[indexGlobal].item,
        "output_count": recipes_array[indexGlobal].count,
      })
    } else {
      const ingredientsArray = recipes_array[indexGlobal].ingredients;
      const maxKeys = 9;

      const initialKeys = Array.from({ length: maxKeys }, (_, i) => i + 1);

      const updatedKeys = initialKeys.reduce((acc, key, index) => {
        if (index < ingredientsArray.length) {
          const y = Array.isArray(ingredientsArray[index]) ? ingredientsArray[index][0] : ingredientsArray[index]
          const f = !y.tag ? y.item : Variables(index + 1, indexVariables, setIndexVariables, y.tag)
          acc[`${key}_key`] = f
        } else {
          acc[`${key}_key`] = "air";
        }
        return acc;
      }, {});

      const finalObject = {
        ...updatedKeys,
        "output_key": recipes_array[indexGlobal].item,
        "output_count": recipes_array[indexGlobal].count,
      };
      setRecipesActive(finalObject);
    }
  }, [indexGlobal, indexVariables[0].active, indexVariables[1].active, indexVariables[2].active, indexVariables[3].active, indexVariables[4].active, indexVariables[5].active, indexVariables[6].active, indexVariables[7].active, indexVariables[8].active])

  useEffect(() => {
    const scrollContainer = document.getElementById('yourHorizontalScrollContainer');
    if (scrollContainer) {
      scrollContainer.scrollLeft = (scrollContainer.scrollWidth - scrollContainer.clientWidth) / 2;
    }
  }, [calculatedValues.length]);

  return (
    <div
      id="yourHorizontalScrollContainer"
      className={classNames(styles["craft_container"], {[styles["lock_wight"]]: type === true})}
    >
      <div className={classNames(styles["required_round_count"])}>
        <LineOutput numbers={roundToMultiple(count, recipesActive.output_count)}/>
      </div>
      <div className={classNames(styles["crafter"])}>
        <div className={classNames(styles["required_container"])}>
          <ViewOneItem
            itemName={recipesActive["1_key"]}
            indexVariables={indexVariables}
            setIndexVariables={setIndexVariables}
            number="1"
          />
          <ViewOneItem
            itemName={recipesActive["2_key"]}
            indexVariables={indexVariables}
            setIndexVariables={setIndexVariables}
            number="2"
          />
          <ViewOneItem
            itemName={recipesActive["3_key"]}
            indexVariables={indexVariables}
            setIndexVariables={setIndexVariables}
            number="3"
          />
          <ViewOneItem
            itemName={recipesActive["4_key"]}
            indexVariables={indexVariables}
            setIndexVariables={setIndexVariables}
            number="4"
          />
          <ViewOneItem
            itemName={recipesActive["5_key"]}
            indexVariables={indexVariables}
            setIndexVariables={setIndexVariables}
            number="5"
          />
          <ViewOneItem
            itemName={recipesActive["6_key"]}
            indexVariables={indexVariables}
            setIndexVariables={setIndexVariables}
            number="6"
          />
          <ViewOneItem
            itemName={recipesActive["7_key"]}
            indexVariables={indexVariables}
            setIndexVariables={setIndexVariables}
            number="7"
          />
          <ViewOneItem
            itemName={recipesActive["8_key"]}
            indexVariables={indexVariables}
            setIndexVariables={setIndexVariables}
            number="8"
          />
          <ViewOneItem
            itemName={recipesActive["9_key"]}
            indexVariables={indexVariables}
            setIndexVariables={setIndexVariables}
            number="9"
          />
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
