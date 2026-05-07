import { type FC } from "react";
import { useTranslation } from "react-i18next";

import { Spacer, Typography } from "@/common/components/atoms";
import { COUNT_SLOT_SHULKER, COUNT_STACK_64 } from "@/common/helpers/constants.ts";
import { formatNumber } from "@/common/helpers/functions.ts";

import styles from "./FormatLine.module.scss";

type FormatLineProps = {
  number: number;
  stack: number;
};

const FormatLine: FC<FormatLineProps> = ({ number, stack = COUNT_STACK_64 }) => {
  const { t } = useTranslation();

  const activeStack = COUNT_SLOT_SHULKER * stack;

  const isShulker = Math.trunc(number / activeStack);
  const isStack = Math.trunc((number % activeStack) / stack);
  const isItem = Math.trunc((number % activeStack) % stack);

  const generated = (): string => {
    let text = "";

    if (isShulker !== 0) {
      text += formatNumber(isShulker) + " × " + activeStack;

      if (number % activeStack !== 0 && (isStack > 0 || isItem > 0)) text += " + ";
    }

    if (isStack !== 0) {
      if (stack === 1) {
        text += formatNumber(isStack);
      } else {
        text += formatNumber(isStack) + " × " + stack;
      }

      if (isItem > 0) text += " + ";
    }

    if (isItem !== 0) text += isItem;

    text += " " + t(`app.general.items`);

    return text;
  };

  const text = generated();

  return (
    <div className={styles["calculated"]}>
      <Typography fontSize={13} height={22} lineHeight={22} fontWeight={400}>
        {formatNumber(number) + " ="}
      </Typography>
      {isShulker !== 0 ? (
        <img className={styles["image"]} src={"/assets/item-assets/SHULKER_BOX.webp"} alt="none" />
      ) : (
        <Spacer width={4} />
      )}
      <Typography fontSize={13} height={22} lineHeight={22} fontWeight={400}>
        {text}
      </Typography>
    </div>
  );
};

export default FormatLine;
