import { Meta, StoryObj } from "@storybook/react";
import { StyledInput } from "./StyledInput";

const meta = {
  title: "StyledInput",
  component: StyledInput,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof StyledInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
    defaultValue: "Value",
    id: "id",
    isPassword: false,
  },
};
export const PasswordInput: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
    defaultValue: "Value",
    id: "id",
    isPassword: true,
  },
};
export const DisabledInput: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
    defaultValue: "Value",
    id: "id",
    isDisabled: true,
  },
};
