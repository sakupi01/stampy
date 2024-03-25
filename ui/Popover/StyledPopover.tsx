import { Typography } from "@/components/Typography";
import { useAppSelector } from "@/libs/AsyncStorage/store";
import { assertNonNullable } from "@/libs/assertNonNullable";
import { StampCard } from "@/types/StampCard";
import { FontAwesome } from "@expo/vector-icons";
import { ReactNode } from "react";
import { s, vs } from "react-native-size-matters";
import {
  Adapt,
  Avatar,
  Popover,
  PopoverProps,
  Separator,
  XStack,
  YStack,
} from "tamagui";

export function StyledPopover({
  children,
  Name,
  data,
  ...props
}: PopoverProps & { children: ReactNode; data: StampCard; Name?: string }) {
  const user = useAppSelector((state) => state.auth.user);
  assertNonNullable(user);
  return (
    <Popover size="$5" allowFlip {...props}>
      <Popover.Trigger asChild>{children}</Popover.Trigger>

      <Adapt platform="touch">
        <Popover.Sheet modal dismissOnSnapToBottom>
          <Popover.Sheet.Frame
            paddingVertical={vs(50)}
            paddingHorizontal={s(20)}
            width={"100%"}
            height={"100%"}
            backgroundColor={"white"}
          >
            <Adapt.Contents />
          </Popover.Sheet.Frame>
          <Popover.Sheet.Overlay
            animation="lazy"
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
          />
        </Popover.Sheet>
      </Adapt>

      <Popover.Content
        enterStyle={{ y: -10, opacity: 0 }}
        exitStyle={{ y: -10, opacity: 0 }}
        elevate
        animation={[
          "quick",
          {
            opacity: {
              overshootClamping: true,
            },
          },
        ]}
      >
        <YStack>
          <YStack space={5} marginBottom={vs(50)}>
            <Typography type="large" textAlign="left" width="100%">
              {data.title}の詳細
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
                このカードはdata.startDateから利用可能です
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
                    accessibilityLabel={data.joinedUser.username}
                    src={
                      data.joinedUser.avatarUrl === "https://stampy.com"
                        ? require("../../assets/images/stampy-icon.png")
                        : data.joinedUser.avatarUrl === ""
                          ? require("../../assets/images/linerbg.png")
                          : data.joinedUser.avatarUrl
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
                  {data.joinedUser.username}
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
                    accessibilityLabel={data.createdBy.username}
                    src={
                      user.avatarUrl === ""
                        ? require("../../assets/images/linerbg.png")
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
                  {data.createdBy.username}
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
              data.startDate
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
              data.endDate
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
              {data.isCompleted ? "完了🎉" : "未完了🏃🏻‍♀️"}
            </Typography>
          </XStack>
        </YStack>
      </Popover.Content>
    </Popover>
  );
}
