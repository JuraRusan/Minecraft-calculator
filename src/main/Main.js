import React from "react";
import CraftCalculator from "../components/craft-calculator/CraftCalculator";

import styles from "./Main.module.scss";

const Main = () => {
  return (
    <div className={styles["main_wrapper"]}>
      <label className={styles["ver"]}>ver. Minecraft 1.21.9/10</label>
      <CraftCalculator />
    </div>
  );
};

export default Main;
