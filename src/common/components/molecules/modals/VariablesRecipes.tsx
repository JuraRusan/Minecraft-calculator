import "react-lazy-load-image-component/src/effects/blur.css";

import CN from "classnames";
import { debounce } from "lodash-es";
import * as React from "react";
import { type Dispatch, type FC, type SetStateAction, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { Input, Modal, Typography } from "@/common/components/atoms";
import type { TypographyProps } from "@/common/components/atoms/typography/Typography.tsx";
import { StyledTooltipItem } from "@/common/components/molecules";
import SizeList from "@/common/components/molecules/modals/SizeList.tsx";
import { getFuels } from "@/common/loadData.ts";
import type { ItemKey } from "@/localization";
import type { VariablesType } from "@/types/types.ts";

import styles from "./Modals.module.scss";

type VariablesRecipesProps = {
  show: boolean;
  handleClose: () => void;
  indexVariables: VariablesType;
  setIndexVariables: Dispatch<SetStateAction<VariablesType>>;
  slot: number;
  dataVariant: string[];
  fuels: boolean;
};

const VariablesRecipes: FC<VariablesRecipesProps> = ({
  show,
  handleClose,
  indexVariables,
  setIndexVariables,
  slot,
  dataVariant,
  fuels,
}) => {
  const { t } = useTranslation();
  const [search, setSearch] = useState<string>("");

  const handleItemClick = (name: string) => {
    const originalIndex = dataVariant.indexOf(name);
    const updatedVariables: VariablesType = [...indexVariables];

    updatedVariables[slot] = originalIndex;
    setIndexVariables(updatedVariables);

    handleClose();
  };

  const debouncedSetSearch = useMemo(() => {
    return debounce((value: string) => {
      setSearch(value.toLowerCase());
    }, 350);
  }, []);

  const filteredVariants = useMemo(() => {
    if (!search) return dataVariant;

    return dataVariant.filter((name) =>
      t(`item.${name as ItemKey}`)
        .toLowerCase()
        .includes(search),
    );
  }, [dataVariant, search, t]);

  useEffect(() => {
    return () => {
      debouncedSetSearch.cancel();
    };
  }, [debouncedSetSearch]);

  const renderTooltip = (name: string) => {
    const props: TypographyProps = {
      fontSize: 12,
      height: 14,
      lineHeight: 14,
      fontWeight: 400,
    };

    if (fuels) {
      return (
        <div className={styles["burn_container"]}>
          <Typography {...props}>{t(`item.${name as ItemKey}`)} [</Typography>
          <Typography {...props} className={styles["fuel"]}>
            {t(`app.general.burn_time`, { ticks: getFuels()[name] })}
          </Typography>
          <Typography {...props}>]</Typography>
        </div>
      );
    }

    return (
      <Typography fontSize={12} height={14} lineHeight={14} fontWeight={400}>
        {t(`item.${name as ItemKey}`)}
      </Typography>
    );
  };

  return (
    <Modal show={show} handleClose={handleClose}>
      <div
        className={CN(styles["wrapper_content"], styles["variables"], { [styles["fuels"]]: fuels })}
        onClick={(e) => e.stopPropagation()}>
        <Input
          autoFocus={true}
          placeholder={fuels ? t(`app.general.modal.search_fuel`) : t(`app.general.modal.search_alternative`)}
          className={styles["search"]}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => debouncedSetSearch(e.target.value)}
        />
        <SizeList
          items={filteredVariants}
          getKey={(name) => name}
          noResultsTitle={fuels ? t(`app.general.modal.no_result_fuel`) : t(`app.general.modal.no_result_alternative`)}
          noResultsHint={t(`app.general.modal.no_result_hint`)}
          renderItem={(name) => (
            <StyledTooltipItem overlay={renderTooltip(name)}>
              <div className={styles["image"]} onClick={() => handleItemClick(name)}>
                <LazyLoadImage
                  src={`/assets/item-assets/${name.toUpperCase()}.webp`}
                  width="100%"
                  height="100%"
                  effect="blur"
                  alt=""
                />
              </div>
            </StyledTooltipItem>
          )}
        />
      </div>
    </Modal>
  );
};

export default VariablesRecipes;
