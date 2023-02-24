import { TreeNode } from "@leetcode/core";

export function l114FlattenBinaryTreeToLinkedList(root: TreeNode | null) {
  let head: TreeNode | null = null;
  
  const dfs = (node: TreeNode | null) => {
      if (!node) return;
              
      dfs(node.right);
      dfs(node.left);

      node.left = null;
      node.right = head;
      head = node;
  }

  dfs(root);
  
};
