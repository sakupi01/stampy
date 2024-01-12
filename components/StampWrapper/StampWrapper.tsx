import { Square, SquareProps } from "tamagui";
import { Typography } from "../Typography/Typography";

export type StampWrapperProps = {
  stamp?: string;
  isSelector?: boolean;
} & SquareProps;

export const StampWrapper = ({
  stamp = "🌟",
  isSelector = false,
  ...props
}: StampWrapperProps) => {
  return (
    <Square
      backgroundColor="rgba(232, 230, 227, 0.52)"
      width={70}
      height={70}
      padding={10}
      borderRadius={6}
      animation={isSelector ? "bouncy" : ""}
      scale={isSelector ? 0.9 : 1}
      hoverStyle={isSelector ? { scale: 0.925 } : {}}
      pressStyle={isSelector ? { scale: 0.925 } : {}}
      {...props}
    >
      <Typography type="h2">{stamp}</Typography>
    </Square>
  );
};
