import { createTree } from '@leetcode/core';
import { l112PathSum } from './l-112-path-sum';

describe('112. Path Sum', () => {
  it('Case 1', () => {
    expect(l112PathSum(createTree([5,4,8,11,null,13,4,7,2,null,null,null,1]), 22)).toEqual(true);
  });
  it('Case 2', () => {
    expect(l112PathSum(createTree([1,2,3]), 5)).toEqual(false);
  });
  it('Case 3', () => {
    expect(l112PathSum(createTree([]), 0)).toEqual(false);
  });
});
