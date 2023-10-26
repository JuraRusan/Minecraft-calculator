import React from "react";
import SvgWarnComponent from "../../svg/Warn";

const LineOutput = (props) => {

  function roundToMultiple(number, multiple) {
    let result;
    if (number % multiple === 0) {
      result = {
        value: number,
        boolean: false,
      };
    } else {
      const roundedValue = Math.ceil(number / multiple) * multiple;
      result = {
        value: roundedValue,
        boolean: true,
      };
    }
    return result;
  }

  const countAll = roundToMultiple(props.numbers, props.multiple)
  const count = countAll.value
  const countStack = 64
  const countShulker = 1728

  const funcShulker = Math.trunc(count / countShulker)
  const funcStack = Math.trunc(count % countShulker / countStack)
  const funcItem = Math.trunc(count % countShulker % countStack)

  return (
    <div className="calculated">
      {props.type === "in"
        ?
        <>
          {countAll.boolean === false ? undefined :
            <div className="outCountBox">
              <SvgWarnComponent width="24px" height="24px" color="#e4007f" title={`You have entered a number ${props.numbers}, but crafting occurs according to ${props.multiple}`}/>
              <span>&#32;</span>
              <span>&#8776;</span>
            </div>
          }
        </>
        :
        <>
          {countAll.boolean === false
            ?
            <div className="outCountBox">
              <span>&#61;</span>
            </div>
            :
            <div className="outCountBox">
              <SvgWarnComponent width="24px" height="24px" color="#e4007f" title={`Number required ${props.numbers}, but in craft it requires equal ${props.multiple}`}/>
              <span>&#32;</span>
              <span>&#8776;</span>
            </div>
          }
        </>
      }
      {funcShulker === 0 ? undefined :
        <div className="outCountBox">
          <img className="outImgShulker" src="./image/minecraft-item/shulker_box.webp" alt="none"/>
          <span>{funcShulker}</span>
          <label>× 1728</label>
          {count % 1728 !== 0 && (funcStack > 0 || funcItem > 0) && <label> + </label>}
        </div>
      }
      {funcStack === 0 ? undefined :
        <div className="outCountBox">
          <span>{funcStack}</span>
          <label>× 64</label>
          {funcItem > 0 && <label> + </label>}
        </div>
      }
      {funcItem === 0 ? undefined :
        <div className="outCountBox">
          <span>{funcItem}</span>
          <label>items</label>
        </div>
      }
    </div>
  )
}

export default LineOutput;