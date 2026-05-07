import { type FC, type ReactNode } from "react";

import styles from "./TransLink.module.scss";

type TransLinkProps = {
  href: string;
  children?: ReactNode;
};

const TransLink: FC<TransLinkProps> = ({ href, children }) => {
  return (
    <a className={styles["link"]} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default TransLink;
