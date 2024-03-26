import { CardSkeleton } from "@/components/Skeleton/Skeleton";
import { StyledCard } from "@/components/StyledCard";
import { Typography } from "@/components/Typography";
import { calculateDaysFromToday } from "@/libs/date";
import { useApi } from "@/libs/hooks/useApi";
import { StampCard } from "@/ui/StampCard";
import { BadgeInfo, Trash2 } from "@tamagui/lucide-icons";
import { Link, useLocalSearchParams } from "expo-router";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { s, vs } from "react-native-size-matters";
import { XStack, YStack } from "tamagui";

export default function StampCardScreen() {
  const { id } = useLocalSearchParams();
  const { useGet } = useApi();
  const { data, isError, isLoading } = useGet(`/stampcard/${id}`);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
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
          <YStack alignItems="center" width="100%" height="100%">
            <XStack>
              <Link
                href={
                  {
                    pathname: "/home/[id]/modal",
                    params: {
                      id: data.val.id,
                    },
                  } as never
                }
              >
                <BadgeInfo color={"$text--subtle"} size={18} />
              </Link>
              <Typography
                type="h3"
                marginBottom={vs(10)}
                textAlign="left"
                width="100%"
              >
                {data.val.title}
              </Typography>
              <Trash2 color={"$destructive--background"} size={18} />
            </XStack>
            <StyledCard.Card
              margin={s(5)}
              width={s(300)}
              height={vs(500)}
              maxWidth={s(300)}
              maxHeight={vs(500)}
              isBouncy={false}
              imageSource={{ uri: data.val.backgroundUrl }}
            >
              <StampCard
                currentDay={calculateDaysFromToday(
                  data.val.startDate.toString().split("T")[0],
                )}
                stampNodes={data.val.stampNodes}
                fixedWidth={s(300)}
                fixedHeight={vs(500)}
                isEditable
              />
            </StyledCard.Card>
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
    backgroundColor: "#fff",
  },
  scrollView: {
    width: "100%",
    height: "100%",
    paddingVertical: vs(50),
    paddingHorizontal: s(30),
    backgroundColor: "#fff",
  },
});
