// https://leetcode.com/problems/group-anagrams/

export function l049GroupAnagrams(strs: string[]): Array<string[]> {
  const asStr = (input: string) => input.split('').sort().join('');
  return Object.values(
    strs.reduce<Record<string, string[]>>((acc, curr) => {
      const key = asStr(curr);
      if (acc[key] === undefined) {
        acc[key] = [] as string[];
      }

      acc[key].push(curr);
      return acc;
    }, {})
  );
}
