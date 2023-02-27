// https://leetcode.com/problems/path-sum/
import { TreeNode } from '@leetcode/core';

export function l112PathSum(root: TreeNode | null, targetSum: number): boolean {
  const calc = (node: TreeNode | null, sum: number): boolean => {
    if (node === null) return false;
    if (node.left === null && node.right === null) {
      return targetSum === sum + node.val;
    }

    return (
      (node.left !== null && calc(node.left, sum + node.val)) ||
      (node.right !== null && calc(node.right, sum + node.val))
    );
  };

  return calc(root, 0);
}
