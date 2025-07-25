import React from "react";
import classNames from "classnames";
import CraftCalculator from "../components/craft-calculator/CraftCalculator";

import styles from "./Main.module.scss";

const Main = () => {
  return (
    <div className={classNames(styles["main_wrapper"])}>
      <label className={classNames(styles["ver"])}>ver. Minecraft 1.21.8</label>
      <CraftCalculator />
    </div>
  );
};

export default Main;
