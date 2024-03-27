import { Output, custom, forward, object } from "valibot";
import { passwordConfirmSchema, passwordSchema } from "./schema";

const RenewPasswordFormSchema = object(
  {
    oldPassword: passwordSchema,
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

type RenewPasswordFormType = Output<typeof RenewPasswordFormSchema>;

export { RenewPasswordFormSchema, RenewPasswordFormType };
