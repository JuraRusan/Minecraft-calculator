import React from 'react';
import classNames from "classnames";

import styles from "./MiniButton.module.scss";

const MiniButton = ({onClick, disabled, label}) => {
  return (
    <button className={classNames(styles["button"])} onClick={onClick} disabled={disabled}>{label}</button>
  );
};

export default MiniButton;
