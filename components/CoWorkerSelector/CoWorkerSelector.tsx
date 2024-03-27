import { StampCardFormType } from "@/schema/stampCard";
import { useRef, useState } from "react";
import { Control, Controller, UseFormSetValue } from "react-hook-form";
import { TextInput } from "react-native-gesture-handler";
import { s, vs } from "react-native-size-matters";
import { XStack, YStack } from "tamagui";
import { StyledInput } from "../StyledInput/StyledInput";
import { Typography } from "../Typography/Typography";
import AnimatedView from "../lotties/LottieView";
type CoWorkerSelectorProps = {
  inputControl?: Control<StampCardFormType>;
  setValue: UseFormSetValue<StampCardFormType>;
};
export const CoWorkerSelector = ({
  inputControl,
  setValue,
}: CoWorkerSelectorProps) => {
  const [stampy, setStampy] = useState(false);
  const inputRef = useRef<TextInput>(null);

  const handleStampyState = () => {
    const isStampy = !stampy;
    if (isStampy) {
      inputRef.current?.blur(); // remove focus
      setStampy(isStampy);

      setValue("isStampy", isStampy, { shouldDirty: true });
      setValue("receiver", undefined, { shouldDirty: true });
    } else {
      inputRef.current?.focus(); // remove focus
      setStampy(isStampy);
      setValue("isStampy", isStampy, { shouldDirty: true });
      // メールドレスバリデーションを有効にするために空文字を入れる
      setValue("receiver", " ", { shouldDirty: true });
    }
  };

  return (
    <YStack space={vs(5)}>
      <Typography>誰と一緒に始めますか？</Typography>
      <XStack width="100%" alignItems="center" space={s(10)}>
        {inputControl ? (
          <Controller
            control={inputControl}
            rules={{
              required: false,
            }}
            render={({ field: { onBlur } }) => (
              <YStack
                space={vs(10)}
                alignItems="center"
                justifyContent="center"
                width={s(100)}
                // height={vs(120)}
                animation={"bouncy"} // linkになると先に遷移してしまうので、bouncyがあんまりわかんない
                scale={0.9}
                hoverStyle={{ scale: 0.925 }}
                pressStyle={{ scale: 0.925 }}
                borderColor="$accent--background"
                borderWidth={stampy ? 2 : 0}
                borderRadius={stampy ? 6 : 0}
                padding={s(6)}
                onBlur={onBlur}
                onPress={handleStampyState}
              >
                <AnimatedView
                  assetUri={require("../../assets/lotties/stampy.json")}
                  style={{
                    flex: 1,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />
                <Typography type="medium">Stampy</Typography>
              </YStack>
            )}
            name="isStampy"
          />
        ) : (
          <></>
        )}

        <Typography>OR</Typography>
        {inputControl ? (
          <YStack paddingHorizontal={s(10)} flexShrink={1} alignItems="center">
            <YStack flex={1} width="100%" justifyContent="center">
              <Controller
                control={inputControl}
                rules={{
                  required: false,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <StyledInput
                    ref={inputRef}
                    id="receiver"
                    label="メールアドレス"
                    placeholder="email"
                    onFocus={() => {
                      setStampy(false);
                      setValue("isStampy", false);
                    }}
                    focusStyle={{
                      borderColor: "$accent--background",
                      borderWidth: 2,
                    }}
                    autoFocus={false}
                    onChangeText={onChange}
                    value={value}
                    onBlur={onBlur}
                  />
                )}
                name="receiver"
              />

              <Typography type="small" color="$text--subtle">
                ※スタンプカードを作成すると自動的に相手が登録されます
              </Typography>
            </YStack>
            <Typography type="ui">招待を送信</Typography>
          </YStack>
        ) : (
          <></>
        )}
      </XStack>
    </YStack>
  );
};
