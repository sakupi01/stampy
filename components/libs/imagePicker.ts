import { uploadToFirebase } from "@/libs/firebase/upload-image";
import { AccountSettingsType } from "@/schema/accountSetting";
import { StampCardFormType } from "@/schema/stampCard";
import { useToastController } from "@tamagui/toast";
import * as ImagePicker from "expo-image-picker";
import { FieldPath, UseFormSetValue } from "react-hook-form";
import { assertTruthy } from "../../libs/assertTruthy";

type ToastContextI = ReturnType<typeof useToastController>;
type AllowedFormType = AccountSettingsType | StampCardFormType;

export const pickImage = async <FieldType extends AllowedFormType>({
  setImage,
  aspect = [1, 1],
  toast,
  setValue,
  rfhKey,
}: {
  setImage: (value: React.SetStateAction<string>) => void;
  aspect?: [number, number];
  toast: ToastContextI;
  setValue: UseFormSetValue<FieldType>;
  rfhKey: FieldPath<FieldType>;
}) => {
  // No permissions request is necessary for launching the image library
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: aspect,
    quality: 1,
  });
  if (!result.canceled) {
    const { uri } = result.assets[0];
    const fileName = uri.split("/").pop();
    assertTruthy(fileName);
    const uploadResult = await uploadToFirebase(uri, fileName, "avatar", (v) =>
      console.log(v),
    );

    const downloadUrl =
      process.env.EXPO_PUBLIC_GCP_CLOUD_STORE_BASE_URL +
      uploadResult.metadata.fullPath;

    setImage(downloadUrl);

    // @ts-ignore
    setValue(rfhKey, downloadUrl, { shouldDirty: true });
    toast.show("🌟 画像がアップロードされました");
  }
};
