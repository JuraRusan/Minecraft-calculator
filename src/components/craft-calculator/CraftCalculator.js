import React, {useState} from "react";
import classNames from "classnames";
import CraftContainer from "../craft-container/CraftContainer";
import RecipesSwipe from "../recipes-swipe/RecipesSwipe";
import AllRecipes from "../../modals/all-recipes/AllRecipes";
import Alert from "../alert/Alert";
import InputCountRequired from "../input count required/InputCountRequired";

import styles from "./CraftCalculator.module.scss";

const MAX_COUNT = 268435456;
const ERROR_MESSAGE = `Enter a number from 0 to ${new Intl.NumberFormat('en-US').format(MAX_COUNT)}`

const CraftCalculator = () => {

  const [count, setCount] = useState(1);
  const [indexGlobal, setIndexGlobal] = useState(0);
  const [modalIsOpenRecipes, setIsOpenRecipes] = useState(false);
  const [showError, setShowError] = useState(false);

  function openModalRecipes() {
    setIsOpenRecipes(true);
  }

  function closeModalRecipes() {
    setIsOpenRecipes(false);
  }

  return (
    <div className={classNames(styles["calculator"])}>
      <RecipesSwipe
        setIndexGlobal={setIndexGlobal}
        indexGlobal={indexGlobal}
        openModalRecipes={openModalRecipes}
      />
      <div className={classNames(styles["required_input_count"])}>
        <InputCountRequired
          indexGlobal={indexGlobal}
          setCount={setCount}
          setShowError={setShowError}
          maxCount={MAX_COUNT}
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
      {showError && <Alert message={ERROR_MESSAGE}/>}
    </div>
  );
};

export default CraftCalculator;