import React, {useEffect, useMemo, useState} from 'react';
import classNames from "classnames";
import ViewOneItem from "../view-one-item/ViewOneItem";
import NameFormat from "../../functions/NameFormat";
import {recipes_array} from "../../data/recipes_array";
import Variables from "../../functions/Variables";
import LineOutput from "../line-output/LineOutput";
import roundToMultiple from "../../functions/RoundToMultiple";
import Decomposed from "../decomposed/decomposed";
import MiniButton from "../mini-button/MiniButton";
import {LazyLoadImage} from 'react-lazy-load-image-component';

import styles from "./CraftContainer.module.scss";
import 'react-lazy-load-image-component/src/effects/blur.css';

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

    const f = count / recipesActive.output_count

    for (const key in result) {
      result[key] *= roundToMultiple(f, 1);
    }

    return result;
  }, [recipesActive, count]);

  useMemo(() => {
    setIndexVariables(VARIABLES)

    const currentRecipe = recipes_array[indexGlobal];
    const o = Array.isArray(currentRecipe) ? currentRecipe[recipesVariables] : currentRecipe;

    setShowButton(Array.isArray(currentRecipe));

    if (o.ingredients) {
      setRecipesActive({
        "1_key": Variables(0, o.ingredients[0].item, setIndexVariables, indexVariables),
        "2_key": Variables(1, o.ingredients[1].item, setIndexVariables, indexVariables),
        "3_key": Variables(2, o.ingredients[2].item, setIndexVariables, indexVariables),
        "4_key": Variables(3, o.ingredients[3].item, setIndexVariables, indexVariables),
        "5_key": Variables(4, o.ingredients[4].item, setIndexVariables, indexVariables),
        "6_key": Variables(5, o.ingredients[5].item, setIndexVariables, indexVariables),
        "7_key": Variables(6, o.ingredients[6].item, setIndexVariables, indexVariables),
        "8_key": Variables(7, o.ingredients[7].item, setIndexVariables, indexVariables),
        "9_key": Variables(8, o.ingredients[8].item, setIndexVariables, indexVariables),
        "output_key": o.item,
        "output_count": o.count,
      })
    } else {
      setRecipesActive({
        "1_key": Variables(0, o.patterns[0].item, setIndexVariables, indexVariables),
        "2_key": Variables(1, o.patterns[1].item, setIndexVariables, indexVariables),
        "3_key": Variables(2, o.patterns[2].item, setIndexVariables, indexVariables),
        "4_key": Variables(3, o.patterns[3].item, setIndexVariables, indexVariables),
        "5_key": Variables(4, o.patterns[4].item, setIndexVariables, indexVariables),
        "6_key": Variables(5, o.patterns[5].item, setIndexVariables, indexVariables),
        "7_key": Variables(6, o.patterns[6].item, setIndexVariables, indexVariables),
        "8_key": Variables(7, o.patterns[7].item, setIndexVariables, indexVariables),
        "9_key": Variables(8, o.patterns[8].item, setIndexVariables, indexVariables),
        "output_key": o.item,
        "output_count": o.count,
      })
    }

    // eslint-disable-next-line
  }, [indexGlobal, recipesVariables, indexVariables[0].active, indexVariables[1].active, indexVariables[2].active, indexVariables[3].active, indexVariables[4].active, indexVariables[5].active, indexVariables[6].active, indexVariables[7].active, indexVariables[8].active])

  useEffect(() => {
    if (indexGlobal === 0) {
      setIndexVariables(VARIABLES)
    }
  }, [indexGlobal])

  return (
    <div className={classNames(styles["craft_container"], {[styles["lock_wight"]]: type === true})}>
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
            <LazyLoadImage
              src={`./image/minecraft-item/${recipesActive.output_key}.webp`}
              alt="none"
              width="100%"
              height="100%"
              effect="blur"
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
            <LazyLoadImage
              src={`./image/minecraft-item/${key}.webp`}
              alt="none"
              width="24px"
              height="24px"
              effect="blur"
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