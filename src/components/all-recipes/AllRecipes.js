import React, { useEffect, useState } from "react";
import MyModal from "../my_modal/MyModal";
import { RECIPES } from "../../data/Recipes";
import { debounce } from "lodash";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useSelector } from "react-redux";
import { LANGUAGES_ITEM } from "../../data/Languages_item";

import styles from "./AllRecipes.module.scss";
import "react-lazy-load-image-component/src/effects/blur.css";

const AllRecipes = ({ open, close, setIndexGlobal }) => {
  const [search, setSearch] = useState("");

  const load_lang_item = useSelector((state) => state.lang_item);
  const load_lang_app = useSelector((state) => state.lang_app);
  const load_lang_iso = useSelector((state) => state.lang_iso);

  /* --- Functions --- */
  const filter = () => {
    const entries = Object.entries(LANGUAGES_ITEM[load_lang_iso]);
    const filteredEntries = entries.filter(([key, value]) => value.toLowerCase().includes(search));

    return Object.fromEntries(filteredEntries);
  };

  const filtered = filter();

  /* --- useEffect --- */
  useEffect(() => {
    if (!open) {
      setSearch("");
    }
  }, [open]);

  return (
    <MyModal open={open} close={close} type="recipes">
      <div className={styles["wrapper_recipes"]}>
        <input
          type="search"
          autoFocus={true}
          placeholder={load_lang_app.search_recipes}
          className={styles["search_recipes"]}
          onChange={debounce((e) => setSearch(e.target.value.toLowerCase()), 350)}
        />
        <div className={styles["list"]}>
          {RECIPES.map((el, i) => {
            const recipes = Array.isArray(el) ? el[0].item : el.item;
            const keys = Object.keys(filtered);

            return recipes === "air" || !keys.includes(recipes) ? null : (
              <div
                className={styles["row_recipes_one"]}
                key={i}
                onClick={() => {
                  close();
                  setIndexGlobal(i);
                  setSearch("");
                }}
              >
                <LazyLoadImage
                  src={process.env.PUBLIC_URL + `/image/minecraft-item/${recipes}.webp`}
                  wrapperClassName={styles["image"]}
                  width="100%"
                  height="100%"
                  alt={load_lang_item[recipes]}
                  effect="blur"
                />
                <label className={styles["name_recipes"]}>{load_lang_item[recipes]}</label>
              </div>
            );
          })}
        </div>
      </div>
    </MyModal>
  );
};

export default AllRecipes;
