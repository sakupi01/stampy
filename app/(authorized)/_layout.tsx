import { Typography } from "@/components/Typography";
import { authActions } from "@/libs/AsyncStorage/Auth/slice";
import { useAppDispatch, useAppSelector } from "@/libs/AsyncStorage/store";
import { assertNonNullable } from "@/libs/assertNonNullable";
import { Redirect } from "expo-router";
import { Slot } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { useEffect } from "react";
import { Platform } from "react-native";

export default function Layout() {
  const { session, isLoading } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  console.log("session:", session);

  useEffect(() => {
    if (Platform.OS === "web") {
      try {
        if (typeof localStorage !== "undefined") {
          const value = localStorage.getItem("session");
          assertNonNullable(value);
          dispatch(authActions.signIn(value));
        }
      } catch (e) {
        console.error("Local storage is unavailable:", e);
      }
    } else {
      SecureStore.getItemAsync("session").then((value) => {
        console.log("SecureStore.getItemAsync('session'):", value);
        assertNonNullable(value);
        dispatch(authActions.signIn(value));
      });
    }
  }, [dispatch]);
  // You can keep the splash screen open, or render a loading screen like we do here.
  if (isLoading) {
    return <Typography type="ui">Loading...</Typography>;
  }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (authorized) group and sign in again.
  if (session === null) {
    console.log("session:", session);
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/sign-in" />;
  }

  return <Slot />;
}
