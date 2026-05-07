import type { FC } from "react";

type SpacerProps = {
  height?: number;
  width?: number;
};

const Spacer: FC<SpacerProps> = ({ height, width }) => {
  return (
    <div
      style={{
        height,
        width,
      }}
    />
  );
};

export default Spacer;
