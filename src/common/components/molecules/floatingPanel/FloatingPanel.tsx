import CN from "classnames";
import * as React from "react";
import { type FC, useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { Typography } from "@/common/components/atoms";
import { Collapse, DragArrow, Expand } from "@/common/components/atoms/icon/Icons.ts";
import { StyledTooltipItem, TotalList } from "@/common/components/molecules";
import { DEFAULT_FLOATING_POSITION } from "@/common/helpers/constants.ts";

import styles from "./FloatingPanel.module.scss";

type FloatingPanelProps = {
  data: Record<string, number>;
  experience?: number;
};

const FloatingPanel: FC<FloatingPanelProps> = ({ data, experience }) => {
  const { t } = useTranslation();

  const dragging = useRef<boolean>(false);
  const offset = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const frame = useRef<number | null>(null);
  const nextPosition = useRef<{ x: number; y: number }>(DEFAULT_FLOATING_POSITION);

  const [position, setPosition] = useState<{ x: number; y: number }>(DEFAULT_FLOATING_POSITION);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [showContent, setShowContent] = useState<boolean>(true);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      dragging.current = true;

      offset.current = {
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      };

      setIsDragging(true);
    },
    [position.x, position.y],
  );

  const handleToggleContent = useCallback(() => {
    setShowContent((prev) => !prev);
  }, []);

  const handleResetPosition = useCallback(() => {
    setPosition(DEFAULT_FLOATING_POSITION);
    nextPosition.current = DEFAULT_FLOATING_POSITION;
  }, []);

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!dragging.current) return;

      nextPosition.current = {
        x: e.clientX - offset.current.x,
        y: e.clientY - offset.current.y,
      };

      if (frame.current) return;

      frame.current = requestAnimationFrame(() => {
        setPosition(nextPosition.current);
        frame.current = null;
      });
    };

    const handleMouseUp = () => {
      dragging.current = false;
      setIsDragging(false);

      if (frame.current) {
        cancelAnimationFrame(frame.current);
        frame.current = null;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);

      if (frame.current) {
        cancelAnimationFrame(frame.current);
        frame.current = null;
      }
    };
  }, [isDragging]);

  return (
    <div className={styles["container"]} style={{ top: position.y, left: position.x }}>
      <div onMouseDown={handleMouseDown} onDoubleClick={handleResetPosition} className={styles["header"]}>
        <Typography fontSize={14} height={28} lineHeight={28} fontWeight={700} className={styles["title"]}>
          {t(`app.general.floating_panel.total_header`)}:
        </Typography>
        <StyledTooltipItem overlay={t("app.general.floating_panel.drag_panel")}>
          <button className={CN(styles["styled"], styles["move"])} disabled>
            <DragArrow width="20" height="20" />
          </button>
        </StyledTooltipItem>
        <StyledTooltipItem
          overlay={showContent ? t("app.general.floating_panel.collapse") : t("app.general.floating_panel.expand")}>
          <button className={styles["styled"]} onClick={handleToggleContent}>
            {showContent ? <Collapse width="20" height="20" /> : <Expand width="20" height="20" />}
          </button>
        </StyledTooltipItem>
      </div>
      {!showContent ? null : (
        <div className={styles["body"]}>
          <TotalList data={data} experience={experience} />
        </div>
      )}
    </div>
  );
};

export default FloatingPanel;
