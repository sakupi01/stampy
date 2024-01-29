import Providers from "@/libs/providers";
import renderer from "react-test-renderer";
import { SimpleList } from "./SimpleList";
describe("<SimpleList />", () => {
  test("if renders", () => {
    const snapshot = renderer
      .create(
        <Providers colorScheme={"light"}>
          <SimpleList />
        </Providers>,
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
