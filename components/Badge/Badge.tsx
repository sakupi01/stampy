import { MaterialBoxshadow } from "@/constants/MaterialBoxshadow";
// biome-ignore lint/nursery/noUnusedImports: <explanation>
import React from "react";
import { XStack, XStackProps } from "tamagui";

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
      paddingTop="7px"
      paddingRight="13px"
      paddingBottom="7px"
      paddingLeft="13px"
      alignItems="center"
      gap={10}
      borderRadius={6}
      backgroundColor={backgroundColor}
      boxShadow={MaterialBoxshadow}
      {...props}
    >
      {label}
    </XStack>
  );
};
