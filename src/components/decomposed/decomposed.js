import React, { useMemo, useState } from "react";
import classNames from "classnames";
import { recipes_array } from "../../data/recipes_array";
import CraftContainer from "../craft-container/CraftContainer";

import styles from "./decomposed.module.scss";

const Decomposed = ({ result }) => {
  const [decomposedShow, setDecomposedShow] = useState(false);

  const decomposed = useMemo(() => {
    const matchingIndexes = [];
    for (const key in result) {
      if (result?.[key]) {
        for (let i = 0; i < recipes_array.length; i++) {
          const el = Array.isArray(recipes_array[i]) ? recipes_array[i][0] : recipes_array[i];
          const compareValueOut = el.item;
          if (key === compareValueOut) {
            matchingIndexes.push({ id: i, item: el.item, count: result[key] });
          }
        }
      }
    }
    return matchingIndexes;
  }, [result]);

  const handleCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    setDecomposedShow(isChecked);
  };

  const generateUniqueId = () => {
    return `customCheckbox_${Math.random().toString(36).substring(7)}`;
  };

  const uniqueCheckboxId = generateUniqueId();

  if (!decomposed) {
    return null;
  }

  return (
    <>
      {decomposed.length !== 0 && (
        <>
          <input
            className={classNames(styles["input_checkbox"])}
            type="checkbox"
            id={uniqueCheckboxId}
            onChange={handleCheckboxChange}
            checked={decomposedShow}
          />
          <label htmlFor={uniqueCheckboxId} className={classNames(styles["custom_checkbox_label"])}></label>
        </>
      )}
      {decomposedShow && (
        <div className={classNames(styles["decomposed"])}>
          {decomposed.map((el, i) => {
            return (
              <div className={classNames(styles["key_wrapper"])} key={i}>
                <div className={classNames(styles["space_tab"])}></div>
                <CraftContainer indexGlobal={el.id} count={el.count} type={false} />
                <div className={classNames(styles["space_tab"])}></div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Decomposed;
