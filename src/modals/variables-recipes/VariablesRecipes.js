import React from 'react';
import classNames from "classnames";
import Modal from "react-modal";
import NameFormat from "../../functions/NameFormat";

import styles from "./VariablesRecipes.module.scss"

const VariablesRecipes = ({open, close, setIndexVariables, indexVariables, number}) => {

  const handleItemClick = (key, index) => {
    const updatedIndexVariables = indexVariables.map((item) =>
      item.key === key ? {...item, active: index} : item
    );

    setIndexVariables(updatedIndexVariables);
    close();
  };

  return (
    <Modal
      isOpen={open}
      onRequestClose={close}
      className={classNames(styles["main_modal_variables_recipes"])}
      overlayClassName={classNames(styles["overlay_modal_variables_recipes"])}
      ariaHideApp={false}
    >
      <div className={classNames(styles["wrapper_variables_recipes"])}>
        {!open ? null :
          <>
            {indexVariables[number - 1].globalTag.map((el, index) => (
              <div
                className={classNames(styles["box_one_variant"])}
                key={index}
                onClick={() => handleItemClick(indexVariables[number - 1].key, index)}
              >
                <img
                  className={classNames(styles["image"])}
                  src={`./image/minecraft-item/${el}.webp`}
                  alt="none"
                  width="100%"
                  height="100%"
                  title={NameFormat(el)}
                />
              </div>
            ))}
          </>
        }
      </div>
    </Modal>
  );
};

export default VariablesRecipes;
