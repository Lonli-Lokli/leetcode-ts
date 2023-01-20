import {
  collectTreeNodeInOrder,
  collectTreeNodePreOrder,
} from '@leetcode/core';
import { l105ConstructBinaryTreeFromPreorderAndInorderTraversal } from './l-105-construct-binary-tree-from-preorder-and-inorder-traversal';

const cases: () => Array<[number[], number[]]> = () => [
  [
    [3, 9, 20, 15, 7],
    [9, 3, 15, 20, 7],
  ],
];

describe('105. Construct Binary Tree from Preorder and Inorder Traversal', () => {
  it.each(cases())(
    'Recursive: given %p and %p as arguments, should succeed',
    (preorder, inorder) => {
      const tree = l105ConstructBinaryTreeFromPreorderAndInorderTraversal(
        preorder,
        inorder
      );
      expect(collectTreeNodePreOrder(tree).map(n => n.val)).toEqual(preorder);
      expect(collectTreeNodeInOrder(tree).map(n => n.val)).toEqual(inorder);
    }
  );
});
