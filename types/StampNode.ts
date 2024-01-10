import { User } from "./User";

export type StampNode = {
  stampId: string;
  stamp: string;
  message: string;
  stamped: boolean;
  nthDay: number;
  stampedAt: Date;
  stampedBy: User;
  x: number;
  y: number;
};
