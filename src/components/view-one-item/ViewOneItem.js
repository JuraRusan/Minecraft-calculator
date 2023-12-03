import React, {useEffect, useState} from 'react';
import classNames from "classnames";
import AOS from "aos";
import NameFormat from "../../functions/NameFormat";
import VariablesRecipes from "../../modals/variables-recipes/VariablesRecipes";

import styles from "./ViewOneItem.module.scss";
import "aos/dist/aos.css";

const ViewOneItem = ({itemName, indexVariables, number, setIndexVariables}) => {

  const [modalIsOpenVariables, setIsOpenVariables] = useState(false);

  function openModalVariables() {
    if (indexVariables[number - 1].booleanModal === true) {
      setIsOpenVariables(true);
    }
  }

  function closeModalVariables() {
    setIsOpenVariables(false);
  }

  useEffect(() => {
    AOS.init({duration: 350});
  }, []);

  return (
    <>
      <div
        className={!indexVariables[number - 1].booleanModal ? classNames(styles["view_one_item"]) : classNames(styles["view_one_item"], styles["view_one_item_hover"])}
        onClick={openModalVariables}>
        <img
          className={classNames(styles["image"])}
          src={`./image/minecraft-item/${itemName}.webp`}
          alt="none"
          width="100%"
          height="100%"
          title={NameFormat(itemName)}
        />
        {!indexVariables[number - 1].booleanModal ? null :
          <span className={classNames(styles["help_variant"])}>!</span>
        }
      </div>
      <VariablesRecipes
        open={modalIsOpenVariables}
        close={closeModalVariables}
        setIndexVariables={setIndexVariables}
        indexVariables={indexVariables}
        number={number}
      />
    </>
  );
};

export default ViewOneItem;
