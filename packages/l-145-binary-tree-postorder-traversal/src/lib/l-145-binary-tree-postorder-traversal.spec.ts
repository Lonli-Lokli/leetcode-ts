import { createTree, TreeNode } from '@leetcode/core';
import {
  l145BinaryTreePostorderTraversal_WithReverse,
  l145BinaryTreePostorderTraversal_Iterative,
  l145BinaryTreePostorderTraversal_Recursive,
  l145BinaryTreePostorderTraversal_WithDestroyConnection,
} from './l-145-binary-tree-postorder-traversal';

const cases: () => Array<[TreeNode | null, number[]]> = () => [
  [createTree([1, null, 2, 3]), [3, 2, 1]],
];

describe('145. Binary Tree Postorder Traversal', () => {
  it.each(cases())(
    'Recursive: given %p and %p as arguments, returns %p',
    (tree, expectedResult) => {
      expect(l145BinaryTreePostorderTraversal_Recursive(tree)).toEqual(
        expectedResult
      );
    }
  );
  it.each(cases())(
    'Traversal: given %p and %p as arguments, returns %p',
    (tree, expectedResult) => {
      expect(l145BinaryTreePostorderTraversal_Iterative(tree)).toEqual(
        expectedResult
      );
    }
  );
  it.each(cases())(
    'With Reverse: given %p and %p as arguments, returns %p',
    (tree, expectedResult) => {
      expect(l145BinaryTreePostorderTraversal_WithReverse(tree)).toEqual(
        expectedResult
      );
    }
  );
  it.each(cases())(
    'WithDestroyConnection: given %p and %p as arguments, returns %p',
    (tree, expectedResult) => {
      expect(
        l145BinaryTreePostorderTraversal_WithDestroyConnection(tree)
      ).toEqual(expectedResult);
    }
  );
});
