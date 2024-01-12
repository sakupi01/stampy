import { StyledAlertDialog } from "@/components/StyledAlertDialog";
import { StyledButton } from "@/components/StyledButton";
import { StyledInput } from "@/components/StyledInput";
import { Typography } from "@/components/Typography/Typography";
import { Letter } from "@/types/Letter";
import { Notification } from "@/types/Notification";
import { Pressable, SectionList } from "react-native";
import { Separator } from "tamagui";
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
          marginVertical={15}
          padding={6}
        >
          {section.title}
        </Typography>
      )}
      renderItem={({ item }) => withEventHandlers(item)}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <Separator
          marginVertical={10}
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

const withEventHandlers = (item: RenderItemParams) => {
  switch (item.listType) {
    case "link":
      return (
        <LinkListItem
          // @ts-ignore
          href={{
            pathname: `${item.hrefPrefix}/[id]`,
            params: {
              id: item.id,
            },
          }}
          title={item.title}
          stamp={item.stamp}
          // 完走レター一覧の場合は、contentを表示しない
          content={item.hrefPrefix?.startsWith("/letter") ? "" : item.content}
        />
      );
    case "dialog":
      return (
        <StyledAlertDialog
          triggerButton={
            <Pressable>
              <TextListItem title={item.title} content={item.content} />
            </Pressable>
          }
          // @ts-ignore
          cancelButton={
            <StyledButton type="secondary">キャンセル</StyledButton>
          }
          // @ts-ignore
          actionButton={<StyledButton type="primary">はい</StyledButton>}
          // biome-ignore lint/style/noUnusedTemplateLiteral: <explanation>
          description={`スタンプをもらう\n準備ができましたか？`}
        >
          <StyledInput
            id="message"
            label="ひとことメッセージ"
            defaultValue="お疲れさま！"
          />
        </StyledAlertDialog>
      );
    default:
      return <TextListItem title={item.title} content={item.content} />;
  }
};
