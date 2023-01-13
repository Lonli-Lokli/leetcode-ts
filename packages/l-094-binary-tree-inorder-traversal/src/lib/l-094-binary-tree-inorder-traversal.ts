// https://leetcode.com/problems/binary-tree-inorder-traversal/
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

export function l094BinaryTreeInorderTraversal_Recursive(root: TreeNode | null): number[] {
  const visited: number[] = [];

  const traverse = (node: TreeNode) => {
    if (node.left) traverse(node.left);
    visited.push(node.val);
    if (node.right) traverse(node.right);
  };

  if (root) traverse(root);
  return visited;
}

export function l094BinaryTreeInorderTraversal_Iterative(root: TreeNode | null): number[] {
  const visited: number[] = [];
  if (root === null) return visited;
  const stack: Array<TreeNode> = [];

  let currentNode: TreeNode | null = root;

  while (stack.length > 0 || currentNode !== null) {
    if (currentNode !== null) {
      stack.push(currentNode);
      currentNode = currentNode.left;
    } else {
      currentNode = stack.pop()!;
      visited.push(currentNode.val);
      currentNode = currentNode.right;
    }
  }
  return visited;
}
