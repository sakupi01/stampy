import { s } from "react-native-size-matters";
import { Square, SquareProps } from "tamagui";
import { Typography } from "../Typography/Typography";

export type StampWrapperProps = {
  stamp?: string;
  isSelector?: boolean;
  size?: "large" | "small";
} & SquareProps;

export const StampWrapper = ({
  stamp = "🌟",
  isSelector = false,
  size = "large",
  ...props
}: StampWrapperProps) => {
  return (
    <Square
      backgroundColor="rgba(232, 230, 227, 0.52)"
      width={size === "small" ? s(50) : s(70)}
      height={size === "small" ? s(50) : s(70)}
      padding={size === "small" ? s(5) : s(10)}
      borderRadius={6}
      animation={isSelector ? "bouncy" : null}
      scale={isSelector ? 0.9 : 1}
      hoverStyle={isSelector ? { scale: 0.925 } : {}}
      pressStyle={isSelector ? { scale: 0.925 } : {}}
      {...props}
    >
      <Typography type={size === "small" ? "h3" : "h2"}>{stamp}</Typography>
    </Square>
  );
};
