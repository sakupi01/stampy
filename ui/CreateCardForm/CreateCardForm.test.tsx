import Providers from "@/libs/provider/providers";
import renderer from "react-test-renderer";
import { CreateCardForm } from "./CreateCardForm";

jest.useFakeTimers();
const mockDate = new Date("2024/01/18");
jest.setSystemTime(mockDate);
jest.mock("@/libs/firebase/upload-image", () => {});

describe("<CreateCardForm />", () => {
  test("if renders", () => {
    const snapshot = renderer
      .create(
        <Providers colorScheme={"light"}>
          <CreateCardForm />
        </Providers>,
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
