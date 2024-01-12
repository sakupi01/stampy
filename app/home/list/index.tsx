import { SafeAreaView, StyleSheet } from "react-native";

import { Typography } from "@/components/Typography";
import { StyledList } from "@/ui/StyledList/StyledList";
import { DATA } from "../../../ui/StyledList/fixture/mock.data";

export default function List() {
  return (
    <SafeAreaView style={styles.container}>
      <Typography type="h2" marginBottom={30}>
        通知リスト
      </Typography>
      <StyledList data={[...DATA, ...DATA]} />
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
