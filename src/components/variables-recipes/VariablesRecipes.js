import React from "react";
import classNames from "classnames";
import MyModal from "../my_modal/MyModal";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useSelector } from "react-redux";

import styles from "./VariablesRecipes.module.scss";
import "react-lazy-load-image-component/src/effects/blur.css";

const VariablesRecipes = ({ open, close, setIndexVariables, indexVariables, slot, variant = [] }) => {
  const load_lang = useSelector((state) => state.lang_item);

  const handleItemClick = (index) => {
    const updatedVariables = [...indexVariables];
    updatedVariables[slot] = index;
    setIndexVariables(updatedVariables);

    close();
  };

  return (
    <MyModal open={open} close={close} type="variables">
      <div className={classNames(styles["wrapper"])}>
        {variant.map((el, index) => (
          <div className={classNames(styles["box_one_variant"])} key={index} onClick={() => handleItemClick(index)}>
            <LazyLoadImage
              className={classNames(styles["image"])}
              src={`./image/minecraft-item/${el}.webp`}
              alt="none"
              width="100%"
              height="100%"
              title={load_lang[el]}
              effect="blur"
            />
          </div>
        ))}
      </div>
    </MyModal>
  );
};

export default VariablesRecipes;
