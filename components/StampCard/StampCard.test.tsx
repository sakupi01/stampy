import renderer from "react-test-renderer";
import { TamaguiProvider } from "tamagui";
import config from "../../tamagui.config";
import { StampCard } from "./StampCard";
import { FIXTURE, MockStampNodes } from "./fixture/mock.data";
describe("<StampCard />", () => {
  test("if renders", () => {
    const snapshot = renderer
      .create(
        <TamaguiProvider config={config}>
          <StampCard
            currentDay={5}
            stampNodes={MockStampNodes}
            fixedWidth={FIXTURE.WIDTH}
            fixedHeight={FIXTURE.HEIGHT}
          />
        </TamaguiProvider>,
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
