import Providers from "@/libs/provider/providers";
import renderer from "react-test-renderer";
import { Typography } from "../../components/Typography/Typography";
import { MockStampCards } from "../StampCard/fixture/mock.data";
import { StyledPopover } from "./StyledPopover";

// reduxのデータをモックする必要があり、一旦保留
describe("<StyledPopover />", () => {
  test("if renders", () => {
    const snapshot = renderer
      .create(
        <Providers colorScheme={"light"}>
          <StyledPopover data={MockStampCards[0]}>
            <Typography>Popover</Typography>
          </StyledPopover>
        </Providers>,
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
