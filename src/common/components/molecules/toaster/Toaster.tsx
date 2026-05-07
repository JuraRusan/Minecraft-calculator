import type { FC } from "react";

import { Typography } from "@/common/components/atoms";

type ToasterProps = {
  message: string;
  // type?: 'info' | 'success' | 'error' | 'warning';
};

const Toaster: FC<ToasterProps> = ({ message }) => {
  return (
    <Typography fontSize={14} fontWeight={500}>
      {message}
    </Typography>
  );
};

export default Toaster;
