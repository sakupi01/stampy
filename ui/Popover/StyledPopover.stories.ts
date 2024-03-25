import { Meta, StoryObj } from "@storybook/react";
import { Popover } from "./StyledPopover";

const meta = {
  title: "Popover",
  component: Popover,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
