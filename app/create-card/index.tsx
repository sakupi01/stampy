import { CreateCardForm } from "@/ui/CreateCardForm";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { s, vs } from "react-native-size-matters";

export default function CreateCardScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <CreateCardForm />
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
