import Providers from "@/libs/providers";
import renderer from "react-test-renderer";
import { DatePicker } from "./DatePicker";
jest.useFakeTimers();
const mockDate = new Date("2024/01/18");
jest.setSystemTime(mockDate);

describe("<DatePicker />", () => {
  test("if renders", () => {
    const mockFn = jest.fn(() => {});
    const snapshot = renderer
      .create(
        <Providers colorScheme={"light"}>
          <DatePicker
            setValue={mockFn}
            label="開始日"
            minimumDate={new Date()}
            keyString={"startDate"}
          />
        </Providers>,
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
