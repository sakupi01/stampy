import { Typography } from "@/components/Typography";
import { ShadowProperties } from "@/constants/MaterialBoxshadow";
import { StampCardFormType } from "@/schema/stampCard";
import { Plus } from "@tamagui/lucide-icons";
import { useToastController } from "@tamagui/toast";
import { useState } from "react";
import { UseFormSetValue } from "react-hook-form";
import { ImageBackground, Pressable } from "react-native";
import { ScrollView } from "react-native";
import { s } from "react-native-size-matters";
import { XStack, YStack } from "tamagui";
import { pickImage } from "../libs/imagePicker";
import { DEFAULT_IMG } from "./fixtures/mock.data";

type ThemeSelectorProps = {
  setValue: UseFormSetValue<StampCardFormType>;
};

const DEFAULT_IMAGE_RESOURCE = "https://source.unsplash.com/ZkOt0N7rP4s";

export const ThemeSelector = ({ setValue, ...props }: ThemeSelectorProps) => {
  const [image, setImage] = useState<string>(DEFAULT_IMAGE_RESOURCE);
  const toast = useToastController();

  const selectFromDefault = (source: string) => {
    setImage(source);
    setValue("backgroundUrl", source);
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
            <Pressable key={image.id}>
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
            onPress={() =>
              pickImage<StampCardFormType>({
                setImage,
                aspect: [3, 4],
                toast,
                setValue,
                rfhKey: "backgroundUrl",
              })
            }
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
