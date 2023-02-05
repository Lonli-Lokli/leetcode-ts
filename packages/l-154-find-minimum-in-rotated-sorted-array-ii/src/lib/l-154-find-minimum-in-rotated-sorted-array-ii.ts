// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii
export function l154FindMinimumInRotatedSortedArrayIi(nums: number[]): number {
  for (let idx = 1; idx < nums.length; idx++) {
    if (nums[idx] < nums[idx - 1]) {
      return nums[idx];
    }
  }

  return nums[0];
}
