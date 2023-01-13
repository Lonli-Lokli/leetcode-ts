import { l102BinaryTreeLevelOrderTraversal, TreeNode } from './l-102-binary-tree-level-order-traversal';

const createTree = (items: (number | null)[]): TreeNode => {
  const root = new TreeNode(items.shift() ?? undefined);
  let node: TreeNode | null = root;
  let currentValue: number | null = null;
  let lastNode = node;
  while (items.length > 0) {
    if (node === null) {
      node = lastNode;
    };
    currentValue = items.shift() ?? null;
    if (currentValue !== null) {
      node.left = new TreeNode(currentValue);
    }
    currentValue = items.shift() ?? null;
    if (currentValue !== null) {
      node.right = new TreeNode(currentValue);
    }
    node = node.left ?? node.right;
    lastNode = node?.left ?? node?.right ?? lastNode;
  }

  return root;
};

const cases: () => Array<[TreeNode | null, Array<number[]>]> = () => [
  [createTree([3, 9, 20, null, null, 15, 7]), [[3],[9,20],[15,7]]],
];

describe('102. Binary Tree Level Order Traversal', () => {
  it.each(cases())(
    'Recursive: given %p and %p as arguments, returns %p',
    (tree, expectedResult) => {
      expect(l102BinaryTreeLevelOrderTraversal(tree).flatMap(_ => _)).toEqual(
        expect.arrayContaining(expectedResult.flatMap(_ => _))
      );
    }
  );
});
