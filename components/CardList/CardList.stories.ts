import { Meta, StoryObj } from "@storybook/react";
import { CardList } from "./CardList";

const meta = {
  title: "CardList",
  component: CardList,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof CardList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: [
      {
        id: "1",
        label: "Card 1",
        data: "Description 1",
        icon: () => "https://via.placeholder.com/150",
      },
      {
        id: "2",
        label: "Card 2",
        data: "Description 2",
        icon: () => "https://via.placeholder.com/150",
      },
      {
        id: "3",
        label: "Card 3",
        data: "Description 3",
        icon: () => "https://via.placeholder.com/150",
      },
    ],
  },
};
