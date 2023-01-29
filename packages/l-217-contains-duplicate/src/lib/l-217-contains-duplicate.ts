// https://leetcode.com/problems/contains-duplicate/
export function l217ContainsDuplicate(nums: number[]): boolean {
  return new Set(nums).size != nums.length;
}
