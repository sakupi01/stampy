import Providers from "@/libs/provider/providers";
import renderer from "react-test-renderer";
import { CardList } from "./CardList";
describe("<CardList />", () => {
  test("if renders", () => {
    const snapshot = renderer
      .create(
        <Providers colorScheme={"light"}>
          <CardList />
        </Providers>,
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
