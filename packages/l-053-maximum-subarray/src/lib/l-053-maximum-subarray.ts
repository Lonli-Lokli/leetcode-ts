// https://leetcode.com/problems/maximum-subarray/
export function l053MaximumSubarray(nums: number[]): number {
  let currentMax = nums[0];
  let allMax = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
      currentMax = Math.max(nums[i], currentMax + nums[i]);
      allMax = Math.max(allMax, currentMax);
  }
  
  return allMax;
}
