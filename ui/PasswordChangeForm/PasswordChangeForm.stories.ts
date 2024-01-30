import { Meta, StoryObj } from "@storybook/react";
import { PasswordChangeForm } from "./PasswordChangeForm";

const meta = {
  title: "PasswordChangeForm",
  component: PasswordChangeForm,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof PasswordChangeForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
