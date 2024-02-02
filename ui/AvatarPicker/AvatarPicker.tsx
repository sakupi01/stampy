import { assertTruthy } from "@/libs/assertTruthy";
import { uploadToFirebase } from "@/libs/firebase/upload-image";
import { AccountSettingsType } from "@/schema/accountSetting";
import { Pencil } from "@tamagui/lucide-icons";
import { useToastController } from "@tamagui/toast";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { UseFormSetValue } from "react-hook-form";
import { s } from "react-native-size-matters";
import { Avatar, View } from "tamagui";

type AvatarPickerProps = {
  defaultUrl: string;
  setValue: UseFormSetValue<AccountSettingsType>;
};
export const AvatarPicker = ({ defaultUrl, setValue }: AvatarPickerProps) => {
  const [image, setImage] = useState<string>(defaultUrl);
  const toast = useToastController();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.canceled) {
      const { uri } = result.assets[0];
      const fileName = uri.split("/").pop();
      assertTruthy(fileName);
      const uploadResult = await uploadToFirebase(
        uri,
        fileName,
        "avatar",
        (v) => console.log(v),
      );
      setImage(uploadResult.downloadUrl);
      setValue("avatarUrl", uploadResult.downloadUrl);
      toast.show("🌟 画像がアップロードされました");
    }
  };

  return (
    <View>
      <View
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius={50}
        backgroundColor={"white"}
        opacity={0.8}
        borderColor={"$stroke--dark"}
        borderWidth={1}
        width={s(30)}
        height={s(30)}
        position="absolute"
        right={0}
        zIndex={1}
        pressStyle={{ backgroundColor: "$accent--background" }}
        onPress={pickImage}
      >
        <Pencil color="$text--subtle" size={s(18)} />
      </View>
      <Avatar circular size="$9">
        <Avatar.Image accessibilityLabel={image} src={image} />
        <Avatar.Fallback backgroundColor="$blue10" />
      </Avatar>
    </View>
  );
};
