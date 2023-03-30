// https://leetcode.com/problems/find-the-duplicate-number/
export function l287FindTheDuplicateNumber_Set(nums: number[]): number {
  const map = new Set<number>();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) return nums[i];
    map.add(nums[i])
  }

  throw new Error();
};

export function l287FindTheDuplicateNumber_Flip(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    const curr = Math.abs(nums[i]);
    if (nums[curr] < 0) {
      return curr;
    } else {
      nums[curr] = -nums[curr];
    }
  }

  throw new Error();
};

export function l287FindTheDuplicateNumber_TortoiseAndHare(nums: number[]): number {
  
  let slow = nums[0];
  let fast =  nums[0];

  // eslint-disable-next-line no-constant-condition
  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]]
    if (slow === fast) break;
  }

  slow = nums[0];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return fast;
};