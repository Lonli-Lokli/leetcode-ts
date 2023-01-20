// https://leetcode.com/problems/single-number/

export function l136SingleNumber(nums: number[]): number {
  const map = new Map<number, number>();
  for (const n of nums) {
    map.set(n, (map.get(n) ?? 0) + 1);
  }

  return Array.from(map.entries()).filter(([_, value]) => value === 1)[0][0];
}

export function l136SingleNumber_Smart(nums: number[]): number {
  return nums.reduce((prev, curr) => prev ^ curr);
};