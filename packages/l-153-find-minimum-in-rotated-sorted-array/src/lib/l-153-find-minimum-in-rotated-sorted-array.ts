// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
export function l153FindMinimumInRotatedSortedArray(nums: number[]): number {
  for (let idx = 1; idx < nums.length; idx++) {
    if (nums[idx] < nums[idx - 1]) {
      return nums[idx];
    }
  }

  return nums[0];
}
