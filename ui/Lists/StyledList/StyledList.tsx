import { StampWrapper } from "@/components/StampWrapper";
import { StyledAlertDialog } from "@/components/StyledAlertDialog";
import { DialogActionType } from "@/components/StyledAlertDialog/StyledAlertDialog";
import { StyledButton } from "@/components/StyledButton";
import { StyledInput } from "@/components/StyledInput";
import { Typography } from "@/components/Typography/Typography";
import { assertNonNullable } from "@/libs/assertNonNullable";
import DialogProvider from "@/libs/provider/dialog";
import { Repository } from "@/repository/api";
import { Letter } from "@/types/Letter";
import { Notification } from "@/types/Notification";
import { StampForm } from "@/ui/StampForm";
import { KeyboardAvoidingView, Pressable, SectionList } from "react-native";
import { s, vs } from "react-native-size-matters";
import { useSWRConfig } from "swr";
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
              return item.isVisible === true && item.read === false;
            }
            return item.read === false;
          }),
        },
        {
          title: "開封済み",
          data: data.filter((item) => {
            if (
              item.type === "notification" &&
              item.listType === "sender-dialog"
            ) {
              return false;
            }
            if (item.type === "letter") {
              return item.isVisible === true && item.read === true;
            }
            return item.read === true;
          }),
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
            content={item.hrefPrefix?.startsWith("/letter") ? "" : item.message}
          />
        );
      case "sender-dialog":
        assertNonNullable(item.nthDay);
        assertNonNullable(item.cardId);
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
                  <TextListItem title={item.title} content={item.message} />
                </Pressable>
              )}
              cancelButton={(untoggleModal: () => void) => (
                <Typography type="small" underlined onPress={untoggleModal}>
                  今はやめておく
                </Typography>
              )}
              description={
                item.isLastDay
                  ? `${item.sender.username}さんへ\n最終日の完走レター\nを送りますか？`
                  : `${item.sender.username}さんへ\n${item.nthDay}日目のスタンプ\nを送りますか？`
              }
            >
              <KeyboardAvoidingView behavior={"position"}>
                <YStack alignItems="center">
                  <StampForm
                    cardId={item.cardId}
                    nthDay={item.nthDay}
                    notificationId={item.id}
                    isLastDay={item.isLastDay}
                  />
                </YStack>
              </KeyboardAvoidingView>
            </StyledAlertDialog>
          </DialogProvider>
        );

      case "receiver-dialog":
        assertNonNullable(item.nthDay);
        return (
          <DialogProvider>
            {resolveReceiverDialogContent({
              letterId: item.letterId,
              item: item,
            })}
          </DialogProvider>
        );
      default:
        return <TextListItem title={item.title} content={item.message} />;
    }
  }
  // type == 'letter'
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
      content={item.hrefPrefix?.startsWith("/letter") ? "" : item.message}
    />
  );
};

function resolveReceiverDialogContent({
  letterId,
  item,
}: { letterId: string | undefined; item: Notification }) {
  const repository = new Repository();
  const { mutate } = useSWRConfig();

  if (letterId?.toString() !== "0") {
    return (
      <StyledAlertDialog
        triggerButton={(toggleModal: () => void) => (
          <Pressable
            onPress={toggleModal}
            style={{
              width: "100%",
            }}
          >
            <TextListItem title={item.title} content={item.message} />
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
                await repository.put(`/notice/read/${item.id}`);
                // TODO: 完走レターを開封する処理
                console.log("mark letter as visible");
                const res = await repository.put(
                  `/letter/visible/${item.letterId}`,
                );
                console.log("res", res);
                // 再検証
                mutate(["/letter", undefined, true]);
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
          <TextListItem title={item.title} content={item.message} />
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
              await repository.put(`/notice/read/${item.id}`);
              // 再検証
              mutate(["/stampcard", undefined, true]);
              console.log("done");
            })
          }
        >
          <Typography>受け取る</Typography>
        </StyledButton>
      )}
      description={`${item.sender.username}さんから\n${item.nthDay}日目のスタンプ\nが届いています`}
    >
      <YStack gap={20} alignItems="center">
        <StampWrapper stamp={item.stamp} />
        <StyledInput
          label="ひとことメッセージ"
          defaultValue={item.message}
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
