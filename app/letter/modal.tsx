import { StyleSheet, View } from "react-native";

import { Typography } from "@/components/Typography";

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Typography type="h2" marginBottom={30}>
        Modal in List
      </Typography>
      <View style={styles.separator} />
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
