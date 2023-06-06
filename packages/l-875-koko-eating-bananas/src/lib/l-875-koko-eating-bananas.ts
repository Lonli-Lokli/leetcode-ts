// https://leetcode.com/problems/koko-eating-bananas/
export function l875KokoEatingBananas(piles: number[], h: number): number {
  let l = 1;
  let r = Math.max(...piles);
  let res = r;

  while (l <= r) {
    const k = Math.floor((l + r) / 2);
    if (piles.reduce((acc, curr) => acc + Math.ceil(curr / k), 0) <= h) {
      res = Math.min(res, k);
      r = k - 1;
    } else {
      l = k + 1;
    }
  }

  return res;
}
