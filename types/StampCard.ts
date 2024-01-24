import { StampNode } from "./StampNode";
import { User } from "./User";

export type StampCard = {
  cardId: string;
  title: string;
  createdBy: User;
  joinedUser: User;
  createdAt: Date;
  updatedAt: Date;
  currentDay: number;
  isCompleted: boolean;
  isDeleted: boolean;
  stampNodes: StampNode[];
  backgroundUrl: string | undefined;
};
