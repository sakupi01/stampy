import { SafeAreaView, StyleSheet } from "react-native";

import { StyledCard } from "@/components/StyledCard";
import { Typography } from "@/components/Typography";
import { assertNonNullable } from "@/libs/assertNonNullable";
import { StampCard } from "@/ui/StampCard";
import { MockStampCards } from "@/ui/StampCard/fixture/mock.data";
import { useLocalSearchParams } from "expo-router";

export default function LetterScreen() {
  const { id } = useLocalSearchParams();
  const card = MockStampCards.find((card) => card.cardId === id);
  assertNonNullable(card);
  return (
    <SafeAreaView style={styles.container}>
      <Typography type="h2" marginBottom={30}>
        {card.title}
      </Typography>
      <StyledCard.Card
        margin={5}
        padding={10}
        width={300}
        height={500}
        maxWidth={300}
        maxHeight={500}
        isBouncy={false}
      >
        <StampCard
          currentDay={card.currentDay}
          stampNodes={card.stampNodes}
          fixedWidth={300}
          fixedHeight={500}
          isEditable
        />
      </StyledCard.Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingVertical: 50,
    paddingHorizontal: 30,
    backgroundColor: "#fff",
  },
});
