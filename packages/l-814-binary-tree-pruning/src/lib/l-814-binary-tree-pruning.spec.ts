import { collectTreeNodeInOrder, createTree } from '@leetcode/core';
import { l814BinaryTreePruning } from './l-814-binary-tree-pruning';

describe('814. Binary Tree Pruning', () => {
  it('Case 1', () => {
    expect(collectTreeNodeInOrder(l814BinaryTreePruning(createTree([1,null,0,0,1]))).map(e => e.val)).toEqual([1, 0, 1]);
  });
});
