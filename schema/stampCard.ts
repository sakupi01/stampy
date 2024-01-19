import { Output, coerce, date, object } from "valibot";
import { stampCardTitleSchema, themeSchema } from "./schema";

export const DateSchema = coerce(date(), (i) => new Date(i));

const StampCardFormSchema = object({
  title: stampCardTitleSchema,
  startDate: DateSchema,
  endDate: DateSchema,
  theme: themeSchema,
});

type StampCardFormType = Output<typeof StampCardFormSchema>;

export { StampCardFormSchema, StampCardFormType };
