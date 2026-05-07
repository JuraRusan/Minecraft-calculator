import CN from "classnames";
import type { FC, HTMLProps, ReactNode } from "react";

import styles from "./Typography.module.scss";

export type TypographyFontSizes =
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 31
  | 32;

export type TypographyWeights = 400 | 500 | 600 | 700;

export type TypographyOpacityParameters =
  | 0.05
  | 0.1
  | 0.15
  | 0.2
  | 0.25
  | 0.3
  | 0.35
  | 0.4
  | 0.45
  | 0.5
  | 0.55
  | 0.6
  | 0.65
  | 0.7
  | 0.75
  | 0.8
  | 0.85
  | 0.9
  | 0.95
  | 1;

export type TypographyProps = {
  fontSize?: TypographyFontSizes;
  fontWeight?: TypographyWeights;
  fontOpacity?: TypographyOpacityParameters;
  lineHeight?: number;
  textAlign?: "center" | "end" | "start";
  height?: number;
  fontColor?: string;
};

const Typography: FC<TypographyProps & { children: ReactNode } & HTMLProps<HTMLParagraphElement>> = ({
  fontWeight = 400,
  fontSize = 10,
  fontOpacity,
  lineHeight,
  textAlign,
  height,
  className,
  children,
  fontColor,
  ...props
}) => {
  return (
    <p
      className={CN(styles["text"], className)}
      style={{
        fontSize: `${fontSize}px`,
        lineHeight: `${lineHeight}px`,
        height: `${height}px`,
        fontWeight: fontWeight,
        opacity: fontOpacity,
        color: fontColor,
        textAlign: textAlign,
      }}
      {...props}>
      {children}
    </p>
  );
};
export default Typography;
