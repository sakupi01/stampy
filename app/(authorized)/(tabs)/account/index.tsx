import { SafeAreaView, StyleSheet } from "react-native";

import { Typography } from "@/components/Typography";
import { AccountForm } from "@/ui/AccountForm";
import { s, vs } from "react-native-size-matters";
import { YStack } from "tamagui";

export default function AccountScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <YStack space={vs(20)}>
        <Typography type="h3" marginBottom={vs(30)}>
          設定
        </Typography>
        {/* 全体としてフォーム */}
        <AccountForm />
      </YStack>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingBottom: vs(50),
    paddingHorizontal: s(30),
    backgroundColor: "#fff",
  },
});
