import { KeyboardAvoidingView, SafeAreaView, StyleSheet } from "react-native";

import { Typography } from "@/components/Typography";
import { AccountForm } from "@/ui/AccountForm";
import { Toast, ToastViewport, useToastState } from "@tamagui/toast";
import { s, vs } from "react-native-size-matters";
import { YStack } from "tamagui";

export default function AccountScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <YStack space={vs(20)}>
        <CurrentToast />
        <Typography type="h3" marginBottom={vs(30)}>
          設定
        </Typography>
        {/* 全体としてフォーム */}
        <KeyboardAvoidingView behavior={"position"}>
          <AccountForm />
        </KeyboardAvoidingView>
        <ToastViewport
          width="100%"
          height="100%"
          alignItems="center"
          flexDirection="column"
        />
      </YStack>
    </SafeAreaView>
  );
}

const CurrentToast = () => {
  const currentToast = useToastState();

  if (!currentToast || currentToast.isHandledNatively) return null;
  return (
    <Toast
      unstyled
      key={currentToast.id}
      duration={currentToast.duration}
      enterStyle={{ opacity: 0, scale: 0.5, y: -25 }}
      exitStyle={{ opacity: 0, scale: 1, y: -20 }}
      y={0}
      opacity={1}
      scale={1}
      animation="bouncy"
      viewportName={currentToast.viewportName}
      borderRadius={50}
      backgroundColor="rgb(232, 230, 227)"
      padding={s(15)}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Toast.Title>
        <Typography type="medium" color="$text--subtle">
          {currentToast.title}
        </Typography>
      </Toast.Title>
    </Toast>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingBottom: vs(50),
    paddingHorizontal: s(30),
    backgroundColor: "#fff",
  },
});
