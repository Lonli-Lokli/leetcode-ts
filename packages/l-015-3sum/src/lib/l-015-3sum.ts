// https://leetcode.com/problems/3sum/
export function l0153Sum_Slow(nums: number[]): number[][] {
  const values = nums;
  const result = [];
  for (let i = 0; i < values.length; i++) {
    for (let j = i + 1; j < values.length; j++) {
      for (let k = j + 1; k < values.length; k++) {
        if (values[i] + values[j] + values[k] === 0) {
          result.push([values[i], values[j], values[k]]);
        }
      }
    }
  }

  return Array.from(
    new Set(
      result.map((arr) =>
        arr
          .sort()
          .map((el) => el.toString())
          .join('!')
      )
    ).values()
  ).map((e) => e.split('!').map(Number));
}

export function l0153Sum_Faster(nums: number[]): number[][] {
  const result: Array<number[]> = [];
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      const threeSum = nums[i] + nums[l] + nums[r];
      if (threeSum === 0) {
        result.push([nums[i], nums[l], nums[r]]);
        l++;
      }
      if (threeSum > 0) {
        r--;
      } else l++;
    }
  }

  return result;
}
