import { ListType } from "./ListType";
import { User } from "./User";

export type Notification = {
  id: string;
  title: string;
  content: string;
  stamp: string | undefined;
  hrefPrefix: string | undefined;
  sender: User;
  receiver: User;
  read: boolean;
  createdAt: string;
  sendAt: string;
  listType: ListType;
};
