import React, { useEffect, useMemo, useState } from "react";
import ViewItem from "../ViewItem/ViewItem";
import NameFormat from "../NameFormat/NameFormat";
import LineOutput from "../LineOutput/LineOutput";
import { craftAll } from "../../data/array";

import "./oneCraft.scss";
import { sumCraft } from "../../сrafting-calculator/СraftingСalculator";

const OneCraft = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const y = Array.isArray(craftAll[props.id])
    ? craftAll[props.id][selectedIndex].qty
    : craftAll[props.id].qty;

  const result = useMemo(
    () => sumCraft(craftAll[props.id], selectedIndex, props.count / y),
    [props.id, props.count, y, selectedIndex]
  );

  const booleanValue = !!Array.isArray(craftAll[props.id]);
  const obj = Array.isArray(craftAll[props.id])
    ? craftAll[props.id][selectedIndex]
    : craftAll[props.id];

  const decrementLocalId = () => {
    if (selectedIndex > 0) {
      setSelectedIndex((prev) => prev - 1);
    }
  };

  const incrementLocalId = () => {
    if (selectedIndex < craftAll[props.id].length - 1) {
      setSelectedIndex((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (props?.nestedLocalData?.needUpdate) {
      setSelectedIndex(props.nestedLocalData.itemIndex);
    }

    if (!props?.nestedLocalData?.needUpdate) {
      setSelectedIndex(0)
    }
  }, [props.nestedLocalData]);

  return (
    <div className="craftWrapper">
      <div className="required_count">
        <LineOutput numbers={props.count} />
      </div>
      <div className="crafter">
        <div className="requiredContainer">
          <ViewItem itemName="1" obj={obj} />
          <ViewItem itemName="2" obj={obj} />
          <ViewItem itemName="3" obj={obj} />
          <ViewItem itemName="4" obj={obj} />
          <ViewItem itemName="5" obj={obj} />
          <ViewItem itemName="6" obj={obj} />
          <ViewItem itemName="7" obj={obj} />
          <ViewItem itemName="8" obj={obj} />
          <ViewItem itemName="9" obj={obj} />
        </div>
        <div className="separatorContainer">
          <span className="arrow">&#10132;</span>
        </div>
        <div className="outputContainer">
          {!obj.out || obj.out === "air" ? null : (
            <h2 className="outputName">{NameFormat(obj.out)}</h2>
          )}
          <div className="output">
            {!obj.out || obj.out === "air" ? null : (
              <>
                <img
                  src={`./image/minecraft-item/${obj.out}.webp`}
                  alt="none"
                  data-aos="flip-left"
                />
                <span data-aos="flip-left">{obj.qty}</span>
              </>
            )}
          </div>
          {booleanValue === false ? undefined : (
            <div className="btnWrapper">
              <button
                className="btnSwipe"
                onClick={decrementLocalId}
                disabled={selectedIndex === 0}
              >
                &#129144;
              </button>
              <button className="btnSwipe" onClick={props?.onClickVariables}>
                ?
              </button>
              <button
                className="btnSwipe"
                onClick={incrementLocalId}
                disabled={selectedIndex === craftAll[props.id].length}
              >
                &#129146;
              </button>
            </div>
          )}
        </div>
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
            <LineOutput numbers={result[key]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OneCraft;
