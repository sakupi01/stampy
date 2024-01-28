import { ListType } from "./ListType";
import { User } from "./User";

export type Notification = {
  type: "notification";
  id: string;
  title: string;
  content: string;
  stamp: string | undefined;
  currentDay?: number;
  isLastDay?: boolean;
  hrefPrefix: string | undefined;
  sender: User;
  receiver: User;
  read: boolean;
  createdAt: string;
  sendAt: string;
  listType: ListType;
};
