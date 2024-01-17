import { config as baseConfig } from "@tamagui/config";
import { createMedia } from "@tamagui/react-native-media-driver";
import { shorthands } from "@tamagui/shorthands";
import { themes as baseTheme, tokens as baseToken } from "@tamagui/themes";
import { createFont, createTamagui, createTokens } from "tamagui"; // or '@tamagui/core'
// import { createAnimations } from "@tamagui/animations-react-native";
const interFont = createFont({
  family: "Inter",
  size: {
    h1: 58,
    h2: 40,
    h3: 34,
    h4: 30,
    ui: 24,
    large: 28,
    medium: 26,
    small: 22,
    true: 26,
    4: 26,
  },
  color: {
    dark: "$text--dark",
    subtle: "$text--subtle",
    color: "$color",
  },
  lineHeight: {
    h1: 48,
    h2: 36,
    h3: 32,
    h4: 28,
    ui: 20,
    large: 28,
    medium: 24,
    small: 20,
  },
  weight: {
    light: "300",
    medium: "400",
    bold: "600",
    extraBold: "800",
  },
  letterSpacing: {
    0: 0,
    1: -1.2,
    2: -0.75,
    3: -0.6,
    4: -0.5,
    true: 0,
  },
  // (native) swap out fonts by face/style
  face: {
    300: { normal: "InterLight", italic: "InterItalic" },
    400: { normal: "Inter", italic: "InterItalic" },
    600: { normal: "InterBold" },
    800: { normal: "InterExtraBold" },
  },
});
export type InterFont = typeof interFont;
const zenKakuGothicNewFont = createFont({
  family: "ZenKakuGothicNew",
  size: {
    h1: 56,
    h2: 38,
    h3: 32,
    h4: 28,
    ui: 22,
    large: 26,
    medium: 24,
    small: 20,
    true: 24,
    4: 24,
  },
  color: {
    dark: "$text--dark",
    subtle: "$text--subtle",
    color: "$color",
  },
  lineHeight: {
    h1: 56,
    h2: 44,
    h3: 40,
    h4: 36,
    ui: 28,
    large: 44,
    medium: 30,
    small: 28,
  },
  weight: {
    light: "300",
    medium: "400",
    bold: "700",
    extraBold: "900",
  },
  letterSpacing: {
    0: 0,
    1: -1.2,
    2: -0.75,
    3: -0.6,
    4: -0.5,
    true: 0,
  },
  // (native) swap out fonts by face/style
  face: {
    300: { normal: "ZenKakuGothicNewLight", italic: "ZenKakuGothicNewItalic" },
    400: { normal: "ZenKakuGothicNew", italic: "ZenKakuGothicNewItalic" },
    700: { normal: "ZenKakuGothicNewBold" },
    900: { normal: "ZenKakuGothicNewExtraBold" },
  },
});
export type ZenKakuGothicNewFont = typeof zenKakuGothicNewFont;
const spaceMonoFont = createFont({
  family: "SpaceMono",
  size: {
    5: 13,
    6: 15,
    9: 32,
    10: 44,
    true: 15,
  },
  color: {
    6: "$font--dark",
    7: "$color",
  },
  lineHeight: {
    1: 10,
    2: 20,
    3: 25,
  },
  weight: {
    1: "300",
    3: "600",
  },
  letterSpacing: {
    1: 0,
    2: -1,
    // 3 will be -1
  },
});

// const animations = createAnimations({
//   "100ms": {
//     type: "timing",
//     duration: 100,
//   },
//   bouncy: {
//     damping: 9,
//     mass: 0.9,
//     stiffness: 150,
//   },
//   lazy: {
//     damping: 18,
//     stiffness: 50,
//   },
//   medium: {
//     damping: 15,
//     stiffness: 120,
//     mass: 1,
//   },
//   slow: {
//     damping: 15,
//     stiffness: 40,
//   },
//   quick: {
//     damping: 20,
//     mass: 1.2,
//     stiffness: 250,
//   },
//   tooltip: {
//     damping: 10,
//     mass: 0.9,
//     stiffness: 100,
//   },
//   none: {
//     damping: 1,
//     mass: 1,
//     stiffness: 1,
//   },
// });

export type SpaceMonoFont = typeof spaceMonoFont;
const tokens = createTokens({
  ...baseToken,
  color: {
    "stroke--dark": "rgba(3, 10, 18, 0.81)",
    "primary--background": "#B2C4B2",
    "primary--click": "#8BAC8B",
    "secondary--background": "rgba(232, 230, 227, 0.52)",
    "secondary--click": "#E9E4D8",
    "accent--background": "#ECB390",
    "accent--click": "#DF7861",
    "destructive--background": "#EF4444",
    "destructive--click": "#DC2626",
    "ghost--background": "#DDDDDD",
    "ghost--click": "#BCC1C7",
    "light--background": "#fff",
    "dark--background": "#000",
    "text--dark": "#030A12CF",
    "text--subtle": "#64748B",
    "text--light": "#fff",
    "text--destructive": "#EF4444",
    "blur--light": "#ffffffbf",
    "stroke--light": "#E2E8F0",
  },
  zIndex: {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
  },
});
const config = createTamagui({
  ...baseConfig,
  fonts: {
    // for tamagui, heading and body are assumed
    heading: zenKakuGothicNewFont,
    body: zenKakuGothicNewFont,
    span: spaceMonoFont,
  },
  defaultFont: "body",
  tokens,
  // animations: animations,
  themes: {
    ...baseTheme,
    uiText: {
      size: "$ui",
      lineHeight: "$ui",
      fontWeight: "$medium",
    },
  },
  media: createMedia({
    sm: { maxWidth: 860 },

    gtSm: { minWidth: 860 + 1 },

    short: { maxHeight: 820 },

    hoverNone: { hover: "none" },

    pointerCoarse: { pointer: "coarse" },
  }),
  shorthands: { ...shorthands },
});
export type TamaConfig = typeof config;

export default config;
