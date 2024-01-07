import { StyleSheet } from "react-native";

import EditScreenInfo from "../../../components/EditScreenInfo";
import { Text, View } from "../../../components/Themed";
import { Typography } from "../../../components/Typography";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home - Detail</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
      <Typography type="h1">あいうえお</Typography>
      <Typography type="h2">あいうえお</Typography>
      <Typography type="h3">あいうえお</Typography>
      <Typography type="h4">あいうえお</Typography>
      <Typography type="paragraph">あいうえお</Typography>
      <Typography type="ui">あいうえお</Typography>
      <Typography type="large">あいうえお</Typography>
      <Typography type="medium">あいうえお</Typography>
      <Typography type="small">あいうえお</Typography>
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
