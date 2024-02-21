import Providers from "@/libs/provider/providers";
import renderer from "react-test-renderer";
import { AvatarPicker } from "./AvatarPicker";

jest.mock("@/libs/firebase/upload-image", () => {});

describe("<AvatarPicker />", () => {
  test("avter", () => {
    const snapshot = renderer
      .create(
        <Providers colorScheme={"light"}>
          <AvatarPicker defaultUrl="" setValue={() => {}} />
        </Providers>,
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
