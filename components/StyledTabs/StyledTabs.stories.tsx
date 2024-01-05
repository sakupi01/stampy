import { Meta, StoryObj } from "@storybook/react";
import { Typography } from "../Typography";
import { StyledTabs } from "./StyledTabs";
import { useTabsState } from "./hooks/useTabsState";
import { SignInForm, SignUpForm } from "./utils/formsMock";
const meta = {
  title: "StyledTabs",
  component: StyledTabs.Tabs,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof StyledTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Story />
      </div>
    ),
  ],
  render: function Comp({ ...args }) {
    const {
      activeAt,
      currentTab,
      enterVariant,
      exitVariant,
      handleOnInteraction,
      intentAt,
      setCurrentTab,
    } = useTabsState();
    return (
      <meta.component
        value={currentTab}
        setCurrentTab={setCurrentTab}
        currentTab={currentTab}
      >
        <StyledTabs.List intentAt={intentAt} activeAt={activeAt}>
          <StyledTabs.Tab
            value="tab1"
            currentTab={currentTab}
            handleOnInteraction={handleOnInteraction}
          >
            <Typography type="ui">サインイン</Typography>
          </StyledTabs.Tab>
          <StyledTabs.Tab
            value="tab2"
            currentTab={currentTab}
            handleOnInteraction={handleOnInteraction}
          >
            <Typography type="ui">サインアップ</Typography>
          </StyledTabs.Tab>
        </StyledTabs.List>
        <StyledTabs.ContentAnimateWrapper
          enterVariant={enterVariant}
          exitVariant={exitVariant}
          currentTab={currentTab}
        >
          <StyledTabs.Content currentTab="tab1">
            <SignInForm />
          </StyledTabs.Content>
          <StyledTabs.Content currentTab="tab2">
            <SignUpForm />
          </StyledTabs.Content>
        </StyledTabs.ContentAnimateWrapper>
      </meta.component>
    );
  },
};
