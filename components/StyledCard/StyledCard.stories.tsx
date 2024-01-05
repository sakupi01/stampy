import { Meta, StoryObj } from "@storybook/react";
import { Avatar, XStack } from "tamagui";
import { Badge } from "../Badge/Badge";
import { Typography } from "../Typography/Typography";
import { StyledCard } from "./StyledCard";

const meta = {
  title: "StyledCard",
  component: StyledCard.Card,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof StyledCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Story />
      </div>
    ),
  ],
  render: function Comp({ ...args }) {
    return (
      <meta.component position="relative">
        <Badge
          label="🏃🏻‍♀️Running"
          position="absolute"
          zIndex="$1"
          top={15}
          left={16}
        />
        <StyledCard.Thumbnail url="https://source.unsplash.com/ZkOt0N7rP4s" />
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
      </meta.component>
    );
  },
};
