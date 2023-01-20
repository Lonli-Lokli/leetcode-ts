import { l102BinaryTreeLevelOrderTraversal, l102BinaryTreeLevelOrderTraversal_Queue } from './l-102-binary-tree-level-order-traversal';
import { createTree, TreeNode } from '@leetcode/core';

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
