import { Letter } from "@/types/Letter";
import { ImageBackground } from "react-native";
import { s } from "react-native-size-matters";
import { YGroup } from "tamagui";
import { Typography } from "../Typography/Typography";
export type KansouLetterProps = {
  letter: Letter;
};

export const KansouLetter = ({ letter }: KansouLetterProps) => {
  return (
    <ImageBackground
      source={require("../../assets/images/paperWhite.jpeg")}
      resizeMode="cover"
      style={{ width: "100%" }}
    >
      <YGroup
        padding={s(30)}
        space={s(40)}
        justifyContent="center"
        alignItems="center"
      >
        <YGroup.Item>
          <Typography type="medium" textAlign="center">
            {letter.receiver.username}さんへ
          </Typography>
        </YGroup.Item>
        <YGroup.Item>
          {/* @ts-ignore */}
          <Typography type="medium" textAlign="left" lineHeight="$h3">
            {letter.content}
          </Typography>
        </YGroup.Item>
        <YGroup.Item>
          <Typography type="medium" textAlign="center">
            {letter.sender.username}より
          </Typography>
        </YGroup.Item>
      </YGroup>
    </ImageBackground>
  );
};
