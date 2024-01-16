import { Typography } from "@/components/Typography";
import { Href } from "expo-router";
import { Link } from "expo-router";
import { XStack, YStack } from "tamagui";
import { StampWrapper } from "../../components/StampWrapper/StampWrapper";

export const LinkListItem = ({
  href,
  title,
  stamp,
  content,
}: { href: Href<string>; title: string; stamp?: string; content?: string }) => (
  <Link href={href}>
    <XStack space={20} alignItems="center" width="100%">
      {stamp && <StampWrapper stamp={stamp} size="small" />}
      <YStack flexShrink={1}>
        <Typography
          type="large"
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
            numberOfLines={2}
          >
            {content}
          </Typography>
        ) : (
          ""
        )}
      </YStack>
    </XStack>
  </Link>
);

export const TextListItem = ({
  title,
  content,
}: { title: string; content: string }) => (
  <YStack width="100%">
    <Typography
      type="large"
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
      numberOfLines={2}
    >
      {content}
    </Typography>
  </YStack>
);
