import { TreeNode } from '@leetcode/core';

export function l105ConstructBinaryTreeFromPreorderAndInorderTraversal(
  preorder: number[],
  inorder: number[]
): TreeNode | null {
  if (preorder.length === 0 || inorder.length === 0) return null;

  const root = new TreeNode(preorder[0]);
  const rootPosition = inorder.indexOf(root.val);

  root.left = l105ConstructBinaryTreeFromPreorderAndInorderTraversal(
    preorder.slice(1, rootPosition + 1),
    inorder.slice(0, rootPosition)
  );
  root.right = l105ConstructBinaryTreeFromPreorderAndInorderTraversal(
    preorder.slice(rootPosition + 1),
    inorder.slice(rootPosition + 1)
  );

  return root;
}
