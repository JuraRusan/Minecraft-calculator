import "rc-tooltip/assets/bootstrap.css";

import { isNil } from "ramda";
import Tooltip from "rc-tooltip";
import { type FC, type ReactElement, type ReactNode } from "react";
import { Trans } from "react-i18next";

import { TransLink, Typography } from "@/common/components/atoms";
import type { CraftingType } from "@/types/types.ts";

import styles from "./StyledTooltipItem.module.scss";

type StyledTooltipItemProps = {
  children: ReactElement;
  template?: CraftingType;
  overlay?: string | ReactNode;
};

const TypographyWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Typography fontSize={12} height={14} lineHeight={14} fontWeight={400}>
      {children}
    </Typography>
  );
};

const StyledTooltipItem: FC<StyledTooltipItemProps> = ({ children, template, overlay }) => {
  const renderTemplate = () => {
    switch (template) {
      case "crafting_shaped": {
        return (
          <TypographyWrapper>
            <Trans
              i18nKey="app.general.category.crafting_shaped_description"
              components={[
                <TransLink href="https://minecraft.wiki/w/Crafting_Table" />,
                <TransLink href="https://minecraft.wiki/w/Inventory" />,
                <TransLink href="https://minecraft.wiki/w/Crafter" />,
              ]}
            />
          </TypographyWrapper>
        );
      }
      case "crafting_shapeless": {
        return (
          <TypographyWrapper>
            <Trans
              i18nKey="app.general.category.crafting_shapeless_description"
              components={[
                <TransLink href="https://minecraft.wiki/w/Crafting_Table" />,
                <TransLink href="https://minecraft.wiki/w/Inventory" />,
                <TransLink href="https://minecraft.wiki/w/Crafter" />,
              ]}
            />
          </TypographyWrapper>
        );
      }
      case "crafting_transmute": {
        return (
          <TypographyWrapper>
            <Trans
              i18nKey="app.general.category.crafting_transmute_description"
              components={[
                <TransLink href="https://minecraft.wiki/w/Crafting_Table" />,
                <TransLink href="https://minecraft.wiki/w/Inventory" />,
                <TransLink href="https://minecraft.wiki/w/Crafter" />,
              ]}
            />
          </TypographyWrapper>
        );
      }
      case "stonecutting": {
        return (
          <TypographyWrapper>
            <Trans
              i18nKey="app.general.category.stonecutting_description"
              components={[<TransLink href="https://minecraft.wiki/w/Stonecutter" />]}
            />
          </TypographyWrapper>
        );
      }
      case "smelting": {
        return (
          <TypographyWrapper>
            <Trans
              i18nKey="app.general.category.smelting_description"
              components={[<TransLink href="https://minecraft.wiki/w/Furnace" />]}
            />
          </TypographyWrapper>
        );
      }
      case "blasting": {
        return (
          <TypographyWrapper>
            <Trans
              i18nKey="app.general.category.blasting_description"
              components={[<TransLink href="https://minecraft.wiki/w/Blast_Furnace" />]}
            />
          </TypographyWrapper>
        );
      }
      case "smoking": {
        return (
          <TypographyWrapper>
            <Trans
              i18nKey="app.general.category.smoking_description"
              components={[<TransLink href="https://minecraft.wiki/w/Smoker" />]}
            />
          </TypographyWrapper>
        );
      }
      case "campfire_cooking": {
        return (
          <TypographyWrapper>
            <Trans
              i18nKey="app.general.category.campfire_cooking_description"
              components={[<TransLink href="https://minecraft.wiki/w/Campfire" />]}
            />
          </TypographyWrapper>
        );
      }
      case "smithing_transform": {
        return (
          <TypographyWrapper>
            <Trans
              i18nKey="app.general.category.smithing_transform_description"
              components={[<TransLink href="https://minecraft.wiki/w/Smithing_Table" />]}
            />
          </TypographyWrapper>
        );
      }
    }
  };

  const renderOverlay = () => {
    if (typeof overlay === "string") {
      return <TypographyWrapper>{overlay}</TypographyWrapper>;
    }

    if (!isNil(template)) {
      return renderTemplate();
    }

    return overlay;
  };

  return (
    <Tooltip
      classNames={{
        root: styles["root"],
        body: styles["body"],
      }}
      placement="bottom"
      mouseEnterDelay={1}
      overlay={renderOverlay()}>
      {children}
    </Tooltip>
  );
};

export default StyledTooltipItem;
