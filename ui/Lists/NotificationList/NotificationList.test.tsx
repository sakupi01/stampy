import Providers from "@/libs/provider/providers";
import renderer from "react-test-renderer";
import { NotificationList } from "./NotificationList";
describe("<NotificationList />", () => {
  test("if renders", () => {
    const snapshot = renderer
      .create(
        <Providers colorScheme={"light"}>
          <NotificationList />
        </Providers>,
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
