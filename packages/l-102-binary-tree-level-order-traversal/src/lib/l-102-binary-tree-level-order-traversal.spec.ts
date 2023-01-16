import { l102BinaryTreeLevelOrderTraversal, l102BinaryTreeLevelOrderTraversal_Queue, TreeNode } from './l-102-binary-tree-level-order-traversal';

const createTree = (items: (number | null)[]): TreeNode | null => {
  if (items.length === 0) return null;
  const root = new TreeNode(items.shift()!);
  const queue = [root];
  while (queue.length > 0) {
    const node = queue.shift()!;
    const left = items.shift() ?? null;
    node.left = left !== null ? new TreeNode(left) : null;
    const right = items.shift() ?? null;
    node.right = right !== null ? new TreeNode(right) : null;

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return root;
};

const cases: () => Array<[TreeNode | null, Array<number[]>]> = () => [
  [createTree([3, 9, 20, null, null, 15, 7]), [[3],[9,20],[15,7]]],
];

describe('102. Binary Tree Level Order Traversal', () => {
  it.each(cases())(
    'With Stack: given %p and %p as arguments, returns %p',
    (tree, expectedResult) => {
      expect(l102BinaryTreeLevelOrderTraversal(tree).flatMap(_ => _)).toEqual(expectedResult.flatMap(_ => _)
      );
    }
  );
  it.each(cases())(
    'With Queue: given %p and %p as arguments, returns %p',
    (tree, expectedResult) => {
      expect(l102BinaryTreeLevelOrderTraversal_Queue(tree).flatMap(_ => _)).toEqual(expectedResult.flatMap(_ => _)
      );
    }
  );
});
