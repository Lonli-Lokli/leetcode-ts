// https://leetcode.com/problems/binary-tree-level-order-traversal/
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

export function l102BinaryTreeLevelOrderTraversal(
  root: TreeNode | null
): number[][] {
  const levels: Array<number[]> = [];
  if (root === null) return levels;

  const queue: Array<{ node: TreeNode | null; level: number }> = [
    {
      node: root,
      level: 0,
    },
  ];

  while (queue.length > 0) {
    const { node, level } = queue.pop()!;
    if (levels.length === level) levels.push([]);

    levels[level].push(node!.val);
    if (node!.right !== null) {
      queue.push({
        node: node!.right,
        level: level + 1,
      });
    }
    if (node!.left !== null) {
      queue.push({
        node: node!.left,
        level: level + 1,
      });
    }
  }
  return levels;
}

export function l102BinaryTreeLevelOrderTraversal_Queue(
  root: TreeNode | null
): number[][] {
  if (!root) {
    return [];
  }
  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const currLevel = [];
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      const node = queue.shift()!;
      currLevel.push(node.val);
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
    result.push(currLevel);
  }

  return result;
}
