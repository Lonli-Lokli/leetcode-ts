import { createTree } from '@leetcode/core';
import { l100SameTree } from './l-100-same-tree';

describe('100. Same Tree', () => {
  it('Case 1', () => {
    expect(l100SameTree(createTree([1,2,3]), createTree([1,2,3]))).toEqual(true);
  });
  it('Case 2', () => {
    expect(l100SameTree(createTree([1,2]), createTree([1,null,2]))).toEqual(false);
  });
});
