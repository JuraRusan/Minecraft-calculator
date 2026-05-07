import CN from "classnames";
import { type ComponentPropsWithRef, type FC } from "react";

import styles from "./Input.module.scss";

const Input: FC<ComponentPropsWithRef<"input">> = ({ ref, className, ...props }) => {
  return <input ref={ref} className={CN(styles["input"], className)} {...props} />;
};

export default Input;
