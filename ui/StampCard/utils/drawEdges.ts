import { StampNode } from "@/types";

const NODE_SIZE = 45;
export const drawEdges = (nodes: StampNode[]) => {
  let pathD = "";
  for (const [index, node] of nodes.entries()) {
    if (index > 0) {
      const prevNode = nodes[index - 1];
      pathD += `M${prevNode.x + NODE_SIZE / 2},${prevNode.y + NODE_SIZE / 2} L${
        node.x + NODE_SIZE / 2
      },${node.y + NODE_SIZE / 2} `;
    }
  }
  return pathD;
};
