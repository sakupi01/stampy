import { User } from "./User";

export type Letter = {
  type: "letter";
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
  listType: "link";
};
