import { createTree, TreeNode } from '@leetcode/core';
import {
  l094BinaryTreeInorderTraversal_Iterative,
  l094BinaryTreeInorderTraversal_Recursive,
} from './l-094-binary-tree-inorder-traversal';


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
