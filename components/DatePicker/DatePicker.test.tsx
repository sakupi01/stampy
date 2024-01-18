import Providers from "@/libs/providers";
import renderer from "react-test-renderer";
import { DatePicker } from "./DatePicker";
jest.useFakeTimers();
const mockDate = new Date("2024/01/18");
jest.setSystemTime(mockDate);

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
