import { StyleSheet } from "react-native";

import { SearchBar } from "@/components/SearchBar";
import { Typography } from "@/components/Typography";
import { listActions } from "@/libs/AsyncStorage/List/slice";
import { useAppDispatch } from "@/libs/AsyncStorage/store";
import { Repository } from "@/repository/api";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { s, vs } from "react-native-size-matters";
import { YStack } from "tamagui";
import { StampCardList } from "../../../../ui/Lists/StampCardList/StampCardList";
export default function Home() {
  const { query } = useLocalSearchParams<{ query?: string }>();

  const dispatch = useAppDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const repository = new Repository();
      const res = await repository.get("/stampcard");
      if (res.ok) {
        dispatch(listActions.setStampCards({ stampCards: res.val.cards }));
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
          <StampCardList query={query} />
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
