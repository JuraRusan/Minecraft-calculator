import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import CraftContainer from "../craft-container/CraftContainer";
import Alert from "../alert/Alert";
import { debounce } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import MiniButton from "../mini-button/MiniButton";
import AllRecipes from "../all-recipes/AllRecipes";
import { LANGUAGES_ITEM } from "../../data/Languages_item";
import { LANGUAGES_APP } from "../../data/Languages_app";
import { RECIPES } from "../../data/Recipes";
import AppLanguages from "../app-languages/AppLanguages";

import styles from "./CraftCalculator.module.scss";

const MAX_COUNT = 268435456;

const CraftCalculator = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const inputRef = useRef("");

  const [count, setCount] = useState(1);
  const [indexGlobal, setIndexGlobal] = useState(0);
  const [showError, setShowError] = useState(false);

  const [selectLang, setSelectLang] = useState("");

  const [modalIsOpenRecipes, setIsOpenRecipes] = useState(false);
  const [modalIsOpenLanguages, setIsOpenLanguages] = useState(false);

  const load_lang_app = useSelector((state) => state.lang_app);

  /* --- Functions --- */
  const resetIndex = () => {
    setIndexGlobal(0);
  };

  const decrementIndexGlobal = () => {
    if (indexGlobal > 0) {
      const newIndex = indexGlobal - 1;
      setIndexGlobal(newIndex);
    }
  };

  const incrementIndexGlobal = () => {
    if (indexGlobal < RECIPES.length - 1) {
      const newIndex = indexGlobal + 1;
      setIndexGlobal(newIndex);
    }
  };

  const handleChangeCount = (e) => {
    const value = e.target.value;

    if (/^[0-9]*$/.test(value)) {
      const numberValue = parseInt(value, 10);
      if (numberValue >= 0 && numberValue <= MAX_COUNT) {
        setCount(value);
        setShowError(false);
      } else {
        setShowError(true);
      }
    } else {
      setShowError(true);
    }
  };

  /* --- Modals --- */
  function openModalRecipes() {
    setIsOpenRecipes(true);
  }

  function closeModalRecipes() {
    setIsOpenRecipes(false);
  }

  function openModalLanguages() {
    setIsOpenLanguages(true);
  }

  function closeModalLanguages() {
    setIsOpenLanguages(false);
  }

  /* --- useEffect --- */
  useEffect(() => {
    setCount(1);
    inputRef.current.value = "";
  }, [indexGlobal, setCount]);

  useEffect(() => {
    if (searchParams.get("_lang")) {
      setSelectLang(searchParams.get("_lang"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    searchParams.set("_lang", selectLang);

    navigate({ search: searchParams.toString() }, { replace: true });
  }, [navigate, searchParams, selectLang]);

  useEffect(() => {
    if (selectLang !== "") {
      dispatch({ type: "LANG_ITEM", payload: LANGUAGES_ITEM[selectLang] });
      dispatch({ type: "LANG_APP", payload: LANGUAGES_APP[selectLang] });
      dispatch({ type: "LANG_ISO", payload: selectLang });
    }
  }, [dispatch, selectLang]);

  return (
    <div className={classNames(styles["calculator"])}>
      <div className={classNames(styles["recipes_swipe_button"])}>
        <MiniButton onClick={resetIndex} label={load_lang_app.reset_button} />
        <MiniButton onClick={decrementIndexGlobal} label="&#129144;" disabled={indexGlobal < 2} />
        <MiniButton onClick={openModalRecipes} label={load_lang_app.book_button} />
        <MiniButton onClick={incrementIndexGlobal} label="&#129146;" disabled={indexGlobal === RECIPES.length - 1} />
        <MiniButton onClick={openModalLanguages} label={load_lang_app.language_button} />
        <AllRecipes open={modalIsOpenRecipes} close={closeModalRecipes} setIndexGlobal={setIndexGlobal} />
        <AppLanguages open={modalIsOpenLanguages} close={closeModalLanguages} setSelectLang={setSelectLang} />
      </div>
      <div className={classNames(styles["required_input_count"])}>
        <input
          ref={inputRef}
          placeholder={load_lang_app.required_count}
          className={classNames(styles["count_input"])}
          onChange={debounce((e) => {
            handleChangeCount(e);
          }, 350)}
        />
      </div>
      <CraftContainer indexGlobal={indexGlobal} count={count} type={true} />
      {showError && <Alert message={`${load_lang_app.error} ${new Intl.NumberFormat("en-US").format(MAX_COUNT)}`} />}
    </div>
  );
};

export default CraftCalculator;
