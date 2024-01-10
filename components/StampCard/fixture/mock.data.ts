import { StampNode } from "@/types";

export const MockStampNodes: StampNode[] = [
  ...Array.from(Array(20)).map((_, i) => ({
    stampId: `${i + 1}`,
    stamp: "🌟",
    message: "おめでとう！",
    stamped: i + 1 < 5,
    stampedAt: new Date(),
    nthDay: i + 1,
    stampedBy: {
      id: "1",
      username: "山田太郎",
      email: "email.com",
    },
    x: 0,
    y: 0,
  })),
];

export const FIXTURE = {
  WIDTH: 300,
  HEIGHT: 500,
};
