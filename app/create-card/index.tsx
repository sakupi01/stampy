import { DatePicker } from "@/components/DatePicker";
import { ThemeSelector } from "@/components/ThemeSelector";
import { View } from "@/components/Themed";
import { SafeAreaView, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { ms, s, vs } from "react-native-size-matters";
export default function CreateCardScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
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
