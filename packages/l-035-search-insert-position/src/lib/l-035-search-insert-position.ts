// https://leetcode.com/problems/search-insert-position/
export function l035SearchInsertPosition(
  nums: number[],
  target: number
): number {
  let high = nums.length - 1;
  let low = 0;
  while (low <= high) {
    const mid = Math.floor((high + low) / 2);

    if (nums[mid] == target) return mid;
    else if (nums[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;
}
