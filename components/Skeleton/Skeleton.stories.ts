import { Meta, StoryObj } from "@storybook/react";
import { ListSkeleton } from "./Skeleton";

const meta = {
  title: "Skeleton",
  component: ListSkeleton,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof ListSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
