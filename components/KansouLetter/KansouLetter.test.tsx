import Providers from "@/libs/provider/providers";
import { Letter } from "@/types/Letter";
import { DATA_LETTER } from "@/ui/StyledList/fixture/mock.data";
import renderer from "react-test-renderer";
import { KansouLetter } from "./KansouLetter";
describe("<KansouLetter />", () => {
  test("if renders", () => {
    const letter = DATA_LETTER[0] as Letter;
    const snapshot = renderer
      .create(
        <Providers colorScheme={"light"}>
          <KansouLetter letter={letter} />
        </Providers>,
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
