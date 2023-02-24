// https://leetcode.com/problems/longest-substring-without-repeating-characters/
export function l003LongestSubstringWithoutRepeatingCharacters(s: string): number {
  const set = new Set<string>();
  let from = 0;
  let to = 0;
  let max = 0;
  while (to < s.length) {
      while (set.has(s[to])) {
          set.delete(s[from++]);
      }
      set.add(s[to++]);
      max = Math.max(max, set.size);
  }
  
  return max;
};