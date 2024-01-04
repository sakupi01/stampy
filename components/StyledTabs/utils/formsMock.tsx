import { StyledForm } from "@/components/StyledForm";
import { StyledInput } from "@/components/StyledInput";
import { Typography } from "@/components/Typography";
import { SignInFormSchema, SignInFormType } from "@/schema/signIn";
import { SignUpFormSchema, SignUpFormType } from "@/schema/signUp";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { Controller, FieldValues, useForm } from "react-hook-form";

export function SignInForm() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm<SignInFormType>({
    resolver: valibotResolver(SignInFormSchema),
  });
  return (
    <StyledForm
      alignItems="flex-start"
      buttonLabel="サインイン"
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
        サインイン
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
        name="username"
      />
      {errors.username && (
        <Typography color="$text--destructive">
          {errors.username.message}
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
    </StyledForm>
  );
}
export function SignUpForm() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm<SignUpFormType>({
    resolver: valibotResolver(SignUpFormSchema),
  });
  return (
    <StyledForm
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
        サインアップ
      </Typography>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <StyledInput
            id="email"
            label="email"
            defaultValue="email"
            onChange={onChange}
            value={value}
            onBlur={onBlur}
          />
        )}
        name="email"
      />
      {errors.email && (
        <Typography color="$text--destructive">
          {errors.email.message}
        </Typography>
      )}
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
        name="username"
      />
      {errors.username && (
        <Typography color="$text--destructive">
          {errors.username.message}
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
    </StyledForm>
  );
}
