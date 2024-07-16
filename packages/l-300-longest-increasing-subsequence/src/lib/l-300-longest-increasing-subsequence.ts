import { TreeNode } from "@leetcode/core";

// https://leetcode.com/problems/longest-increasing-subsequence/description/
export function l300LongestIncreasingSubsequence(nums: number[]): number {
  const tree = new TreeNode();
  for ()
  let maxLen = nums.length > 0 ? 1 : 0;
  let currLen = 0;
  for (let i = nums.length - 1; i >=0; i--) {
    if (i>0 && nums[i] > nums[i-1]) {
      currLen += 1;
    } else {
      maxLen = Math.max(maxLen, currLen);
    }
  }

  return maxLen;
}
