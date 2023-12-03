import React, {useState, useRef} from "react";
import classNames from "classnames";
import CraftContainer from "../craft-container/CraftContainer";
import RecipesSwipe from "../recipes-swipe/RecipesSwipe";
import AllRecipes from "../../modals/all-recipes/AllRecipes";
import {debounce} from "lodash";

import styles from "./CraftCalculator.module.scss";

const MAX_COUNT = 268435456;
const ERROR_MESSAGE = `Enter a number from 0 to ${new Intl.NumberFormat('en-US').format(MAX_COUNT)}`

const CraftCalculator = () => {

  const [count, setCount] = useState(1);
  const inputRef = useRef('');
  const [indexGlobal, setIndexGlobal] = useState(0);
  const [modalIsOpenRecipes, setIsOpenRecipes] = useState(false);

  // const [showError, setShowError] = useState(false);

  function openModalRecipes() {
    setIsOpenRecipes(true);
  }

  function closeModalRecipes() {
    setIsOpenRecipes(false);
  }

  const handleChangeCount = (e) => {
    const value = e.target.value;

    if (/^[0-9]*$/.test(value)) {
      const numberValue = parseInt(value, 10);
      if (numberValue >= 0 && numberValue <= MAX_COUNT) {
        setCount(value);
        // setShowError(false)
      } else {
        // setShowError(true)
      }
    } else {
      // setShowError(true)
    }
  };

  return (
    <div className={classNames(styles["calculator"])}>
      <RecipesSwipe
        setIndexGlobal={setIndexGlobal}
        indexGlobal={indexGlobal}
        openModalRecipes={openModalRecipes}
      />
      <div className={classNames(styles["required_input_count"])}>
        <input
          ref={inputRef}
          name="count"
          placeholder="required"
          className={classNames(styles["count_input"])}
          onChange={debounce((e) => {
            handleChangeCount(e)
          }, 350)}
        />
      </div>
      <CraftContainer
        indexGlobal={indexGlobal}
        count={count}
        type={true}
      />
      <AllRecipes
        open={modalIsOpenRecipes}
        close={closeModalRecipes}
        setIndexGlobal={setIndexGlobal}
      />
    </div>
  );
};

export default CraftCalculator;