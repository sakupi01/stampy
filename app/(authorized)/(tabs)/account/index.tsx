import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

import { StyledButton } from "@/components/StyledButton";
import { Typography } from "@/components/Typography";
import { authActions } from "@/libs/AsyncStorage/Auth/slice";
import { useAppDispatch, useAppSelector } from "@/libs/AsyncStorage/store";
import { s, vs } from "react-native-size-matters";

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
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Typography type="ui">{JSON.stringify(session)}</Typography>
        <StyledButton
          onPress={() => {
            dispatch(authActions.unAuthorize());
          }}
        >
          Sign out
        </StyledButton>
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
