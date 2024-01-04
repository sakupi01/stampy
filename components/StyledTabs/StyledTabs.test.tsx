import renderer from "react-test-renderer";
import { TamaguiProvider } from "tamagui";
import config from "../../tamagui.config";
import { StyledTabs } from "./StyledTabs";
describe("<StyledTabs />", () => {
  test("if renders", () => {
    const snapshot = renderer
      .create(
        <TamaguiProvider config={config}>
          <StyledTabs />
        </TamaguiProvider>,
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
