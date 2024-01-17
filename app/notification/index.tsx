import { SafeAreaView, StyleSheet, View } from "react-native";

import { Typography } from "@/components/Typography";
import { StyledList } from "@/ui/StyledList/StyledList";
import { DATA } from "@/ui/StyledList/fixture/mock.data";

export default function LetterScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Typography type="h3" marginBottom={30}>
          通知リスト
        </Typography>
        <StyledList data={[...DATA]} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  wrapper: {
    width: "100%",
    height: "100%",
    paddingVertical: 50,
    paddingHorizontal: 30,
    backgroundColor: "#fff",
  },
});
