import renderer from "react-test-renderer";
import { TamaguiProvider } from "tamagui";
import config from "../../tamagui.config";
import { StampCard } from "./StampCard";
describe("<StampCard />", () => {
  test("if renders", () => {
    const snapshot = renderer
      .create(
        <TamaguiProvider config={config}>
          <StampCard />
        </TamaguiProvider>,
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
