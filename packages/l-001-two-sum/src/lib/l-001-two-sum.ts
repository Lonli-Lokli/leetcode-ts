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
