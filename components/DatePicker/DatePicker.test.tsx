import Providers from "@/libs/providers";
import renderer from "react-test-renderer";
import { DatePicker } from "./DatePicker";
describe("<DatePicker />", () => {
  test("if renders", () => {
    const snapshot = renderer
      .create(
        <Providers colorScheme={"light"}>
          <DatePicker />
        </Providers>,
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
