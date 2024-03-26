import { CoWorkerSelector } from "@/components/CoWorkerSelector";
import { DatePicker } from "@/components/DatePicker";
import { StyledButton } from "@/components/StyledButton";
import { ThemeSelector } from "@/components/ThemeSelector";
import { Typography } from "@/components/Typography";
import { useAppSelector } from "@/libs/AsyncStorage/store";
import { convertToDate } from "@/libs/date";
import { Repository } from "@/repository/api";
import { StampCardFormSchema, StampCardFormType } from "@/schema/stampCard";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { useToastController } from "@tamagui/toast";
import { useRouter } from "expo-router";
import { useEffect, useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import { KeyboardAvoidingView, TextInput } from "react-native";
import { ms, vs } from "react-native-size-matters";
import { useSWRConfig } from "swr";
import { Spinner, YStack } from "tamagui";

export const CreateCardForm = () => {
  const { mutate } = useSWRConfig();
  const user = useAppSelector((state) => state.auth.user);
  const toast = useToastController();
  const router = useRouter();
  const titleRef = useRef<TextInput>(null);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid, isDirty },
    setValue,
    setFocus,
    watch,
  } = useForm<StampCardFormType>({
    resolver: valibotResolver(StampCardFormSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  useEffect(() => {
    titleRef.current?.focus();
    setFocus("title");
  }, [setFocus]);

  const watchStartDate = watch("startDate", undefined);

  const onSubmit = async (data: StampCardFormType) => {
    const saveData = {
      ...data,
      startDate: convertToDate(data.startDate),
      endDate: convertToDate(data.endDate),
      createdBy: user?.email,
      ...(data.receiver ? { joinedUser: data.receiver } : {}),
    };
    // save card to server
    // /stampcard
    const repository = new Repository();
    const res = await repository.post("/stampcard", JSON.stringify(saveData));
    if (res.ok) {
      // 再検証
      mutate(["/stampcard", undefined, true]);
      // clear submitting state
      reset();
      // 作成したカードへ遷移
      router.push(`/home/${res.val.id}`);
    } else {
      if (res.err.message === "Not Found Error.") {
        toast.show("🚫 メールアドレスのユーザは登録されていません");
      } else {
        toast.show("🚫 カードの作成に失敗しました");
      }
    }
  };
  return (
    <YStack marginBottom={vs(100)}>
      <YStack marginBottom={vs(30)}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              ref={titleRef}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              style={{
                lineHeight: ms(32, 2),
                fontWeight: "bold",
                letterSpacing: -0.6,
                fontSize: ms(24, 2),
                fontFamily: "ZenKakuGothicNewBold",
              }}
              placeholderTextColor={"#E5E7EB"}
              placeholder="タイトル"
            />
          )}
          name="title"
        />
        {errors.title && (
          <Typography type="small" color="$text--destructive">
            😕{errors.title.message}
          </Typography>
        )}
      </YStack>
      <YStack marginBottom={vs(30)}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={() => (
            <DatePicker
              setValue={setValue}
              label="開始日"
              minimumDate={new Date()}
              keyString={"startDate"}
            />
          )}
          name="startDate"
        />
        {errors.startDate && (
          <Typography type="small" color="$text--destructive">
            😕{errors.startDate.message}
          </Typography>
        )}
      </YStack>
      <YStack marginBottom={vs(30)}>
        {watchStartDate && (
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={() => (
              <DatePicker
                label="終了日"
                minimumDate={watchStartDate}
                setValue={setValue}
                keyString={"endDate"}
              />
            )}
            name="endDate"
          />
        )}
        {errors.endDate && (
          <Typography type="small" color="$text--destructive">
            😕{errors.endDate.message}
          </Typography>
        )}
      </YStack>
      <YStack marginBottom={vs(30)}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={() => <ThemeSelector setValue={setValue} />}
          name="endDate"
        />
        {errors.backgroundUrl && (
          <Typography type="small" color="$text--destructive">
            😕{errors.backgroundUrl.message}
          </Typography>
        )}
      </YStack>
      <YStack marginBottom={vs(30)} width="100%" backgroundColor="white">
        <KeyboardAvoidingView behavior={"position"}>
          <CoWorkerSelector inputControl={control} setValue={setValue} />
          {errors.isStampy && (
            <Typography type="small" color="$text--destructive">
              😕{errors.isStampy.message}
            </Typography>
          )}
          {errors.receiver && (
            <Typography type="small" color="$text--destructive">
              😕{errors.receiver.message}
            </Typography>
          )}
        </KeyboardAvoidingView>
      </YStack>

      <StyledButton
        onPress={handleSubmit(onSubmit)}
        icon={
          isSubmitting
            ? () => <Spinner size="small" color={"$secondary--background"} />
            : undefined
        }
        type={!isValid || !isDirty ? "disabled" : "primary"}
        disabled={!isValid || !isDirty || isSubmitting}
      >
        <Typography>作成</Typography>
      </StyledButton>
    </YStack>
  );
};
