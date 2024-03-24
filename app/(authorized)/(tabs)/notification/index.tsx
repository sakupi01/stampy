import { SearchBar } from "@/components/SearchBar";
import { ListSkeleton } from "@/components/Skeleton";
import { Typography } from "@/components/Typography";
import { useApi } from "@/libs/hooks/useApi";
import { NotificationList } from "@/ui/Lists/NotificationList";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView, StyleSheet } from "react-native";
import { s, vs } from "react-native-size-matters";
import { YStack } from "tamagui";

export default function NotificationScreen() {
  const { query } = useLocalSearchParams<{ query?: string }>();

  const { useGet } = useApi();
  // NOTE: mutateしないのでintervalを設ける
  const {
    data: res,
    isError,
    isLoading,
  } = useGet("/notice", undefined, true, { refreshInterval: 5000 });
  console.log("**********");
  console.log(res?.val.notice);
  console.log("**********");
  return (
    <SafeAreaView style={styles.container}>
      <YStack paddingVertical={vs(50)} paddingHorizontal={s(30)} space={30}>
        <Typography type="h3">通知リスト</Typography>
        <SearchBar
          uid="notification"
          placeholder="タイトルで検索"
          zIndex={"$1"}
        />
        {!res?.val.notice ? (
          <YStack marginTop={s(5)}>
            <Typography type="h4" textAlign="center">
              ここはまだとても静かです。
            </Typography>
          </YStack>
        ) : isLoading ? (
          <ListSkeleton />
        ) : isError || res.err ? (
          <YStack marginTop={s(5)}>
            <Typography type="h4" textAlign="center">
              取得に失敗しました。
            </Typography>
          </YStack>
        ) : (
          <NotificationList query={query} notifications={res.val.notice} />
        )}
      </YStack>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#ffffff",
  },
});
