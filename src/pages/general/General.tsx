import CN from "classnames";
import { Parser } from "expr-eval";
import { debounce } from "lodash-es";
import { isNil } from "ramda";
import * as React from "react";
import { useCallback, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

import { Button, Input, Typography } from "@/common/components/atoms";
import { AllRecipes, FloatingPanel, Settings, StyledTooltipItem, Toaster } from "@/common/components/molecules";
import { CraftContainer } from "@/common/components/organisms";
import { DEFAULT_ROOT, MAX_CALCULATIONS, VERSION } from "@/common/helpers/constants.ts";
import { formatNumber } from "@/common/helpers/functions.ts";
import { buildNode, computeFrontier, reconcileSubtree, type TreeNode, updateAtPath } from "@/common/helpers/tree.ts";
import { getRecipes } from "@/common/loadData.ts";

import styles from "./General.module.scss";

const General = () => {
  const { t } = useTranslation();

  const inputRef = useRef<HTMLInputElement | null>(null);

  const [count, setCount] = useState<number>(1);
  const [root, setRoot] = useState<TreeNode | null>(DEFAULT_ROOT);

  const [modalIsOpenRecipes, setIsOpenRecipes] = useState<boolean>(false);
  const [modalIsOpenSettings, setIsOpenSettings] = useState<boolean>(false);

  const indexGlobal = root?.recipeIndex ?? 0;

  const handleUpdateNode = useCallback((path: number[], fn: (node: TreeNode) => TreeNode) => {
    setRoot((prev) => (prev ? updateAtPath(prev, path, fn) : prev));
  }, []);

  const setIndexGlobal = useCallback(
    (index: number) => {
      setRoot(buildNode(index, count));
    },
    [count],
  );

  const totals = useMemo(() => computeFrontier(root), [root]);

  /* --- Functions --- */
  const resetCount = () => {
    setCount(1);

    if (inputRef.current) {
      inputRef.current.value = "";
    }

    setRoot(DEFAULT_ROOT);
  };

  const resetIndex = () => {
    setRoot(null);
    resetCount();
  };

  const decrementIndexGlobal = () => {
    if (indexGlobal > 1) {
      setRoot(buildNode(indexGlobal - 1, count));
    }
  };

  const incrementIndexGlobal = () => {
    if (indexGlobal < getRecipes().length - 1) {
      setRoot(buildNode(indexGlobal + 1, count));
    }
  };

  const parser = new Parser({
    operators: {
      add: true,
      subtract: true,
      multiply: true,
      divide: true,
      power: false,
      remainder: false,
      factorial: false,
      logical: false,
      comparison: false,
      in: false,
      assignment: false,
    },
  });

  const handleChangeCount = (value: string) => {
    if (!/^[0-9+\-*/().\s]*$/.test(value)) {
      toast(<Toaster message={t(`app.general.input.error_invalid`)} />);
      return;
    }

    let result;

    try {
      result = parser.evaluate(value);
    } catch {
      toast(<Toaster message={t(`app.general.input.error_invalid`)} />);
      return;
    }

    if (typeof result !== "number" || isNaN(result)) {
      toast(<Toaster message={t(`app.general.input.error_invalid`)} />);
      return;
    }

    if (result < 0 || result > MAX_CALCULATIONS) {
      return toast(
        <Toaster
          message={t(`app.general.input.error_count`, {
            min: 0,
            max: formatNumber(MAX_CALCULATIONS),
          })}
        />,
      );
    }

    const nextCount = Math.floor(result);
    setCount(nextCount);
    setRoot((prev) => (prev ? reconcileSubtree({ ...prev, count: nextCount }) : prev));
  };

  /* --- Modals --- */
  const openModalRecipes = () => {
    setIsOpenRecipes(true);
  };

  const closeModalRecipes = () => {
    setIsOpenRecipes(false);
  };

  const openModalSettings = () => {
    setIsOpenSettings(true);
  };

  const closeModalSettings = () => {
    setIsOpenSettings(false);
  };

  const tooltipContent = (
    <div className={styles["help_tooltip"]}>
      <Typography fontSize={13} lineHeight={15} height={15}>
        {t(`app.general.tooltip.line1`)}
      </Typography>
      <Typography fontSize={13} lineHeight={15} height={15}>
        {t(`app.general.tooltip.line2`)}
      </Typography>
      <Typography fontSize={13} lineHeight={15} height={15}>
        {t(`app.general.tooltip.line3`, { number: formatNumber(MAX_CALCULATIONS) })}
      </Typography>
    </div>
  );

  return (
    <div className={styles["calculator"]}>
      <Typography fontSize={18} fontWeight={700} lineHeight={28} height={28} className={styles["versions"]}>
        {t(`app.general.support_version`, { ver: VERSION })}
      </Typography>
      <div className={styles["container_row_buttons"]}>
        <Button
          className={CN(styles["identical_width"], styles["spacing_buttons"])}
          onClick={resetIndex}
          label={t(`app.general.buttons.reset`)}
        />
        <Button
          className={styles["spacing_buttons"]}
          onClick={decrementIndexGlobal}
          label="&#129144;"
          disabled={indexGlobal < 2}
        />
        <Button
          className={CN(styles["identical_width"], styles["spacing_buttons"])}
          onClick={openModalRecipes}
          label={t(`app.general.buttons.book`)}
          active={modalIsOpenRecipes}
        />
        <Button
          className={styles["spacing_buttons"]}
          onClick={incrementIndexGlobal}
          label="&#129146;"
          disabled={indexGlobal === getRecipes().length - 1}
        />
        <Button
          className={CN(styles["identical_width"], styles["spacing_buttons"])}
          onClick={openModalSettings}
          label={t(`app.general.buttons.settings`)}
          active={modalIsOpenSettings}
        />
      </div>
      <div className={styles["required_input_count"]}>
        <Input
          ref={inputRef}
          placeholder={t(`app.general.input.required_count`)}
          onChange={debounce((e: React.ChangeEvent<HTMLInputElement>) => handleChangeCount(e.target.value), 1000)}
        />
        <StyledTooltipItem overlay={tooltipContent}>
          <Typography
            textAlign="center"
            fontSize={18}
            fontWeight={700}
            lineHeight={36}
            height={36}
            className={styles["help"]}>
            ?
          </Typography>
        </StyledTooltipItem>
      </div>
      {isNil(root) ? null : (
        <CraftContainer lockWight key={root.recipeIndex} node={root} path={[]} onUpdate={handleUpdateNode} />
      )}
      <AllRecipes show={modalIsOpenRecipes} handleClose={closeModalRecipes} setIndexGlobal={setIndexGlobal} />
      <Settings show={modalIsOpenSettings} handleClose={closeModalSettings} />
      <FloatingPanel data={totals.ingredients} experience={totals.experience} />
    </div>
  );
};

export default General;
