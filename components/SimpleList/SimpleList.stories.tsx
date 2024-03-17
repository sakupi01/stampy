import { AccountSettingsType } from "@/schema/accountSetting";
import { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";
import { mockCardListData } from "../CardList/fixture/mock.data";
import { SimpleList } from "./SimpleList";

const meta = {
  title: "SimpleList",
  component: SimpleList,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof SimpleList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  //@ts-ignore: <as it's defined in components in render fn>
  args: {},
  render: function Comp({ ...args }) {
    const { control } = useForm<AccountSettingsType>();
    return <meta.component data={mockCardListData} control={control} />;
  },
};
