import React, {useEffect, useState} from 'react';
import classNames from "classnames";
import Modal from "react-modal";
import {recipes_array} from "../../data/recipes_array";
import {debounce} from "lodash";
import NameFormat from "../../functions/NameFormat";

import styles from "./AllRecipes.module.scss"

const AllRecipes = ({open, close, setIndexGlobal}) => {

  const [search, setSearch] = useState('')

  useEffect(() => {
    if (!open) {
      setSearch('')
    }
  }, [open])

  return (
    <Modal
      isOpen={open}
      onRequestClose={close}
      className={classNames(styles["main_modal_global_recipes"])}
      overlayClassName={classNames(styles["overlay_modal_global_recipes"])}
      ariaHideApp={false}
    >
      <div className={classNames(styles["wrapper_all_recipes"])}>
        <input
          type="search"
          name="string"
          placeholder="search"
          className={classNames(styles["search_recipes"])}
          onChange={debounce((e) => setSearch(e.target.value.toLowerCase()), 350)}
        />
        {recipes_array.map((el, i) => {
          const recipes = el.item

          return (
            recipes === "air" || !recipes.includes(search) ? null :
              <div
                className={classNames(styles["row_recipes_one"])}
                key={i}
                onClick={() => {
                  close();
                  setIndexGlobal(i);
                  setSearch('')
                }}
              >
                <img
                  src={`./image/minecraft-item/${el.item}.webp`}
                  className={classNames(styles["image"])}
                  alt="#"
                  width="100%"
                  height="100%"
                />
                <label className={classNames(styles["name_recipes"])}>{NameFormat(el.item)}</label>
              </div>
          )
        })}
      </div>
    </Modal>
  );
};

export default AllRecipes;