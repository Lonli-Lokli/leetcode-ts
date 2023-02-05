import { l026RemoveDuplicatesFromSortedArray } from './l-026-remove-duplicates-from-sorted-array';

describe('26. Remove Duplicates from Sorted Array', () => {
  it('Case 1', () => {
    const nums = [1,1,2]; // Input array
    const expectedNums = [1,2]; // The expected answer with correct length

    expect(l026RemoveDuplicatesFromSortedArray(nums)).toBe(expectedNums.length);
    for (let i = 0; i < nums.length; i++)  {
      expect(nums[i]).toBe(expectedNums[i])
    }
  });
  it('Case 2', () => {
    const nums = [0,0,1,1,1,2,2,3,3,4]; // Input array
    const expectedNums = [0,1,2,3,4]; // The expected answer with correct length

    expect(l026RemoveDuplicatesFromSortedArray(nums)).toBe(expectedNums.length);
    for (let i = 0; i < nums.length; i++)  {
      expect(nums[i]).toBe(expectedNums[i])
    }
    
  });
});
