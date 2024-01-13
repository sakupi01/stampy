import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

import { Badge } from "@/components/Badge";
import { StyledCard } from "@/components/StyledCard";
import { Typography } from "@/components/Typography";
import { StampCard } from "@/ui/StampCard";
import { MockStampNodes } from "@/ui/StampCard/fixture/mock.data";
import { Link } from "expo-router";
import { Avatar, XStack, YStack } from "tamagui";
export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Typography type="h3" marginBottom={30}>
          わたしのスタンプカード
        </Typography>
        <Link href="/home/typography">Typography</Link>
        <YStack>
          <StyledCard.Card
            margin={5}
            padding={10}
            width={300}
            height={500}
            maxWidth={300}
            maxHeight={500}
            isBouncy={false}
          >
            <StampCard
              currentDay={5}
              stampNodes={MockStampNodes}
              fixedWidth={300}
              fixedHeight={500}
              isEditable
            />
          </StyledCard.Card>
          <StyledCard.Card margin={5} width={300} height={500}>
            <Badge
              label="🏃🏻‍♀️Running"
              position="absolute"
              zIndex="$1"
              top={15}
              left={16}
            />
            <StyledCard.Thumbnail padding={10}>
              <StampCard
                currentDay={5}
                stampNodes={MockStampNodes}
                fixedWidth={300}
                fixedHeight={500}
              />
            </StyledCard.Thumbnail>
            <StyledCard.Footer>
              <Typography type="large">Title</Typography>
              <Typography type="ui" color="$text--subtle">
                x人がこのラリーに参加しています
              </Typography>
              <XStack>
                <Avatar circular size="$3">
                  <Avatar.Image
                    accessibilityLabel="Cam"
                    src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
                  />
                  <Avatar.Fallback backgroundColor="$blue10" />
                </Avatar>
                <Avatar circular size="$3" marginLeft={-10}>
                  <Avatar.Image
                    accessibilityLabel="Nate Wienert"
                    src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?&w=100&h=100&dpr=2&q=80"
                  />
                  <Avatar.Fallback delayMs={600} backgroundColor="$blue10" />
                </Avatar>
              </XStack>
            </StyledCard.Footer>
          </StyledCard.Card>
          <StyledCard.Card margin={5} width={300} height={500}>
            <Badge
              label="🎉Completed"
              position="absolute"
              zIndex="$1"
              top={15}
              left={16}
              backgroundColor="$primary--background"
            />
            <StyledCard.Thumbnail padding={10}>
              <StampCard
                currentDay={5}
                stampNodes={MockStampNodes}
                fixedWidth={300}
                fixedHeight={500}
              />
            </StyledCard.Thumbnail>
            <StyledCard.Footer>
              <Typography type="large">Title</Typography>
              <Typography type="ui" color="$text--subtle">
                x人がこのラリーに参加しています
              </Typography>
              <XStack>
                <Avatar circular size="$3">
                  <Avatar.Image
                    accessibilityLabel="Cam"
                    src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
                  />
                  <Avatar.Fallback backgroundColor="$blue10" />
                </Avatar>
                <Avatar circular size="$3" marginLeft={-10}>
                  <Avatar.Image
                    accessibilityLabel="Nate Wienert"
                    src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?&w=100&h=100&dpr=2&q=80"
                  />
                  <Avatar.Fallback delayMs={600} backgroundColor="$blue10" />
                </Avatar>
              </XStack>
            </StyledCard.Footer>
          </StyledCard.Card>
        </YStack>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  scrollView: {
    width: "100%",
    height: "100%",
    paddingVertical: 50,
    paddingHorizontal: 30,
    backgroundColor: "#fff",
  },
});
