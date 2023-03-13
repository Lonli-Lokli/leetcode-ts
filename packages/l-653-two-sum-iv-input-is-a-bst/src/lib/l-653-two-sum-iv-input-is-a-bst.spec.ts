import { createTree } from '@leetcode/core';
import { l653TwoSumIvInputIsABst } from './l-653-two-sum-iv-input-is-a-bst';

describe('653. Two Sum IV - Input is a BST', () => {
  it('Case 1', () => {
    expect(
      l653TwoSumIvInputIsABst(createTree([5, 3, 6, 2, 4, null, 7]), 9)
    ).toEqual(true);
  });
  it('Case 2', () => {
    expect(
      l653TwoSumIvInputIsABst(createTree([5,3,6,2,4,null,7]), 28)
    ).toEqual(false);
  });
});
