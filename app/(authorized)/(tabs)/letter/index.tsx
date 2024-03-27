import { SafeAreaView, StyleSheet } from "react-native";

import { SearchBar } from "@/components/SearchBar";
import { ListSkeleton } from "@/components/Skeleton";
import { Typography } from "@/components/Typography";
import { useApi } from "@/libs/hooks/useApi";
import { Letter } from "@/types/Letter";
import { LetterList } from "@/ui/Lists/LetterList";
import { useLocalSearchParams } from "expo-router";
import { s, vs } from "react-native-size-matters";
import { YStack } from "tamagui";

export default function LetterScreen() {
  const { query } = useLocalSearchParams<{ query?: string }>();

  const { useGet } = useApi();
  const {
    data: res,
    isError,
    isLoading,
  } = useGet<{ letters: Letter[] }>("/letter");

  return (
    <SafeAreaView style={styles.container}>
      <YStack
        paddingTop={vs(50)}
        paddingBottom={vs(10)}
        paddingHorizontal={s(30)}
        space={30}
      >
        <Typography type="h3">完走レター</Typography>
        <SearchBar uid="letter" placeholder="タイトルで検索" zIndex={"$1"} />
      </YStack>
      <YStack paddingHorizontal={s(30)} paddingBottom={vs(100)}>
        {!res || isLoading ? (
          <ListSkeleton />
        ) : isError || res.err ? (
          <YStack marginTop={s(5)}>
            <Typography type="h4" textAlign="center">
              取得に失敗しました。
            </Typography>
          </YStack>
        ) : res.val.letters === null || res.val.letters.length === 0 ? (
          <YStack marginTop={s(5)}>
            <Typography type="h4" textAlign="center">
              レターが届くのが待ち遠しいですね！
            </Typography>
          </YStack>
        ) : (
          <YStack paddingBottom={vs(80)}>
            <LetterList query={query} letters={res.val.letters} />
          </YStack>
        )}
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
