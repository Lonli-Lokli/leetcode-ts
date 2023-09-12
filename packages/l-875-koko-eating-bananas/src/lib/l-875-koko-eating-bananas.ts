// https://leetcode.com/problems/koko-eating-bananas/
export function l875KokoEatingBananas(piles: number[], h: number): number {
  let l = 1;
  let r = Math.max(...piles);
  let res = r;

  while (l <= r) {
    const pivot = Math.floor((l + r) / 2);
    if (piles.reduce((acc, curr) => acc + Math.ceil(curr / pivot), 0) <= h) {
      res = Math.min(res, pivot);
      r = pivot - 1;
    } else {
      l = pivot + 1;
    }
  }

  return res;
}
