import React, {useEffect, useRef} from 'react';
import classNames from "classnames";
import {debounce} from "lodash";

import styles from "./InputCountRequired.module.scss";

const InputCountRequired = ({indexGlobal, setCount, setShowError, maxCount}) => {

  const inputRef = useRef('');

  const handleChangeCount = (e) => {
    const value = e.target.value;

    if (/^[0-9]*$/.test(value)) {
      const numberValue = parseInt(value, 10);
      if (numberValue >= 0 && numberValue <= maxCount) {
        setCount(value);
        setShowError(false)
      } else {
        setShowError(true)
      }
    } else {
      setShowError(true)
    }
  };

  useEffect(() => {
    setCount(1)
    inputRef.current.value = ''
  }, [indexGlobal, setCount])

  return (
    <input
      ref={inputRef}
      name="count"
      placeholder="required"
      className={classNames(styles["count_input"])}
      onChange={debounce((e) => {
        handleChangeCount(e)
      }, 350)}
    />
  );
};

export default InputCountRequired;
