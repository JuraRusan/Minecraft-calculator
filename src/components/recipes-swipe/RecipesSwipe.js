import React from 'react';
import classNames from "classnames";
import {recipes_array} from "../../data/recipes_array";
import MiniButton from "../mini-button/MiniButton";

import styles from "./RecipesSwipe.module.scss";

const RecipesSwipe = ({setIndexGlobal, indexGlobal, openModalRecipes}) => {

  const decrementIndexGlobal = () => {
    if (indexGlobal > 0) {
      const newIndex = indexGlobal - 1;
      setIndexGlobal(newIndex);
    }
  };

  const incrementIndexGlobal = () => {
    if (indexGlobal < recipes_array.length - 1) {
      const newIndex = indexGlobal + 1;
      setIndexGlobal(newIndex);
    }
  };

  return (
    <div className={classNames(styles["recipes_swipe_button"])}>
      <MiniButton onClick={() => {setIndexGlobal(0)}} label="reset"/>
      <MiniButton onClick={decrementIndexGlobal} label="&#129144;" disabled={indexGlobal < 2}/>
      <MiniButton onClick={openModalRecipes} label="book"/>
      <MiniButton onClick={incrementIndexGlobal} label="&#129146;" disabled={indexGlobal === recipes_array.length - 1}/>
    </div>
  );
};

export default RecipesSwipe;
