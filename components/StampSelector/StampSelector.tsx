import { useState } from "react";
import { UseFormSetValue } from "react-hook-form";
import { TextInput, TextInputIOSProps, TextInputProps } from "react-native";
import EmojiPicker, { EmojiType, ja } from "rn-emoji-keyboard";
import { StampWrapper } from "../StampWrapper/StampWrapper";

export type StampSelectorProps = TextInputProps &
  TextInputIOSProps & {
    setValue: UseFormSetValue<{
      stamp: string;
      message: string;
    }>;
  };
export const StampSelector = ({ setValue, ...props }: StampSelectorProps) => {
  const [result, setResult] = useState<string>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handlePick = (emoji: EmojiType) => {
    setResult(emoji.emoji);
    setIsModalOpen((prev) => !prev);
    setValue("stamp", emoji.emoji);
  };
  return (
    <>
      <StampWrapper
        stamp={result}
        onPress={() => setIsModalOpen(true)}
        isSelector
      />
      <TextInput
        {...props}
        value={result}
        style={{ visibility: "hidden" }}
        editable={false}
      />
      <EmojiPicker
        onEmojiSelected={handlePick}
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        enableSearchBar
        enableRecentlyUsed
        translation={ja}
      />
    </>
  );
};
