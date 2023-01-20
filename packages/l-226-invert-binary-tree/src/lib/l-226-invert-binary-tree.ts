// https://leetcode.com/problems/invert-binary-tree/

import { TreeNode } from "@leetcode/core";

export function l226InvertBinaryTree_Recursive(root: TreeNode | null): TreeNode | null {
  const swap = (node: TreeNode | null) => {
    if (node === null) return;
    const temp = node.left;
    node.left = node.right;
    node.right = temp;

    swap(node.left);
    swap(node.right);
  }

  swap(root);
  return root;
}

export function l226InvertBinaryTree_Iterative(root: TreeNode | null): TreeNode | null {
  const queue: Array<TreeNode | null> = [root];

  while (queue.length > 0) {
    const node = queue.shift()!;
    if (node === null) continue;

    const temp = node.left;
    node.left = node.right;
    node.right = temp;
    queue.push(node.left);
    queue.push(node.right);
  }

  return root;
}
