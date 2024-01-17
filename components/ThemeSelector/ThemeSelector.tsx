import { Typography } from "@/components/Typography";
import { ShadowProperties } from "@/constants/MaterialBoxshadow";
import { Plus } from "@tamagui/lucide-icons";
import { ImageBackground, Pressable } from "react-native";
import { ScrollView } from "react-native";
import { s } from "react-native-size-matters";
import { XStack, YStack } from "tamagui";
import { DEFAULT_IMG } from "./fixtures/mock.data";

export const ThemeSelector = () => {
  return (
    <ScrollView horizontal style={{ padding: s(10) }}>
      <XStack space={s(20)} style={{ padding: s(10) }}>
        {DEFAULT_IMG.map((image) => (
          <Pressable>
            <YStack
              style={{
                width: 150,
                height: 300,
              }}
              animation={"bouncy"} // linkになると先に遷移してしまうので、bouncyがあんまりわかんない
              scale={0.9}
              hoverStyle={{ scale: 0.925 }}
              pressStyle={{ scale: 0.925 }}
            >
              <ImageBackground
                source={image.source}
                resizeMode="cover"
                style={{
                  flex: 1,
                  justifyContent: "center",
                  ...ShadowProperties,
                }}
                imageStyle={{ borderRadius: 6 }}
              >
                <Typography
                  type="h3"
                  backgroundColor="#454545c0"
                  color="$text--light"
                  textAlign="center"
                >
                  {image.title}
                </Typography>
              </ImageBackground>
            </YStack>
          </Pressable>
        ))}
        <Pressable>
          <YStack
            style={{
              width: 150,
              height: 300,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 6,
              borderWidth: 1,
            }}
          >
            <YStack
              style={{
                display: "flex",
                borderRadius: 50,
                width: 50,
                height: 50,
                backgroundColor: "#fff",
                justifyContent: "center",
                alignItems: "center",
                borderColor: "rgba(3, 10, 18, 0.81)",
                borderWidth: 1,
              }}
              animation={"bouncy"} // linkになると先に遷移してしまうので、bouncyがあんまりわかんない
              scale={0.9}
              hoverStyle={{ scale: 0.925 }}
              pressStyle={{ scale: 0.925 }}
            >
              <Plus color="$text--dark" />
            </YStack>
          </YStack>
        </Pressable>
      </XStack>
    </ScrollView>
  );
};
