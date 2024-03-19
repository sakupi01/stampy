import { StyledInput } from "@/components/StyledInput";
import { Typography } from "@/components/Typography";
import { hashString } from "@/libs/hash";
import { Repository } from "@/repository/api";
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
                label="現在のパスワード"
                placeholder="現在のパスワード"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                isPassword
              />
            );
          }}
          name="oldPassword"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => {
            return (
              <StyledInput
                label="新しいパスワード"
                placeholder="新しいパスワード"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
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
                placeholder="新しいパスワード"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
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
            {errors.oldPassword && (
              <Typography type="small" color="$text--destructive">
                😕{errors.oldPassword.message}
              </Typography>
            )}
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
            onPress={handleSubmit(async (data) => {
              console.log(data);
              const hashedOldPassword = await hashString(data.oldPassword);
              const hashedPassword = await hashString(data.password);

              // save password to Server
              // /user/pwd
              const repository = new Repository();
              const res = await repository.put(
                "/user/pwd",
                JSON.stringify({
                  oldPass: hashedOldPassword,
                  newPass: hashedPassword,
                }),
              );
              if (res.ok) {
                toast.show("🔑 パスワードを変更しました");
                // clear submitting state
                reset();
              } else {
                toast.show("🚫 パスワードの更新に失敗しました");
              }
            })}
          >
            変更する
          </Typography>
        </XStack>
      </YStack>
    </YStack>
  );
};
