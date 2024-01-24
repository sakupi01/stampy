import Providers from "@/libs/providers";
import renderer from "react-test-renderer";
import { CoWorkerSelector } from "./CoWorkerSelector";
describe("<CoWorkerSelector />", () => {
  test("if renders", () => {
    const snapshot = renderer
      .create(
        <Providers colorScheme={"light"}>
          <CoWorkerSelector />
        </Providers>,
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
