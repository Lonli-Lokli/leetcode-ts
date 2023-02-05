import { l088MergeSortedArray } from './l-088-merge-sorted-array';

describe('88. Merge Sorted Array', () => {
  it('Case 1', () => {
    const nums1 = [1, 2, 3, 0, 0, 0];
    l088MergeSortedArray(nums1, 3, [2, 5, 6], 3);
    expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
  });
});
