import { Letter } from "@/types/Letter";
import { DATA_LETTER } from "@/ui/Lists/StyledList/fixture/mock.data";
import { Meta, StoryObj } from "@storybook/react";
import { KansouLetter } from "./KansouLetter";

const meta = {
  title: "KansouLetter",
  component: KansouLetter,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof KansouLetter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    letter: DATA_LETTER[0] as Letter,
  },
};
