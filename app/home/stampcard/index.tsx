import { StyleSheet } from "react-native";

import { StampCard } from "@/components/StampCard";
import { MockStampNodes } from "@/components/StampCard/fixture/mock.data";
import { StyledCard } from "@/components/StyledCard";
import { View } from "../../../components/Themed";
import { Typography } from "../../../components/Typography";

export default function StampCardScreen() {
  return (
    <View style={styles.container}>
      <Typography type="h2">StampCard</Typography>
      <StyledCard.Card padding={10} margin={5} width={300} height={500}>
        <StampCard
          currentDay={5}
          stampNodes={MockStampNodes}
          fixedWidth={300}
          fixedHeight={500}
        />
      </StyledCard.Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
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
