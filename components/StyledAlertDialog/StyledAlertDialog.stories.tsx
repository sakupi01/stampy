import { sleep } from "@/libs/sleep";
import { Meta, StoryObj } from "@storybook/react";
import { StyledButton } from "../StyledButton";
import { StyledInput } from "../StyledInput/StyledInput";
import { StyledAlertDialog } from "./StyledAlertDialog";

const meta = {
  title: "StyledAlertDialog",
  component: StyledAlertDialog,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof StyledAlertDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Story />
      </div>
    ),
  ],
  render: function Comp({ ...args }) {
    return (
      <>
        <meta.component
          triggerButton={(toggleModal) => (
            <StyledButton onPress={toggleModal}>Trigger</StyledButton>
          )}
          // @ts-ignore
          cancelButton={(untoggleModal) => (
            <StyledButton type="secondary" onPress={untoggleModal}>
              キャンセル
            </StyledButton>
          )}
          // @ts-ignore
          actionButton={(action) => (
            <StyledButton
              type="primary"
              onPress={() =>
                action(async () => {
                  console.log("claim stamp start");
                  // TODO: スタンプをclaimする処理
                  await sleep(1000);
                  console.log("claim stamp end");
                })
              }
            >
              はい
            </StyledButton>
          )}
          // biome-ignore lint/style/noUnusedTemplateLiteral: <explanation>
          description={`スタンプをもらう\n準備ができましたか？`}
          {...args}
        >
          <StyledInput
            id="message"
            label="ひとことメッセージ"
            defaultValue="お疲れさま！"
          />
        </meta.component>
        <meta.component
          triggerButton={(toggleModal) => (
            <StyledButton onPress={toggleModal}>Trigger</StyledButton>
          )}
          // @ts-ignore
          cancelButton={(untoggleModal) => (
            <StyledButton type="secondary" onPress={untoggleModal}>
              キャンセル
            </StyledButton>
          )}
          // @ts-ignore
          actionButton={(action) => (
            <StyledButton
              type="primary"
              onPress={() =>
                action(async () => {
                  console.log("claim stamp start");
                  // TODO: スタンプをclaimする処理
                  await sleep(1000);
                  console.log("claim stamp end");
                })
              }
            >
              はい
            </StyledButton>
          )}
          // biome-ignore lint/style/noUnusedTemplateLiteral: <explanation>
          description={`スタンプをもらう\n準備ができましたか？`}
          {...args}
        >
          <StyledInput
            id="message"
            label="ひとことメッセージ"
            defaultValue="お疲れさま！"
          />
        </meta.component>
        <meta.component
          triggerButton={(toggleModal) => (
            <StyledButton onPress={toggleModal}>Trigger</StyledButton>
          )}
          // @ts-ignore
          cancelButton={(untoggleModal) => (
            <StyledButton type="secondary" onPress={untoggleModal}>
              キャンセル
            </StyledButton>
          )}
          // @ts-ignore
          actionButton={(action) => (
            <StyledButton
              type="primary"
              onPress={() =>
                action(async () => {
                  console.log("claim stamp start");
                  // TODO: スタンプをclaimする処理
                  await sleep(1000);
                  console.log("claim stamp end");
                })
              }
            >
              はい
            </StyledButton>
          )}
          // biome-ignore lint/style/noUnusedTemplateLiteral: <explanation>
          description={`スタンプをもらう\n準備ができましたか？`}
          {...args}
        >
          <StyledInput
            id="message"
            label="ひとことメッセージ"
            defaultValue="お疲れさま！"
          />
        </meta.component>
      </>
    );
  },
};
