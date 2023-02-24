import { createTree } from '@leetcode/core';
import { l199BinaryTreeRightSideView } from './l-199-binary-tree-right-side-view';

describe('199. Binary Tree Right Side View', () => {
  it('Case 1', () => {
    expect(l199BinaryTreeRightSideView(createTree([1,2,3,null,5,null,4]))).toEqual([
     1, 3, 4]
    );
  });
  it('Case 2', () => {
    expect(l199BinaryTreeRightSideView(createTree([1,null,3]))).toEqual([
     1, 3]
    );
  });
});
