import { Meta, StoryObj } from "@storybook/react";
import { MockStampCards } from "../StampCard/fixture/mock.data";
import { StyledPopover } from "./StyledPopover";

const meta = {
  title: "StyledPopover",
  component: StyledPopover,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof StyledPopover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: MockStampCards[0],
    children: "Popover",
  },
};
