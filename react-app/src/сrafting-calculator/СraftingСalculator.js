import React, {useEffect, useState, useMemo} from "react";
import Modal from 'react-modal';
import AOS from "aos";
import LineOutput from "../components/LineOutput/LineOutput";
import OneCraft from "../components/oneCraft/oneCraft";
import NameFormat from "../components/NameFormat/NameFormat";
import Error from "../components/Error/Error";
import {craftAll} from "../data/array.js";

import "./СraftingСalculator.scss";
import "aos/dist/aos.css";

const MAX_COUNT = 268435456;

const KEYS_TO = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

const ERROR_MESSAGE = `Enter a number from 0 to ${new Intl.NumberFormat('en-US').format(MAX_COUNT)}`

function sumCraft(craft, localId, count) {
  const craftArray = Array.isArray(craft) ? craft[localId] : craft;
  const out = {}

  for (const key in craftArray) {
    const item = craftArray[key];
    if (item !== null && item !== "air" && KEYS_TO.includes(key)) {
      if (out[item]) {
        out[item] += 1;
      }
      else {
        out[item] = 1;
      }
    }
  }

  for (const key in out) {
    out[key] *= count;
  }

  return out;
}

function roundToMultiple(number, multiple) {
  let result;
  if (number % multiple === 0) {
    result = number
  } else {
    result = Math.ceil(number / multiple) * multiple
  }
  return result;
}

const CraftingCalculator = () => {

  useEffect(() => {
    AOS.init({duration: 350});
  }, []);

  const [count, setCount] = useState(1);

  const [showError, setShowError] = useState(false);

  const [modalIsOpenChoice, setIsOpenChoice] = useState(false);
  const [modalIsOpenVariables, setIsOpenVariables] = useState(false);

  const [indexGlobal, setIndexGlobal] = useState(0);
  const [localId, setLocalId] = useState(0)

  const decrementLocalId = () => {
    if (localId > 0) {
      setLocalId(localId - 1)
    }
  };

  const incrementLocalId = () => {
    if (localId < craftAll[indexGlobal].length - 1) {
      setLocalId(localId + 1)
    }
  };

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

  function openModalVariables() {
    setIsOpenVariables(true);
  }

  function closeModalVariables() {
    setIsOpenVariables(false);
  }

  const y = Array.isArray(craftAll[indexGlobal]) ? craftAll[indexGlobal][localId].qty : craftAll[indexGlobal].qty;
  const result = sumCraft(craftAll[indexGlobal], localId, count / y);

  const handleChangeCount = (e) => {
    const value =  e.target.value;
    const f = Array.isArray(craftAll[indexGlobal]) ? craftAll[indexGlobal][0] : craftAll[indexGlobal]
    const round =  roundToMultiple(value, f.qty)

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

  const decomposed = useMemo(() => {
    const matchingIndexes = [];
    for (const key in result) {
      if (result?.[key]) {
        for (let i = 0; i < craftAll.length; i++) {
          const el = craftAll[i];
          const compareValueOut = Array.isArray(el) ? el[0].out : el.out;
          if (key === compareValueOut) {
            matchingIndexes.push({id: i, log: compareValueOut, qty: result[key]});
          }
        }
      }
    }
    return matchingIndexes;
  }, [result, count]);

  useEffect(() => {
    const f = Array.isArray(craftAll[indexGlobal]) ? craftAll[indexGlobal][0] : craftAll[indexGlobal]
    setCount(f.qty)
  }, [indexGlobal])

  return (
    <div className="wrapper">
      <div className="calcBox">
        <div className="buttonBox">
          <button onClick={() => {setIndexGlobal(0)}} className="btn">RESET</button>
          <button onClick={() => {openModalChoice()}} className="btn">BOOK</button>
        </div>
        <div className="countBox">
          <input name="count" placeholder="required" onChange={handleChangeCount} className="countInput"/>
        </div>
        <div className="craftContainer">
          <button className="swipeGlobalCraftPrev" onClick={decrementIndexGlobal} disabled={indexGlobal < 2}>&#129144;</button>
          <OneCraft
            id={indexGlobal}
            result={result}
            localId={localId}
            count={count}
            onClickNext={decrementLocalId}
            onClickPrew={incrementLocalId}
            onClickVariables={openModalVariables}
          />
          <button className="swipeGlobalCraftNext" onClick={incrementIndexGlobal} disabled={indexGlobal === craftAll.length - 1}>&#129146;</button>
        </div>
        {!showError ? null : <Error message={ERROR_MESSAGE}/>}

        {!decomposed ? null :
          <>
            {decomposed.map((el, i) => {
              return (
                <div key={i} className="craftContainer">
                  <OneCraft id={el.id} localId="0" result={sumCraft(craftAll[el.id], 0, el.qty)} count={el.qty}/>
                </div>
              )
            })}
          </>
        }

        <Modal
          isOpen={modalIsOpenChoice}
          onRequestClose={closeModalChoice}
          className="modalMain"
          overlayClassName="overlayModal"
          ariaHideApp={false}
        >
          <div className="wrapperModal" data-aos="fade-left">
            <input type="search" name="string" placeholder="search" className="searchCraft"/>
            {craftAll.map((el, i) => {
              const craftItem = Array.isArray(el) ? el[0] : el;

              return (
                <div
                  className="rowCraftOne"
                  key={i}
                  onClick={() => {
                    closeModalChoice();
                    setIndexGlobal(i);
                  }}
                >
                  {craftItem.out === "air" ? null :
                    <>
                      <img src={`./image/minecraft-item/${craftItem.out}.webp`} className="image" alt="#"/>
                      <label className="nameCraft">{NameFormat(craftItem.out)}</label>
                    </>
                  }
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
                {craftAll[indexGlobal].map((el, i) => (
                  <div key={i} className="oneBox" onClick={() => {
                    setLocalId(i);
                    closeModalVariables()
                  }}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
                      <div key={index}>
                        {el[index] === null ? (<div className="prevCraft"></div>) : (
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

    </div>
  );
};

export default CraftingCalculator;

// <div className="craftWrapper">
//   <div className="crafter">
//     <div className="requiredContainer">
//       <ViewItem itemName="1" id={indexGlobal}/>
//       <ViewItem itemName="2" id={indexGlobal}/>
//       <ViewItem itemName="3" id={indexGlobal}/>
//       <ViewItem itemName="4" id={indexGlobal}/>
//       <ViewItem itemName="5" id={indexGlobal}/>
//       <ViewItem itemName="6" id={indexGlobal}/>
//       <ViewItem itemName="7" id={indexGlobal}/>
//       <ViewItem itemName="8" id={indexGlobal}/>
//       <ViewItem itemName="9" id={indexGlobal}/>
//     </div>
//     <div className="separatorContainer">
//       <span className="arrow">&#10132;</span>
//     </div>
//     <div className="outputContainer">
//       {output.out === null ? undefined : <h2 className="outputName">{NameFormat(output.out)}</h2>}
//       <div
//         className="output"
//         onContextMenu={(e) => {
//           e.preventDefault();
//           handleChangeSetCraftReset();
//           handleChangeSetOutputReset();
//         }}
//       >
//         {output.out === null ? undefined :
//           <>
//             <img src={`./image/minecraft-item/${output.out}.webp`} alt="none" data-aos="flip-left"/>
//             <span data-aos="flip-left">{output.qty}</span>
//           </>
//         }
//       </div>
//       {output.arr === false ? undefined :
//         <div className="btnWrapper">
//           <button className="btnSwipe" onClick={decrementArrA} disabled={output.arrA === 0}>&#129144;</button>
//           <button className="btnSwipe" onClick={openModalVariables}>?</button>
//           <button className="btnSwipe" onClick={incrementArrA} disabled={output.arrA === output.arrL}>&#129146;</button>
//         </div>
//       }
//     </div>
//   </div>
//   <div className="outFullBox">
//     {Object.keys(result).map((key) => (
//       <div key={key} className="result">
//         <img src={`./image/minecraft-item/${key}.webp`} alt="none" width="24px" height="24px"/>
//         <p className="name">{key}</p>
//         <LineOutput numbers={result[key] * (count / output.qty)} multiple={result[key]} type="out"/>
//       </div>
//     ))}
//   </div>
// </div>
