import { Meta, StoryObj } from "@storybook/react";
import { SimpleList } from "./SimpleList";

const meta = {
  title: "SimpleList",
  component: SimpleList,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof SimpleList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
