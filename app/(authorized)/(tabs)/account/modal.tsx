import { SafeAreaView, StyleSheet, View } from "react-native";

import { ListSkeleton } from "@/components/Skeleton";
import { Typography } from "@/components/Typography";
import { authActions } from "@/libs/AsyncStorage/Auth/slice";
import { useAppDispatch } from "@/libs/AsyncStorage/store";
import { useApi } from "@/libs/hooks/useApi";
import { CreditCard, MailOpen, Stamp, User } from "@tamagui/lucide-icons";
import { s, vs } from "react-native-size-matters";
import { YStack } from "tamagui";
import { CardList } from "../../../../components/CardList/CardList";

type UserTotal = {
  receivedStamp: number; // isStampedがtrueであるstampのcount
  challengeCard: number; // createdUserがuserIdと一致するcardのcount
  completedCard: number; // ↑+isCompletedがtrueであるcardのcount
  receivedLetter: number; // ReceiverがuserIdと一致するletterのcount
  people: number; // できたらやる
};

export default function ModalScreen() {
  const dispatch = useAppDispatch();
  const { useGet } = useApi();
  const { data: res, isError, isLoading } = useGet<UserTotal>("/user/total");

  if (!res || isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.view}>
          <ListSkeleton />
        </View>
      </SafeAreaView>
    );
  }
  if (!res.val || res.err || isError) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.view}>
          <Typography type="h4" textAlign="center">
            取得に失敗しました。
          </Typography>
        </View>
      </SafeAreaView>
    );
  }

  const userModalItems = [
    {
      id: "0",
      label: "これまでに受け取ったスタンプ",
      data: "20個",
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
  // const userModalItems = [
  //   {
  //     id: "0",
  //     label: "これまでに受け取ったスタンプ",
  //     data: `${res.val.receivedStamp}個`,
  //     icon: () => <Stamp color={"#64748B"} />,
  //   },
  //   {
  //     id: "1",
  //     label: "これまでにチャレンジしたスタンプカード",
  //     data: `${res.val.challengeCard}枚`,
  //     icon: () => <CreditCard color={"#64748B"} />,
  //   },
  //   {
  //     id: "2",
  //     label: "これまでに完了したスタンプカード",
  //     data: `${res.val.completedCard}枚`,
  //     icon: () => <CreditCard color={"#fff"} />,
  //   },
  //   {
  //     id: "3",
  //     label: "これまでに受け取った完走レター",
  //     data: `${res.val.receivedLetter}枚`,
  //     icon: () => <MailOpen color={"#fff"} />,
  //   },
  //   {
  //     id: "4",
  //     label: "Stampyを通して繋がったひと",
  //     data: "25人",
  //     icon: () => <User color={"#64748B"} />,
  //   },
  // ];
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
