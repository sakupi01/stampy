import Providers from "@/libs/provider/providers";
import renderer from "react-test-renderer";
import { CoWorkerSelector } from "./CoWorkerSelector";

describe("<CoWorkerSelector />", () => {
  test("if renders", () => {
    const mockSetValue = jest.fn(() => {});
    const snapshot = renderer
      .create(
        <Providers colorScheme={"light"}>
          <CoWorkerSelector setValue={mockSetValue} />
        </Providers>,
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
