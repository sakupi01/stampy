import { StyledForm } from "@/components/StyledForm";
import { StyledInput } from "@/components/StyledInput";
import { Typography } from "@/components/Typography";
import { authActions } from "@/libs/AsyncStorage/Auth/slice";
import { signIn, signUp } from "@/libs/auth";
import { SignInFormSchema, SignInFormType } from "@/schema/signIn";
import { SignUpFormSchema, SignUpFormType } from "@/schema/signUp";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { router } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { ScrollView } from "react-native";
import { useDispatch } from "react-redux";

export function SignInForm() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitted, isDirty, isValid },
  } = useForm<SignInFormType>({
    resolver: valibotResolver(SignInFormSchema),
    reValidateMode: "onChange",
  });
  const dispatch = useDispatch();
  return (
    <ScrollView
      style={{
        width: "100%",
        height: "100%",
        paddingHorizontal: 1,
      }}
    >
      <StyledForm
        alignItems="flex-start"
        buttonLabel="サインイン"
        isDirty={isDirty}
        isValid={isValid}
        borderColor="$stroke--dark"
        borderWidth={2}
        // @ts-ignore
        buttonProps={{
          type: "accent",
        }}
        isSubmitting={isSubmitting}
        isSubmitted={isSubmitted}
        onSubmitAction={handleSubmit(async (data: SignInFormType) => {
          console.log("Submitted! :", data);
          dispatch(authActions.isLoading(true));
          // authorization logic with server
          const { sessionId, user } = await signIn(data);
          // async dispatch so need to wait
          dispatch(authActions.authorize({ session: sessionId, user: user }));
          dispatch(authActions.isLoading(false));
          // Navigate after signing in. You may want to tweak this to ensure sign-in is
          // successful before navigating.
          router.replace("/");
        })}
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
              id="signin-email"
              label="メールアドレス"
              inputMode="email"
              placeholder="email"
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
            />
          )}
          name="email"
        />
        {errors.email && (
          <Typography type="small" color="$text--destructive">
            😕{errors.email.message}
          </Typography>
        )}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <StyledInput
              id="signin-password"
              label="パスワード"
              placeholder="password"
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
              isPassword
            />
          )}
          name="password"
        />
        {errors.password && (
          <Typography type="small" color="$text--destructive">
            😕{errors.password.message}
          </Typography>
        )}
      </StyledForm>
    </ScrollView>
  );
}
export function SignUpForm() {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitted, isDirty, isValid },
  } = useForm<SignUpFormType>({
    resolver: valibotResolver(SignUpFormSchema),
    reValidateMode: "onChange",
  });
  return (
    <ScrollView
      style={{
        width: "100%",
        height: "100%",
        paddingHorizontal: 1,
      }}
    >
      <StyledForm
        alignItems="flex-start"
        buttonLabel="サインアップ"
        isDirty={isDirty}
        isValid={isValid}
        borderColor="$stroke--dark"
        borderWidth={2}
        // @ts-ignore
        buttonProps={{
          type: "accent",
        }}
        isSubmitting={isSubmitting}
        isSubmitted={isSubmitted}
        onSubmitAction={handleSubmit(async (data: SignUpFormType) => {
          console.log("Submitted! :", data);
          dispatch(authActions.isLoading(true));
          // authorization logic with server
          const { sessionId, user } = await signUp(data);
          // async dispatch so need to wait
          dispatch(authActions.authorize({ session: sessionId, user: user }));
          dispatch(authActions.isLoading(false));
          // Navigate after signing in. You may want to tweak this to ensure sign-in is
          // successful before navigating.
          router.replace("/");
        })}
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
              id="signup-email"
              inputMode="email"
              label="メールアドレス"
              placeholder="email"
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
            />
          )}
          name="email"
        />
        {errors.email && (
          <Typography type="small" color="$text--destructive">
            😕{errors.email.message}
          </Typography>
        )}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <StyledInput
              id="signin-name"
              label="ユーザー名"
              placeholder="username"
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
            />
          )}
          name="username"
        />
        {errors.username && (
          <Typography type="small" color="$text--destructive">
            😕{errors.username.message}
          </Typography>
        )}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <StyledInput
              id="signup-password"
              label="パスワード"
              placeholder="password"
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
              isPassword
            />
          )}
          name="password"
        />
        {errors.password && (
          <Typography type="small" color="$text--destructive">
            😕{errors.password.message}
          </Typography>
        )}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <StyledInput
              id="signup-passwordConfirm"
              label="パスワード再入力"
              placeholder="same password"
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
              isPassword
            />
          )}
          name="passwordConfirm"
        />
        {errors.passwordConfirm && (
          <Typography type="small" color="$text--destructive">
            😕{errors.passwordConfirm.message}
          </Typography>
        )}
      </StyledForm>
    </ScrollView>
  );
}
