import { l154FindMinimumInRotatedSortedArrayIi } from './l-154-find-minimum-in-rotated-sorted-array-ii';

describe('154. Find Minimum in Rotated Sorted Array II', () => {
  it('Case 1', () => {
    expect(l154FindMinimumInRotatedSortedArrayIi([1,3,5])).toEqual(1);
  });
  it('Case 2', () => {
    expect(l154FindMinimumInRotatedSortedArrayIi([2,2,2,0,1])).toEqual(0);
  });
});
