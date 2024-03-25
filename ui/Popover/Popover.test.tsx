import Providers from "@/libs/provider/providers";
import renderer from "react-test-renderer";
import { Popover } from "./Popover";
describe("<Popover />", () => {
  test("if renders", () => {
    const snapshot = renderer
      .create(
        <Providers colorScheme={"light"}>
          <Popover />
        </Providers>,
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
