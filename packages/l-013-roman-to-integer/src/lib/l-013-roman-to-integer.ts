// https://leetcode.com/problems/roman-to-integer/

export function l013RomanToInteger(s: string): number {
  const map: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  return s.split('').reduceRight((acc, curr, idx) => {
    return map[curr] < (map[s[idx + 1]] ?? 0)
      ? acc - map[curr]
      : acc + map[curr];
  }, 0);
}
