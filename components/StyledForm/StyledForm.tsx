import { Form as DefaultForm, FormProps, Spinner } from "tamagui";
import { StyledButton } from "../StyledButton";
import { StyledButtonProps } from "../StyledButton/StyledButton";

type StyledFormProps = {
  children?: React.ReactNode;
  onSubmitAction: () => void;
  isSubmitting?: boolean;
  isSubmitted?: boolean;
  buttonLabel?: string;
  buttonProps?: Omit<StyledButtonProps, "children" | "ref">;
} & Omit<FormProps, "onSubmit">;
export function StyledForm({
  children,
  onSubmitAction,
  isSubmitting,
  isSubmitted,
  buttonLabel = "Submit",
  buttonProps,
  ...formProps
}: StyledFormProps) {
  return (
    <DefaultForm
      alignItems={formProps.alignItems || "center"}
      minWidth={formProps.minWidth || 300}
      gap={formProps.gap || 16}
      onSubmit={onSubmitAction}
      borderWidth={formProps.borderWidth || 1}
      borderRadius={formProps.borderRadius || 6}
      backgroundColor={formProps.backgroundColor || "$background--light"}
      borderColor={formProps.borderColor || "transparent"}
      padding={formProps.padding || 25}
    >
      {children}
      <DefaultForm.Trigger asChild disabled={status !== "off"}>
        <StyledButton
          icon={
            isSubmitting || isSubmitted
              ? () => (
                  <Spinner
                    size="small"
                    color={`$${buttonProps?.type || "primary"}--click`}
                  />
                )
              : undefined
          }
          disabled={isSubmitting || isSubmitted}
          {...buttonProps}
        >
          {buttonLabel}
        </StyledButton>
      </DefaultForm.Trigger>
    </DefaultForm>
  );
}
