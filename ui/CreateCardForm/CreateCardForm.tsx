import { CoWorkerSelector } from "@/components/CoWorkerSelector";
import { DatePicker } from "@/components/DatePicker";
import { StyledButton } from "@/components/StyledButton";
import { ThemeSelector } from "@/components/ThemeSelector";
import { Typography } from "@/components/Typography";
import { sleep } from "@/libs/sleep";
import { StampCardFormSchema, StampCardFormType } from "@/schema/stampCard";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { useEffect, useRef } from "react";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { KeyboardAvoidingView, TextInput } from "react-native";
import { ms, vs } from "react-native-size-matters";
import { Spinner, YStack } from "tamagui";

export const CreateCardForm = () => {
  const titleRef = useRef<TextInput>(null);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitted, isValid },
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

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    // save card to server
    await sleep(1000);
    // clear submitting state
    reset();
    // 作成したカード一覧へ遷移
    // router.push("/cards");
  };
  const onError = (data: FieldValues) =>
    console.error("Something went wrong:", data);

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
        {errors.theme && (
          <Typography type="small" color="$text--destructive">
            😕{errors.theme.message}
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
        onPress={handleSubmit(onSubmit, onError)}
        icon={
          isSubmitting
            ? () => <Spinner size="small" color={"$secondary--background"} />
            : undefined
        }
        type={!isValid ? "disabled" : "primary"}
        disabled={!isValid || isSubmitting}
      >
        <Typography>作成</Typography>
      </StyledButton>
    </YStack>
  );
};
