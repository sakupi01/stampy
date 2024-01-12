import { Typography } from "@/components/Typography";
import { Pressable as LinkPressable } from "@/components/utils/Pressable";
import { Href } from "expo-router";
import { XStack, YStack } from "tamagui";
import { StampWrapper } from "../../components/StampWrapper/StampWrapper";

export const LinkListItem = ({
  href,
  title,
  stamp,
  content,
}: { href: Href<string>; title: string; stamp?: string; content?: string }) => (
  <LinkPressable href={href}>
    <XStack height={90} space={20} alignItems="center" width="100%">
      {stamp && <StampWrapper stamp={stamp} size="small" />}
      <YStack flex={1}>
        <Typography
          type="large"
          display="inline"
          whiteSpace="wrap"
          overflow="hidden"
          textOverflow="ellipsis"
          numberOfLines={2}
        >
          {title}
        </Typography>
        {content ? (
          <Typography
            type="ui"
            overflow="hidden"
            textOverflow="ellipsis"
            numberOfLines={3}
          >
            {content}
          </Typography>
        ) : (
          ""
        )}
      </YStack>
    </XStack>
  </LinkPressable>
);

export const TextListItem = ({
  title,
  content,
}: { title: string; content: string }) => (
  <YStack height={90} width="100%">
    <Typography
      type="large"
      display="inline"
      overflow="hidden"
      textOverflow="ellipsis"
      numberOfLines={1}
    >
      {title}
    </Typography>
    <Typography
      type="ui"
      overflow="hidden"
      textOverflow="ellipsis"
      numberOfLines={3}
    >
      {content}
    </Typography>
  </YStack>
);
