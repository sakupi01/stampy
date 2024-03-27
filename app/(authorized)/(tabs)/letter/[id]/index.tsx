import { KansouLetter } from "@/components/KansouLetter/KansouLetter";
import { CardSkeleton } from "@/components/Skeleton/Skeleton";
import { StampWrapper } from "@/components/StampWrapper/StampWrapper";
import { Typography } from "@/components/Typography";
import { useApi } from "@/libs/hooks/useApi";
import { Repository } from "@/repository/api";
import { Letter } from "@/types/Letter";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { s, vs } from "react-native-size-matters";
import { useSWRConfig } from "swr";
import { YStack } from "tamagui";

export default function letterScreen() {
  const repository = new Repository();
  const { id } = useLocalSearchParams();
  const { mutate } = useSWRConfig();

  const { useGet } = useApi();
  const { data, isError, isLoading } = useGet<{ letter: Letter }>(
    `/letter/${id}`,
  );
  console.log("letter:", id, data);

  useEffect(() => {
    // TODO: 既読にする
    async function markRead() {
      await repository.put(`/letter/read/${id}`);
      mutate(["/letter", undefined, true]);
    }
    markRead();
  }, [id, repository, mutate]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {!data || isLoading ? (
          <YStack marginTop={s(5)}>
            <CardSkeleton />
          </YStack>
        ) : isError || data.err ? (
          <YStack marginTop={s(5)}>
            <Typography type="h4" textAlign="center">
              取得に失敗しました
            </Typography>
          </YStack>
        ) : (
          <YStack space={50}>
            <Typography type="h2" marginBottom={vs(30)}>
              {data.val.letter.title}
            </Typography>
            <YStack space={10} justifyContent="center" alignItems="center">
              <StampWrapper stamp={data.val.letter.stamp} />
              <Typography type="small" color="$text--subtle">
                {data.val.letter.createdAt.split("T")[0]}日に完了しました
              </Typography>
              <KansouLetter letter={data.val.letter as Letter} />
            </YStack>
          </YStack>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingVertical: vs(50),
    paddingHorizontal: s(30),
    backgroundColor: "#fff",
  },
});
