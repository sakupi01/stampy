import { Output, coerce, date, object, optional } from "valibot";
import {
  emailSchema,
  isStampySchema,
  stampCardTitleSchema,
  themeSchema,
} from "./schema";

export const DateSchema = coerce(
  date("日付を選択してください"),
  // @ts-ignore
  (i: string | number | Date) => new Date(i),
);

const StampCardFormSchema = object({
  title: stampCardTitleSchema,
  startDate: DateSchema,
  endDate: DateSchema,
  theme: themeSchema,
  isStampy: isStampySchema,
  receiver: optional(emailSchema),
});

type StampCardFormType = Output<typeof StampCardFormSchema>;

export { StampCardFormSchema, StampCardFormType };
