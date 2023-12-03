import React from "react";
import classNames from "classnames";

import styles from "./LineOutput.module.scss"

const LineOutput = ({numbers}) => {

  const count = numbers
  const countStack = 64
  const countShulker = 1728

  const funcShulker = Math.trunc(count / countShulker)
  const funcStack = Math.trunc(count % countShulker / countStack)
  const funcItem = Math.trunc(count % countShulker % countStack)

  return (
    <div className={classNames(styles["calculated"])}>
      {!funcStack && !funcShulker ? null :
        <div className={classNames(styles["output_count_box"])}>
          <label>{count} = </label>
        </div>
      }
      {funcShulker === 0 ? null :
        <div className={classNames(styles["output_count_box"])}>
          <img className={classNames(styles["output_image_shulker"])} src="./image/minecraft-item/shulker_box.webp" alt="none"/>
          <span>{funcShulker}</span>
          <label>× 1728</label>
          {count % 1728 !== 0 && (funcStack > 0 || funcItem > 0) && <label> + </label>}
        </div>
      }
      {funcStack === 0 ? null :
        <div className={classNames(styles["output_count_box"])}>
          <span>{funcStack}</span>
          <label>× 64</label>
          {funcItem > 0 && <label> + </label>}
        </div>
      }
      {funcItem === 0 ? null :
        <div className={classNames(styles["output_count_box"])}>
          <span>{funcItem}</span>
          <label>items</label>
        </div>
      }
    </div>
  )
}

export default LineOutput;