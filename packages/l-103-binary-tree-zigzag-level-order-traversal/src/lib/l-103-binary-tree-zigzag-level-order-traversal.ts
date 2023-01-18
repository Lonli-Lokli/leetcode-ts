// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

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
