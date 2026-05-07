import CN from "classnames";
import type { ButtonHTMLAttributes, FC } from "react";

import styles from "./Button.module.scss";

export type ButtonProps = {
  label: string;
  active?: boolean;
};

const Button: FC<ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>> = ({ label, active, className, ...props }) => {
  return (
    <button className={CN(styles["button"], { [styles["active"]]: active }, className)} {...props}>
      {label}
    </button>
  );
};

export default Button;
