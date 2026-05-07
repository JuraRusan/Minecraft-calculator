import "react-lazy-load-image-component/src/effects/blur.css";

import { debounce } from "lodash-es";
import * as React from "react";
import { type FC, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { Button, Input, Modal } from "@/common/components/atoms";
import { StyledTooltipItem } from "@/common/components/molecules";
import SizeList from "@/common/components/molecules/modals/SizeList.tsx";
import { CRAFTING_TYPE } from "@/common/helpers/constants.ts";
import { getRecipes } from "@/common/loadData.ts";
import type { ItemKey } from "@/localization";
import type { CraftingType } from "@/types/types.ts";

import styles from "./Modals.module.scss";

type AllRecipesProps = {
  show: boolean;
  handleClose: () => void;
  setIndexGlobal: (index: number) => void;
};

const AllRecipes: FC<AllRecipesProps> = ({ show, handleClose, setIndexGlobal }) => {
  const { t } = useTranslation();
  const [search, setSearch] = useState<string>("");

  const [activeType, setActiveType] = useState<CraftingType | "all">("all");

  const getFilteredRecipes = useMemo(() => {
    const allItems = getRecipes()
      .slice(1)
      .map((el, idx) => {
        let localIndex = 0;
        const check = Array.isArray(el);

        if (check) {
          el.find((value, i) => {
            if (value.crafting_type === activeType) localIndex = i;
          });
        }

        const recipe = check ? el[localIndex] : el;

        return {
          name: recipe.item,
          index: idx + 1,
          type: recipe.crafting_type,
        };
      })
      .filter((el) => {
        if (activeType !== "all" && el.type !== activeType) {
          return false;
        }

        return t(`item.${el.name as ItemKey}`)
          .toLowerCase()
          .includes(search);
      });

    return allItems.sort((a, b) =>
      t(`item.${a.name as ItemKey}`)
        .toLowerCase()
        .localeCompare(t(`item.${b.name as ItemKey}`).toLowerCase()),
    );
  }, [activeType, search, t]);

  const handleSetIndex = (index: number) => {
    handleClose();
    setIndexGlobal(index);
    setSearch("");
  };

  const handleCloseBulk = () => {
    setSearch("");
    handleClose();
  };

  return (
    <Modal show={show} handleClose={handleCloseBulk}>
      <div className={styles["wrapper_content"]}>
        <div className={styles["filters"]}>
          <StyledTooltipItem overlay={t(`app.general.category.all_description`)}>
            <Button
              className={styles["position"]}
              onClick={() => setActiveType("all")}
              label={t(`app.general.category.all`)}
              active={activeType === "all"}
            />
          </StyledTooltipItem>
          {CRAFTING_TYPE.map((type, i) => (
            <StyledTooltipItem key={i} template={type}>
              <Button
                className={styles["position"]}
                onClick={() => setActiveType(type)}
                label={t(`app.general.category.${type}`)}
                active={activeType === type}
              />
            </StyledTooltipItem>
          ))}
        </div>
        <Input
          autoFocus={true}
          placeholder={t(`app.general.modal.search_recipe`)}
          className={styles["search"]}
          onChange={debounce((e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value.toLowerCase()), 350)}
        />
        <SizeList
          items={getFilteredRecipes}
          getKey={(el) => el.index}
          noResultsTitle={t(`app.general.modal.no_result_recipe`)}
          noResultsHint={t(`app.general.modal.no_result_hint`)}
          renderItem={(el) => (
            <StyledTooltipItem overlay={t(`item.${el.name as ItemKey}`)}>
              <div className={styles["image"]} onClick={() => handleSetIndex(el.index)}>
                <LazyLoadImage
                  src={`/assets/item-assets/${el.name.toUpperCase()}.webp`}
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

export default AllRecipes;
