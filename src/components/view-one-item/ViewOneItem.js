import React, { useState } from "react";
import classNames from "classnames";
import VariablesRecipes from "../variables-recipes/VariablesRecipes";
import { useSelector } from "react-redux";

import styles from "./ViewOneItem.module.scss";

const ViewOneItem = ({ itemName, indexVariables, number, setIndexVariables }) => {
  const [modalIsOpenVariables, setIsOpenVariables] = useState(false);

  const load_lang_item = useSelector((state) => state.lang_item);

  function openModalVariables() {
    if (indexVariables[number].booleanModal) {
      setIsOpenVariables(true);
    }
  }

  function closeModalVariables() {
    setIsOpenVariables(false);
  }

  return (
    <>
      <div
        className={
          !indexVariables[number].booleanModal
            ? classNames(styles["view_one_item"])
            : classNames(styles["view_one_item"], styles["view_one_item_hover"])
        }
        onClick={openModalVariables}
      >
        <img
          className={classNames(styles["image"])}
          src={`./image/minecraft-item/${itemName}.webp`}
          alt="none"
          width="100%"
          height="100%"
          title={load_lang_item[itemName]}
        />
        {!indexVariables[number].booleanModal ? null : <span className={classNames(styles["help_variant"])}>!</span>}
      </div>
      {modalIsOpenVariables && (
        <VariablesRecipes
          open={modalIsOpenVariables}
          close={closeModalVariables}
          setIndexVariables={setIndexVariables}
          indexVariables={indexVariables}
          number={number}
        />
      )}
    </>
  );
};

export default ViewOneItem;
