import Providers from "@/libs/provider/providers";
import renderer from "react-test-renderer";
import { AvatarPicker } from "./AvatarPicker";
describe("<AvatarPicker />", () => {
  test("if renders", () => {
    const snapshot = renderer
      .create(
        <Providers colorScheme={"light"}>
          <AvatarPicker />
        </Providers>,
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
