import { DatePicker } from "@/components/DatePicker";
import { ThemeSelector } from "@/components/ThemeSelector";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { ms, s, vs } from "react-native-size-matters";
export default function CreateCardScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <TextInput
          style={{
            marginBottom: vs(30),
            lineHeight: ms(32, 2),
            fontWeight: "bold",
            letterSpacing: -0.6,
            fontSize: ms(24, 2),
            fontFamily: "ZenKakuGothicNewBold",
          }}
          placeholder="スタンプカードのタイトル"
        />
        <DatePicker />
        <ThemeSelector />
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
    paddingVertical: vs(50),
    paddingHorizontal: s(30),
    backgroundColor: "#fff",
  },
});
