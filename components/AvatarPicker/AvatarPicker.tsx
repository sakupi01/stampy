import { AccountSettingsType } from "@/schema/accountSetting";
import { Pencil } from "@tamagui/lucide-icons";
import { useToastController } from "@tamagui/toast";
import { useState } from "react";
import { UseFormSetValue } from "react-hook-form";
import { s } from "react-native-size-matters";
import { Avatar, View } from "tamagui";
import { AvatarSkeleton } from "../Skeleton/Skeleton";
import { pickImage } from "../libs/imagePicker";

const DEFAULT_IMAGE = require("../../assets/images/linerbg.png");
type AvatarPickerProps = {
  defaultUrl: string;
  setValue: UseFormSetValue<AccountSettingsType>;
};
export const AvatarPicker = ({ defaultUrl, setValue }: AvatarPickerProps) => {
  const [image, setImage] = useState<string>(defaultUrl);
  const toast = useToastController();

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
        onPress={() =>
          pickImage<AccountSettingsType>({
            setImage,
            toast,
            setValue,
            rfhKey: "avatarUrl",
          })
        }
      >
        <Pencil color="$text--subtle" size={s(18)} />
      </View>
      <Avatar circular size={100}>
        <Avatar.Image
          accessibilityLabel={"アバター画像です"}
          src={image === "" ? DEFAULT_IMAGE : image}
        />
        <Avatar.Fallback delayMs={600}>
          <AvatarSkeleton />
        </Avatar.Fallback>
      </Avatar>
    </View>
  );
};
