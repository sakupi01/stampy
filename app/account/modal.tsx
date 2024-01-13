import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";

import { Typography } from "@/components/Typography";
import { View } from "../../components/Themed";

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Typography type="h2" marginBottom={30}>
        Modal
      </Typography>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
