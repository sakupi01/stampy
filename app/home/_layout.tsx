import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { Pressable, useColorScheme } from "react-native";

export default function Layout() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="typography/index"
        options={{
          headerShown: true,
          title: "Typography",
          headerLeft: () => (
            <Pressable onPress={() => router.back()}>
              {({ pressed }) => (
                <Ionicons
                  name="arrow-back"
                  size={25}
                  color={Colors[colorScheme ?? "light"].text}
                  style={{
                    marginLeft: 15,
                    opacity: pressed ? 0.5 : 1,
                    fontSize: 20,
                  }}
                />
              )}
            </Pressable>
          ),
        }}
      />
    </Stack>
  );
}
