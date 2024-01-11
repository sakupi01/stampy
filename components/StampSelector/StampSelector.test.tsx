import renderer from "react-test-renderer";
import { TamaguiProvider } from "tamagui";
import config from "../../tamagui.config";
import { StampSelector } from "./StampSelector";

jest.useFakeTimers();

describe("<StampSelector />", () => {
  test("if renders", () => {
    const mockFn = jest.fn(() => {});
    const snapshot = renderer
      .create(
        <TamaguiProvider config={config}>
          <StampSelector setValue={mockFn} />
        </TamaguiProvider>,
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
