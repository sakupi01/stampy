import { Meta, StoryObj } from "@storybook/react";
import { StampForm } from "./StampForm";

const meta = {
  title: "StampForm",
  component: StampForm,
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
          width: "100%",
          height: "100%",
          padding: 40,
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof StampForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    user: {
      id: "1",
      username: "username",
      email: "email",
    },
    currentDay: 2,
    buttonLabel: "送る",
    isLastDay: false,
  },
};
export const 完走レター: Story = {
  args: {
    user: {
      id: "1",
      username: "username",
      email: "email",
    },
    currentDay: 5,
    buttonLabel: "送る",
    isLastDay: true,
  },
};
