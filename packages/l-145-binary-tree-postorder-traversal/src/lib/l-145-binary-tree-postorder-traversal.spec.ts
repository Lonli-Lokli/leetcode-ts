import { l145BinaryTreePostorderTraversal_Iterative, l145BinaryTreePostorderTraversal_Recursive, TreeNode } from './l-145-binary-tree-postorder-traversal';

const createTree = (items: (number | null)[]): TreeNode => {
  const root = new TreeNode(items.shift() ?? undefined);
  let node: TreeNode | null = root;
  let currentValue: number | null = null;
  while (items.length > 0) {
    if (node === null) throw new Error('node null');
    currentValue = items.shift() ?? null;
    if (currentValue !== null) {
      node.left = new TreeNode(currentValue);
    }
    currentValue = items.shift() ?? null;
    if (currentValue !== null) {
      node.right = new TreeNode(currentValue);
    }
    node = node.left ?? node.right;
  }

  return root;
};

const cases: () => Array<[TreeNode | null, number[]]> = () => [
  [createTree([1, null, 2, 3]), [3, 2, 1]],
];

describe('145. Binary Tree Postorder Traversal', () => {
  it.each(cases())(
    'Recursive: given %p and %p as arguments, returns %p',
    (tree, expectedResult) => {
      expect(l145BinaryTreePostorderTraversal_Recursive(tree)).toEqual(
        expect.arrayContaining(expectedResult)
      );
    }
  );
  it.each(cases())(
    'Traversal: given %p and %p as arguments, returns %p',
    (tree, expectedResult) => {
      expect(l145BinaryTreePostorderTraversal_Iterative(tree)).toEqual(
        expect.arrayContaining(expectedResult)
      );
    }
  );
});
