import React from "react";
import classNames from "classnames";

import styles from "./MiniButton.module.scss";

const MiniButton = ({ label, ...props }) => {
  return (
    <button className={classNames(styles["button"])} {...props}>
      {label}
    </button>
  );
};

export default MiniButton;
