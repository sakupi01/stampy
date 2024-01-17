import { Typography } from "@/components/Typography";
import { forwardRef } from "react";
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
  fontSize: "$ui",
});
type StyledInputProps = InputProps & {
  label: string;
  placeholderValue?: string;
  defaultValue?: string;
  isDisabled?: boolean;
  disableAutoComplete?: boolean;
  isPassword?: boolean;
} & { labelProps?: Omit<LabelProps, "children" | "ref"> };
export const StyledInput = forwardRef<
  React.ElementRef<typeof DefaultInput>,
  StyledInputProps
>(
  (
    {
      label,
      placeholderValue,
      defaultValue = "",
      id,
      isPassword,
      labelProps,
      isDisabled,
      ...props
    },
    ref,
  ) => {
    return (
      <YStack space={6} width={"100%"}>
        <Label htmlFor={id} {...labelProps}>
          <Typography type="ui" color="$text--dark">
            {label}
          </Typography>
        </Label>
        <Input
          id={id}
          ref={ref}
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
  },
);
