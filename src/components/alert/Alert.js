import React from 'react';
import classNames from "classnames";

import styles from "./Alert.module.scss";

const Alert = ({message}) => {
  return (
    <div className={classNames(styles["wrapper_alert"])}>
      <p className={classNames(styles["message"])}>{message}</p>
    </div>
  );
};

export default Alert;
