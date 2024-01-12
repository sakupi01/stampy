// biome-ignore lint/nursery/noUnusedImports: <explanation>
import React from "react";
import { Button, GetProps } from "tamagui";

import { styled } from "tamagui"; // or '@tamagui/core'

const StyledButton = styled(Button, {
  name: "StyledButton",
  testID: "StyledButton",
  borderRadius: 16,
  // @ts-ignore
  fontWeight: "$medium",
  variants: {
    type: {
      primary: {
        backgroundColor: "$primary--background",
        color: "$text--dark",
        pressStyle: {
          backgroundColor: "$primary--click",
        },
      },
      secondary: {
        backgroundColor: "$secondary--background",
        color: "$text--dark",
        pressStyle: {
          backgroundColor: "$secondary--click",
        },
      },
      accent: {
        backgroundColor: "$accent--background",
        color: "$text--dark",
        pressStyle: {
          backgroundColor: "$accent--click",
        },
      },
      destructive: {
        backgroundColor: "$destructive--background",
        color: "$text--light",
        pressStyle: {
          backgroundColor: "$destructive--click",
        },
      },
      ghost: {
        backgroundColor: "$ghost--background",
        color: "$text--dark",
        pressStyle: {
          backgroundColor: "$ghost--click",
        },
      },
    },
    size: {
      "...size": (size, { tokens }) => {
        return {
          width: tokens.size[size] ?? size,

          height: tokens.size[size] ?? size,
        };
      },
    },
  } as const,
  defaultVariants: {
    // @ts-ignore
    type: "primary",
  },
});

type StyledButtonProps = GetProps<typeof StyledButton>;
export { StyledButton, StyledButtonProps };
