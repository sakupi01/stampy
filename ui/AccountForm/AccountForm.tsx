import { AvatarPicker } from "@/components/AvatarPicker/AvatarPicker";
import { SimpleList } from "@/components/SimpleList";
import { StyledButton } from "@/components/StyledButton";
import { Typography } from "@/components/Typography";
import { authActions } from "@/libs/AsyncStorage/Auth/slice";
import { Repository } from "@/repository/api";
import {
  AccountSettingsSchema,
  AccountSettingsType,
} from "@/schema/accountSetting";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { useToastController } from "@tamagui/toast";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ScrollView, StyleSheet } from "react-native";
import { s, vs } from "react-native-size-matters";
import { useDispatch } from "react-redux";
import { Spinner, Square, YStack } from "tamagui";
import { PasswordChangeForm } from "../PasswordChangeForm/PasswordChangeForm";
import { useAccount } from "./hooks/useAccount";

export const AccountForm = () => {
  const { formData } = useAccount();
  const dispatch = useDispatch();
  const toast = useToastController();
  const [passwordFormVisible, setPasswordFormVisible] = useState(false);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitted, isValid, isDirty },
    setValue,
  } = useForm<AccountSettingsType>({
    resolver: valibotResolver(AccountSettingsSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const onSubmit = async (data: AccountSettingsType) => {
    // save user info changes to server
    // /user
    const repository = new Repository();
    const res = await repository.put("/user", JSON.stringify(data));
    if (res.ok) {
      dispatch(
        authActions.setUser({
          user: res.val,
        }),
      );
      toast.show("✅ 変更を保存しました");
      // clear submitting state
      reset();
    } else {
      toast.show("🚫 情報の更新に失敗しました");
    }
  };

  return (
    <YStack space={vs(30)} alignItems="center" width="100%">
      <AvatarPicker defaultUrl={formData[0].data} setValue={setValue} />
      <SimpleList
        // except index 0: avatar
        data={formData.slice(1)}
        control={control}
      />
      <ScrollView style={styles.scrollView}>
        <YStack
          space={vs(20)}
          alignItems="center"
          width="100%"
          paddingBottom={vs(50)}
        >
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
              {errors.avatarUrl && (
                <YStack>
                  <Typography type="small" color="$text--destructive">
                    {errors.avatarUrl.ref?.name}:
                  </Typography>
                  <Typography type="small" color="$text--destructive">
                    😕{errors.avatarUrl.message}
                  </Typography>
                </YStack>
              )}
              {errors.username && (
                <YStack>
                  <Typography type="small" color="$text--destructive">
                    {errors.username.ref?.name}:
                  </Typography>
                  <Typography type="small" color="$text--destructive">
                    😕{errors.username.message}
                  </Typography>
                </YStack>
              )}
              {errors.email && (
                <YStack>
                  <Typography type="small" color="$text--destructive">
                    {errors.email.ref?.name}:
                  </Typography>
                  <Typography type="small" color="$text--destructive">
                    😕{errors.email.message}
                  </Typography>
                </YStack>
              )}
            </Square>
          ) : (
            <></>
          )}

          <StyledButton
            onPress={handleSubmit(onSubmit)}
            icon={
              isSubmitting
                ? () => (
                    <Spinner size="small" color={"$secondary--background"} />
                  )
                : undefined
            }
            type={!isValid || !isDirty ? "disabled" : "primary"}
            disabled={!isValid || !isDirty || isSubmitting}
          >
            <Typography>変更を保存</Typography>
          </StyledButton>

          {/* パスワード変更フォーム */}
          <Typography
            type="ui"
            underlined
            color={"$destructive--background"}
            onPress={() => {
              setPasswordFormVisible(!passwordFormVisible);
            }}
          >
            パスワード変更
          </Typography>

          {passwordFormVisible ? (
            <PasswordChangeForm
              setPasswordFormVisible={setPasswordFormVisible}
            />
          ) : (
            <></>
          )}
        </YStack>
      </ScrollView>
    </YStack>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    width: "100%",
    height: vs(180),
  },
});
