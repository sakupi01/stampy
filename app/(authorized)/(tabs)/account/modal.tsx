import { StyleSheet, View } from "react-native";

import { Typography } from "@/components/Typography";
import { authActions } from "@/libs/AsyncStorage/Auth/slice";
import { useAppDispatch } from "@/libs/AsyncStorage/store";

export default function ModalScreen() {
  const dispatch = useAppDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.separator} />
      <Typography
        type="ui"
        underlined
        color={"$destructive--background"}
        onPress={() => {
          dispatch(authActions.unAuthorize());
        }}
      >
        ログアウト
      </Typography>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
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
