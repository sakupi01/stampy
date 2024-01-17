import { Typography } from "@/components/Typography";
import { ShadowProperties } from "@/constants/MaterialBoxshadow";
import { Plus } from "@tamagui/lucide-icons";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { ImageBackground, Pressable } from "react-native";
import { ScrollView } from "react-native";
import { s } from "react-native-size-matters";
import { XStack, YStack } from "tamagui";
import { DEFAULT_IMG } from "./fixtures/mock.data";

export const ThemeSelector = () => {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const selectFromDefault = (source: string) => {
    setImage(source);
  };

  return (
    <YStack>
      <Typography>テーマ</Typography>
      <ScrollView horizontal>
        <XStack
          space={s(20)}
          paddingTop={s(10)}
          paddingBottom={s(10)}
          paddingRight={s(10)}
        >
          {DEFAULT_IMG.map((image) => (
            <Pressable>
              <YStack
                width={150}
                height={300}
                animation={"bouncy"} // linkになると先に遷移してしまうので、bouncyがあんまりわかんない
                scale={0.9}
                hoverStyle={{ scale: 0.925 }}
                pressStyle={{ scale: 0.925 }}
                onPress={() => selectFromDefault(image.source.uri)}
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
          <Pressable onPress={pickImage}>
            <YStack
              width={150}
              height={300}
              display="flex"
              justifyContent="center"
              alignItems="center"
              borderRadius={6}
              borderWidth={1}
              animation={"bouncy"} // linkになると先に遷移してしまうので、bouncyがあんまりわかんない
              scale={0.9}
              hoverStyle={{ scale: 0.925 }}
              pressStyle={{ scale: 0.925 }}
              onPress={pickImage}
            >
              <YStack
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderRadius={50}
                width={50}
                height={50}
                backgroundColor="#fff"
                borderColor="rgba(3, 10, 18, 0.81)"
                borderWidth={1}
              >
                <Plus color="$text--dark" />
              </YStack>
            </YStack>
          </Pressable>
        </XStack>
      </ScrollView>
      {image && (
        <YStack
          borderColor="$accent--background"
          width={150}
          height={300}
          borderWidth={2}
          borderRadius={6}
          padding={s(3)}
          animation={"bouncy"} // linkになると先に遷移してしまうので、bouncyがあんまりわかんない
          scale={0.9}
          hoverStyle={{ scale: 0.925 }}
          pressStyle={{ scale: 0.925 }}
        >
          <ImageBackground
            source={{ uri: image }}
            resizeMode="cover"
            style={{
              flex: 1,
              justifyContent: "center",
              ...ShadowProperties,
            }}
            imageStyle={{ borderRadius: 6 }}
          />
        </YStack>
      )}
    </YStack>
  );
};
