import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import { Link, Tabs } from "expo-router";
import { useEffect } from "react";
import { Pressable, useColorScheme } from "react-native";
import { Provider } from "react-redux";
import { TamaguiProvider } from "tamagui";
import Colors from "../constants/Colors";
import { store } from "../libs/AsyncStorage/store";
import config from "../tamagui.config";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
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
    <Provider store={store}>
      <TamaguiProvider config={config}>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <Tabs
            screenOptions={{
              tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
            }}
          >
            <Tabs.Screen
              // file name to refer to
              name="home"
              options={{
                title: "Home",
                href: "home",
                tabBarIcon: ({ color }) => (
                  <TabBarIcon name="code" color={color} />
                ),
                headerRight: () => (
                  <Link href="/modal" asChild>
                    <Pressable>
                      {({ pressed }) => (
                        <FontAwesome
                          name="info-circle"
                          size={25}
                          color={Colors[colorScheme ?? "light"].text}
                          style={{
                            marginRight: 15,
                            opacity: pressed ? 0.5 : 1,
                          }}
                        />
                      )}
                    </Pressable>
                  </Link>
                ),
              }}
            />
            <Tabs.Screen
              // file name to refer to
              name="two"
              options={{
                title: "Tab Two",
                href: "two",
                tabBarIcon: ({ color }) => (
                  <TabBarIcon name="code" color={color} />
                ),
              }}
            />
            {/**
             * リダイレクト用の index は Bottom Tabs で表示しない
             * - https://docs.expo.dev/router/advanced/tabs/#hiding-a-tab
             */}
            <Tabs.Screen
              name="index"
              options={{
                href: null,
              }}
            />
            <Tabs.Screen
              name="[...missing]"
              options={{
                href: null,
              }}
            />
          </Tabs>
        </ThemeProvider>
      </TamaguiProvider>
    </Provider>
  );
}
