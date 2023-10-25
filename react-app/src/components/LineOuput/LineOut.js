import React from "react";

const LineOuput = (props) => {

  const count = props.numbers
  const countStack = 64
  const countShulker = 1728

  const funcShulker = Math.trunc(count / countShulker)
  const funcStack = Math.trunc(count % countShulker / countStack)
  const funcItem = Math.trunc(count % countShulker % countStack)

  return (
    <div className="calculated">
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

export default LineOuput;