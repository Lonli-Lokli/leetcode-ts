// https://leetcode.com/problems/binary-tree-pruning/

import { TreeNode } from "@leetcode/core";

export function l814BinaryTreePruning(root: TreeNode | null): TreeNode | null {
  const helper = (node: TreeNode | null): TreeNode | null => {
      if (!node) return node;
      
      node.left = helper(node.left);
      node.right = helper(node.right);
      
      if (!node.left && !node.right && node.val !== 1) return null;
      
      return node;
      
  }
  return helper(root);
};