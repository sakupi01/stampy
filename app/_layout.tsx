import Providers from "@/libs/provider/providers";
import { FontAwesome } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { Slot, SplashScreen } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";

// import { BlurView } from "expo-blur";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={22} style={{ marginBottom: -3 }} {...props} />;
}

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "home",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono/SpaceMono-Regular.ttf"),
    ZenKakuGothicNewLight: require("../assets/fonts/ZenKakuGothicNew/ZenKakuGothicNew-Light.ttf"),
    ZenKakuGothicNew: require("../assets/fonts/ZenKakuGothicNew/ZenKakuGothicNew-Regular.ttf"),
    ZenKakuGothicNewBold: require("../assets/fonts/ZenKakuGothicNew/ZenKakuGothicNew-Bold.ttf"),
    ZenKakuGothicNewExtraBold: require("../assets/fonts/ZenKakuGothicNew/ZenKakuGothicNew-Black.ttf"),
    InterLight: require("../assets/fonts/Inter/Inter-Light.ttf"),
    Inter: require("../assets/fonts/Inter/Inter-Regular.ttf"),
    InterBold: require("../assets/fonts/Inter/Inter-Bold.ttf"),
    InterExtraBold: require("../assets/fonts/Inter/Inter-ExtraBold.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  return (
    <Providers colorScheme={colorScheme}>
      <Slot />
    </Providers>
  );
}
