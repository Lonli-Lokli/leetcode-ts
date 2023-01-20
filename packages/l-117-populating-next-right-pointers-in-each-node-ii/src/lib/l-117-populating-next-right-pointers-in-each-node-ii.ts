// https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/

import { TreeNodeNext } from "@leetcode/core";

export function l117PopulatingNextRightPointersInEachNodeIi_Recursive(
  root: TreeNodeNext | null
): TreeNodeNext | null {
  const getNodeHeight = (root: TreeNodeNext | null): number =>
    root !== null
      ? Math.max(getNodeHeight(root.left), getNodeHeight(root.right)) + 1
      : 0;

  const height = getNodeHeight(root);

  const visitLevel = (node: TreeNodeNext | null, levels: TreeNodeNext[], level: number) => {
    if (node == null) {
      return levels;
    }
    if (level === 0) {
      levels.push(node);
    } else if (level > 0) {
      visitLevel(node.left, levels, level - 1);
      visitLevel(node.right, levels, level - 1);
    }

    return levels;
  };

  for (let i = 1; i <= height; i++) {
    const levels = visitLevel(root, [], i)
    levels.forEach((item, idx) => {
      item.next = levels[idx + 1] ?? null;
    });

  }

  return root;
}

export function l117PopulatingNextRightPointersInEachNodeIi_Queue(
  root: TreeNodeNext | null
): TreeNodeNext | null {
  if (!root) return root;
  const queue: TreeNodeNext[] = [root];

  while (queue.length > 0) {
    let qLen = queue.length;
    while (--qLen >= 0) {
      const top = queue.shift()!;
      if (qLen > 0) top.next = queue[0] ?? null;
      if (top.left) queue.push(top.left);
      if (top.right) queue.push(top.right);
    }
  }

  return root;
}
