import { SafeAreaView, StyleSheet } from "react-native";

import { SearchBar } from "@/components/SearchBar";
import { Typography } from "@/components/Typography";
import { listActions } from "@/libs/AsyncStorage/List/slice";
import { useAppDispatch } from "@/libs/AsyncStorage/store";
import { Repository } from "@/repository/api";
import { NotificationList } from "@/ui/Lists/NotificationList";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { s, vs } from "react-native-size-matters";
import { YStack } from "tamagui";

export default function LetterScreen() {
  const { query } = useLocalSearchParams<{ query?: string }>();

  const dispatch = useAppDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const repository = new Repository();
      const res = await repository.get("/notifications");
      if (res.ok) {
        dispatch(
          listActions.setNotifications({
            notifications: res.val.notifications,
          }),
        );
      } else {
        return (
          <SafeAreaView style={styles.container}>
            <YStack
              paddingVertical={vs(50)}
              paddingHorizontal={s(30)}
              space={30}
            >
              <Typography type="h3">取得に失敗しました</Typography>
            </YStack>
          </SafeAreaView>
        );
      }
    };
    fetchData();
  }, [dispatch]);
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
