import { DatePicker } from "@/components/DatePicker";
import { StyledButton } from "@/components/StyledButton";
import { ThemeSelector } from "@/components/ThemeSelector";
import { DEFAULT_IMG } from "@/components/ThemeSelector/fixtures/mock.data";
import { Typography } from "@/components/Typography";
import { Stampy } from "@/components/images/Stampy";
import { StampCardFormSchema, StampCardFormType } from "@/schema/stampCard";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { TextInput } from "react-native";
import { ms, vs } from "react-native-size-matters";
import { Spinner, YStack } from "tamagui";

export const CreateCardForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitted, isDirty },
    setValue,
    watch,
  } = useForm<StampCardFormType>({
    resolver: valibotResolver(StampCardFormSchema),
    defaultValues: {
      title: "タイトル",
      startDate: new Date(),
      endDate: new Date(),
      theme: DEFAULT_IMG[0].source.uri,
    },
  });
  const watchStartDate = watch("startDate", undefined);

  const onSubmit = (data: FieldValues) => console.log(data);
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
              placeholder="スタンプカードのタイトル"
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
      <YStack marginBottom={vs(30)}>
        <Stampy />
      </YStack>

      <StyledButton
        onPress={handleSubmit(onSubmit, onError)}
        icon={
          isSubmitting || isSubmitted
            ? () => <Spinner size="small" color={"$secondary--background"} />
            : undefined
        }
        type={!isDirty ? "disabled" : "primary"}
        disabled={!isDirty || isSubmitting}
      >
        <Typography>作成</Typography>
      </StyledButton>
    </YStack>
  );
};
