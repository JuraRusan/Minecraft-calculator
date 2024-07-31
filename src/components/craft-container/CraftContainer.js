import React, { useEffect, useMemo, useState } from "react";
import classNames from "classnames";
import ViewOneItem from "../view-one-item/ViewOneItem";
import { RECIPES } from "../../data/Recipes";
import LineOutput from "../line-output/LineOutput";
import roundToMultiple from "../../functions/RoundToMultiple";
import Decomposed from "../decomposed/decomposed";
import MiniButton from "../mini-button/MiniButton";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useSelector } from "react-redux";

import styles from "./CraftContainer.module.scss";
import "react-lazy-load-image-component/src/effects/blur.css";

const DEFAULT = {
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
};
const VARIABLES = [0, 0, 0, 0, 0, 0, 0, 0, 0];

const CraftContainer = ({ indexGlobal, count, type }) => {
  const [indexVariables, setIndexVariables] = useState(VARIABLES);
  const [recipesActive, setRecipesActive] = useState(DEFAULT);
  const [recipesVariables, setRecipesVariables] = useState(0);
  const [showButton, setShowButton] = useState(false);

  const load_lang_item = useSelector((state) => state.lang_item);

  /* --- Functions --- */
  const decrementRecipesVariables = () => {
    if (recipesVariables > 0) {
      setRecipesVariables(recipesVariables - 1);
    }
  };

  const incrementRecipesVariables = () => {
    if (recipesVariables < RECIPES[indexGlobal].length - 1) {
      setRecipesVariables(recipesVariables + 1);
    }
  };

  const calculatedValues = useMemo(() => {
    const result = {};

    for (let i = 0; i <= 8; i++) {
      const key = `${i}_slot`;
      const value = recipesActive[key];

      if (value !== "air") {
        if (result[value]) {
          result[value] += 1;
        } else {
          result[value] = 1;
        }
      }
    }

    const f = count / recipesActive.output_count;

    for (const key in result) {
      result[key] *= roundToMultiple(f, 1);
    }

    return result;
  }, [recipesActive, count]);

  /* --- useEffect --- */
  useEffect(() => {
    if (indexGlobal) {
      setIndexVariables(VARIABLES);
      setRecipesVariables(0);
    }
  }, [indexGlobal]);

  useEffect(() => {
    const currentRecipe = RECIPES[indexGlobal];
    const check = Array.isArray(currentRecipe) ? currentRecipe[recipesVariables] : currentRecipe;

    setShowButton(Array.isArray(currentRecipe));

    if (check.ingredients) {
      setRecipesActive({
        "0_slot": check.ingredients[0].item[indexVariables[0]],
        "1_slot": check.ingredients[1].item[indexVariables[1]],
        "2_slot": check.ingredients[2].item[indexVariables[2]],
        "3_slot": check.ingredients[3].item[indexVariables[3]],
        "4_slot": check.ingredients[4].item[indexVariables[4]],
        "5_slot": check.ingredients[5].item[indexVariables[5]],
        "6_slot": check.ingredients[6].item[indexVariables[6]],
        "7_slot": check.ingredients[7].item[indexVariables[7]],
        "8_slot": check.ingredients[8].item[indexVariables[8]],
        output_slot: check.item,
        output_count: check.count,
      });
    }
  }, [indexGlobal, recipesVariables, indexVariables]);

  return (
    <div className={classNames(styles["craft_container"], { [styles["lock_wight"]]: type === true })}>
      <div className={classNames(styles["required_round_count"])}>
        <LineOutput numbers={roundToMultiple(count, recipesActive.output_count)} />
      </div>
      <div className={classNames(styles["crafter"])}>
        <div className={classNames(styles["required_container"])}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((number) => (
            <ViewOneItem
              key={number}
              slot={number}
              indexGlobal={indexGlobal}
              itemName={recipesActive[`${number}_slot`]}
              indexVariables={indexVariables}
              setIndexVariables={setIndexVariables}
              recipesVariables={recipesVariables}
            />
          ))}
        </div>
        <div className={classNames(styles["separator_container"])}>
          <span className={classNames(styles["arrow"])}>&#10132;</span>
        </div>
        <div className={classNames(styles["output_container"])}>
          {recipesActive.output_slot === "air" ? null : (
            <h2 className={classNames(styles["name"])}>{load_lang_item[recipesActive.output_slot]}</h2>
          )}
          <div className={classNames(styles["output"])}>
            <LazyLoadImage
              src={`./image/minecraft-item/${recipesActive.output_slot}.webp`}
              alt="none"
              width="100%"
              height="100%"
              effect="blur"
            />
            {recipesActive.output_slot === "air" ? null : (
              <span className={classNames(styles["count"])}>{recipesActive.output_count}</span>
            )}
          </div>
          {showButton && (
            <div className={classNames(styles["button_wrapper"])}>
              <MiniButton label="&#129144;" onClick={decrementRecipesVariables} disabled={recipesVariables === 0} />
              <MiniButton
                label="&#129146;"
                onClick={incrementRecipesVariables}
                disabled={recipesVariables === RECIPES[indexGlobal].length - 1}
              />
            </div>
          )}
        </div>
      </div>
      <div className={classNames(styles["output_result_container"])}>
        {Object.keys(calculatedValues).map((key, i) => (
          <div key={i} className={classNames(styles["result_one"])}>
            <LazyLoadImage
              src={`./image/minecraft-item/${key}.webp`}
              alt="none"
              width="22px"
              height="22px"
              effect="blur"
            />
            <p className={classNames(styles["name"])}>{load_lang_item[key]} -</p>
            <LineOutput numbers={calculatedValues[key]} />
          </div>
        ))}
      </div>
      <Decomposed result={calculatedValues} />
    </div>
  );
};

export default CraftContainer;
