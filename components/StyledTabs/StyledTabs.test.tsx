import renderer from "react-test-renderer";
import { TamaguiProvider } from "tamagui";
import config from "../../tamagui.config";
import { StyledTabs } from "./StyledTabs";
describe("<StyledTabs />", () => {
  test("if renders", () => {
    const currentTab = "tab1";
    const snapshot = renderer
      .create(
        <TamaguiProvider config={config}>
          <StyledTabs.Tabs
            setCurrentTab={(currentTab: string) => console.log(currentTab)}
            currentTab={currentTab}
          />
        </TamaguiProvider>,
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
