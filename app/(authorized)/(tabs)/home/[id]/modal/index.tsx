import { SafeAreaView, StyleSheet, View } from "react-native";

import { CardSkeleton } from "@/components/Skeleton/Skeleton";
import { Typography } from "@/components/Typography";
import { useAppSelector } from "@/libs/AsyncStorage/store";
import { assertNonNullable } from "@/libs/assertNonNullable";
import { useApi } from "@/libs/hooks/useApi";
import { FontAwesome } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { s, vs } from "react-native-size-matters";
import { Avatar, Separator, XStack, YStack } from "tamagui";

export default function ModalScreen() {
  const { id } = useLocalSearchParams();
  console.log("id:", id);
  const { useGet } = useApi();
  const { data, isError, isLoading } = useGet(`/stampcard/${id}`);
  const user = useAppSelector((state) => state.auth.user);
  assertNonNullable(user);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        {!data || isLoading ? (
          <YStack marginTop={s(5)}>
            <CardSkeleton />
          </YStack>
        ) : isError || data.err ? (
          <YStack marginTop={s(5)}>
            <Typography type="h4" textAlign="center">
              取得に失敗しました
            </Typography>
          </YStack>
        ) : (
          <YStack>
            <YStack space={5} marginBottom={vs(50)}>
              <Typography type="large" textAlign="left" width="100%">
                {data.val.title}の詳細
              </Typography>
              <XStack alignItems="center">
                <FontAwesome
                  name="info-circle"
                  size={15}
                  color={"#EF4444"}
                  style={{
                    marginRight: 8,
                  }}
                />
                <Typography
                  type="small"
                  textAlign="left"
                  width="100%"
                  color={"$destructive--background"}
                >
                  このカードは{data.val.startDate.toString().split("T")[0]}
                  から利用可能です
                </Typography>
              </XStack>
            </YStack>

            <YStack space={vs(10)}>
              <XStack width={"100%"} justifyContent="space-between">
                <Typography type="ui" textAlign="left" color={"$text--subtle"}>
                  参加メンバー
                </Typography>
                <Typography type="ui" textAlign="left" color={"$text--subtle"}>
                  {2}人が参加中
                </Typography>
              </XStack>
              <YStack space={vs(3)}>
                <XStack space={s(10)}>
                  <Avatar
                    circular
                    size="$2"
                    borderColor={"black"}
                    borderWidth={0.5}
                  >
                    <Avatar.Image
                      accessibilityLabel={data.val.joinedUser.username}
                      src={
                        data.val.joinedUser.avatarUrl === "https://stampy.com"
                          ? require("../../../../../../assets/images/stampy-icon.png")
                          : data.val.joinedUser.avatarUrl === ""
                            ? require("../../../../../../assets/images/linerbg.png")
                            : data.val.joinedUser.avatarUrl
                      }
                    />
                    <Avatar.Fallback backgroundColor="$blue10" />
                  </Avatar>
                  <Typography
                    type="small"
                    textAlign="left"
                    color={"$text--subtle"}
                    fontWeight={"bold"}
                  >
                    {data.val.joinedUser.username}
                  </Typography>
                </XStack>
                <XStack space={s(10)}>
                  <Avatar
                    circular
                    size="$2"
                    borderColor={"black"}
                    borderWidth={0.5}
                  >
                    <Avatar.Image
                      accessibilityLabel={data.val.createdBy.username}
                      src={
                        user.avatarUrl === ""
                          ? require("../../../../../../assets/images/linerbg.png")
                          : user.avatarUrl
                      }
                    />
                    <Avatar.Fallback delayMs={600} backgroundColor="$blue10" />
                  </Avatar>
                  <Typography
                    type="small"
                    textAlign="left"
                    color={"$text--subtle"}
                    fontWeight={"bold"}
                  >
                    {data.val.createdBy.username}
                  </Typography>
                </XStack>
              </YStack>
            </YStack>

            <Separator
              marginVertical={vs(20)}
              borderBottomColor="$stroke--light"
              borderLeftColor="$stroke--light"
              borderRightColor="$stroke--light"
              borderTopColor="$stroke--light"
              borderColor="$stroke--light"
              style={{
                color: "#E2E8F0",
              }}
            />
            <XStack width={"100%"} justifyContent="space-between">
              <Typography type="ui" textAlign="left" color={"$text--subtle"}>
                開始日
              </Typography>
              <Typography type="ui" textAlign="left" color={"$text--subtle"}>
                {data.val.startDate.toString().split("T")[0]}
              </Typography>
            </XStack>
            <Separator
              marginVertical={vs(20)}
              borderBottomColor="$stroke--light"
              borderLeftColor="$stroke--light"
              borderRightColor="$stroke--light"
              borderTopColor="$stroke--light"
              borderColor="$stroke--light"
              style={{
                color: "#E2E8F0",
              }}
            />
            <XStack width={"100%"} justifyContent="space-between">
              <Typography type="ui" textAlign="left" color={"$text--subtle"}>
                終了日
              </Typography>
              <Typography type="ui" textAlign="left" color={"$text--subtle"}>
                {data.val.endDate.toString().split("T")[0]}
              </Typography>
            </XStack>
            <Separator
              marginVertical={vs(20)}
              borderBottomColor="$stroke--light"
              borderLeftColor="$stroke--light"
              borderRightColor="$stroke--light"
              borderTopColor="$stroke--light"
              borderColor="$stroke--light"
              style={{
                color: "#E2E8F0",
              }}
            />
            <XStack width={"100%"} justifyContent="space-between">
              <Typography type="ui" textAlign="left" color={"$text--subtle"}>
                ステータス
              </Typography>
              <Typography type="ui" textAlign="left" color={"$text--subtle"}>
                {data.val.isCompleted ? "完了🎉" : "未完了🏃🏻‍♀️"}
              </Typography>
            </XStack>
          </YStack>
        )}
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
