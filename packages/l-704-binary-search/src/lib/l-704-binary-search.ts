// https://leetcode.com/problems/binary-search/
export function l704BinarySearch(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const pivot = left + Math.floor((right - left) / 2);
    if (nums[pivot] === target) return pivot;

    if (nums[pivot] > target) {
      right = pivot - 1;
    } else {
      left = pivot + 1;
    }
  }

  return -1;
}
