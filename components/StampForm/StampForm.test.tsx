import Providers from "@/libs/providers";
import renderer from "react-test-renderer";
import { StampForm } from "./StampForm";

jest.useFakeTimers();

describe("<StampForm />", () => {
  test("if renders", () => {
    const snapshot = renderer
      .create(
        <Providers colorScheme={"light"}>
          <StampForm
            user={{ name: "Blah" }}
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
