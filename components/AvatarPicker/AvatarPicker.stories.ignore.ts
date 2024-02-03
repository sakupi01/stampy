import { Meta, StoryObj } from "@storybook/react";
import { AvatarPicker } from "./AvatarPicker";

const meta = {
  title: "AvatarPicker",
  component: AvatarPicker,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof AvatarPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultUrl: "https://via.placeholder.com/150",
    setValue: (value: string) => console.log(value),
  },
};
