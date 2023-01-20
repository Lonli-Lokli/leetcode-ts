// https://leetcode.com/problems/binary-tree-postorder-traversal/

import { TreeNode } from "@leetcode/core";

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

export function l145BinaryTreePostorderTraversal_WithReverse(
  root: TreeNode | null
): number[] {
  const visited: number[] = [];
  const stack: Array<TreeNode | null> = [root];

  while (stack.length > 0) {
    const top = stack.pop()!;
    if (top === null) continue;
    visited.unshift(top.val);
    stack.push(top.left);
    stack.push(top.right);
  }
  return visited;
}

export function l145BinaryTreePostorderTraversal_WithDestroyConnection(
  root: TreeNode | null
): number[] {
  const visited: number[] = [];
  const stack: Array<TreeNode | null> = [root];

  while (stack.length > 0) {
    const top = stack.pop()!;
    if (top === null) continue;
    if (top.left === null && top.right === null) {
      visited.push(top.val);
    } else {
      stack.push(top);
      stack.push(top.right);
      top.right = null;
      stack.push(top.left);
      top.left = null;
    }
  }
  return visited;
}
