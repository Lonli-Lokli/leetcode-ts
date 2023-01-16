// https://leetcode.com/problems/validate-binary-search-tree/
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

export function l098ValidateBinarySearchTree_InOrder_Recursive(
  root: TreeNode | null
): boolean {
  if (root === null) return true;
  let result = true;
  let lastValue = Number.MIN_SAFE_INTEGER;

  const traverse = (input: TreeNode) => {
    if (!result) return;
    if (input.left) traverse(input.left);
    if (input.val <= lastValue) {
      result = false;
    }
    lastValue = input.val;
    if (input.right) traverse(input.right);
  };

  traverse(root);

  return result;
}

export function l098ValidateBinarySearchTree_InOrder_Traversal(
  root: TreeNode | null
): boolean {
  const stack: TreeNode[] = [];
  let lastValue = Number.MIN_SAFE_INTEGER;

  let currentNode: TreeNode | null = root;
  while (stack.length > 0 || currentNode !== null) {
    if (currentNode !== null) {
      stack.push(currentNode);
      currentNode = currentNode.left;
    } else {
      currentNode = stack.pop()!;
      if (currentNode.val <= lastValue) {
        return false;
      }
      lastValue = currentNode.val;
      currentNode = currentNode.right;
    }
  }
  return true;
}

export function l098ValidateBinarySearchTree_WithRange_Recursive(
  root: TreeNode | null
): boolean {
  const validate = (
    node: TreeNode | null,
    min: number,
    max: number
  ): boolean => {
    if (node === null) return true; // null means valid

    if (node.val <= min || node.val >= max) return false;

    return (
      validate(node.left, min, node.val) && validate(node.right, node.val, max)
    );
  };

  return validate(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}

export function l098ValidateBinarySearchTree_WithRange_Iterative(
  root: TreeNode | null
): boolean {
  type StackElement = { node: TreeNode | null; min: number; max: number };
  const stack: StackElement[] = [{
    node: root,
    min: Number.MIN_SAFE_INTEGER,
    max: Number.MAX_SAFE_INTEGER,
  }];

  while (stack.length > 0) {
    const {node, min, max} = stack.pop()!;
    if (node === null) continue;

    if (node.val <= min || node.val >= max) return false;
    stack.push({node: node.left, min, max: node.val});
    stack.push({node: node.right, min: node.val, max});
  }
  return true;
}
