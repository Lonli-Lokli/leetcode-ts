// https://leetcode.com/problems/climbing-stairs/
export function l070ClimbingStairs(n: number): number {
  const cache = new Map<number, number>();
  const search = (curr: number) => {
    if (cache.has(curr)) return cache.get(curr)!;
    if (curr < 0) return 0;
    if (curr === 0) return 1;
    cache.set(curr, search(curr - 1) + search(curr - 2));
    return cache.get(curr)!;
  };

  return search(n);
}
