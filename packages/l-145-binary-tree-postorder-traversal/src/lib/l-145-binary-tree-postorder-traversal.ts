// https://leetcode.com/problems/binary-tree-postorder-traversal/
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

export function l145BinaryTreePostorderTraversal_Recursive(
  root: TreeNode | null
): number[] {
  const visited: number[] = [];

  const traverse = (node: TreeNode) => {
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    visited.push(node.val);
  };

  if (root) traverse(root);
  return visited;
}

export function l145BinaryTreePostorderTraversal_Iterative(
  root: TreeNode | null
): number[] {
  const visited: number[] = [];
  const stack: Array<TreeNode> = [];

  let currentNode = root;
  while (currentNode || stack.length > 0) {
    if (currentNode !== null) {
      stack.push(currentNode);
      currentNode = currentNode.left;
    } else {
      // get the right node from top node in stack (do not pop)
      let previousNode = stack[stack.length - 1].right;
      if (previousNode === null) {
        previousNode = stack.pop()!; // assign only
        visited.push(previousNode.val);
        while (
          stack.length > 0 &&
          previousNode === stack[stack.length - 1].right
        ) {
          previousNode = stack.pop()!;
          visited.push(previousNode.val);
        }
      } else {
        currentNode = previousNode;
      }
    }
  }
  return visited;
}
