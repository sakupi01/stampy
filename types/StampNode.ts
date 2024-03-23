import { User } from "./User";

export type StampNode = {
  id: string;
  stamp: string;
  message: string;
  stamped: boolean;
  nthday: number;
  stampedAt: Date;
  stampedBy: User;
  x: number;
  y: number;
  cardId: string;
};
