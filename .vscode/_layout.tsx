import { Typography } from "@/components/Typography";
import { Slot } from "expo-router";
import { SafeAreaView, ScrollView } from "react-native";
import { StyleSheet } from "react-native";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Typography type="h3" marginBottom={30}>
          スタンプカードのタイトル
        </Typography>
        <Slot />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  scrollView: {
    width: "100%",
    height: "100%",
    paddingVertical: 50,
    paddingHorizontal: 30,
    backgroundColor: "#fff",
  },
});
