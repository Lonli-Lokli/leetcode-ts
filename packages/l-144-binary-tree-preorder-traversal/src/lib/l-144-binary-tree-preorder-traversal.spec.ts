import {
  l144BinaryTreePreorderTraversal_Iterative,
  l144BinaryTreePreorderTraversal_Recursive,
  TreeNode,
} from './l-144-binary-tree-preorder-traversal';

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

const cases: () => Array<[TreeNode | null, number[]]> = () => [
  [createTree([1, null, 2, 3]), [1, 2, 3]],
];

describe('144. Binary Tree Preorder Traversal', () => {
  it.each(cases())(
    'Recursive: given %p and %p as arguments, returns %p',
    (tree, expectedResult) => {
      expect(l144BinaryTreePreorderTraversal_Recursive(tree)).toEqual(expectedResult      );
    }
  );
  it.each(cases())(
    'Traversal: given %p and %p as arguments, returns %p',
    (tree, expectedResult) => {
      expect(l144BinaryTreePreorderTraversal_Iterative(tree)).toEqual(expectedResult
      );
    }
  );
});
