import {
  l167TwoSumIiInputArrayIsSorted_Faster,
  l167TwoSumIiInputArrayIsSorted_Slow,
} from './l-167-two-sum-ii-input-array-is-sorted';

describe('167. Two Sum II - Input Array Is Sorted', () => {
  it('Case 1', () => {
    expect(l167TwoSumIiInputArrayIsSorted_Slow([2, 7, 11, 15], 9)).toEqual([
      1, 2,
    ]);
    expect(l167TwoSumIiInputArrayIsSorted_Faster([2, 7, 11, 15], 9)).toEqual([
      1, 2,
    ]);
  });
  it('Case 2', () => {
    expect(l167TwoSumIiInputArrayIsSorted_Slow([2, 3, 4], 6)).toEqual([1, 3]);
    expect(l167TwoSumIiInputArrayIsSorted_Faster([2, 3, 4], 6)).toEqual([1, 3]);
  });
  it('Case 3', () => {
    expect(l167TwoSumIiInputArrayIsSorted_Slow([-1, 0], -1)).toEqual([1, 2]);
    expect(l167TwoSumIiInputArrayIsSorted_Faster([-1, 0], -1)).toEqual([1, 2]);
  });
  it('Case 4', () => {
    expect(
      l167TwoSumIiInputArrayIsSorted_Slow([3, 24, 50, 79, 88, 150, 345], 200)
    ).toEqual([3, 6]);
    expect(
      l167TwoSumIiInputArrayIsSorted_Faster([3, 24, 50, 79, 88, 150, 345], 200)
    ).toEqual([3, 6]);
  });
});
