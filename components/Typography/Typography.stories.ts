import { Meta, StoryObj } from "@storybook/react";

import { Typography } from "./Typography";

const meta = {
  title: "Typography",
  component: Typography,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof Typography>;

type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    type: "h1",
    children: "This is H1",
    color: "$text--dark",
  },
};
export const H2: Story = {
  args: {
    type: "h2",
    children: "This is H2",
    color: "$text--dark",
  },
};

export const H3: Story = {
  args: {
    type: "h3",
    children: "This is H3",
    color: "$text--dark",
  },
};

export const H4: Story = {
  args: {
    type: "h4",
    children: "This is H4",
    color: "$text--dark",
  },
};

export const Paragraph: Story = {
  args: {
    type: "paragraph",
    children: "This is Paragraph",
    color: "$text--dark",
  },
};

export const UIText: Story = {
  args: {
    type: "ui",
    children: "This is UIText",
    color: "$text--dark",
  },
};

export const Large: Story = {
  args: {
    type: "large",
    children: "This is Large",
    color: "$text--dark",
  },
};

export const Medium: Story = {
  args: {
    type: "medium",
    children: "This is Medium",
    color: "$text--dark",
  },
};

export const Small: Story = {
  args: {
    type: "small",
    children: "This is Small",
    color: "$text--dark",
  },
};

export default meta;
