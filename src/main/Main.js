import React from "react";
import classNames from "classnames";
import CraftCalculator from "../components/craft-calculator/CraftCalculator";

import styles from "./Main.module.scss";

const Main = () => {
  return (
    <div className={classNames(styles["main_wrapper"])}>
      <CraftCalculator />
    </div>
  );
};

export default Main;
