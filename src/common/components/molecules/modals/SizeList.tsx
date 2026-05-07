import { isNotEmpty } from "ramda";
import { Fragment, type Key, type ReactNode } from "react";

import { Spacer, Typography } from "@/common/components/atoms";

import styles from "./Modals.module.scss";

type SizeListProps<T> = {
  items: T[];
  getKey: (item: T, index: number) => Key;
  renderItem: (item: T, index: number) => ReactNode;
  noResultsTitle: ReactNode;
  noResultsHint: ReactNode;
};

const SizeList = <T,>({ items, getKey, renderItem, noResultsTitle, noResultsHint }: SizeListProps<T>) => {
  if (!isNotEmpty(items)) {
    return (
      <div className={styles["no_results"]}>
        <Typography textAlign="center" fontSize={16} fontWeight={700}>
          {noResultsTitle}
        </Typography>
        <Spacer height={8} />
        <Typography textAlign="center" fontSize={14} fontWeight={500}>
          {noResultsHint}
        </Typography>
      </div>
    );
  }

  return (
    <div className={styles["items"]}>
      {items.map((item, index) => (
        <Fragment key={getKey(item, index)}>{renderItem(item, index)}</Fragment>
      ))}
    </div>
  );
};

export default SizeList;
