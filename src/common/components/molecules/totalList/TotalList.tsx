import { isNotEmpty } from "ramda";
import type { FC } from "react";
import { useTranslation } from "react-i18next";

import { Spacer, Typography } from "@/common/components/atoms";
import type { TypographyProps } from "@/common/components/atoms/typography/Typography.tsx";
import { FormatLine } from "@/common/components/molecules";
import { formatNumber } from "@/common/helpers/functions.ts";
import { getStacks } from "@/common/loadData.ts";
import type { ItemKey } from "@/localization";

import styles from "./TotalList.module.scss";

type TotalListProps = {
  data: Record<string, number>;
  experience?: number;
  multiplier?: number;
};

const TotalList: FC<TotalListProps> = ({ data, experience, multiplier = 1 }) => {
  const { t } = useTranslation();

  const props: TypographyProps = {
    fontSize: 13,
    height: 22,
    lineHeight: 22,
    fontWeight: 700,
  };

  if (!isNotEmpty(data) && !experience) {
    return (
      <div className={styles["list"]}>
        <div className={styles["result"]}>
          <Typography {...props}>{t(`app.general.no_data_for_calculation`)}</Typography>
        </div>
      </div>
    );
  }

  return (
    <div className={styles["list"]}>
      {Object.keys(data).map((key, i) => (
        <div key={i} className={styles["result"]}>
          <img className={styles["image"]} src={`/assets/item-assets/${key.toUpperCase()}.webp`} alt="" />
          <Typography {...props}>{t(`item.${key as ItemKey}`)}:</Typography>
          <Spacer width={4} />
          <FormatLine number={data[key]} stack={getStacks()[key]} />
        </div>
      ))}
      {!experience ? null : <div className={styles["separator"]}></div>}
      {!experience ? null : (
        <div className={styles["result"]}>
          <img className={styles["image"]} src="/assets/experience_orb.png" alt="" />
          <Typography {...props}>{t(`app.general.experience`)}:</Typography>
          <Spacer width={4} />
          <Typography fontSize={13} height={22} lineHeight={22} fontWeight={400}>
            {formatNumber(Number((multiplier * experience).toFixed(1)))}
          </Typography>
        </div>
      )}
    </div>
  );
};

export default TotalList;
