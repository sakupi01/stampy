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
        color: "$text--light",
        onHoverIn: {
          backgroundColor: "$primary--background",
          color: "$text--light",
        },
        pressStyle: {
          backgroundColor: "$primary--click",
        },
      },
      secondary: {
        backgroundColor: "$secondary--background",
        color: "$text--dark",
        onHoverIn: {
          backgroundColor: "$secondary--background",
          color: "$text--dark",
        },
        pressStyle: {
          backgroundColor: "$secondary--click",
        },
      },
      accent: {
        backgroundColor: "$accent--background",
        color: "$text--dark",
        onFocusIn: {
          backgroundColor: "$secondary--background",
          color: "$text--dark",
        },
        onHoverIn: {
          backgroundColor: "$accent--background",
          color: "$text--dark",
        },
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
    type: "primary",
  },
});

type StyledButtonProps = GetProps<typeof StyledButton>;
export { StyledButton, StyledButtonProps };
