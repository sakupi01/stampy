import Colors from "@/constants/Colors";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Link, Stack, useRouter } from "expo-router";
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
        name="[id]/index"
        options={{
          headerShown: true,
          title: "",
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
          headerRight: () => (
            <Link href="/letter/modal" asChild>
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
      <Stack.Screen
        name="modal"
        options={{ presentation: "modal", headerShown: false }}
      />
    </Stack>
  );
}
