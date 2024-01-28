import Providers from "@/libs/provider/providers";
import renderer from "react-test-renderer";
import { StyledList } from "./StyledList";
import { DATA } from "./fixture/mock.data";
describe("<StyledList />", () => {
  test("if renders", () => {
    const snapshot = renderer
      .create(
        <Providers colorScheme={"light"}>
          <StyledList data={DATA} />
        </Providers>,
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
