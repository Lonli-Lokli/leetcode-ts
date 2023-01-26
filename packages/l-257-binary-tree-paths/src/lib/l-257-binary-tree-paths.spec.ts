import { createTree } from '@leetcode/core';
import { l257BinaryTreePaths } from './l-257-binary-tree-paths';

describe('257. Binary Tree Paths', () => {
  it('Case 1', () => {
    expect(l257BinaryTreePaths(createTree([1, 2, 3, null, 5]))).toEqual(
      expect.arrayContaining(['1->2->5', '1->3'])
    );
  });
  it('Case 2', () => {
    expect(l257BinaryTreePaths(createTree([1]))).toEqual(
      expect.arrayContaining(['1'])
    );
  });
});
