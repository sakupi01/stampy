import { SafeAreaView, StyleSheet } from "react-native";

import { Typography } from "@/components/Typography";
import { StyledList } from "@/ui/StyledList/StyledList";
import { DATA_LETTER } from "@/ui/StyledList/fixture/mock.data";

export default function LetterScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Typography type="h3" marginBottom={30}>
        完走レター
      </Typography>
      <StyledList data={[...DATA_LETTER, ...DATA_LETTER]} />
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
