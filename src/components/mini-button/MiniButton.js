import React from "react";

import styles from "./MiniButton.module.scss";

const MiniButton = ({ label, ...props }) => {
  return (
    <button className={styles["button"]} {...props}>
      {label}
    </button>
  );
};

export default MiniButton;
