// @ts-nocheck
import { Meta, StoryObj } from "@storybook/react";
import { StyledButton } from "./StyledButton";

const meta = {
  title: "StyledButton",
  component: StyledButton,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof StyledButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const LABEL = "ボタン";
export const Default: Story = {
  args: {
    children: LABEL,
    type: "primary",
  },
};
export const Secondary: Story = {
  args: {
    children: LABEL,
    type: "secondary",
  },
};
export const Accent: Story = {
  args: {
    children: LABEL,
    type: "accent",
  },
};
export const Destructive: Story = {
  args: {
    children: LABEL,
    type: "destructive",
  },
};
