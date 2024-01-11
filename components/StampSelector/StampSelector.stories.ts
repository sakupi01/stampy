import { Meta, StoryObj } from "@storybook/react";
import { StampSelector } from "./StampSelector";

const meta = {
  title: "StampSelector",
  component: StampSelector,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof StampSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
