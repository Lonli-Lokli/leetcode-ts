import { l004MedianOfTwoSortedArrays } from './l-004-median-of-two-sorted-arrays';

describe('4. Median of Two Sorted Arrays', () => {
  it('Case 1', () => {
    expect(l004MedianOfTwoSortedArrays([1, 3], [2])).toEqual(2);
  });
  it('Case 2', () => {
    expect(l004MedianOfTwoSortedArrays([1, 3], [3, 4])).toEqual(2.5);
  });
});
