import React, {useMemo, useState} from 'react';
import {craftAll} from "../../data/array";
import OneCraft from "../oneCraft/oneCraft";

const Decomposed = ({result}) => {

  const [decomposedShow, setDecomposedShow] = useState(false);

  const decomposed = useMemo(() => {
    const matchingIndexes = [];
    for (const key in result) {
      if (result?.[key]) {
        for (let i = 0; i < craftAll.length; i++) {
          const el = craftAll[i];
          const compareValueOut = Array.isArray(el) ? el[0].out : el.out;
          if (key === compareValueOut) {
            matchingIndexes.push({id: i, qty: result[key]});
          }
        }
      }
    }
    return matchingIndexes;
  }, [result]);

  const handleCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    setDecomposedShow(isChecked);
  };

  if (!decomposed) {
    return null
  }

  return (
    <>
      {decomposed.length !== 0 && <input type="checkbox" onChange={handleCheckboxChange} checked={decomposedShow}/>}
      {decomposedShow &&
        decomposed.map((el, i) => {
          return (
            <div key={i} className="craftContainer">
              <OneCraft id={el.id} count={el.qty}/>
            </div>
          )
        })
      }
    </>
  )
};

export default Decomposed;
