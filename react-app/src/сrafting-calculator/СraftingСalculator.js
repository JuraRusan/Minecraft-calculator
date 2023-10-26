import React, {useEffect, useState} from "react";
import Modal from 'react-modal';
import AOS from "aos";
import LineOutput from "../components/LineOutput/LineOutput";
import ViewItem from "../components/ViewItem/ViewItem";
import NameFormat from "../components/NameFormat/NameFormat";
import Error from "../components/Error/Error";
import {craftAll} from "../data/array.js";
import {debounce} from "lodash";
// import Redactor from "../components/Redactor/Redactor";

import "./СraftingСalculator.scss";
import "aos/dist/aos.css";

const CraftingCalculator = () => {

  useEffect(() => {
    AOS.init({duration: 350});
  }, []);

  const maxCount = 268435456;
  const [count, setCount] = useState(1);

  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const [modalIsOpenChoice, setIsOpenChoice] = useState(false);

  function openModalChoice() {
    setIsOpenChoice(true);
  }

  function closeModalChoice() {
    setIsOpenChoice(false);
  }

  const [modalIsOpenVariables, setIsOpenVariables] = useState(false);

  function openModalVariables() {
    setIsOpenVariables(true);
  }

  function closeModalVariables() {
    setIsOpenVariables(false);
  }

  const [querySearchCraft, setQuerySearchCraft] = useState("");
  const craftAllFiltered = craftAll.filter(fill => {
    if (Array.isArray(fill) && fill[0] && fill[0].out && fill[0].out.includes(querySearchCraft)) {
      return true;
    } else if (fill.out && fill.out.includes(querySearchCraft)) {
      return true;
    }
    return false;
  });

  const [craft, setCraft] = useState({
    one_item: null,
    two_item: null,
    three_item: null,
    four_item: null,
    five_item: null,
    six_item: null,
    seven_item: null,
    eight_item: null,
    nine_item: null,
  });
  const handleChangeSetCraftReset = () => {
    setCraft({
      one_item: null,
      two_item: null,
      three_item: null,
      four_item: null,
      five_item: null,
      six_item: null,
      seven_item: null,
      eight_item: null,
      nine_item: null
    })
  }

  const [output, setOutput] = useState({
    out: null,
    qty: 1,
    id: 0,
    arr: false,
    arrA: 0,
    arrL: 0
  });
  const handleChangeSetOutputReset = () => {
    setOutput({
      out: null,
      qty: 1,
      id: 0,
      arr: false,
      arrA: 0,
      arrL: 0
    })
  }

  useEffect(() => {
    if (craft.one_item === null && craft.two_item === null && craft.three_item === null && craft.four_item === null && craft.five_item === null && craft.six_item === null && craft.seven_item === null && craft.eight_item === null && craft.nine_item === null) {
      handleChangeSetOutputReset()
    }
  }, [craft]);

  function sumCraft(craft) {
    const out = {};

    for (const key in craft) {
      const item = craft[key];
      if (item !== null) {
        if (out[item]) {
          out[item] += 1;
        } else {
          out[item] = 1;
        }
      }
    }

    return out;
  }

  const result = sumCraft(craft);

  const handleChangeCount = (e) => {
    const value = e.target.value;

    if (/^[0-9]*$/.test(value)) {
      const numberValue = parseInt(value, 10);
      if (numberValue >= 0 && numberValue <= maxCount) {
        setCount(value);
        setErrorMessage(null);
        setShowError(false)
      } else {
        setShowError(true)
        setErrorMessage(`Enter a number from 0 to ${new Intl.NumberFormat('en-US').format(maxCount)}`);
      }
    } else {
      setShowError(true)
      setErrorMessage(`Enter a number from 0 to ${new Intl.NumberFormat('en-US').format(maxCount)}`);
    }
  };

  const updateCraft = (index) => {
    setCraft({
      one_item: craftAllFiltered[output.id][index]["1"],
      two_item: craftAllFiltered[output.id][index]["2"],
      three_item: craftAllFiltered[output.id][index]["3"],
      four_item: craftAllFiltered[output.id][index]["4"],
      five_item: craftAllFiltered[output.id][index]["5"],
      six_item: craftAllFiltered[output.id][index]["6"],
      seven_item: craftAllFiltered[output.id][index]["7"],
      eight_item: craftAllFiltered[output.id][index]["8"],
      nine_item: craftAllFiltered[output.id][index]["9"]
    });
    setOutput({
      ...output,
      arrA: index,
      out: craftAllFiltered[output.id][index].out,
      qty: craftAllFiltered[output.id][index].qty,
    });
  }

  const decrementArrA = () => {
    if (output.arrA > 0) {
      updateCraft(output.arrA - 1)
    }
  };

  const incrementArrA = () => {
    if (output.arrA < output.arrL) {
      updateCraft(output.arrA + 1)
    }
  };

  const [indexGlobal, setIndexGlobal] = useState(-1);

  useEffect(() => {
    const matchingIndices = craftAll.reduce((indices, fill, index) => {
      if (fill.out === output.out || (fill[0] && fill[0].out === output.out))
        return setIndexGlobal(index);
    }, []);
  }, [output, craftAll]);

  const decrementIndex = () => {
    if (indexGlobal > 0) {
      const newIndex = indexGlobal - 1;
      setIndexGlobal(newIndex);
      newCraft(newIndex);
    }
  };

  const incrementIndex = () => {
    if (indexGlobal < craftAll.length - 1) {
      const newIndex = indexGlobal + 1;
      setIndexGlobal(newIndex);
      newCraft(newIndex);
    }
  };

  const newCraft = (indexGlobal) => {
    const craftItem = Array.isArray(craftAll[indexGlobal]) ? craftAll[indexGlobal][0] : craftAll[indexGlobal];
    setCraft({
      one_item: craftItem["1"],
      two_item: craftItem["2"],
      three_item: craftItem["3"],
      four_item: craftItem["4"],
      five_item: craftItem["5"],
      six_item: craftItem["6"],
      seven_item: craftItem["7"],
      eight_item: craftItem["8"],
      nine_item: craftItem["9"]
    });
    setOutput({
      out: craftItem.out,
      qty: craftItem.qty,
      id: indexGlobal,
      arr: !!Array.isArray(craftAll[indexGlobal]),
      arrA: 0,
      arrL: Array.isArray(craftAll[indexGlobal]) ? craftAll[indexGlobal].length - 1 : 0
    });
    sumCraft(craft);
  }

  return (
    <div className="wrapper">
      <div className="lineNoContentTop"></div>
      <div className="calcBox">
        <div className="countBox">
          <input name="count" placeholder="required" onChange={handleChangeCount} className="countInput"/>
          <LineOutput numbers={count} multiple={output.qty} type="in"/>
        </div>
        <div className="craftContainer">
          <button className="swipeGlobalCraftPrev" onClick={decrementIndex} disabled={output.id === 0}>&#129144;</button>
          <div className="crafter">
            <div className="requiredContainer">
              <ViewItem itemName="one_item" craft={craft} setCraft={setCraft}/>
              <ViewItem itemName="two_item" craft={craft} setCraft={setCraft}/>
              <ViewItem itemName="three_item" craft={craft} setCraft={setCraft}/>
              <ViewItem itemName="four_item" craft={craft} setCraft={setCraft}/>
              <ViewItem itemName="five_item" craft={craft} setCraft={setCraft}/>
              <ViewItem itemName="six_item" craft={craft} setCraft={setCraft}/>
              <ViewItem itemName="seven_item" craft={craft} setCraft={setCraft}/>
              <ViewItem itemName="eight_item" craft={craft} setCraft={setCraft}/>
              <ViewItem itemName="nine_item" craft={craft} setCraft={setCraft}/>
            </div>
            <div className="separatorContainer">
              <span className="arrow">&#10132;</span>
            </div>
            <div className="outputContainer">
              {output.out === null ? undefined : <h2 className="outputName">{NameFormat(output.out)}</h2>}
              <div
                className="output"
                onContextMenu={(e) => {
                  e.preventDefault();
                  handleChangeSetCraftReset();
                  handleChangeSetOutputReset();
                }}
              >
                {output.out === null ? undefined :
                  <>
                    <img src={`./image/minecraft-item/${output.out}.webp`} alt="none" data-aos="flip-left"/>
                    <span data-aos="flip-left">{output.qty}</span>
                  </>
                }
              </div>
              {output.arr === false ? undefined :
                <div className="btnWrapper">
                  <button className="btnSwipe" onClick={decrementArrA} disabled={output.arrA === 0}>&#129144;</button>
                  <button className="btnSwipe" onClick={openModalVariables}>?</button>
                  <button className="btnSwipe" onClick={incrementArrA} disabled={output.arrA === output.arrL}>&#129146;</button>
                </div>
              }
            </div>
          </div>
          <button className="swipeGlobalCraftNext" onClick={incrementIndex} disabled={indexGlobal === craftAllFiltered.length - 1}>&#129146;</button>
        </div>
        <div className="buttonBox">
          <button onClick={() => {handleChangeSetCraftReset(); handleChangeSetOutputReset(); setIndexGlobal(-1)}} className="btn">RESET</button>
          <button onClick={() => {setQuerySearchCraft(""); openModalChoice()}} className="btn">BOOK</button>
        </div>
        <div className="outFullBox">
          {Object.keys(result).map((key) => (
            <div key={key} className="result">
              <img src={`./image/minecraft-item/${key}.webp`} alt="none" width="24px" height="24px"/>
              <p className="name">{key}</p>
              <LineOutput numbers={result[key] * (count / output.qty)} multiple={result[key]} type="out"/>
            </div>
          ))}
        </div>
        {showError === false ? undefined : <Error message={errorMessage}/>}

        {/* --- dev --- */}
        {/*<Redactor/>*/}
        {/* --- dev --- */}

        <Modal
          isOpen={modalIsOpenChoice}
          onRequestClose={closeModalChoice}
          className="modalMain"
          overlayClassName="overlayModal"
          ariaHideApp={false}
        >
          <div className="wrapperModal" data-aos="fade-left">
            <input type="search" name="string" placeholder="search" className="searchCraft" onChange={debounce((e) => setQuerySearchCraft(e.target.value.toLowerCase()), 350)}/>
            {craftAllFiltered.map((el, i) => {
              const craftItem = Array.isArray(el) ? el[0] : el;

              return (
                <div
                  className="rowCraftOne"
                  key={i}
                  onClick={() => {
                    closeModalChoice();
                    handleChangeSetCraftReset();
                    handleChangeSetOutputReset();
                    setTimeout(() => {
                      setCraft({
                        one_item: craftItem["1"],
                        two_item: craftItem["2"],
                        three_item: craftItem["3"],
                        four_item: craftItem["4"],
                        five_item: craftItem["5"],
                        six_item: craftItem["6"],
                        seven_item: craftItem["7"],
                        eight_item: craftItem["8"],
                        nine_item: craftItem["9"]
                      });
                      setOutput({
                        out: craftItem.out,
                        qty: craftItem.qty,
                        id: i,
                        arr: !!Array.isArray(el),
                        arrA: 0,
                        arrL: Array.isArray(el) ? el.length - 1 : 0
                      });
                    }, 50);
                  }}
                >
                  <img src={`./image/minecraft-item/${Array.isArray(el) ? el[0].out : el.out}.webp`} className="image" alt="#"/>
                  <label className="nameCraft">{NameFormat(craftItem.out)}</label>
                </div>
              )
            })}
          </div>
        </Modal>

        <Modal
          isOpen={modalIsOpenVariables}
          onRequestClose={closeModalVariables}
          className="modalMain customWight"
          overlayClassName="overlayModal"
          ariaHideApp={false}
        >
          <div className="wrapperPrevCraft" data-aos="fade-left">
            {modalIsOpenVariables === false ? undefined :
              <>
                {craftAllFiltered[output.id].map((el, i) => (
                  <div key={i} className="oneBox" onClick={() => {updateCraft(i); closeModalVariables()}}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
                      <div key={index}>
                        {el[index] === null ? (
                          <div className="prevCraft"></div>
                        ) : (
                          <img
                            src={`./image/minecraft-item/${el[index]}.webp`}
                            className="prevCraft"
                            alt="#"
                            title={NameFormat(el[index])}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </>
            }
          </div>
        </Modal>

      </div>
      <div className="lineNoContentBottom"></div>
    </div>
  );
};

export default CraftingCalculator;
