import { Meta, StoryObj } from "@storybook/react";

import { CodeHighlighter } from "./CodeHighlighter";

const meta = {
  title: "CodeHighlighter",
  component: CodeHighlighter,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof CodeHighlighter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This is a code block",
    color: "$text--destructive",
  },
};
