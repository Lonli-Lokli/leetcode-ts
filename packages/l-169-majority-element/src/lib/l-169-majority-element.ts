// https://leetcode.com/problems/majority-element/
export function l169MajorityElement(nums: number[]): number {
  nums.sort();
  return nums[Math.floor(nums.length / 2)];
}
