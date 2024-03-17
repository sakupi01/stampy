import Providers from "@/libs/provider/providers";
import renderer from "react-test-renderer";
import { SearchBar } from "./SearchBar";
describe("<SearchBar />", () => {
  test("if renders", () => {
    const snapshot = renderer
      .create(
        <Providers colorScheme={"light"}>
          <SearchBar uid="searchbar" placeholder="search..." />
        </Providers>,
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
