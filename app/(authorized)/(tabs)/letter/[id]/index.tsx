import { KansouLetter } from "@/components/KansouLetter/KansouLetter";
import { CardSkeleton } from "@/components/Skeleton/Skeleton";
import { StampWrapper } from "@/components/StampWrapper/StampWrapper";
import { Typography } from "@/components/Typography";
import { useApi } from "@/libs/hooks/useApi";
import { Letter } from "@/types/Letter";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { s, vs } from "react-native-size-matters";
import { YStack } from "tamagui";

export default function LetterScreen() {
  const { id } = useLocalSearchParams();
  const { useGet } = useApi();
  const { data, isError, isLoading } = useGet(`/letter/${id}`);
  // TODO: 本来はAPIから取得できるようになったら削除

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
              {data.val.notice.title}
            </Typography>
            <YStack space={10} justifyContent="center" alignItems="center">
              <StampWrapper stamp={data.val.notice.stamp} />
              <Typography type="small" color="$text--subtle">
                {data.val.notice.createdAt}日に完了しました
              </Typography>
              <KansouLetter letter={data.val.notice as Letter} />
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
