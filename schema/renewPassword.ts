import { Output, object } from "valibot";
import { passwordSchema } from "./schema";

const RenewPasswordFormSchema = object({
  password: passwordSchema,
});

type RenewPasswordFormType = Output<typeof RenewPasswordFormSchema>;

export { RenewPasswordFormSchema, RenewPasswordFormType };
