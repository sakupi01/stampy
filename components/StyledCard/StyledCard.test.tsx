import renderer, { act } from "react-test-renderer";
import { TamaguiProvider } from "tamagui";
import config from "../../tamagui.config";
import { StyledCard } from "./StyledCard";
jest.useFakeTimers();
describe("<StyledCard />", () => {
  test("if renders", () => {
    const snapshot = act(() =>
      renderer
        .create(
          <TamaguiProvider config={config}>
            <StyledCard.Card />
          </TamaguiProvider>,
        )
        .toJSON(),
    );
    expect(snapshot).toMatchSnapshot();
  });
});
