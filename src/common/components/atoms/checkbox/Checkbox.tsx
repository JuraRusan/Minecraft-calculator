import * as React from "react";
import { type FC, useState } from "react";

import styles from "./Checkbox.module.scss";

type CheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
};

const Checkbox: FC<CheckboxProps> = ({ checked, onChange, ...props }) => {
  const [uniqueCheckboxId] = useState(() => `cb_${Math.random().toString(36).substring(2, 9)}`);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <>
      <input
        className={styles["input_checkbox"]}
        type="checkbox"
        id={uniqueCheckboxId}
        onChange={handleChange}
        checked={checked}
        {...props}
      />
      <label htmlFor={uniqueCheckboxId} className={styles["custom_checkbox_label"]} />
    </>
  );
};

export default Checkbox;
