import React from "react";
import classNames from "classnames";
import { useSelector } from "react-redux";

import styles from "./LineOutput.module.scss";

const LineOutput = ({ numbers }) => {
  const count = numbers;
  const countStack = 64;
  const countShulker = 1728;

  const funcShulker = Math.trunc(count / countShulker);
  const funcStack = Math.trunc((count % countShulker) / countStack);
  const funcItem = Math.trunc((count % countShulker) % countStack);

  const load_lang_app = useSelector((state) => state.lang_app);

  return (
    <div className={classNames(styles["calculated"])}>
      <div className={classNames(styles["output_count_box"])}>
        {!funcStack && !funcShulker ? null : <label>{count} = </label>}
        {funcShulker === 0 ? null : (
          <>
            <img
              className={classNames(styles["output_image_shulker"])}
              src="./image/minecraft-item/shulker_box.webp"
              alt="none"
            />
            <span>{funcShulker}</span>
            <label>× 1728</label>
            {count % 1728 !== 0 && (funcStack > 0 || funcItem > 0) && <label> + </label>}
          </>
        )}
        {funcStack === 0 ? null : (
          <>
            <span>{funcStack}</span>
            <label>× 64</label>
            {funcItem > 0 && <label> + </label>}
          </>
        )}
        {funcItem === 0 ? null : (
          <>
            <span>{funcItem}</span>
            <label>{load_lang_app.items}</label>
          </>
        )}
      </div>
    </div>
  );
};

export default LineOutput;
