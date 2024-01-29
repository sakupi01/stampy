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
  args: {},
};
