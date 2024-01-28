import { StampWrapper } from "@/components/StampWrapper";
import { StyledAlertDialog } from "@/components/StyledAlertDialog";
import { StyledButton } from "@/components/StyledButton";
import { StyledInput } from "@/components/StyledInput";
import { Typography } from "@/components/Typography/Typography";
import { assertNonNullable } from "@/libs/assertNonNullable";
import DialogProvider from "@/libs/provider/dialog";
import { sleep } from "@/libs/sleep";
import { Letter } from "@/types/Letter";
import { Notification } from "@/types/Notification";
import { Pressable, SectionList } from "react-native";
import { s, vs } from "react-native-size-matters";
import { Separator, YStack } from "tamagui";
import { StampForm } from "../StampForm";
import { LinkListItem, TextListItem } from "./ListItem";

type StyledListProps = {
  data: Array<Letter | Notification>;
};
export const StyledList = ({ data }: StyledListProps) => {
  return (
    <SectionList
      sections={[
        {
          title: "未開封",
          data: data.filter((item) => item.read === false),
        },
        {
          title: "開封済み",
          data: data.filter((item) => item.read === true),
        },
      ]}
      renderSectionHeader={({ section }) => (
        <Typography
          width="100%"
          backgroundColor={"$secondary--background"}
          type="medium"
          marginVertical={vs(15)}
          padding={s(6)}
        >
          {section.title}
        </Typography>
      )}
      renderItem={({ item }) => resolveListItem(item)}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <Separator
          marginVertical={vs(10)}
          borderBottomColor="$stroke--light"
          borderLeftColor="$stroke--light"
          borderRightColor="$stroke--light"
          borderTopColor="$stroke--light"
          borderColor="$stroke--light"
          style={{
            color: "#E2E8F0",
          }}
        />
      )}
    />
  );
};

type RenderItemParams = Letter | Notification;

const resolveListItem = (item: RenderItemParams) => {
  if (item.type === "notification") {
    switch (item.listType) {
      case "link":
        return (
          <LinkListItem
            title={item.title}
            stamp={item.stamp}
            // @ts-ignore
            href={{
              pathname: `${item.hrefPrefix}/[id]`,
              params: {
                id: item.id,
              },
            }}
            // 完走レター一覧の場合は、contentを表示しない
            content={item.hrefPrefix?.startsWith("/letter") ? "" : item.content}
          />
        );
      case "sender-dialog":
        assertNonNullable(item.currentDay);
        return (
          <DialogProvider>
            <StyledAlertDialog
              triggerButton={(toggleModal) => (
                <Pressable
                  onPress={toggleModal}
                  style={{
                    width: "100%",
                  }}
                >
                  <TextListItem title={item.title} content={item.content} />
                </Pressable>
              )}
              cancelButton={(untoggleModal) => (
                <Typography type="small" underlined onPress={untoggleModal}>
                  今はやめておく
                </Typography>
              )}
              description={
                item.isLastDay
                  ? `${item.receiver.username}さんへ\n最終日の完走レター\nを送りますか？`
                  : `${item.receiver.username}さんへ\n${item.currentDay}日目のスタンプ\nを送りますか？`
              }
            >
              <YStack alignItems="center">
                <StampForm
                  user={item.receiver}
                  currentDay={item.currentDay}
                  isLastDay={item.isLastDay}
                />
              </YStack>
            </StyledAlertDialog>
          </DialogProvider>
        );
      case "receiver-dialog":
        assertNonNullable(item.currentDay);
        return (
          <DialogProvider>
            <StyledAlertDialog
              triggerButton={(toggleModal) => (
                <Pressable
                  onPress={toggleModal}
                  style={{
                    width: "100%",
                  }}
                >
                  <TextListItem title={item.title} content={item.content} />
                </Pressable>
              )}
              cancelButton={(untoggleModal) => (
                <StyledButton onPress={untoggleModal} type="secondary">
                  <Typography>やめておく</Typography>
                </StyledButton>
              )}
              actionButton={(action) => (
                <StyledButton
                  onPress={() =>
                    action(async () => {
                      console.log("receive stamp start");
                      // TODO: スタンプを受け取る処理
                      await sleep(1000);
                      console.log("receive stamp end");
                    })
                  }
                >
                  <Typography>
                    {item.isLastDay ? "開封する" : "受け取る"}
                  </Typography>
                </StyledButton>
              )}
              description={
                item.isLastDay
                  ? `${item.sender.username}さんから\n最終日の完走レター\nが届きました！`
                  : `${item.sender.username}さんから\n${item.currentDay}日目のスタンプ\nが届いています`
              }
            >
              <YStack gap={20} alignItems="center">
                <StampWrapper stamp={item.isLastDay ? "✉️" : item.stamp} />
                {item.isLastDay ? (
                  <Typography type="medium">便箋を開封しますか？</Typography>
                ) : (
                  <StyledInput
                    label="ひとことメッセージ"
                    defaultValue={item.content}
                    id={item.id}
                    scrollEnabled
                    multiline
                    lineHeight={25}
                    isDisabled
                  />
                )}
              </YStack>
            </StyledAlertDialog>
          </DialogProvider>
        );
      default:
        return <TextListItem title={item.title} content={item.content} />;
    }
  }
  return (
    <LinkListItem
      title={item.title}
      stamp={item.stamp}
      // @ts-ignore
      href={{
        pathname: `${item.hrefPrefix}/[id]`,
        params: {
          id: item.id,
        },
      }}
      // 完走レター一覧の場合は、contentを表示しない
      content={item.hrefPrefix?.startsWith("/letter") ? "" : item.content}
    />
  );
};
