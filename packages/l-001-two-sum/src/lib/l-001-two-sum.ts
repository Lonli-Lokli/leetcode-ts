// https://leetcode.com/problems/two-sum/
export function l001TwoSumSlow(nums: number[], target: number): number[] {
  return nums.reduce((acc, start, idxStart) => {
    acc.push(...nums.slice(idxStart + 1).reduce((localAcc, end, idxEnd) => {
      if (start + end == target) {
        localAcc.push(idxStart, idxEnd + idxStart + 1);
      }

      return localAcc;
    }, [] as number[]));

    return acc;
  }, [] as number[]);
}

export function l001TwoSumFaster(nums: number[], target: number): number[] {
  const map = nums.reduce((acc, curr, idx) => acc.set(curr, idx), new Map<number, number>());

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement) && map.get(complement) !== i) {
      return [i, map.get(complement)!];
    }
  }

  throw new Error('Wrong input!') ;
}

export function l001TwoSumFastest(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }
    map.set(nums[i], i);
  }

  throw new Error('Wrong input!') ;
}
