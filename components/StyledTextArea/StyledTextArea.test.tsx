import Providers from "@/libs/providers";
import renderer from "react-test-renderer";
import { StyledTextArea } from "./StyledTextArea";
describe("<StyledTextArea />", () => {
  test("if renders", () => {
    const snapshot = renderer
      .create(
        <Providers colorScheme={"light"}>
          <StyledTextArea label="Label" />
        </Providers>,
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
