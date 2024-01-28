import { SignInFormSchema, SignInFormType } from "@/schema/signIn";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { Meta, StoryObj } from "@storybook/react";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { StyledInput } from "../StyledInput/StyledInput";
import { Typography } from "../Typography/Typography";
import { StyledForm } from "./StyledForm";

const meta = {
  title: "StyledForm",
  component: StyledForm,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof StyledForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Story />
      </div>
    ),
  ],
  render: function Comp({ ...args }) {
    const {
      control,
      handleSubmit,
      formState: { errors, isSubmitting, isSubmitted, isValid, isDirty },
    } = useForm<SignInFormType>({
      resolver: valibotResolver(SignInFormSchema),
    });

    return (
      <meta.component
        isValid={isValid}
        isDirty={isDirty}
        alignItems="flex-start"
        buttonLabel="サインアップ"
        borderColor="$stroke--dark"
        borderWidth={2}
        // @ts-ignore
        buttonProps={{
          type: "accent",
        }}
        isSubmitting={isSubmitting}
        isSubmitted={isSubmitted}
        onSubmitAction={handleSubmit((data: FieldValues) =>
          console.log("Submitted! :", data),
        )}
      >
        <Typography type="ui" color="$text--subtle">
          This is a form.
        </Typography>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <StyledInput
              id="name"
              label="name"
              defaultValue="name"
              onChange={onChange}
              value={value}
              onBlur={onBlur}
            />
          )}
          name="email"
        />
        {errors.email && (
          <Typography color="$text--destructive">
            {errors.email.message}{" "}
          </Typography>
        )}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <StyledInput
              id="password"
              label="password"
              defaultValue="password"
              onChange={onChange}
              value={value}
              onBlur={onBlur}
              isPassword
            />
          )}
          name="password"
        />
        {errors.password && (
          <Typography color="$text--destructive">
            {errors.password.message}
          </Typography>
        )}
      </meta.component>
    );
  },
};
