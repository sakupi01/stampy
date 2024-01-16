import { XStack, XStackProps } from "tamagui";
import { ShadowProperties } from "../../constants/MaterialBoxshadow";
import { Typography } from "../Typography/Typography";

type BadgeProps = {
  label?: string;
  backgroundColor?: "$accent--background" | "$primary--background";
} & XStackProps;
export const Badge = ({
  label,
  backgroundColor = "$accent--background",
  ...props
}: BadgeProps) => {
  return (
    <XStack
      display="inline-flex"
      paddingTop={7}
      paddingRight={13}
      paddingBottom={7}
      paddingLeft={13}
      alignItems="center"
      gap={10}
      borderRadius={6}
      backgroundColor={backgroundColor}
      {...ShadowProperties}
      {...props}
    >
      <Typography type="ui">{label}</Typography>
    </XStack>
  );
};
