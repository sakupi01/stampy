// @ts-nocheck
import { styled } from "@tamagui/core";
import { SizableText } from "@tamagui/text";

const Paragraph = styled(SizableText, {
  name: "Paragraph",
  tag: "p",
  userSelect: "auto",
  color: "$color",
  size: "$true",
});

const Heading = styled(Paragraph, {
  tag: "span",
  name: "Heading",
  accessibilityRole: "header",
  fontFamily: "$heading",
  size: "$8",
  margin: 0,
});

export const H1 = styled(Heading, {
  name: "H1",
  tag: "h1",
  size: "$h1",
  lineHeight: "$h1",
  fontWeight: "$extraBold",
  letterSpacing: "$1",
});

export const H2 = styled(Heading, {
  name: "H2",
  tag: "h2",
  size: "$h2",
  lineHeight: "$h2",
  fontWeight: "$bold",
  letterSpacing: "$2",
});

export const H3 = styled(Heading, {
  name: "H3",
  tag: "h3",
  size: "$h3",
  lineHeight: "$h3",
  fontWeight: "$bold",
  letterSpacing: "$3",
});

export const H4 = styled(Heading, {
  name: "H4",
  tag: "h4",
  size: "$h4",
  lineHeight: "$h4",
  fontWeight: "$bold",
  letterSpacing: "$4",
});

export const UIText = styled(Heading, {
  name: "UIText",
  tag: "p",
  size: "$ui",
  lineHeight: "$ui",
  fontWeight: '"$medium"',
});

export const Large = styled(Heading, {
  name: "H6",
  tag: "h6",
  size: "$large",
  lineHeight: "$large",
  fontWeight: "$bold",
});
export const Medium = styled(Heading, {
  name: "H6",
  tag: "h6",
  size: "$medium",
  lineHeight: "$medium",
  fontWeight: "$light",
});
export const Small = styled(Heading, {
  name: "H6",
  size: "$small",
  lineHeight: "$small",
  fontWeight: "$light",
});

export { Paragraph, Heading };
