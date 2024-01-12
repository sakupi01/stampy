import { Meta, StoryObj } from "@storybook/react";
import { StampWrapper } from "./StampWrapper";

const meta = {
  title: "StampWrapper",
  component: StampWrapper,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof StampWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    stamp: "🎉",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
};
