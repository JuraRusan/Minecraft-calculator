import React, { useEffect, useMemo, useState } from "react";
import classNames from "classnames";
import ViewOneItem from "../view-one-item/ViewOneItem";
import { RECIPES } from "../../data/Recipes";
import Variables from "../../functions/Variables";
import LineOutput from "../line-output/LineOutput";
import roundToMultiple from "../../functions/RoundToMultiple";
// import Decomposed from "../decomposed/decomposed";
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
const VARIABLES = [
  { key: 1, globalTag: [], active: 0, max_length: 0, booleanModal: false },
  { key: 2, globalTag: [], active: 0, max_length: 0, booleanModal: false },
  { key: 3, globalTag: [], active: 0, max_length: 0, booleanModal: false },
  { key: 4, globalTag: [], active: 0, max_length: 0, booleanModal: false },
  { key: 5, globalTag: [], active: 0, max_length: 0, booleanModal: false },
  { key: 6, globalTag: [], active: 0, max_length: 0, booleanModal: false },
  { key: 7, globalTag: [], active: 0, max_length: 0, booleanModal: false },
  { key: 8, globalTag: [], active: 0, max_length: 0, booleanModal: false },
  { key: 9, globalTag: [], active: 0, max_length: 0, booleanModal: false },
];

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
    if (!indexGlobal) {
      setIndexVariables(VARIABLES);
      setRecipesVariables(0);
      return;
    }

    const currentRecipe = RECIPES[indexGlobal];
    const check = Array.isArray(currentRecipe) ? currentRecipe[recipesVariables] : currentRecipe;

    setShowButton(Array.isArray(currentRecipe));

    if (check.ingredients) {
      setRecipesActive({
        "0_slot": Variables(0, check.ingredients[0].item, setIndexVariables, indexVariables),
        "1_slot": Variables(1, check.ingredients[1].item, setIndexVariables, indexVariables),
        "2_slot": Variables(2, check.ingredients[2].item, setIndexVariables, indexVariables),
        "3_slot": Variables(3, check.ingredients[3].item, setIndexVariables, indexVariables),
        "4_slot": Variables(4, check.ingredients[4].item, setIndexVariables, indexVariables),
        "5_slot": Variables(5, check.ingredients[5].item, setIndexVariables, indexVariables),
        "6_slot": Variables(6, check.ingredients[6].item, setIndexVariables, indexVariables),
        "7_slot": Variables(7, check.ingredients[7].item, setIndexVariables, indexVariables),
        "8_slot": Variables(8, check.ingredients[8].item, setIndexVariables, indexVariables),
        output_slot: check.item,
        output_count: check.count,
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    indexGlobal,
    recipesVariables,
    indexVariables[0].active,
    indexVariables[1].active,
    indexVariables[2].active,
    indexVariables[3].active,
    indexVariables[4].active,
    indexVariables[5].active,
    indexVariables[6].active,
    indexVariables[7].active,
    indexVariables[8].active,
  ]);

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
              itemName={recipesActive[`${number}_slot`]}
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
      {/*<Decomposed result={calculatedValues} />*/}
    </div>
  );
};

export default CraftContainer;
