import { Meta, StoryObj } from "@storybook/react";
import { StyledCard } from "../StyledCard/StyledCard";
import { StampCard } from "./StampCard";
import { FIXTURE, MockStampNodes } from "./fixture/mock.data";

const meta = {
  title: "StampCard",
  component: StampCard,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof StampCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    currentDay: 5,
    stampNodes: MockStampNodes,
    fixedWidth: FIXTURE.WIDTH,
    fixedHeight: FIXTURE.HEIGHT,
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
        <StyledCard.Card padding={10} width={300} height={500}>
          <Story />
        </StyledCard.Card>
      </div>
    ),
  ],
};
