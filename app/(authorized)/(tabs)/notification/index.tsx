import { SafeAreaView, StyleSheet } from "react-native";

import { SearchBar } from "@/components/SearchBar";
import { Typography } from "@/components/Typography";
import { NotificationList } from "@/ui/Lists/NotificationList";
import { useLocalSearchParams } from "expo-router";
import { s, vs } from "react-native-size-matters";
import { YStack } from "tamagui";

export default function LetterScreen() {
  const { query } = useLocalSearchParams<{ query?: string }>();
  return (
    <SafeAreaView style={styles.container}>
      <YStack paddingVertical={vs(50)} paddingHorizontal={s(30)} space={30}>
        <Typography type="h3">通知リスト</Typography>
        <SearchBar
          uid="notification"
          placeholder="タイトルで検索"
          zIndex={"$1"}
        />
        <NotificationList query={query} />
      </YStack>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },
});
