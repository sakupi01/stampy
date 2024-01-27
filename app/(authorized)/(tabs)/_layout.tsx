import { ShadowProperties } from "@/constants/MaterialBoxshadow";
import { Bell, Home, Mail, Plus, User } from "@tamagui/lucide-icons";
import { Tabs } from "expo-router";
import { StatusBar, StatusBarProps } from "expo-status-bar";
import { SafeAreaView, TouchableOpacity, View } from "react-native";

const MyStatusBar = ({ backgroundColor, ...props }: StatusBarProps) => (
  <View style={[{ backgroundColor }]}>
    <SafeAreaView>
      <StatusBar style="dark" backgroundColor={backgroundColor} {...props} />
    </SafeAreaView>
  </View>
);

export default function Layout() {
  return (
    <>
      <MyStatusBar backgroundColor="transparent" />
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
      </Tabs>
    </>
  );
}
