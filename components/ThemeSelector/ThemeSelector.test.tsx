import Providers from "@/libs/providers";
import renderer from "react-test-renderer";
import { ThemeSelector } from "./ThemeSelector";
describe("<ThemeSelector />", () => {
  test("if renders", () => {
    const snapshot = renderer
      .create(
        <Providers colorScheme={"light"}>
          <ThemeSelector />
        </Providers>,
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
