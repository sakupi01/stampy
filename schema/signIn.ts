import { Output, object } from "valibot";
import { emailSchema, passwordSchema } from "./schema";

const SignInFormSchema = object({
  email: emailSchema,
  password: passwordSchema,
});

type SignInFormType = Output<typeof SignInFormSchema>;

export { SignInFormSchema, SignInFormType };
