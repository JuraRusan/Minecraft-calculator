import React from "react";

import "./LineOutput.scss"

const LineOutput = (props) => {

  const count =  props.numbers
  const countStack = 64
  const countShulker = 1728

  const funcShulker = Math.trunc(count / countShulker)
  const funcStack = Math.trunc(count % countShulker / countStack)
  const funcItem = Math.trunc(count % countShulker % countStack)

  return (
    <div className="calculated">
      {!funcStack && !funcShulker && count === countStack && count === countShulker ? null :
        <div className="outCountBox">
          <label>{count} = </label>
        </div>
      }
      {funcShulker === 0 ? null :
        <div className="outCountBox">
          <img className="outImgShulker" src="./image/minecraft-item/shulker_box.webp" alt="none"/>
          <span>{funcShulker}</span>
          <label>× 1728</label>
          {count % 1728 !== 0 && (funcStack > 0 || funcItem > 0) && <label> + </label>}
        </div>
      }
      {funcStack === 0 ? null :
        <div className="outCountBox">
          <span>{funcStack}</span>
          <label>× 64</label>
          {funcItem > 0 && <label> + </label>}
        </div>
      }
      {funcItem === 0 ? null :
        <div className="outCountBox">
          <span>{funcItem}</span>
          <label>items</label>
        </div>
      }
    </div>
  )
}

export default LineOutput;