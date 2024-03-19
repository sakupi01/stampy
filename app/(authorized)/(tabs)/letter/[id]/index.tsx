import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

import { KansouLetter } from "@/components/KansouLetter/KansouLetter";
import { StampWrapper } from "@/components/StampWrapper/StampWrapper";
import { Typography } from "@/components/Typography";
import { assertNonNullable } from "@/libs/assertNonNullable";
import { Letter } from "@/types/Letter";
import { DATA_LETTER } from "@/ui/Lists/StyledList/fixture/mock.data";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { s, vs } from "react-native-size-matters";
import { YStack } from "tamagui";

export default function LetterScreen() {
  const { id } = useLocalSearchParams();
  const [letters, setData] = useState<Letter | undefined>(undefined);

  const letter = DATA_LETTER.find((letter) => letter.id === id);
  assertNonNullable(letter);

  useEffect(() => {
    const fetchData = async () => {
      // /stampcard/:id
      // const repository = new Repository();
      // const res = await repository.get(`/stampcard/${id}`);
      // if (res.ok) {
      const letter = DATA_LETTER.find((letter) => letter.id === id);
      assertNonNullable(letter);

      setData(letter);
      // setData(res.val);
      // }else{
      //     return(
      //       <SafeAreaView style={styles.container}>
      //         <ScrollView style={styles.scrollView}>
      //           <Typography type="h2">カードが見つかりませんでした</Typography>
      //         </ScrollView>
      //       </SafeAreaView>
      //     )
      // }
    };
    fetchData();
  }, [id]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <YStack space={50}>
          <Typography type="h2" marginBottom={vs(30)}>
            {letter.title}
          </Typography>
          <YStack space={10} justifyContent="center" alignItems="center">
            <StampWrapper stamp={letter.stamp} />
            <Typography type="small" color="$text--subtle">
              {letter.createdAt}日に完了しました
            </Typography>
            <KansouLetter letter={letter as Letter} />
          </YStack>
        </YStack>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingVertical: vs(50),
    paddingHorizontal: s(30),
    backgroundColor: "#fff",
  },
});
