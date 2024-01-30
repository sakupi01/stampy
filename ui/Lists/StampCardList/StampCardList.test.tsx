import Providers from "@/libs/provider/providers";
import renderer from "react-test-renderer";
import { StampCardList } from "./StampCardList";
describe("<StampCardList />", () => {
  test("if renders", () => {
    const snapshot = renderer
      .create(
        <Providers colorScheme={"light"}>
          <StampCardList />
        </Providers>,
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
