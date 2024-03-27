import { ListType } from "./ListType";
import { User } from "./User";

export type Notification = {
  type: "notification";
  id: string;
  title: string;
  message: string;
  stamp: string | undefined;
  nthDay?: number;
  isLastDay?: boolean;
  letterId?: string;
  cardId?: string;
  hrefPrefix: string | undefined;
  sender: User;
  receiver: User;
  read: boolean;
  createdAt: string;
  sendAt: string;
  listType: ListType;
};
