import { Output, custom, forward, object } from "valibot";
import {
  emailSchema,
  passwordConfirmSchema,
  passwordSchema,
  userNameSchema,
} from "./schema";

const SignUpFormSchema = object(
  {
    email: emailSchema,
    username: userNameSchema,
    password: passwordSchema,
    passwordConfirm: passwordConfirmSchema,
  },
  [
    forward(
      custom(
        (input) => input.password === input.passwordConfirm,
        "パスワードが一致しません",
      ),
      ["passwordConfirm"],
    ),
  ],
);

type SignUpFormType = Output<typeof SignUpFormSchema>;

export { SignUpFormSchema, SignUpFormType };
