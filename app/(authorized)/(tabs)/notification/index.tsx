import { SafeAreaView, StyleSheet, View } from "react-native";

import { Typography } from "@/components/Typography";
import { StyledList } from "@/ui/Lists/StyledList/StyledList";
import { DATA } from "@/ui/Lists/StyledList/fixture/mock.data";
import { s, vs } from "react-native-size-matters";

export default function LetterScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Typography type="h3" marginBottom={vs(30)}>
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
    paddingVertical: vs(50),
    paddingHorizontal: s(30),
    backgroundColor: "#fff",
  },
});
