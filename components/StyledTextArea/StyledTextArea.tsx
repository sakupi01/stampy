import { Typography } from "@/components/Typography";
import {
  Label,
  LabelProps,
  TextArea as DefaultTextArea,
  TextAreaProps,
  YStack,
  styled,
} from "tamagui";

const TextArea = styled(DefaultTextArea, {
  name: "StyledTextArea",
  tag: "textarea",
  height: 40,
  width: "100%",
  borderRadius: 6,
  borderWidth: 1,
  borderTopColor: "$stroke--dark",
  borderStyle: "solid",
  backgroundColor: "white",
  padding: 10,
  color: "$text--dark",
  fontSize: "$ui",
  lineHeight: "$ui",
});
type StyledTextAreaProps = TextAreaProps & {
  label: string;
  placeholderValue?: string;
  defaultValue?: string;
  isDisabled?: boolean;
  disableAutoComplete?: boolean;
  isPassword?: boolean;
} & { labelProps?: Omit<LabelProps, "children" | "ref"> };
export function StyledTextArea({
  label,
  placeholderValue,
  defaultValue = "",
  id,
  isPassword,
  labelProps,
  isDisabled,
  ...props
}: StyledTextAreaProps) {
  return (
    <YStack space={6} width={"100%"}>
      <Label htmlFor={id} {...labelProps}>
        <Typography type="ui" color="$text--dark">
          {label}
        </Typography>
      </Label>
      <TextArea
        id={id}
        placeholder={placeholderValue}
        defaultValue={defaultValue}
        secureTextEntry={isPassword}
        width={"100%"}
        editable={!isDisabled}
        disabled={isDisabled}
        focusable={!isDisabled}
        aria-disabled={isDisabled}
        {...props}
      />
    </YStack>
  );
}
