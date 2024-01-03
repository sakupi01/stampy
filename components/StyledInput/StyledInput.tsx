import { Medium } from "@/components/typography";
import {
  Input as DefaultInput,
  InputProps,
  Label,
  LabelProps,
  YStack,
  styled,
} from "tamagui";

const Input = styled(DefaultInput, {
  name: "StyledTextInput",
  tag: "input",
  height: 40,
  width: "100%",
  borderRadius: 6,
  borderWidth: 1,
  borderTopColor: "$stroke--dark",
  borderStyle: "solid",
  backgroundColor: "white",
  padding: 10,
  color: "$text--dark",
  fontSize: "$3",
});
type StyledInputProps = InputProps & {
  label: string;
  placeholderValue?: string;
  defaultValue: string;
  disableAutoComplete?: boolean;
  isPassword?: boolean;
} & { labelProps?: Omit<LabelProps, "children" | "ref"> };
export function StyledInput({
  label,
  placeholderValue,
  defaultValue,
  id,
  isPassword,
  labelProps,
  ...props
}: StyledInputProps) {
  return (
    <YStack space={6}>
      <Label htmlFor={id} {...labelProps}>
        <Medium color="$text--dark">{label}</Medium>
      </Label>
      <Input
        id={id}
        placeholder={placeholderValue}
        defaultValue={defaultValue}
        secureTextEntry={isPassword}
        {...props}
      />
    </YStack>
  );
}
