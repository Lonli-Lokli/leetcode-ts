// https://leetcode.com/problems/invert-binary-tree/
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
