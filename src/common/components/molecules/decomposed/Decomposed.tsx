import CN from "classnames";
import { type FC } from "react";
import { useTranslation } from "react-i18next";

import { Checkbox } from "@/common/components/atoms";
import { TreeStructure } from "@/common/components/atoms/icon/Icons.ts";
import { StyledTooltipItem } from "@/common/components/molecules";
import { CraftContainer } from "@/common/components/organisms";
import { computeIngredients, findRecipeIndex, type TreeNode } from "@/common/helpers/tree.ts";

import styles from "./decomposed.module.scss";

type DecomposedProps = {
  node: TreeNode;
  path: number[];
  onUpdate: (path: number[], fn: (node: TreeNode) => TreeNode) => void;
};

const hasAnyDecomposableIngredient = (node: TreeNode): boolean => {
  const ingredients = computeIngredients(node);
  for (const itemKey in ingredients) {
    if (findRecipeIndex(itemKey) !== null) return true;
  }

  return false;
};

const Decomposed: FC<DecomposedProps> = ({ node, path, onUpdate }) => {
  const { t } = useTranslation();

  const decomposable = node.expanded ? (node.children?.length ?? 0) > 0 : hasAnyDecomposableIngredient(node);

  const handleToggle = (next: boolean) => {
    onUpdate(path, (n) => {
      if (next) {
        return { ...n, expanded: true };
      }

      return { ...n, expanded: false, children: null };
    });
  };

  if (!decomposable) return null;

  return (
    <>
      <Checkbox checked={node.expanded} onChange={handleToggle} />
      {!node.expanded || !node.children ? null : (
        <div className={styles["decomposed"]}>
          {node.children.map((child, i) => {
            const childPath = [...path, i];

            const handleToggleDisabled = () => {
              onUpdate(childPath, (n) => ({ ...n, disabled: !n.disabled }));
            };

            return (
              <div className={styles["keys"]} key={`${child.recipeIndex}-${i}`}>
                <CraftContainer node={child} path={childPath} onUpdate={onUpdate} isDisabled={child.disabled} />

                <StyledTooltipItem
                  overlay={child.disabled ? t(`app.general.decomposed.enable`) : t(`app.general.decomposed.disable`)}>
                  <div className={styles["activator"]}>
                    <button
                      onClick={handleToggleDisabled}
                      className={CN(styles["use_tree"], { [styles["active"]]: child.disabled })}>
                      <TreeStructure width="22" height="22" />
                    </button>
                  </div>
                </StyledTooltipItem>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Decomposed;
