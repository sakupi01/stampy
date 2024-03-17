import Providers from "@/libs/provider/providers";
import renderer from "react-test-renderer";
import { mockCardListData } from "../CardList/fixture/mock.data";
import { SimpleList } from "./SimpleList";
describe("<SimpleList />", () => {
  test("if renders", () => {
    const snapshot = renderer
      .create(
        <Providers colorScheme={"light"}>
          <SimpleList data={mockCardListData} />
        </Providers>,
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
