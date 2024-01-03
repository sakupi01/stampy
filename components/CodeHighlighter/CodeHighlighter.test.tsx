import renderer from "react-test-renderer";
import { TamaguiProvider } from "tamagui";
import config from "../../tamagui.config";
import { CodeHighlighter } from "./CodeHighlighter";
describe("<CodeHighlighter />", () => {
  test("if renders", () => {
    const snapshot = renderer
      .create(
        <TamaguiProvider config={config}>
          <CodeHighlighter />
        </TamaguiProvider>,
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
