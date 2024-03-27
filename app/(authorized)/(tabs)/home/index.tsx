import { SearchBar } from "@/components/SearchBar";
import { CardSkeleton } from "@/components/Skeleton/Skeleton";
import { Typography } from "@/components/Typography";
import { useApi } from "@/libs/hooks/useApi";
import { StampCard } from "@/types/StampCard";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet } from "react-native";
import { SafeAreaView, ScrollView } from "react-native";
import { s, vs } from "react-native-size-matters";
import { YStack } from "tamagui";
import { StampCardList } from "../../../../ui/Lists/StampCardList/StampCardList";
export default function Home() {
  const { query } = useLocalSearchParams<{ query?: string }>();
  const { useGet } = useApi();
  const {
    data: res,
    isError,
    isLoading,
  } = useGet<{ cards: StampCard[] }>("/stampcard");

  return (
    <SafeAreaView style={styles.container}>
      <YStack
        paddingTop={vs(50)}
        paddingBottom={vs(10)}
        paddingHorizontal={s(30)}
        space={30}
      >
        <Typography type="h3">わたしのスタンプカード</Typography>
        <SearchBar uid="card" placeholder="タイトルで検索" zIndex={"$1"} />
      </YStack>
      <ScrollView style={styles.scrollView}>
        <YStack alignItems="center" paddingBottom={vs(100)}>
          {!res || isLoading ? (
            <YStack>
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </YStack>
          ) : isError || res.err ? (
            <Typography type="h4" textAlign="center">
              取得に失敗しました。
            </Typography>
          ) : res.val.cards === null || res.val.cards.length === 0 ? (
            <Typography type="h4" textAlign="center">
              スタンプカードを作ってみましょう！
            </Typography>
          ) : (
            <YStack paddingBottom={vs(100)}>
              <StampCardList query={query} cards={res.val.cards} />
            </YStack>
          )}
        </YStack>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
  },
  scrollView: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },
});
