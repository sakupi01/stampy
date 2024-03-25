import { StampNode } from "./StampNode";
import { User } from "./User";

export type StampCard = {
  id: string;
  title: string;
  createdBy: User;
  joinedUser: User;
  createdAt: Date;
  updatedAt: Date;
  startDate: Date;
  endDate: Date;
  isCompleted: boolean;
  isDeleted: boolean;
  stampNodes: StampNode[];
  backgroundUrl: string | undefined;
  letterId?: string;
};
