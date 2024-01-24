import { Stampy } from "@/components/images/Stampy";
import { StampCardFormType } from "@/schema/stampCard";
import { useRef, useState } from "react";
import { Control, Controller, UseFormSetValue } from "react-hook-form";
import { TextInput } from "react-native-gesture-handler";
import { s, vs } from "react-native-size-matters";
import { XStack, YStack } from "tamagui";
import { StyledInput } from "../StyledInput/StyledInput";
import { Typography } from "../Typography/Typography";
type CoWorkerSelectorProps = {
  inputControl: Control<StampCardFormType>;
  setValue: UseFormSetValue<StampCardFormType>;
};
export const CoWorkerSelector = ({
  inputControl,
  setValue,
}: CoWorkerSelectorProps) => {
  const [stampy, setStampy] = useState(false);
  const inputRef = useRef<TextInput>(null);

  const handleSetStampy = () => {
    inputRef.current?.blur(); // remove focus
    const isStampy = !stampy;
    setStampy(isStampy);
    setValue("isStampy", isStampy);
    setValue("receiver", undefined);
  };

  return (
    <YStack space={vs(5)}>
      <Typography>誰と一緒に始めますか？</Typography>
      <XStack width="100%" alignItems="center" space={s(10)}>
        <YStack
          space={vs(10)}
          alignItems="center"
          animation={"bouncy"} // linkになると先に遷移してしまうので、bouncyがあんまりわかんない
          scale={0.9}
          hoverStyle={{ scale: 0.925 }}
          pressStyle={{ scale: 0.925 }}
          borderColor="$accent--background"
          borderWidth={stampy ? 2 : 0}
          borderRadius={stampy ? 6 : 0}
          padding={s(6)}
          onPress={handleSetStampy}
        >
          <Stampy />
          <Typography type="medium">Stampy</Typography>
        </YStack>

        <Typography>OR</Typography>

        <YStack paddingHorizontal={s(10)} flexShrink={1} alignItems="center">
          <YStack flex={1} width="100%" justifyContent="center">
            <Controller
              control={inputControl}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <StyledInput
                  ref={inputRef}
                  id="receiver"
                  label="メールアドレス"
                  placeholder="email"
                  // height={vs(30)}
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
              ※スタンプカードを作成すると自動的に相手に招待リンクが送信されます
            </Typography>
          </YStack>
          <Typography type="medium">招待メールを送信</Typography>
        </YStack>
      </XStack>
    </YStack>
  );
};
