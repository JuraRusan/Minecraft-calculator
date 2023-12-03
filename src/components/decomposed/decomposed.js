import React, {useMemo, useState} from 'react';
import classNames from "classnames";
import {recipes_array} from "../../data/recipes_array";
import CraftContainer from "../craft-container/CraftContainer";

import styles from "./decomposed.module.scss"

const Decomposed = ({result}) => {

  const [decomposedShow, setDecomposedShow] = useState(false);

  const decomposed = useMemo(() => {
    const matchingIndexes = {};

    for (const key in result) {
      if (result?.[key]) {
        for (let i = 0; i < recipes_array.length; i++) {
          const el = recipes_array[i];
          const compareValueOut = el.item;
          if (key === compareValueOut) {
            if (!matchingIndexes[compareValueOut]) {
              matchingIndexes[compareValueOut] = [];
            }

            matchingIndexes[compareValueOut].push({
              id: i,
              item: el.item,
              count: result[key],
            });
          }
        }
      }
    }
    const resultArray = Object.values(matchingIndexes);

    return resultArray.length === 1 ? resultArray[0] : resultArray;
  }, [result]);

  const handleCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    setDecomposedShow(isChecked);
  };

  const generateUniqueId = () => {
    return `customCheckbox_${Math.random().toString(36).substring(7)}`;
  };

  const uniqueCheckboxId = generateUniqueId();

  function customWidth() {
    const d = decomposed.length
    return (520 * d)
  }

  if (!decomposed) {
    return null
  }

  return (
    <>
      {decomposed.length !== 0 &&
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
      }
      {decomposedShow &&
        <div className={classNames(styles["decomposed"])} style={{minWidth: `${customWidth()}px`}}>
          {decomposed.map((el, i) => {
            const arr = Array.isArray(el) ? el[0] : el

            return (
              <div className={classNames(styles["key_wrapper"])} key={i}>
                <div className={classNames(styles["space_tab"])}></div>
                <CraftContainer indexGlobal={arr.id} count={arr.count} type={false}/>
                <div className={classNames(styles["space_tab"])}></div>
              </div>
            )
          })}
        </div>
      }
    </>
  )
};

export default Decomposed;
