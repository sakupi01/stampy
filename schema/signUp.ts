import { Output, custom, object } from "valibot";
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
    custom(
      ({ password, passwordConfirm }) => password === passwordConfirm,
      "パスワードが一致しません",
    ),
  ],
);

type SignUpFormType = Output<typeof SignUpFormSchema>;

export { SignUpFormSchema, SignUpFormType };
