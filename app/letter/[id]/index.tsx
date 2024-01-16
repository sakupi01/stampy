import { SafeAreaView, StyleSheet } from "react-native";

import { Typography } from "@/components/Typography";
import { assertNonNullable } from "@/libs/assertNonNullable";
import { DATA_LETTER } from "@/ui/StyledList/fixture/mock.data";
import { useLocalSearchParams } from "expo-router";
import { YStack } from "tamagui";
import { StampWrapper } from "../../../components/StampWrapper/StampWrapper";

export default function LetterScreen() {
  const { id } = useLocalSearchParams();
  const letter = DATA_LETTER.find((letter) => letter.id === id);
  assertNonNullable(letter);
  return (
    <SafeAreaView style={styles.container}>
      <YStack space={50}>
        <Typography type="h2" marginBottom={30}>
          {letter.title}
        </Typography>
        <YStack space={10} justifyContent="center" alignItems="center">
          <StampWrapper stamp={letter.stamp} />
          <Typography type="small" color="$text--subtle">
            {letter.createdAt}日に完了しました
          </Typography>
        </YStack>
      </YStack>
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
