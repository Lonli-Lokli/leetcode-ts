import {
  l094BinaryTreeInorderTraversal_Iterative,
  l094BinaryTreeInorderTraversal_Recursive,
  TreeNode,
} from './l-094-binary-tree-inorder-traversal';

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
  [createTree([1, null, 2, 3]), [1, 3, 2]],
];

describe('94. Binary Tree Inorder Traversal', () => {
  it.each(cases())(
    'Recursive: given %p and %p as arguments, returns %p',
    (tree, expectedResult) => {
      expect(l094BinaryTreeInorderTraversal_Recursive(tree)).toEqual(
        expectedResult
      );
    }
  );
  it.each(cases())(
    'Traversal: given %p and %p as arguments, returns %p',
    (tree, expectedResult) => {
      expect(l094BinaryTreeInorderTraversal_Iterative(tree)).toEqual(
        expectedResult
      );
    }
  );
});
