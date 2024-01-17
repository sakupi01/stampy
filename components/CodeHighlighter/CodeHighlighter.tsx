import { useThemeColor } from "@/components/CodeHighlighter/hooks/useThemeColor";
import { GetProps, SizableText, XStack, styled } from "tamagui";
import { Paragraph } from "../Typography";

type ParagraphProps = GetProps<typeof SizableText>;
const MonoSpan = styled(Paragraph, {
  name: "StyledSpan",
  tag: "span",
  size: "$6",
  fontFamily: "$span",
  color: "$color",
  // @ts-ignore
  lineHeight: "$ui",
});

const StyledXStack = styled(XStack, {
  name: "StyledXStack",
  tag: "span",
  space: s(4),
  paddingHorizontal: 4,
  marginVertical: 7,
  borderRadius: 4,
});

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};
type CodeHighlighterProps = ThemeProps & ParagraphProps;

export function CodeHighlighter(props: CodeHighlighterProps) {
  const { style, lightColor, darkColor, color, ...otherProps } = props;
  const bgColor = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <StyledXStack backgroundColor={bgColor}>
      <MonoSpan color={color} {...otherProps} />
    </StyledXStack>
  );
}
