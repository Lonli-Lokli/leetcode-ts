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

export function l098ValidateBinarySearchTree_InOrder_Recursive(root: TreeNode | null): boolean {
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
  }

  traverse(root);

  return result;

}
