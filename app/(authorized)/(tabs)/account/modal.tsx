import { SafeAreaView, StyleSheet, View } from "react-native";

import { Typography } from "@/components/Typography";
import { authActions } from "@/libs/AsyncStorage/Auth/slice";
import { useAppDispatch } from "@/libs/AsyncStorage/store";
import { CreditCard, MailOpen, Stamp, User } from "@tamagui/lucide-icons";
import { s, vs } from "react-native-size-matters";
import { YStack } from "tamagui";
import { CardList } from "../../../../components/CardList/CardList";

export default function ModalScreen() {
  const dispatch = useAppDispatch();
  const userModalItems = [
    {
      id: "0",
      label: "これまでに受け取ったスタンプ",
      data: "125個",
      icon: () => <Stamp color={"#64748B"} />,
    },
    {
      id: "1",
      label: "これまでにチャレンジしたスタンプカード",
      data: "25枚",
      icon: () => <CreditCard color={"#64748B"} />,
    },
    {
      id: "2",
      label: "これまでに完了したスタンプカード",
      data: "20枚",
      icon: () => <CreditCard color={"#fff"} />,
    },
    {
      id: "3",
      label: "これまでに受け取った完走レター",
      data: "25通",
      icon: () => <MailOpen color={"#fff"} />,
    },
    {
      id: "4",
      label: "Stampyを通して繋がったひと",
      data: "25人",
      icon: () => <User color={"#64748B"} />,
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <YStack space={vs(50)} alignItems="center">
          <CardList data={userModalItems} />
          <Typography
            type="ui"
            underlined
            color={"$destructive--background"}
            onPress={() => {
              dispatch(authActions.unAuthorize());
            }}
          >
            ログアウト
          </Typography>
        </YStack>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  view: {
    width: "100%",
    height: "100%",
    paddingVertical: vs(50),
    paddingHorizontal: s(20),
    backgroundColor: "#fff",
  },
});
