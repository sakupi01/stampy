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
import { useState } from "react";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { StyleSheet } from "react-native";
import { s, vs } from "react-native-size-matters";
import { YStack } from "tamagui";
import AnimatedView from "../../components/lotties/LottieView";

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
  const [animationStarted, setAnimationStarted] = useState(false);

  const messageLabel = useAppSelector((state) =>
    selectWordByKey(state, "stampy.word.message.label"),
  );
  const kansouLabel = useAppSelector((state) =>
    selectWordByKey(state, "stampy.word.kansou"),
  );
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitted, isValid },
    setValue,
  } = useForm<MessageFormType>({
    resolver: valibotResolver(MessageFormSchema),
    defaultValues: {
      stamp: "",
      message: "",
    },
  });

  return (
    <>
      {animationStarted && !isLastDay && (
        <AnimatedView
          assetUri={require("../../assets/lotties/stamp.json")}
          style={{
            width: 330, // ここにViewの幅を設定
            height: 250, // ここにViewの高さを設定
            position: "absolute",
            zIndex: 2,
            top: vs(-20),
            left: s(-5),
            backgroundColor: "white",
          }}
          loop={false}
        />
      )}
      {animationStarted && isLastDay && (
        <>
          <AnimatedView
            assetUri={require("../../assets/lotties/particles.json")}
            style={{
              width: 330, // ここにViewの幅を設定
              height: 250, // ここにViewの高さを設定
              position: "absolute",
              zIndex: 2,
              top: vs(-20),
              left: s(-5),
            }}
            loop={false}
          />
          <AnimatedView
            assetUri={require("../../assets/lotties/letter2.json")}
            style={{
              width: 330, // ここにViewの幅を設定
              height: 250, // ここにViewの高さを設定
              position: "absolute",
              zIndex: 2,
              top: vs(-20),
              left: s(-5),
            }}
            loop={false}
          />
        </>
      )}

      <StyledForm
        maxWidth={s(300)}
        width="100%"
        alignItems="center"
        borderWidth={0}
        buttonLabel={buttonLabel}
        isSubmitting={isSubmitting}
        isSubmitted={isSubmitted}
        isValid={isValid}
        onSubmitAction={handleSubmit((data: FieldValues) => {
          // データ送信処理
          console.log("Submitted! :", data);
          // アニメーションを開始
          setAnimationStarted(true);
          // 2秒後にアニメーションを終了
          setTimeout(() => {
            setAnimationStarted(false);
          }, 3500);
          // TODO: ダイアログを閉じる
          // reduxでmodalの状態を管理した方がいいかも
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
                    height={100}
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
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  animatedView: {
    width: 150, // ここにViewの幅を設定
    height: 80, // ここにViewの高さを設定
    backgroundColor: "transparent", // 背景色などのスタイルを設定
  },
});
