// https://leetcode.com/problems/valid-anagram/ 
export function l242ValidAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  
  const map = new Map<string, number>();
  for (const ch of s) {
      map.set(ch, (map.get(ch) ?? 0) + 1);
  }
  for (const ch of t) {
      if (!map.has(ch)) return false;
      const curr = map.get(ch)!;
      if (curr === 1) {
          map.delete(ch);
      } else {
          map.set(ch, curr - 1);
      }
  }
  
  return map.size === 0;
};