import { Output, object } from "valibot";
import { messageSchema, stampSchema } from "./schema";
const MessageFormSchema = object({
  stamp: stampSchema,
  message: messageSchema,
});

type MessageFormType = Output<typeof MessageFormSchema>;

export { MessageFormSchema, MessageFormType };
