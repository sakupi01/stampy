import { Meta, StoryObj } from "@storybook/react";
import { LetterList } from "./LetterList";

const meta = {
  title: "LetterList",
  component: LetterList,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof LetterList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
