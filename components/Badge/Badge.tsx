import { s, vs } from "react-native-size-matters";
import { XStack, XStackProps } from "tamagui";
import { ShadowProperties } from "../../constants/MaterialBoxshadow";
import { Typography } from "../Typography/Typography";

type BadgeProps = {
  label?: string;
  backgroundColor?:
    | "$accent--background"
    | "$primary--background"
    | "$ghost--background";
} & XStackProps;
export const Badge = ({
  label,
  backgroundColor = "$accent--background",
  ...props
}: BadgeProps) => {
  return (
    <XStack
      display="inline-flex"
      paddingVertical={vs(7)}
      paddingHorizontal={s(13)}
      alignItems="center"
      gap={s(10)}
      borderRadius={6}
      backgroundColor={backgroundColor}
      {...ShadowProperties}
      {...props}
    >
      <Typography type="ui">{label}</Typography>
    </XStack>
  );
};
