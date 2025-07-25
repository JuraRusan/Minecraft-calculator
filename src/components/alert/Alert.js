import React from "react";

import styles from "./Alert.module.scss";

const Alert = ({ message }) => {
  return (
    <div className={styles["wrapper_alert"]}>
      <p className={styles["message"]}>{message}</p>
    </div>
  );
};

export default Alert;
