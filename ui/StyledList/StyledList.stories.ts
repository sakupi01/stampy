import { Meta, StoryObj } from "@storybook/react";
import { StyledList } from "./StyledList";

const meta = {
  title: "StyledList",
  component: StyledList,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof StyledList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
