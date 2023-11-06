import React, {useEffect, useState} from 'react';
import ViewItem from "../ViewItem/ViewItem";
import NameFormat from "../NameFormat/NameFormat";
import LineOutput from "../LineOutput/LineOutput";
import {craftAll} from "../../data/array";
import {sumCraft} from "../sumCraft/SumCraft";
import VariablesModal from "../modals/VariablesModal";
import MiniBTN from "../button/MiniBTN";
import Decomposed from "../decomposed/decomposed";
import roundToMultiple from "../roundToMultiple/RoundToMultiple";

import "./oneCraft.scss";

const OneCraft = ({id, count, setImportIndex}) => {

  const [localId, setLocalId] = useState(0)
  const [modalIsOpenVariables, setIsOpenVariables] = useState(false);

  const booleanValue = !!Array.isArray(craftAll[id]);
  const obj = Array.isArray(craftAll[id]) ? craftAll[id][localId] : craftAll[id];

  const y = Array.isArray(craftAll[id]) ? craftAll[id][localId].qty : craftAll[id].qty;
  const countRound = roundToMultiple(count, y)
  const result = sumCraft(craftAll[id], localId, countRound / y);

  const decrementLocalId = () => {
    if (localId > 0) {
      setLocalId(localId - 1)
    }
  };

  const incrementLocalId = () => {
    if (localId < craftAll[id].length - 1) {
      setLocalId(localId + 1)
    }
  };

  function openModalVariables() {
    setIsOpenVariables(true);
  }

  function closeModalVariables() {
    setIsOpenVariables(false);
  }

  useEffect(() => {
    if (typeof setImportIndex === 'function') {
      setImportIndex(localId);
    }
  }, [localId, setImportIndex]);

  useEffect(() => {
    setLocalId(0)
  }, [id])

  return (
    <div className="craftWrapper">
      <div className="viewCraft">
        <div className="required_count">
          <LineOutput numbers={countRound}/>
        </div>
        <div className="crafter">
          <div className="requiredContainer">
            <ViewItem itemName="1" obj={obj}/>
            <ViewItem itemName="2" obj={obj}/>
            <ViewItem itemName="3" obj={obj}/>
            <ViewItem itemName="4" obj={obj}/>
            <ViewItem itemName="5" obj={obj}/>
            <ViewItem itemName="6" obj={obj}/>
            <ViewItem itemName="7" obj={obj}/>
            <ViewItem itemName="8" obj={obj}/>
            <ViewItem itemName="9" obj={obj}/>
          </div>
          <div className="separatorContainer">
            <span className="arrow">&#10132;</span>
          </div>
          <div className="outputContainer">
            {!obj.out || obj.out === "air" ? null : <h2 className="outputName">{NameFormat(obj.out)}</h2>}
            <div className="output">
              {!obj.out || obj.out === "air" ? null :
                <>
                  <img src={`./image/minecraft-item/${obj.out}.webp`} alt="none" data-aos="flip-left"/>
                  <span data-aos="flip-left">{obj.qty}</span>
                </>
              }
            </div>
            {!booleanValue ? null :
              <div className="btnWrapper">
                <MiniBTN onClick={decrementLocalId} label="&#129144;" disabled={localId === 0}/>
                <MiniBTN onClick={openModalVariables} label="?"/>
                <MiniBTN onClick={incrementLocalId} label="&#129146;" disabled={localId === craftAll[id].length - 1}/>
              </div>
            }
          </div>
        </div>
        <div className="outFullBox">
          {Object.keys(result).map((key, i) => (
            <div key={i} className="result">
              <img src={`./image/minecraft-item/${key}.webp`} alt="none" width="24px" height="24px"/>
              <p className="name">{NameFormat(key)}</p>
              <LineOutput numbers={result[key]}/>
            </div>
          ))}
        </div>
      </div>

      <Decomposed result={result}/>

      <VariablesModal
        open={modalIsOpenVariables}
        close={closeModalVariables}
        setLocalId={setLocalId}
        id={id}
      />

    </div>
  );
};

export default OneCraft;
