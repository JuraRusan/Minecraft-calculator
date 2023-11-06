import React, {useEffect, useState} from "react";
import AOS from "aos";
import OneCraft from "../components/oneCraft/oneCraft";
import Error from "../components/Error/Error";
import {craftAll} from "../data/array.js";
import GlobalModals from "../components/modals/GlobalModals";
import MiniBTN from "../components/button/MiniBTN";
import roundToMultiple from "../components/roundToMultiple/RoundToMultiple"

import "./СraftingСalculator.scss";
import "aos/dist/aos.css";

const MAX_COUNT = 268435456;

const ERROR_MESSAGE = `Enter a number from 0 to ${new Intl.NumberFormat('en-US').format(MAX_COUNT)}`

const CraftingCalculator = () => {

  const [count, setCount] = useState(0);
  const [showError, setShowError] = useState(false);
  const [indexGlobal, setIndexGlobal] = useState(0);
  const [modalIsOpenChoice, setIsOpenChoice] = useState(false);
  const [importIndex, setImportIndex] = useState(0);

  const decrementIndexGlobal = () => {
    if (indexGlobal > 0) {
      const newIndex = indexGlobal - 1;
      setIndexGlobal(newIndex);
    }
  };

  const incrementIndexGlobal = () => {
    if (indexGlobal < craftAll.length - 1) {
      const newIndex = indexGlobal + 1;
      setIndexGlobal(newIndex);
    }
  };

  function openModalChoice() {
    setIsOpenChoice(true);
  }

  function closeModalChoice() {
    setIsOpenChoice(false);
  }

  const handleChangeCount = (e) => {
    const value = e.target.value;
    const f = Array.isArray(craftAll[indexGlobal]) ? craftAll[indexGlobal][importIndex] : craftAll[indexGlobal]
    const round = roundToMultiple(value, f.qty)

    if (/^[0-9]*$/.test(round)) {
      const numberValue = parseInt(round, 10);
      if (numberValue >= 0 && numberValue <= MAX_COUNT) {
        setCount(round);
        setShowError(false)
      } else {
        setShowError(true)
      }
    } else {
      setShowError(true)
    }
  };

  useEffect(() => {
    AOS.init({duration: 350});
  }, []);

  useEffect(() => {
    const f = Array.isArray(craftAll[indexGlobal]) ? craftAll[indexGlobal][importIndex] : craftAll[indexGlobal]
    setCount(f.qty)
  }, [indexGlobal, importIndex])

  return (
    <div className="wrapper">
      <div className="calcBox">
        <div className="buttonBox">
          <MiniBTN onClick={() => {setIndexGlobal(0)}} label="reset"/>
          <MiniBTN onClick={decrementIndexGlobal} label="&#129144;" disabled={indexGlobal < 2}/>
          <MiniBTN onClick={openModalChoice} label="book"/>
          <MiniBTN onClick={incrementIndexGlobal} label="&#129146;" disabled={indexGlobal === craftAll.length - 1}/>
        </div>
        <div className="countBox">
          <input name="count" placeholder="required" onChange={(e) => {handleChangeCount(e); setImportIndex(0)}} className="countInput"/>
        </div>
        <div className="craftContainer">
          <OneCraft id={indexGlobal} count={count} setImportIndex={setImportIndex}/>
        </div>

        {!showError ? null : <Error message={ERROR_MESSAGE}/>}

        <GlobalModals
          open={modalIsOpenChoice}
          close={closeModalChoice}
          setIndexGlobal={setIndexGlobal}
        />

      </div>

    </div>
  );
};

export default CraftingCalculator;