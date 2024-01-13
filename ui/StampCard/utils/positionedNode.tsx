import { StampNode } from "../../../types/StampNode";
export const getPositionedNode = (
  nodes: StampNode[],
  nodesPerRow: number,
  rowHeight: number,
  columnWidth: number,
) => {
  return nodes.map((node, index) => {
    const row = Math.floor(index / nodesPerRow);
    const col = index % nodesPerRow;
    const x =
      row % 2 === 0 ? col * columnWidth : (nodesPerRow - 1 - col) * columnWidth;
    const y = row * rowHeight;
    return { ...node, x, y };
  });
};
