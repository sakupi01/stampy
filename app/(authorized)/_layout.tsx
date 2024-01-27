import { Typography } from "@/components/Typography";
import { useAppSelector } from "@/libs/AsyncStorage/store";
import { Redirect } from "expo-router";
import { Slot } from "expo-router";

export default function Layout() {
  const { session, isLoading } = useAppSelector((state) => state.auth);
  console.log("session:", session);
  // You can keep the splash screen open, or render a loading screen like we do here.
  if (isLoading) {
    return <Typography type="ui">Loading...</Typography>;
  }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (authorized) group and sign in again.
  if (session === null) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/sign-in" />;
  }

  return <Slot />;
}
