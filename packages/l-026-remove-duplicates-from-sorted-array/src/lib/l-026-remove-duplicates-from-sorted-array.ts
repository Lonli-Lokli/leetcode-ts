export function l026RemoveDuplicatesFromSortedArray(nums: number[]): number {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== undefined && nums[i] === nums[i-1]) {
      nums.splice(i, 1);
      i--;
    }
  }

  return nums.length;
}
