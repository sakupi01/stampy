import { Output, object } from "valibot";
import { emailSchema, passwordSchema, userNameSchema } from "./schema";

const SignUpFormSchema = object({
  email: emailSchema,
  username: userNameSchema,
  password: passwordSchema,
});

type SignUpFormType = Output<typeof SignUpFormSchema>;

export { SignUpFormSchema, SignUpFormType };
