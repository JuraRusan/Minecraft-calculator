import CN from "classnames";
import { type FC } from "react";

import type { ItemTypeSize } from "@/types/types.ts";

import styles from "./Item.module.scss";

type ItemProps = {
  size: ItemTypeSize;
  itemName: string;
  count?: number;
  actions?: () => void;
};

const ItemLite: FC<ItemProps> = ({ size, itemName, count, actions }) => {
  return (
    <div className={CN(styles["item"], styles[`size_${size}`])} onClick={actions}>
      <img
        className={styles["image"]}
        src={`/assets/item-assets/${itemName.toUpperCase()}.webp`}
        alt="none"
        // title={t(`item.${itemName}`)}
      />
      {itemName === "air" ? null : <span className={styles["count"]}>{count}</span>}
    </div>
  );
};
export default ItemLite;
