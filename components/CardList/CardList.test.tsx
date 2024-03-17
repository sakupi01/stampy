import Providers from "@/libs/provider/providers";
import renderer from "react-test-renderer";
import { CardList } from "./CardList";
import { mockCardListData } from "./fixture/mock.data";
describe("<CardList />", () => {
  test("if renders", () => {
    const snapshot = renderer
      .create(
        <Providers colorScheme={"light"}>
          <CardList data={mockCardListData} />
        </Providers>,
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
