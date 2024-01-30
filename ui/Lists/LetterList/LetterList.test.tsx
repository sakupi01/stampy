import Providers from "@/libs/provider/providers";
import renderer from "react-test-renderer";
import { LetterList } from "./LetterList";
describe("<LetterList />", () => {
  test("if renders", () => {
    const snapshot = renderer
      .create(
        <Providers colorScheme={"light"}>
          <LetterList />
        </Providers>,
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
