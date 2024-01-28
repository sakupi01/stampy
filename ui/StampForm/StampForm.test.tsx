import Providers from "@/libs/provider/providers";
import renderer from "react-test-renderer";
import { StampForm } from "./StampForm";

jest.useFakeTimers();

describe("<StampForm />", () => {
  test("if renders", () => {
    const snapshot = renderer
      .create(
        <Providers colorScheme={"light"}>
          <StampForm
            user={{
              id: "1",
              username: "username",
              email: "email",
              avatarUrl:
                "https://images.unsplash.com/photo-1531384441138-2736e62e0919?&w=100&h=100&dpr=2&q=80",
            }}
            currentDay={2}
            buttonLabel={"送る"}
            isLastDay={false}
          />
        </Providers>,
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
