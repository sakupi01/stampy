import { StampNode } from "@/types";
import { StampCard } from "@/types/StampCard";

export const MockStampNodes: StampNode[] = [
  ...Array.from(Array(20)).map((_, i) => ({
    id: `${i + 1}`,
    stamp: "🌟",
    message: "おめでとう！",
    stamped: i + 1 < 5,
    stampedAt: new Date(),
    nthday: i + 1,
    stampedBy: {
      id: "1",
      username: "山田太郎",
      email: "email.com",
      avatarUrl:
        "https://images.unsplash.com/photo-1531384441138-2736e62e0919?&w=100&h=100&dpr=2&q=80",
    },
    x: 0,
    y: 0,
    cardId: "1",
  })),
];

export const MockStampCards: StampCard[] = [
  ...Array.from(Array(20)).map((_, i) => ({
    id: `${i + 1}`,
    title: `タイトル${i + 1}`,
    createdBy: {
      id: "1",
      username: "Stampy",
      email: "stampy.com",
      avatarUrl:
        "https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80",
    },
    joinedUser: {
      id: "2",
      username: "山田太郎",
      email: "email.com",
      avatarUrl:
        "https://images.unsplash.com/photo-1531384441138-2736e62e0919?&w=100&h=100&dpr=2&q=80",
    },
    createdAt: new Date(),
    updatedAt: new Date(),
    startDate: new Date("2024-02-22 00:00:00"),
    endDate: new Date("2024-02-28 00:00:00"),
    isCompleted: i + 1 < 8,
    isDeleted: false,
    stampNodes: MockStampNodes,
    backgroundUrl: "https://source.unsplash.com/ZkOt0N7rP4s",
  })),
];

export const FIXTURE = {
  WIDTH: 300,
  HEIGHT: 500,
};
