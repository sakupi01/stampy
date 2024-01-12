import { Square } from "tamagui";
import { Typography } from "../Typography/Typography";

export type StampWrapperProps = {
  stamp: string;
};

export const StampWrapper = ({ stamp }: StampWrapperProps) => {
  return (
    <Square
      backgroundColor="rgba(232, 230, 227, 0.52)"
      width={70}
      height={70}
      padding={10}
      borderRadius={6}
    >
      <Typography type="h2">{stamp}</Typography>
    </Square>
  );
};
