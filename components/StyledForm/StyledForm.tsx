import { MaterialBoxshadow } from "@/constants/MaterialBoxshadow";
import { s } from "react-native-size-matters";
import { Form as DefaultForm, FormProps, Spinner } from "tamagui";
import { StyledButton } from "../StyledButton";
import { StyledButtonProps } from "../StyledButton/StyledButton";
import { Typography } from "../Typography/Typography";

type StyledFormProps = {
  children?: React.ReactNode;
  onSubmitAction: () => void;
  isSubmitting?: boolean;
  isSubmitted?: boolean;
  isDirty?: boolean;
  isValid?: boolean;
  buttonLabel?: string;
  // @ts-ignore
  buttonProps?: Omit<StyledButtonProps, "children" | "ref">;
} & Omit<FormProps, "onSubmit">;
export function StyledForm({
  children,
  onSubmitAction,
  isSubmitting,
  isSubmitted,
  isDirty,
  isValid,
  buttonLabel = "Submit",
  buttonProps,
  ...formProps
}: StyledFormProps) {
  return (
    <DefaultForm
      alignItems={formProps.alignItems || "center"}
      minWidth={formProps.minWidth || s(280)}
      gap={formProps.gap || s(16)}
      onSubmit={onSubmitAction}
      borderWidth={formProps.borderWidth || 1}
      borderRadius={formProps.borderRadius || 6}
      backgroundColor={formProps.backgroundColor || "$light--background"}
      borderColor={formProps.borderColor || "transparent"}
      padding={formProps.padding || s(30)}
      boxShadow={formProps.boxShadow || MaterialBoxshadow}
      {...formProps}
    >
      {children}
      <DefaultForm.Trigger asChild disabled={isSubmitting || isSubmitted}>
        <StyledButton
          icon={
            isSubmitting
              ? () => <Spinner size="small" color={"$secondary--background"} />
              : undefined
          }
          {...buttonProps}
          type={!isValid ? "disabled" : buttonProps?.type || "primary"}
          disabled={!isValid || isSubmitting}
        >
          <Typography>{buttonLabel}</Typography>
        </StyledButton>
      </DefaultForm.Trigger>
    </DefaultForm>
  );
}
