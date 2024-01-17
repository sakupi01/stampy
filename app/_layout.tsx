import Providers from "@/libs/providers";
import { FontAwesome } from "@expo/vector-icons";
import { Bell, Home, Mail, Plus, User } from "@tamagui/lucide-icons";
import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import { Tabs } from "expo-router";
import { useEffect } from "react";
import { TouchableOpacity, useColorScheme } from "react-native";
import { ShadowProperties } from "../constants/MaterialBoxshadow";
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
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#ECB390",
          tabBarInactiveTintColor: "#C5C5C5",
          tabBarInactiveBackgroundColor: "white",
          headerShown: false,
          tabBarStyle: {
            height: 50,
            borderWidth: 1,
            borderRadius: 50,
            borderColor: "rgba(3, 10, 18, 0.81)",
            borderTopColor: "rgba(3, 10, 18, 0.81)",
            borderBottomColor: "rgba(3, 10, 18, 0.81)",
            borderLeftColor: "rgba(3, 10, 18, 0.81)",
            borderRightColor: "rgba(3, 10, 18, 0.81)",
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderLeftWidth: 1,
            borderRightWidth: 1,
            ...ShadowProperties,
            backgroundColor: "white",
            position: "fixed",
            bottom: 20,
            zIndex: 1,
            paddingHorizontal: 20,
            paddingBottom: 5,
            marginHorizontal: 10,
          },
          tabBarButton: (props) => <TouchableOpacity {...props} />,
        }}
      >
        <Tabs.Screen
          // file name to refer to
          name="home"
          options={{
            tabBarIcon: ({ color }) => <Home color={color} />,
            tabBarShowLabel: false,
          }}
        />
        <Tabs.Screen
          // file name to refer to
          name="notification"
          options={{
            tabBarIcon: ({ color }) => <Bell color={color} />,
            tabBarShowLabel: false,
            tabBarBadge: "1",
            tabBarBadgeStyle: {
              backgroundColor: "#EF4444",
            },
          }}
        />
        <Tabs.Screen
          // file name to refer to
          name="create-card"
          options={{
            tabBarIcon: ({ color }) => <Plus color={color} />,
            tabBarShowLabel: false,
            tabBarActiveBackgroundColor: "#ECB390",
            tabBarActiveTintColor: "white",
            tabBarInactiveTintColor: "#C5C5C5",
            tabBarItemStyle: {
              maxWidth: 45,
              maxHeight: 45,
              minWidth: 45,
              minHeight: 45,
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 10,
              borderWidth: 1,
              borderRadius: 50,
              borderColor: "rgba(3, 10, 18, 0.81)",
              top: -10,
            },
            tabBarButton: (props) => (
              <TouchableOpacity {...props} activeOpacity={0.85} />
            ),
          }}
        />
        <Tabs.Screen
          // file name to refer to
          name="letter"
          options={{
            tabBarIcon: ({ color }) => <Mail color={color} />,
            tabBarShowLabel: false,
          }}
        />
        <Tabs.Screen
          // file name to refer to
          name="account"
          options={{
            tabBarIcon: ({ color }) => <User color={color} />,
            tabBarShowLabel: false,
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
    </Providers>
  );
}
