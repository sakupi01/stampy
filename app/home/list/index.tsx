import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

import { Typography } from "@/components/Typography";
import { StyledList } from "@/ui/StyledList/StyledList";
import { DATA } from "../../../ui/StyledList/fixture/mock.data";

export default function List() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Typography type="h2">通知リスト</Typography>
        <StyledList data={DATA} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  scrollView: {
    backgroundColor: "#fff",
  },
});
