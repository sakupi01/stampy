import { Meta, StoryObj } from "@storybook/react";
import { StampCardList } from "./StampCardList";

const meta = {
  title: "StampCardList",
  component: StampCardList,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof StampCardList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
