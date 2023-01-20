import { l103BinaryTreeZigzagLevelOrderTraversal } from './l-103-binary-tree-zigzag-level-order-traversal';
import { createTree, TreeNode } from '@leetcode/core';

const cases: () => Array<[TreeNode | null, Array<number[]>]> = () => [
  [createTree([3,9,20,null,null,15,7]), [[3],[20,9],[15,7]]],
  [createTree([1,2,3,4,null,null,5]), [[1],[3,2],[4,5]]],
];

describe('103. Binary Tree Zigzag Level Order Traversal', () => {
  it.each(cases())(
    'Initial: given %p and %p as arguments, returns %p',
    (tree, expectedResult) => {
      expect(l103BinaryTreeZigzagLevelOrderTraversal(tree).flatMap(_ => _)).toEqual(expectedResult.flatMap(_ => _)
      );
    }
  );
});
