import { SearchBar } from "@/components/SearchBar";
import { Typography } from "@/components/Typography";
import { useApi } from "@/libs/hooks/useApi";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet } from "react-native";
import { SafeAreaView, ScrollView } from "react-native";
import { s, vs } from "react-native-size-matters";
import { YStack } from "tamagui";
import { StampCardList } from "../../../../ui/Lists/StampCardList/StampCardList";
export default function Home() {
  const { query } = useLocalSearchParams<{ query?: string }>();
  const { useGet } = useApi();
  const { data: res, isError, isLoading } = useGet("/stampcard");

  if (!res || isError || res.err) {
    return (
      <SafeAreaView style={styles.container}>
        <YStack paddingVertical={vs(50)} paddingHorizontal={s(30)} space={30}>
          <Typography type="h3">取得に失敗しました</Typography>
        </YStack>
      </SafeAreaView>
    );
  }
  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <YStack paddingVertical={vs(50)} paddingHorizontal={s(30)} space={30}>
          <Typography type="h3">ロード中</Typography>
        </YStack>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <YStack
        paddingTop={vs(50)}
        paddingBottom={vs(30)}
        paddingHorizontal={s(30)}
        space={30}
      >
        <Typography type="h3">わたしのスタンプカード</Typography>
        <SearchBar uid="card" placeholder="タイトルで検索" zIndex={"$1"} />
      </YStack>
      <ScrollView style={styles.scrollView}>
        <YStack alignItems="center" width="100%" height="100%">
          <StampCardList query={query} cards={res.val.cards} />
        </YStack>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },
  scrollView: {
    width: "100%",
    height: "100%",
  },
});
