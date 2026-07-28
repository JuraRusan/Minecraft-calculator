import "react-lazy-load-image-component/src/effects/blur.css";

import CN from "classnames";
import { type FC, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { ScrollContainer } from "react-indiana-drag-scroll";

import { Button, Canvas, Item, ItemLite, Spacer, Typography } from "@/common/components/atoms";
import type { ItemCommonProps } from "@/common/components/atoms/item/Item.tsx";
import { Decomposed, FormatLine, StyledTooltipItem, TotalList } from "@/common/components/molecules";
import { DEFAULT, TYPE_USE_FUELS, VARIABLES } from "@/common/helpers/constants.ts";
import { roundToMultiple } from "@/common/helpers/functions.ts";
import { computeIngredients, type TreeNode } from "@/common/helpers/tree.ts";
import { getFuels, getRecipes, getStacks } from "@/common/loadData.ts";
import type { ItemKey } from "@/localization";
import type { Recipe, RecipeEntry, RecipeType, SlotKey, VariablesType } from "@/types/types.ts";

import styles from "./CraftContainer.module.scss";

type CraftContainerProps = {
  node: TreeNode;
  path: number[];
  onUpdate: (path: number[], fn: (node: TreeNode) => TreeNode) => void;
  lockWight?: boolean;
  isDisabled?: boolean;
};

const getRecipesArray = (entry: RecipeEntry): Recipe[] => {
  return Array.isArray(entry) ? entry : [entry];
};

const CraftContainer: FC<CraftContainerProps> = ({ node, path, onUpdate, lockWight, isDisabled }) => {
  let recipeContentJSX;
  const { t } = useTranslation();

  const current = getRecipesArray(getRecipes()[node.recipeIndex]);

  const decrementRecipeVariable = () => {
    if (node.recipeVariableIndex > 0) {
      onUpdate(path, (n) => ({
        ...n,
        recipeVariableIndex: n.recipeVariableIndex - 1,
        indexVariables: VARIABLES,
      }));
    }
  };

  const incrementRecipeVariable = () => {
    if (node.recipeVariableIndex < current.length - 1) {
      onUpdate(path, (n) => ({
        ...n,
        recipeVariableIndex: n.recipeVariableIndex + 1,
        indexVariables: VARIABLES,
      }));
    }
  };

  const setIndexVariables: ItemCommonProps["setIndexVariables"] = (value) => {
    onUpdate(path, (n) => ({
      ...n,
      indexVariables:
        typeof value === "function" ? (value as (prev: VariablesType) => VariablesType)(n.indexVariables) : value,
    }));
  };

  const recipesActive: RecipeType = useMemo(() => {
    const currentRecipe = getRecipes()[node.recipeIndex];
    const check = Array.isArray(currentRecipe) ? currentRecipe[node.recipeVariableIndex] : currentRecipe;

    if (!check.ingredients) return DEFAULT;

    return {
      "0_slot": check.ingredients[0][node.indexVariables[0]] as ItemKey,
      "1_slot": check.ingredients[1][node.indexVariables[1]] as ItemKey,
      "2_slot": check.ingredients[2][node.indexVariables[2]] as ItemKey,
      "3_slot": check.ingredients[3][node.indexVariables[3]] as ItemKey,
      "4_slot": check.ingredients[4][node.indexVariables[4]] as ItemKey,
      "5_slot": check.ingredients[5][node.indexVariables[5]] as ItemKey,
      "6_slot": check.ingredients[6][node.indexVariables[6]] as ItemKey,
      "7_slot": check.ingredients[7][node.indexVariables[7]] as ItemKey,
      "8_slot": check.ingredients[8][node.indexVariables[8]] as ItemKey,
      output_slot: check.item as ItemKey,
      output_count: check.count,
      crafting_type: check.crafting_type,
      time: check.time ?? 0,
      experience: check.experience ?? 0,
    };
  }, [node.recipeIndex, node.recipeVariableIndex, node.indexVariables]);

  const resultMultiplier = useMemo(
    () => roundToMultiple(node.count, recipesActive.output_count),
    [node.count, recipesActive],
  );

  const calculatedValues = useMemo(() => computeIngredients(node), [node]);

  const isFuels = TYPE_USE_FUELS.includes(recipesActive.crafting_type);

  const commonItemProps: ItemCommonProps = {
    size: "medium",
    indexGlobal: node.recipeIndex,
    indexVariables: node.indexVariables,
    setIndexVariables,
    recipeVariableIndex: node.recipeVariableIndex,
    fuel: isFuels,
  };

  const WorkbenchRender = (
    <>
      {([0, 1, 2, 3, 4, 5, 6, 7, 8] as const).map((number) => {
        const key: SlotKey = `${number}_slot`;

        return <Item key={number} slot={number} itemName={recipesActive[key]} {...commonItemProps} fuel={false} />;
      })}
    </>
  );

  const SmithingRender = (
    <>
      {([0, 1, 2] as const).map((number) => {
        const key: SlotKey = `${number}_slot`;

        return <Item key={number} slot={number} itemName={recipesActive[key]} {...commonItemProps} fuel={false} />;
      })}
    </>
  );

  const StonecuttingRender = <Item slot={0} itemName={recipesActive["0_slot"]} {...commonItemProps} fuel={false} />;

  const FurnaceRender = (
    <div className={styles["furnace_wrapper"]}>
      <Item slot={0} itemName={recipesActive["0_slot"]} {...commonItemProps} fuel={false} />
      <div className={styles["canvas_container"]}>
        <Canvas
          base="/assets/fire_template.png"
          overlay="/assets/fire_overlay.png"
          width={38}
          height={38}
          duration={(getFuels()[recipesActive["1_slot"]] / 20) * 1000}
        />
      </div>
      <Item slot={1} itemName={recipesActive["1_slot"]} {...commonItemProps} />
    </div>
  );

  const CampfireRender = (
    <div className={styles["campfire_wrapper"]}>
      <Item slot={0} itemName={recipesActive["0_slot"]} {...commonItemProps} fuel={false} />
      <div className={styles["canvas_container"]}>
        <Canvas base="/assets/fire_overlay.png" width={38} height={38} />
      </div>
    </div>
  );

  const BrewingRender = (
    <div className={styles["brewing_wrapper"]}>
      <Item slot={0} itemName={recipesActive["0_slot"]} {...commonItemProps} fuel={false} />
      <div className={styles["void"]} />
      <Item slot={1} itemName={recipesActive["1_slot"]} {...commonItemProps} fuel={false} />
      <div className={styles["void"]} />
      <div className={styles["void"]} />
      <div className={styles["void"]} />
      <div className={styles["void"]} />
      <div className={styles["void"]} />
      <Item slot={2} itemName={recipesActive["2_slot"]} {...commonItemProps} fuel={false} />
      <div className={styles["brewing_position"]}>
        <Canvas base="/assets/brewing.png" width={52} height={40} />
      </div>
      <div className={styles["bubbles_animation"]}>
        <Canvas
          base="/assets/bubbles_template.png"
          overlay="/assets/bubbles_overlay.png"
          width={24}
          height={58}
          duration={20 * 1000}
          direction="top-to-bottom"
          mode="appear"
        />
      </div>
      <div className={styles["fuel_position"]}>
        <Canvas base="/assets/fuel_length.png" width={18 * 2} height={4 * 2} />
      </div>
    </div>
  );

  if (TYPE_USE_FUELS.includes(recipesActive.crafting_type)) {
    recipeContentJSX = FurnaceRender;
  } else if (recipesActive.crafting_type === "smithing_transform") {
    recipeContentJSX = SmithingRender;
  } else if (recipesActive.crafting_type === "stonecutting") {
    recipeContentJSX = StonecuttingRender;
  } else if (recipesActive.crafting_type === "campfire_cooking") {
    recipeContentJSX = CampfireRender;
  } else if (recipesActive.crafting_type === "brewing") {
    recipeContentJSX = BrewingRender;
  } else {
    recipeContentJSX = WorkbenchRender;
  }

  const renderContent = (
    <div
      className={CN(styles["craft_container"], {
        [styles["lock_wight"]]: lockWight,
        [styles["disabled_view"]]: isDisabled,
      })}>
      {!isDisabled ? null : <div className={styles["disabled_overlay"]}></div>}
      <div className={CN(styles["required_count"], { [styles["opacity_view"]]: isDisabled })}>
        <FormatLine number={resultMultiplier} stack={getStacks()[recipesActive.output_slot]} />
      </div>
      <Spacer height={6} />
      <div className={CN(styles["crafter"], { [styles["opacity_view"]]: isDisabled })}>
        {recipesActive.output_slot === "air" ? null : (
          <div className={styles["workbench"]}>
            <Typography
              textAlign="center"
              fontSize={16}
              fontWeight={700}
              lineHeight={32}
              height={32}
              className={styles["rotate"]}>
              {t(`app.general.category.visible.${recipesActive.crafting_type}`)}
            </Typography>
          </div>
        )}
        <div className={styles["required"]}>{recipeContentJSX}</div>
        <div className={styles["separator"]}>
          {recipesActive.output_slot === "air" ? (
            <Canvas base="/assets/arrow.png" width={22 * 2} height={15 * 2} />
          ) : (
            <StyledTooltipItem template={recipesActive.crafting_type}>
              <div className={styles["info_container"]}>
                <Canvas base="/assets/arrow.png" width={22 * 2} height={15 * 2} />
                <Typography
                  textAlign="center"
                  fontSize={16}
                  fontWeight={700}
                  lineHeight={32}
                  height={32}
                  className={styles["info_help"]}>
                  ?
                </Typography>
              </div>
            </StyledTooltipItem>
          )}
        </div>
        <div className={styles["output"]}>
          {recipesActive.output_slot === "air" ? null : (
            <Typography fontSize={13} fontWeight={400} className={styles["name_lang"]} textAlign="center">
              {t(`item.${recipesActive.output_slot}`)}
            </Typography>
          )}
          <ItemLite size="large" itemName={recipesActive.output_slot} count={recipesActive.output_count} />
          {!Array.isArray(getRecipes()[node.recipeIndex]) ? null : (
            <div className={styles["action_wrapper"]}>
              <Button label="&#129144;" onClick={decrementRecipeVariable} disabled={node.recipeVariableIndex === 0} />
              <Typography
                fontSize={12}
                height={28}
                lineHeight={28}
                fontWeight={700}
                textAlign="center"
                className={styles["variant_count"]}>
                {node.recipeVariableIndex + 1} / {current.length}
              </Typography>
              <Button
                label="&#129146;"
                onClick={incrementRecipeVariable}
                disabled={node.recipeVariableIndex === current.length - 1}
              />
            </div>
          )}
        </div>
      </div>
      <Spacer height={6} />
      <div className={CN(styles["result_container"], { [styles["opacity_view"]]: isDisabled })}>
        <TotalList data={calculatedValues} experience={recipesActive.experience} multiplier={resultMultiplier} />
      </div>
      <Decomposed node={node} path={path} onUpdate={onUpdate} />
    </div>
  );

  return (
    <>{lockWight ? <ScrollContainer className={styles["scroll"]}>{renderContent}</ScrollContainer> : renderContent}</>
  );
};

export default CraftContainer;
