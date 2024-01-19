import { StampSelector } from "@/components//StampSelector/StampSelector";
import { StyledForm } from "@/components/StyledForm";
import { StyledInput } from "@/components/StyledInput";
import { StyledTextArea } from "@/components/StyledTextArea";
import { Typography } from "@/components/Typography/Typography";
import { selectWordByKey } from "@/libs/AsyncStorage/Word/state";
import { useAppSelector } from "@/libs/AsyncStorage/store";
import { MessageFormSchema, MessageFormType } from "@/schema/message";
import { User } from "@/types";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { s } from "react-native-size-matters";
import { YStack } from "tamagui";

export type StampFormProps = {
  user: User;
  currentDay: number;
  buttonLabel?: string;
  isLastDay?: boolean;
};
export const StampForm = ({
  user,
  currentDay,
  buttonLabel = "送る",
  isLastDay = false,
}: StampFormProps) => {
  const messageLabel = useAppSelector((state) =>
    selectWordByKey(state, "stampy.word.message.label"),
  );
  const kansouLabel = useAppSelector((state) =>
    selectWordByKey(state, "stampy.word.kansou"),
  );
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitted },
    setValue,
  } = useForm<MessageFormType>({
    resolver: valibotResolver(MessageFormSchema),
  });
  return (
    <StyledForm
      maxWidth={s(300)}
      width="100%"
      alignItems="center"
      buttonLabel={buttonLabel}
      // @ts-ignore
      buttonProps={{
        type: "primary",
      }}
      isSubmitting={isSubmitting}
      isSubmitted={isSubmitted}
      onSubmitAction={handleSubmit((data: FieldValues) => {
        console.log("Submitted! :", data);
      })}
    >
      <YStack alignItems="center">
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <StampSelector
              id="stamp"
              onChange={onChange}
              onBlur={onBlur}
              setValue={setValue}
            />
          )}
          name="stamp"
        />
        {errors.stamp && (
          <Typography type="small" color="$text--destructive">
            😕{errors.stamp.message}
          </Typography>
        )}
      </YStack>

      <YStack alignItems="flex-start" width="100%">
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => {
            if (isLastDay) {
              return (
                <StyledTextArea
                  id="message"
                  label={kansouLabel}
                  placeholder={"最後までがんばった相手へ"}
                  onChangeText={onChange}
                  value={value}
                  onBlur={onBlur}
                  minHeight={100}
                  width="100%"
                />
              );
            }
            return (
              <StyledInput
                id="message"
                label={messageLabel}
                placeholder={"がんばった相手へ"}
                onChangeText={onChange}
                value={value}
                onBlur={onBlur}
                width="100%"
              />
            );
          }}
          name="message"
        />
        {isLastDay && (
          <Typography type="small" color="$text--subtle" textAlign="left">
            ※いつもより長めのメッセージでこれまでの頑張りを褒めてあげましょう！
          </Typography>
        )}
        {errors.message && (
          <Typography type="small" color="$text--destructive">
            😕{errors.message.message}
          </Typography>
        )}
      </YStack>
    </StyledForm>
  );
};
