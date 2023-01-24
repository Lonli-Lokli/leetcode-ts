// https://leetcode.com/problems/unique-number-of-occurrences/
export function l1207UniqueNumberOfOccurrences(arr: number[]): boolean {
  const numMap = new Map<number, number>();
  arr.forEach(num => numMap.set(num, (numMap.get(num) || 0) + 1));
  return new Set(numMap.values()).size === numMap.size;
}
