import { Badge } from "@/components/Badge";
import { StyledCard } from "@/components/StyledCard";
import { Typography } from "@/components/Typography";
import { StampCard } from "@/ui/StampCard";
import {
  MockStampCards,
  MockStampNodes,
} from "@/ui/StampCard/fixture/mock.data";
import { Link } from "expo-router";
import { s, vs } from "react-native-size-matters";
import { Avatar, XStack } from "tamagui";

export type StampCardListProps = {
  query?: string;
};

export const StampCardList = ({ query }: StampCardListProps) => {
  const data = [...MockStampCards].filter((item) =>
    item.title.includes(query ?? ""),
  );
  return data.map((card) => (
    <Link
      // @ts-ignore
      href={{
        pathname: "/home/[id]",
        params: {
          id: card.cardId,
        },
      }}
      asChild
    >
      <StyledCard.Card
        margin={s(5)}
        width={s(300)}
        height={vs(500)}
        imageSource={{ uri: card.backgroundUrl }}
      >
        <Badge
          label={card.isCompleted ? "🎉Completed" : "🏃🏻‍♀️Running"}
          position="absolute"
          zIndex="$1"
          top={15}
          left={16}
          backgroundColor={
            card.isCompleted ? "$primary--background" : "$accent--background"
          }
        />
        <StyledCard.Thumbnail>
          <StampCard
            currentDay={5}
            stampNodes={MockStampNodes}
            fixedWidth={s(300)}
            fixedHeight={vs(500)}
          />
        </StyledCard.Thumbnail>
        <StyledCard.Footer>
          <Typography type="large">{card.title}</Typography>
          <Typography type="ui" color="$text--subtle">
            2人がこのラリーに参加しています
          </Typography>
          <XStack>
            <Avatar circular size="$3">
              <Avatar.Image
                accessibilityLabel={card.joinedUser.username}
                src={card.joinedUser.avatarUrl}
              />
              <Avatar.Fallback backgroundColor="$blue10" />
            </Avatar>
            <Avatar circular size="$3" marginLeft={s(-10)}>
              <Avatar.Image
                accessibilityLabel={card.createdBy.username}
                src={card.createdBy.avatarUrl}
              />
              <Avatar.Fallback delayMs={600} backgroundColor="$blue10" />
            </Avatar>
          </XStack>
        </StyledCard.Footer>
      </StyledCard.Card>
    </Link>
  ));
};
