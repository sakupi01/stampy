import { Output, object } from "valibot";
import { ImageSchema, emailSchema, userNameSchema } from "./schema";

const AccountSettingsSchema = object({
  image: ImageSchema,
  email: emailSchema,
  username: userNameSchema,
});

type AccountSettingsType = Output<typeof AccountSettingsSchema>;

export { AccountSettingsSchema, AccountSettingsType };
