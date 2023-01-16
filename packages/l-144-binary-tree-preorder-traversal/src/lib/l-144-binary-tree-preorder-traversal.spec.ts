import {
  l144BinaryTreePreorderTraversal_Iterative,
  l144BinaryTreePreorderTraversal_Recursive,
  TreeNode,
} from './l-144-binary-tree-preorder-traversal';

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
