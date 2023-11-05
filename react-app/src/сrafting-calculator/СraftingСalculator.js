import React, { useEffect, useMemo, useState } from "react";
import Modal from "react-modal";
import AOS from "aos";
import LineOutput from "../components/LineOutput/LineOutput";
import ViewItem from "../components/ViewItem/ViewItem";
import NameFormat from "../components/NameFormat/NameFormat";
import Error from "../components/Error/Error";
import { craftAll } from "../data/array.js";
import { debounce } from "lodash";
// import Redactor from "../components/Redactor/Redactor";

import "./СraftingСalculator.scss";
import "aos/dist/aos.css";

const MAX_COUNT = 268435456;

const INITIAL_CRAFT = {
  one_item: null,
  two_item: null,
  three_item: null,
  four_item: null,
  five_item: null,
  six_item: null,
  seven_item: null,
  eight_item: null,
  nine_item: null,
};

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

function updateCraftValues(craftedData) {
  return Object.keys(INITIAL_CRAFT).reduce((acc, curr, index) => {
    acc[curr] = craftedData[String(index + 1)];
    return acc;
  }, {});
}

const CraftingCalculator = () => {
  const [count, setCount] = useState(1);
  const [indexGlobal, setIndexGlobal] = useState(-1);

  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const [modalIsOpenChoice, setIsOpenChoice] = useState(false);
  const [modalIsOpenVariables, setIsOpenVariables] = useState(false);
  const [querySearchCraft, setQuerySearchCraft] = useState("");
  const [decomposed, setDecomposed] = useState([]);
  const [craft, setCraft] = useState(INITIAL_CRAFT);
  const [output, setOutput] = useState({
    out: null,
    qty: 1,
    id: 0,
    arr: false,
    arrA: 0,
    arrL: 0,
  });

  const [result, setResult] = useState(sumCraft(craft));

  const updateCraftedItems = useMemo(() => {
    if (Object.keys(craft).every((el) => !craft[el])) {
      return;
    }

    setResult(sumCraft(craft));
  }, [craft]);

  const craftAllFiltered = useMemo(
    () =>
      craftAll.filter((fill) => {
        return (
          (Array.isArray(fill) &&
            fill[0] &&
            fill[0].out &&
            fill[0].out.includes(querySearchCraft)) ||
          (fill.out && fill.out.includes(querySearchCraft))
        );
      }),
    [querySearchCraft]
  );

  function openModalChoice() {
    setIsOpenChoice(true);
  }

  function closeModalChoice() {
    setIsOpenChoice(false);
  }

  function openModalVariables() {
    setIsOpenVariables(true);
  }

  function closeModalVariables() {
    setIsOpenVariables(false);
  }

  const handleChangeSetCraftReset = () => {
    setCraft(INITIAL_CRAFT);
  };

  const handleChangeSetOutputReset = () => {
    setOutput({
      out: null,
      qty: 1,
      id: 0,
      arr: false,
      arrA: 0,
      arrL: 0,
    });
  };

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
    const craftItem = Array.isArray(craftAll[indexGlobal])
      ? craftAll[indexGlobal][0]
      : craftAll[indexGlobal];

    setCraft(updateCraftValues(craftItem));

    setOutput({
      out: craftItem.out,
      qty: craftItem.qty,
      id: indexGlobal,
      arr: !!Array.isArray(craftAll[indexGlobal]),
      arrA: 0,
      arrL: Array.isArray(craftAll[indexGlobal])
        ? craftAll[indexGlobal].length - 1
        : 0,
    });

    sumCraft(craft);
  };

  const handleChangeCount = (e) => {
    const value = e.target.value;

    if (/^[0-9]*$/.test(value)) {
      const numberValue = parseInt(value, 10);
      if (numberValue >= 0 && numberValue <= MAX_COUNT) {
        setCount(value);
        setErrorMessage(null);
        setShowError(false);
      } else {
        setShowError(true);
        setErrorMessage(
          `Enter a number from 0 to ${new Intl.NumberFormat("en-US").format(
            MAX_COUNT
          )}`
        );
      }
    } else {
      setShowError(true);
      setErrorMessage(
        `Enter a number from 0 to ${new Intl.NumberFormat("en-US").format(
          MAX_COUNT
        )}`
      );
    }
  };

  const updateCraft = (index) => {
    setCraft(updateCraftValues(craftAllFiltered[output.id][index]));

    setOutput({
      ...output,
      arrA: index,
      out: craftAllFiltered[output.id][index].out,
      qty: craftAllFiltered[output.id][index].qty,
    });
  };

  const decrementArrA = () => {
    if (output.arrA > 0) {
      updateCraft(output.arrA - 1);
    }
  };

  const incrementArrA = () => {
    if (output.arrA < output.arrL) {
      updateCraft(output.arrA + 1);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 350 });
  }, []);

  useEffect(() => {
    if (Object.keys(craft).every((el) => !craft[el])) {
      handleChangeSetOutputReset();
    }
  }, [craft]);

  useEffect(() => {
    craftAll.reduce((_, fill, index) => {
      if (fill.out === output.out || (fill[0] && fill[0].out === output.out))
        setIndexGlobal(index);
    }, []);
  }, [output, craftAll]);

  useEffect(() => {
    const matchingIndexes = [];
    for (const key in result) {
      if (result?.[key]) {
        for (let i = 0; i < craftAll.length; i++) {
          const el = craftAll[i];
          const compareValue = Array.isArray(el) ? el[0].out : el.out;

          if (key === compareValue) {
            matchingIndexes.push({ id: i, qty: result[key] });
          }
        }
      }
    }

    setDecomposed(matchingIndexes);
  }, [result]);

  return (
    <div className="wrapper">
      <div className="lineNoContentTop"></div>
      <div className="calcBox">
        <div className="countBox">
          <input
            name="count"
            placeholder="required"
            onChange={handleChangeCount}
            className="countInput"
          />
          <LineOutput numbers={count} multiple={output.qty} type="in" />
        </div>
        <div className="craftContainer">
          <button
            className="swipeGlobalCraftPrev"
            onClick={decrementIndex}
            disabled={output.id === 0}
          >
            &#129144;
          </button>
          <div className="crafter">
            <div className="requiredContainer">
              <ViewItem itemName="one_item" craft={craft} setCraft={setCraft} />
              <ViewItem itemName="two_item" craft={craft} setCraft={setCraft} />
              <ViewItem
                itemName="three_item"
                craft={craft}
                setCraft={setCraft}
              />
              <ViewItem
                itemName="four_item"
                craft={craft}
                setCraft={setCraft}
              />
              <ViewItem
                itemName="five_item"
                craft={craft}
                setCraft={setCraft}
              />
              <ViewItem itemName="six_item" craft={craft} setCraft={setCraft} />
              <ViewItem
                itemName="seven_item"
                craft={craft}
                setCraft={setCraft}
              />
              <ViewItem
                itemName="eight_item"
                craft={craft}
                setCraft={setCraft}
              />
              <ViewItem
                itemName="nine_item"
                craft={craft}
                setCraft={setCraft}
              />
            </div>
            <div className="separatorContainer">
              <span className="arrow">&#10132;</span>
            </div>
            <div className="outputContainer">
              {!output.out ? undefined : (
                <h2 className="outputName">{NameFormat(output.out)}</h2>
              )}
              <div
                className="output"
                onContextMenu={(e) => {
                  e.preventDefault();
                  handleChangeSetCraftReset();
                  handleChangeSetOutputReset();
                }}
              >
                {!output.out ? undefined : (
                  <>
                    <img
                      src={`./image/minecraft-item/${output.out}.webp`}
                      alt="none"
                      data-aos="flip-left"
                    />
                    <span data-aos="flip-left">{output.qty}</span>
                  </>
                )}
              </div>
              {!output.arr ? undefined : (
                <div className="btnWrapper">
                  <button
                    className="btnSwipe"
                    onClick={decrementArrA}
                    disabled={output.arrA === 0}
                  >
                    &#129144;
                  </button>
                  <button className="btnSwipe" onClick={openModalVariables}>
                    ?
                  </button>
                  <button
                    className="btnSwipe"
                    onClick={incrementArrA}
                    disabled={output.arrA === output.arrL}
                  >
                    &#129146;
                  </button>
                </div>
              )}
            </div>
          </div>
          <button
            className="swipeGlobalCraftNext"
            onClick={incrementIndex}
            disabled={indexGlobal === craftAllFiltered.length - 1}
          >
            &#129146;
          </button>
        </div>
        <div className="buttonBox">
          <button
            onClick={() => {
              handleChangeSetCraftReset();
              handleChangeSetOutputReset();
              setIndexGlobal(-1);
            }}
            className="btn"
          >
            RESET
          </button>
          <button
            onClick={() => {
              setQuerySearchCraft("");
              openModalChoice();
            }}
            className="btn"
          >
            BOOK
          </button>
        </div>
        <div className="outFullBox">
          {Object.keys(result).map((key) => (
            <div key={key} className="result">
              <img
                src={`./image/minecraft-item/${key}.webp`}
                alt="none"
                width="24px"
                height="24px"
              />
              <p className="name">{key}</p>
              <LineOutput
                numbers={result[key] * (count / output.qty)}
                multiple={result[key]}
                type="out"
              />
            </div>
          ))}
        </div>
        {!showError ? undefined : <Error message={errorMessage} />}

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
            <input
              type="search"
              name="string"
              placeholder="search"
              className="searchCraft"
              onChange={debounce(
                (e) => setQuerySearchCraft(e.target.value.toLowerCase()),
                350
              )}
            />
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
                      setCraft(updateCraftValues(craftItem));
                      
                      setOutput({
                        out: craftItem.out,
                        qty: craftItem.qty,
                        id: i,
                        arr: !!Array.isArray(el),
                        arrA: 0,
                        arrL: Array.isArray(el) ? el.length - 1 : 0,
                      });
                    }, 50);
                  }}
                >
                  <img
                    src={`./image/minecraft-item/${
                      Array.isArray(el) ? el[0].out : el.out
                    }.webp`}
                    className="image"
                    alt="#"
                  />
                  <label className="nameCraft">
                    {NameFormat(craftItem.out)}
                  </label>
                </div>
              );
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
            {!modalIsOpenVariables ? undefined : (
              <>
                {craftAllFiltered[output.id].map((el, i) => (
                  <div
                    key={i}
                    className="oneBox"
                    onClick={() => {
                      updateCraft(i);
                      closeModalVariables();
                    }}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
                      <div key={index}>
                        {!el[index] ? (
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
            )}
          </div>
        </Modal>
      </div>
      <div className="lineNoContentBottom"></div>
    </div>
  );
};

export default CraftingCalculator;
