// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/

import { TreeNode } from "@leetcode/core";


export function l103BinaryTreeZigzagLevelOrderTraversal(
  root: TreeNode | null
): number[][] {
  const result: number[][] = [];
  const queue = [root];

  let level = 0;
  while (queue.length > 0) {
    const l = queue.length;
    const levels: number[] = [];
    for (let i = 0; i < l; i++) {
      const element = queue.shift()!;
      if (element === null) continue;

      queue.push(element.left);
      queue.push(element.right);
    }
    level++;
    if (levels.length > 0) {
      result.push(level % 2 === 0 ? levels.reverse() : levels);
    }
  }

  return result;
}
