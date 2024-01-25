import { StyledButton } from "@/components/StyledButton";
import { authActions } from "@/libs/AsyncStorage/Auth/slice";
import { useAppSelector } from "@/libs/AsyncStorage/store";
import { router } from "expo-router";
import { View } from "react-native";

import { useDispatch } from "react-redux";

export default function SignIn() {
  const dispatch = useDispatch();
  const { isLoading } = useAppSelector((state) => state.auth);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <StyledButton
        onPress={() => {
          // authorization logic with server
          dispatch(authActions.isLoading(true));
          // async dispatch so need to wait
          dispatch(authActions.signIn("sessid-xxx123ccc"));
          dispatch(authActions.isLoading(false));
          // Navigate after signing in. You may want to tweak this to ensure sign-in is
          // successful before navigating.
          router.replace("/");
        }}
      >
        {isLoading ? "Loading... " : "Sign In"}
      </StyledButton>
    </View>
  );
}
