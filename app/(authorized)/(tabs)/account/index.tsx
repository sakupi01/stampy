import { SafeAreaView, StyleSheet } from "react-native";

import { SimpleList } from "@/components/SimpleList";
import { StyledButton } from "@/components/StyledButton";
import { Typography } from "@/components/Typography";
import { s, vs } from "react-native-size-matters";
import { YStack } from "tamagui";

export default function AccountScreen() {
  const user = {
    id: "123stampy",
    username: "Stampy",
    email: "stampy@email.com",
    avatarUrl:
      "https://images.unsplash.com/photo-1531384441138-2736e62e0919?&w=100&h=100&dpr=2&q=80",
  };
  const listData = [
    {
      id: "0",
      label: "ユーザID",
      data: user.id,
    },
    {
      id: "1",
      label: "ユーザ名",
      data: user.username,
    },
    {
      id: "2",
      label: "メールアドレス",
      data: user.email,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <YStack space={vs(20)}>
        <Typography type="h3" marginBottom={vs(30)}>
          設定
        </Typography>
        {/* 全体としてフォーム */}
        <YStack space={vs(20)} alignItems="center" width="100%">
          <SimpleList data={listData} />
          <Typography
            type="ui"
            underlined
            color={"$destructive--background"}
            onPress={() => {
              console.log("パスワード変更");
            }}
          >
            パスワード変更
          </Typography>
          <StyledButton
            onPress={() => {
              console.log("変更を保存");
            }}
          >
            <Typography>変更を保存</Typography>
          </StyledButton>
        </YStack>
      </YStack>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingBottom: vs(50),
    paddingHorizontal: s(30),
    backgroundColor: "#fff",
  },
});
