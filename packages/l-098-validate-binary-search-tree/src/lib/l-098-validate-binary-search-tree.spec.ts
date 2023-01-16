import {
  l098ValidateBinarySearchTree_InOrder_Recursive,
  l098ValidateBinarySearchTree_InOrder_Traversal,
  l098ValidateBinarySearchTree_WithRange_Iterative,
  l098ValidateBinarySearchTree_WithRange_Recursive,
  TreeNode,
} from './l-098-validate-binary-search-tree';

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

const cases: () => Array<[TreeNode | null, boolean]> = () => [
  [createTree([2, 1, 3]), true],
  [createTree([2, 2, 2]), false],
];

describe('98. Validate Binary Search Tree', () => {
  it.each(cases())(
    'Recursive InOrder: given %p and %p as arguments, returns %p',
    (tree, expectedResult) => {
      expect(l098ValidateBinarySearchTree_InOrder_Recursive(tree)).toEqual(expectedResult);
    }
  );
  it.each(cases())(
    'Traversal InOrder: given %p and %p as arguments, returns %p',
    (tree, expectedResult) => {
      expect(l098ValidateBinarySearchTree_InOrder_Traversal(tree)).toEqual(expectedResult);
    }
  );
  it.each(cases())(
    'Recursive WithRange: given %p and %p as arguments, returns %p',
    (tree, expectedResult) => {
      expect(l098ValidateBinarySearchTree_WithRange_Recursive(tree)).toEqual(expectedResult);
    }
  );
  it.each(cases())(
    'Iterative WithRange: given %p and %p as arguments, returns %p',
    (tree, expectedResult) => {
      expect(l098ValidateBinarySearchTree_WithRange_Iterative(tree)).toEqual(expectedResult);
    }
  );
});
