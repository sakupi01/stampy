import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

import { StyledCard } from "@/components/StyledCard";
import { Typography } from "@/components/Typography";
import { assertNonNullable } from "@/libs/assertNonNullable";
import { StampCard } from "@/ui/StampCard";
import { MockStampCards } from "@/ui/StampCard/fixture/mock.data";
import { useLocalSearchParams } from "expo-router";
import { s, vs } from "react-native-size-matters";
import { YStack } from "tamagui";

export default function StampCardScreen() {
  const { id } = useLocalSearchParams();
  // /stampcard/:id
  // const repository = new Repository();
  // const res = await repository.get(
  //   "/stampcard/id"
  // );
  const card = MockStampCards.find((card) => card.cardId === id);
  assertNonNullable(card);
  // if (res.ok) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <YStack alignItems="center" width="100%" height="100%">
          <Typography
            type="h2"
            marginBottom={vs(30)}
            textAlign="left"
            width="100%"
          >
            {card.title}
          </Typography>
          <StyledCard.Card
            margin={s(5)}
            width={s(300)}
            height={vs(500)}
            maxWidth={s(300)}
            maxHeight={vs(500)}
            isBouncy={false}
            imageSource={{ uri: card.backgroundUrl }}
          >
            <StampCard
              currentDay={card.currentDay}
              stampNodes={card.stampNodes}
              fixedWidth={s(300)}
              fixedHeight={vs(500)}
              isEditable
            />
          </StyledCard.Card>
        </YStack>
      </ScrollView>
    </SafeAreaView>
  );
  // } else {
  //   return (
  //     <SafeAreaView style={styles.container}>
  //       <ScrollView style={styles.scrollView}>
  //         <Typography type="h2">カードが見つかりませんでした</Typography>
  //       </ScrollView>
  //     </SafeAreaView>
  //   );
  // }
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
