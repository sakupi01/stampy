import { StampWrapper } from "@/components/StampWrapper";
import { StyledAlertDialog } from "@/components/StyledAlertDialog";
import { DialogActionType } from "@/components/StyledAlertDialog/StyledAlertDialog";
import { StyledButton } from "@/components/StyledButton";
import { StyledInput } from "@/components/StyledInput";
import { Typography } from "@/components/Typography/Typography";
import { assertNonNullable } from "@/libs/assertNonNullable";
import DialogProvider from "@/libs/provider/dialog";
import { sleep } from "@/libs/sleep";
import { Letter } from "@/types/Letter";
import { Notification } from "@/types/Notification";
import { StampForm } from "@/ui/StampForm";
import { KeyboardAvoidingView, Pressable, SectionList } from "react-native";
import { s, vs } from "react-native-size-matters";
import { Separator, YStack } from "tamagui";
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
          data: data.filter((item) => {
            if (item.type === "letter") {
              return item.isVisible && item.read === false;
            }
            return item.read === false;
          }),
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
              triggerButton={(toggleModal: () => void) => (
                <Pressable
                  onPress={toggleModal}
                  style={{
                    width: "100%",
                  }}
                >
                  <TextListItem title={item.title} content={item.content} />
                </Pressable>
              )}
              cancelButton={(untoggleModal: () => void) => (
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
              <KeyboardAvoidingView behavior={"position"}>
                <YStack alignItems="center">
                  <StampForm
                    user={item.receiver}
                    currentDay={item.currentDay}
                    isLastDay={item.isLastDay}
                  />
                </YStack>
              </KeyboardAvoidingView>
            </StyledAlertDialog>
          </DialogProvider>
        );
      case "receiver-dialog":
        assertNonNullable(item.currentDay);
        return (
          <DialogProvider>
            {resolveReceiverDialogContent({
              letterId: item.letterId,
              item: item,
            })}
          </DialogProvider>
        );
      default:
        return <TextListItem title={item.title} content={item.content} />;
    }
  }
  // type == 'letter
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

function resolveReceiverDialogContent({
  letterId,
  item,
}: { letterId: string | undefined; item: Notification }) {
  if (letterId !== undefined) {
    return (
      <StyledAlertDialog
        triggerButton={(toggleModal: () => void) => (
          <Pressable
            onPress={toggleModal}
            style={{
              width: "100%",
            }}
          >
            <TextListItem title={item.title} content={item.content} />
          </Pressable>
        )}
        cancelButton={(untoggleModal: () => void) => (
          <StyledButton onPress={untoggleModal} type="secondary">
            <Typography>やめておく</Typography>
          </StyledButton>
        )}
        actionButton={(action: DialogActionType) => (
          <StyledButton
            onPress={() =>
              action(async () => {
                console.log("mark notice as read");
                // TODO: 通知をreadにする処理
                await sleep(1000);
                // TODO: 完走レターを開封する処理
                console.log("mark letter as visible");
                await sleep(1000);
                console.log("done");
              })
            }
          >
            <Typography>開封する</Typography>
          </StyledButton>
        )}
        description={`${item.sender.username}さんから\n最終日の完走レター\nが届きました！`}
      >
        <YStack gap={20} alignItems="center">
          <StampWrapper stamp="✉️" />
          <Typography type="medium">便箋を開封しますか？</Typography>
        </YStack>
      </StyledAlertDialog>
    );
  }
  return (
    <StyledAlertDialog
      triggerButton={(toggleModal: () => void) => (
        <Pressable
          onPress={toggleModal}
          style={{
            width: "100%",
          }}
        >
          <TextListItem title={item.title} content={item.content} />
        </Pressable>
      )}
      cancelButton={(untoggleModal: () => void) => (
        <StyledButton onPress={untoggleModal} type="secondary">
          <Typography>やめておく</Typography>
        </StyledButton>
      )}
      actionButton={(action: DialogActionType) => (
        <StyledButton
          onPress={() =>
            action(async () => {
              console.log("mark notice as read");
              // TODO: 通知をreadにする処理
              await sleep(1000);
              console.log("done");
            })
          }
        >
          <Typography>受け取る</Typography>
        </StyledButton>
      )}
      description={`${item.sender.username}さんから\n${item.currentDay}日目のスタンプ\nが届いています`}
    >
      <YStack gap={20} alignItems="center">
        <StampWrapper stamp={item.stamp} />
        <StyledInput
          label="ひとことメッセージ"
          defaultValue={item.content}
          id={item.id}
          scrollEnabled
          multiline
          lineHeight={25}
          isDisabled
        />
      </YStack>
    </StyledAlertDialog>
  );
}
