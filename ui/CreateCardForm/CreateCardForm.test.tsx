import Providers from "@/libs/provider/providers";
import renderer from "react-test-renderer";
import { CreateCardForm } from "./CreateCardForm";

jest.useFakeTimers();
const mockDate = new Date("2024/01/18");
jest.setSystemTime(mockDate);
jest.mock("@/libs/firebase/upload-image", () => {});

describe("<CreateCardForm />", () => {
  test("if renders", () => {
    const user = {
      avatarUrl: "https://example.com",
      id: "0",
      username: "test",
      email: "",
    };
    const snapshot = renderer
      .create(
        <Providers colorScheme={"light"}>
          <CreateCardForm user={user} />
        </Providers>,
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
