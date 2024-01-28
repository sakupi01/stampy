import Providers from "@/libs/provider/providers";
import renderer from "react-test-renderer";
import { ThemeSelector } from "./ThemeSelector";
jest.useFakeTimers();
const mockSetState = jest.fn();
describe("<ThemeSelector />", () => {
  test("if renders", () => {
    const snapshot = renderer
      .create(
        <Providers colorScheme={"light"}>
          <ThemeSelector setValue={mockSetState} />
        </Providers>,
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
