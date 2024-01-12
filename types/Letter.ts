import { ListType } from "./ListType";
import { User } from "./User";

export type Letter = {
  id: string;
  title: string;
  stamp: string | undefined;
  hrefPrefix: string | undefined;
  sender: User;
  receiver: User;
  content: string;
  read: boolean;
  createdAt: string;
  sendAt: string;
  listType: ListType;
};
