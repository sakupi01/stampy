import Providers from "@/libs/provider/providers";
import renderer from "react-test-renderer";
import { ListSkeleton } from "./Skeleton";
describe("<Skeleton />", () => {
  test("if renders", () => {
    const snapshot = renderer
      .create(
        <Providers colorScheme={"light"}>
          <ListSkeleton />
        </Providers>,
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
