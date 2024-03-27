import { Meta, StoryObj } from "@storybook/react";
import { CreateCardForm } from "./CreateCardForm";

const meta = {
  title: "CreateCardForm",
  component: CreateCardForm,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof CreateCardForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    user: {
      id: "1",
      username: "user1",
      email: "",
      avatarUrl: "https://example.com",
    },
  },
};
