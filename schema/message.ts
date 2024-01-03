import { Output, object } from "valibot";
import { messageSchema } from "./schema";
const MessageFormSchema = object({
  message: messageSchema,
});

type MessageFormType = Output<typeof MessageFormSchema>;

export { MessageFormSchema, MessageFormType };
