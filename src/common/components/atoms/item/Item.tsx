import "react-lazy-load-image-component/src/effects/blur.css";

import CN from "classnames";
import { type Dispatch, type FC, type SetStateAction, useState } from "react";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { StyledTooltipItem, VariablesRecipes } from "@/common/components/molecules";
import { getRecipes } from "@/common/loadData.ts";
import type { ItemKey } from "@/localization";
import type { ItemTypeSize, RecipeEntry, VariablesType } from "@/types/types.ts";

import styles from "./Item.module.scss";

export type ItemCommonProps = {
  size: ItemTypeSize;
  indexGlobal: number;
  indexVariables: VariablesType;
  setIndexVariables: Dispatch<SetStateAction<VariablesType>>;
  recipeVariableIndex: number;
  fuel: boolean;
};

export type ItemProps = {
  itemName: string;
  slot: number;
};

const Item: FC<ItemCommonProps & ItemProps> = ({
  size,
  indexGlobal,
  itemName,
  slot,
  indexVariables,
  setIndexVariables,
  recipeVariableIndex,
  fuel,
}) => {
  const { t } = useTranslation();

  const [isOpenVariables, setIsOpenVariables] = useState<boolean>(false);

  const data: RecipeEntry[] = getRecipes();

  const check = Array.isArray(data[indexGlobal])
    ? data[indexGlobal][recipeVariableIndex].ingredients[slot]
    : data[indexGlobal].ingredients[slot];

  const openModalVariables = () => {
    if (check.length > 1) {
      setIsOpenVariables(true);
    }
  };

  const closeModalVariables = () => {
    setIsOpenVariables(false);
  };

  const imageElement = (
    <LazyLoadImage
      src={`/assets/item-assets/${itemName.toUpperCase()}.webp`}
      wrapperClassName={styles["image"]}
      width="100%"
      height="100%"
      effect="blur"
      alt=""
    />
  );

  const modalElement = (
    <>
      <span className={styles["help_variant"]}>!</span>
      <VariablesRecipes
        show={isOpenVariables}
        handleClose={closeModalVariables}
        indexVariables={indexVariables}
        setIndexVariables={setIndexVariables}
        slot={slot}
        dataVariant={check}
        fuels={fuel}
      />
    </>
  );

  return (
    <div
      className={CN(styles["item"], styles[`size_${size}`], {
        [styles["pointer"]]: check.length > 1,
      })}
      onClick={openModalVariables}>
      {itemName === "air" ? (
        imageElement
      ) : (
        <StyledTooltipItem overlay={t(`item.${itemName as ItemKey}`)}>
          <div>{imageElement}</div>
        </StyledTooltipItem>
      )}
      {check.length <= 1 ? null : modalElement}
    </div>
  );
};
export default Item;
