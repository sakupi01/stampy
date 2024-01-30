import { Meta, StoryObj } from "@storybook/react";
import { NotificationList } from "./NotificationList";

const meta = {
  title: "NotificationList",
  component: NotificationList,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof NotificationList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
