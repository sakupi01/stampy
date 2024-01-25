import { StyleSheet, View } from "react-native";

import { StyledButton } from "@/components/StyledButton";
import { Typography } from "@/components/Typography";
import { authActions } from "@/libs/AsyncStorage/Auth/slice";
import { useAppDispatch, useAppSelector } from "@/libs/AsyncStorage/store";

export default function AccountScreen() {
  const { session } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const user = {
    id: "1",
    username: "username",
    email: "email",
    avatarUrl:
      "https://images.unsplash.com/photo-1531384441138-2736e62e0919?&w=100&h=100&dpr=2&q=80",
  };
  const currentDay = 5;

  return (
    <View style={styles.container}>
      <Typography style={styles.title}>Tab Two</Typography>
      <Typography type="ui" color="white">
        {JSON.stringify(session)}
      </Typography>
      <View style={styles.separator} />
      <StyledButton
        onPress={() => {
          dispatch(authActions.signOut());
        }}
      >
        Sign out
      </StyledButton>
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
