import { Output, object, optional } from "valibot";
import { ImageSchema, emailSchema, userNameSchema } from "./schema";

const AccountSettingsSchema = object({
  avatarUrl: optional(ImageSchema),
  email: optional(emailSchema),
  username: optional(userNameSchema),
});

type AccountSettingsType = Output<typeof AccountSettingsSchema>;

export { AccountSettingsSchema, AccountSettingsType };
