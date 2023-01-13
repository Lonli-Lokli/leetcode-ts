// https://leetcode.com/problems/binary-tree-preorder-traversal/
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

export function l144BinaryTreePreorderTraversal_Recursive(root: TreeNode | null): number[] {
  const visited: number[] = [];

  const traverse = (node: TreeNode) => {
    visited.push(node.val);
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);

  };

  if (root) traverse(root);
  return visited;
}

export function l144BinaryTreePreorderTraversal_Iterative(root: TreeNode | null): number[] {
  const visited: number[] = [];
  if (root === null) return visited;
  const stack: Array<TreeNode> = [];
    
   let currentNode = root;
   stack.push(currentNode);

   while (stack.length > 0) {
      currentNode = stack.pop()!;        
      visited.push(currentNode.val);
      
      if (currentNode.right != null)
        stack.push(currentNode.right);
      
      // Add the left node to the stack. We add the left child after the right child node into the stack.
      //  This is because we have to traverse the left subtree before traversing the right sub tree.
      if (currentNode.left != null)
        stack.push(currentNode.left);
    }
    return visited;
}