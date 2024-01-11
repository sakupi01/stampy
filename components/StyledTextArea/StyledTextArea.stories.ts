import { Meta, StoryObj } from "@storybook/react";
import { StyledTextArea } from "./StyledTextArea";

const meta = {
  title: "StyledTextArea",
  component: StyledTextArea,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof StyledTextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
    defaultValue: "Value",
    id: "id",
    isPassword: false,
    rows: 5,
  },
};
