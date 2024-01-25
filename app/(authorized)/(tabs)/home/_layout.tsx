import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { Pressable } from "react-native";

export default function Layout() {
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
          headerShown: false,
          title: "Typography",
          headerLeft: () => (
            <Pressable onPress={() => router.back()}>
              {({ pressed }) => (
                <Ionicons
                  name="arrow-back"
                  size={25}
                  color="#030A12CF"
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
      <Stack.Screen
        name="[id]/index"
        options={{
          headerShown: false,
          headerLeft: () => (
            <Pressable onPress={() => router.back()}>
              {({ pressed }) => (
                <Ionicons
                  name="arrow-back"
                  size={25}
                  color="#030A12CF"
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
      <Stack.Screen
        name="modal"
        options={{ presentation: "modal", headerShown: false }}
      />
    </Stack>
  );
}
