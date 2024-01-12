import renderer from "react-test-renderer";
import { TamaguiProvider } from "tamagui";
import config from "../../tamagui.config";
import { StampWrapper } from "./StampWrapper";
describe("<StampWrapper />", () => {
  test("if renders", () => {
    const snapshot = renderer
      .create(
        <TamaguiProvider config={config}>
          <StampWrapper />
        </TamaguiProvider>,
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
