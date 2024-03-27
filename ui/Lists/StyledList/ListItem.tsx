import { StampWrapper } from "@/components/StampWrapper/StampWrapper";
import { Typography } from "@/components/Typography";
import { LinkProps } from "expo-router";
import { Link } from "expo-router";
import { s } from "react-native-size-matters";
import { XStack, YStack } from "tamagui";

export const LinkListItem = ({
  title,
  stamp,
  content,
  ...props
}: {
  title: string;
  stamp?: string;
  content?: string;
} & LinkProps<string>) => {
  return (
    <Link {...props}>
      <XStack space={s(20)} alignItems="center" width="100%">
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
};

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
