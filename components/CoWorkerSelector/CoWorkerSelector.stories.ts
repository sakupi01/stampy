import { Meta, StoryObj } from "@storybook/react";
import { CoWorkerSelector } from "./CoWorkerSelector";

const meta = {
  title: "CoWorkerSelector",
  component: CoWorkerSelector,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof CoWorkerSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
