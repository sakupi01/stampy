import Providers from "@/libs/providers";
import renderer from "react-test-renderer";
import { StyledList } from "./StyledList";
describe("<StyledList />", () => {
  test("if renders", () => {
    const snapshot = renderer
      .create(
        <Providers colorScheme={"light"}>
          <StyledList />
        </Providers>,
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
