import { l153FindMinimumInRotatedSortedArray } from './l-153-find-minimum-in-rotated-sorted-array';

describe('153. Find Minimum in Rotated Sorted Array', () => {
  it('Case 1', () => {
    expect(l153FindMinimumInRotatedSortedArray([3, 4, 5, 1, 2])).toEqual(1);
  });
  it('Case 2', () => {
    expect(l153FindMinimumInRotatedSortedArray([4, 5, 6, 7, 0, 1, 2])).toEqual(
      0
    );
  });
  it('Case 3', () => {
    expect(l153FindMinimumInRotatedSortedArray([11, 13, 15, 17])).toEqual(11);
  });
});
