import { StyledInput } from "@/components/StyledInput";
import { Typography } from "@/components/Typography";
import {
  RenewPasswordFormSchema,
  RenewPasswordFormType,
} from "@/schema/renewPassword";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { useToastController } from "@tamagui/toast";
import { Dispatch } from "react";
import { Controller, useForm } from "react-hook-form";
import { s, vs } from "react-native-size-matters";
import { Square, XStack, YStack } from "tamagui";

type PasswordChangeFormProps = {
  setPasswordFormVisible: Dispatch<React.SetStateAction<boolean>>;
};
export const PasswordChangeForm = ({
  setPasswordFormVisible,
}: PasswordChangeFormProps) => {
  const toast = useToastController();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<RenewPasswordFormType>({
    resolver: valibotResolver(RenewPasswordFormSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });
  return (
    <YStack alignItems="center" width="100%" space={vs(20)}>
      <YStack space={vs(20)} alignItems="center" width="100%">
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => {
            return (
              <StyledInput
                label="新しいパスワード"
                placeholder="password"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholderTextColor={"#E5E7EB"}
                isPassword
              />
            );
          }}
          name="password"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => {
            return (
              <StyledInput
                label="再度入力"
                placeholder="password"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholderTextColor={"#E5E7EB"}
                isPassword
              />
            );
          }}
          name="passwordConfirm"
        />

        {/* エラー */}
        {Object.keys(errors).length !== 0 ? (
          <Square
            backgroundColor="rgba(232, 230, 227, 0.52)"
            width="100%"
            padding={s(10)}
            borderRadius={6}
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
          >
            {errors.password && (
              <Typography type="small" color="$text--destructive">
                😕{errors.password.message}
              </Typography>
            )}
            {errors.passwordConfirm && (
              <Typography type="small" color="$text--destructive">
                😕{errors.passwordConfirm.message}
              </Typography>
            )}
          </Square>
        ) : (
          <></>
        )}

        <XStack width="100%" justifyContent="space-around">
          <Typography
            type="ui"
            underlined
            color={"$text--subtle"}
            onPress={() => {
              setPasswordFormVisible(false);
            }}
          >
            変更をやめる
          </Typography>
          <Typography
            type="ui"
            underlined
            color={isValid ? "$destructive--background" : "$text--subtle"}
            onPress={handleSubmit((data) => {
              console.log(data);
              // save card to server
              // await sleep(1000);
              toast.show("📧 パスワードを変更メールを送信しました");
              // clear submitting state
              reset();
              // 作成したカード一覧へ遷移
              // router.push("/cards");
            })}
          >
            変更する
          </Typography>
        </XStack>
      </YStack>
    </YStack>
  );
};
