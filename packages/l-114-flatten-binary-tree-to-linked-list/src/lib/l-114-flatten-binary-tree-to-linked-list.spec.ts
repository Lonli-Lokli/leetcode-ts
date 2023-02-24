import { collectTreeNodeInOrder, createTree } from '@leetcode/core';
import { l114FlattenBinaryTreeToLinkedList } from './l-114-flatten-binary-tree-to-linked-list';

describe('114. Flatten Binary Tree to Linked List', () => {
  it('Case 1', () => {
    const tree = createTree([1, 2, 5, 3, 4, null, 6]);
    l114FlattenBinaryTreeToLinkedList(tree);
    expect(collectTreeNodeInOrder(tree).map((_) => _.val)).toEqual([
      1, 2, 3, 4, 5, 6,
    ]);
  });
});
