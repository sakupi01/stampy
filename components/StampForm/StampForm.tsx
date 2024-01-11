import { selectWordByKey } from "@/libs/AsyncStorage/Word/state";
import { useAppSelector } from "@/libs/AsyncStorage/store";
import { MessageFormSchema, MessageFormType } from "@/schema/message";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { YStack } from "tamagui";
import { StampSelector } from "../StampSelector/StampSelector";
import { StyledForm } from "../StyledForm";
import { StyledInput } from "../StyledInput";
import { StyledTextArea } from "../StyledTextArea";
import { Typography } from "../Typography";
export type StampFormProps = {
  user: {
    name: string;
  };
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
      maxWidth={300}
      alignItems="center"
      buttonLabel={buttonLabel}
      borderColor="$stroke--dark"
      borderWidth={2}
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
      <Typography type="large" textAlign="center">
        {user.name}に送る
        <br />
        {isLastDay ? "最終日のスタンプ" : `${currentDay}日目のスタンプ`}
      </Typography>

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
              value={value}
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
                  onChange={onChange}
                  value={value}
                  onBlur={onBlur}
                  minHeight={100}
                />
              );
            }
            return (
              <StyledInput
                id="message"
                label={messageLabel}
                placeholder={"がんばった相手へ"}
                onChange={onChange}
                value={value}
                onBlur={onBlur}
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
