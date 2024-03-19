import { SafeAreaView, StyleSheet } from "react-native";

import { SearchBar } from "@/components/SearchBar";
import { Typography } from "@/components/Typography";
import { listActions } from "@/libs/AsyncStorage/List/slice";
import { useAppDispatch } from "@/libs/AsyncStorage/store";
import { Repository } from "@/repository/api";
import { LetterList } from "@/ui/Lists/LetterList";
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
      const res = await repository.get("/letters");
      if (res.ok) {
        dispatch(listActions.setLetters({ letters: res.val.letters }));
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
        <Typography type="h3">完走レター</Typography>
        <YStack space={30}>
          <SearchBar uid="letter" placeholder="タイトルで検索" zIndex={"$1"} />
          <LetterList query={query} />
        </YStack>
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
