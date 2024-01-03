import { Output, object } from "valibot";
import { passwordSchema, userNameSchema } from "./schema";

const SignInFormSchema = object({
  username: userNameSchema,
  password: passwordSchema,
});

type SignInFormType = Output<typeof SignInFormSchema>;

export { SignInFormSchema, SignInFormType };
