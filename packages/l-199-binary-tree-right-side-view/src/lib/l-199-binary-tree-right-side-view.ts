import { TreeNode } from "@leetcode/core";

// https://leetcode.com/problems/binary-tree-right-side-view
export function l199BinaryTreeRightSideView(root: TreeNode | null): number[] {
  if (!root) return [];
  const result: number[] = [];

  const queue = [root];

  while (queue.length > 0) {

    let lastItem = -1;
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      const node = queue.shift()!;
      lastItem = node.val;
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
    result.push(lastItem);
    
  }
  
  return result;
};
