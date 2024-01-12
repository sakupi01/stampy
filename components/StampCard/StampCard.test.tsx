import Providers from "@/libs/providers";
import renderer from "react-test-renderer";
import { StampCard } from "./StampCard";
import { FIXTURE, MockStampNodes } from "./fixture/mock.data";
describe("<StampCard />", () => {
  test("if renders", () => {
    const snapshot = renderer
      .create(
        <Providers colorScheme={"light"}>
          <StampCard
            currentDay={5}
            stampNodes={MockStampNodes}
            fixedWidth={FIXTURE.WIDTH}
            fixedHeight={FIXTURE.HEIGHT}
          />
        </Providers>,
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
