import { Output, object, optional } from "valibot";
import {
  ImageSchema,
  emailSchema,
  passwordConfirmSchema,
  passwordSchema,
  userNameSchema,
} from "./schema";

const AccountSettingsSchema = object({
  avatarUrl: optional(ImageSchema),
  email: optional(emailSchema),
  username: optional(userNameSchema),
  password: optional(passwordSchema),
  passwordConfirm: optional(passwordConfirmSchema),
});

type AccountSettingsType = Output<typeof AccountSettingsSchema>;

export { AccountSettingsSchema, AccountSettingsType };
