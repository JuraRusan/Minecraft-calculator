import React, { useState } from "react";
import CN from "classnames";
import VariablesRecipes from "../variables-recipes/VariablesRecipes";
import { useSelector } from "react-redux";
import { RECIPES } from "../../data/Recipes";

import styles from "./ViewOneItem.module.scss";

const ViewOneItem = ({ indexGlobal, itemName, indexVariables, slot, setIndexVariables, recipesVariables }) => {
  const [modalIsOpenVariables, setIsOpenVariables] = useState(false);

  const load_lang_item = useSelector((state) => state.lang_item);

  const check = Array.isArray(RECIPES[indexGlobal])
    ? RECIPES[indexGlobal][recipesVariables].ingredients[slot]
    : RECIPES[indexGlobal].ingredients[slot];

  const openModalVariables = () => {
    if (check.length > 1) {
      setIsOpenVariables(true);
    }
  };

  const closeModalVariables = () => {
    setIsOpenVariables(false);
  };

  return (
    <>
      <div
        className={CN(styles["view_one_item"], {
          [styles["view_one_item_hover"]]: check.length > 1,
        })}
        onClick={openModalVariables}
      >
        <img
          className={styles["image"]}
          src={`./image/minecraft-item/${itemName}.webp`}
          alt="none"
          width="100%"
          height="100%"
          title={load_lang_item[itemName]}
        />
        {check.length <= 1 ? null : <span className={styles["help_variant"]}>!</span>}
      </div>
      <VariablesRecipes
        open={modalIsOpenVariables}
        close={closeModalVariables}
        setIndexVariables={setIndexVariables}
        indexVariables={indexVariables}
        slot={slot}
        variant={check}
      />
    </>
  );
};

export default ViewOneItem;
