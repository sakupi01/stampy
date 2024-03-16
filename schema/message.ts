import { Output, object } from "valibot";
import { messageSchema, stampSchema } from "./schema";
const MessageFormSchema = object({
  // carId: cardIdSchema,
  stamp: stampSchema,
  message: messageSchema,
  // nthDay: dateShema,
});

type MessageFormType = Output<typeof MessageFormSchema>;

export { MessageFormSchema, MessageFormType };
