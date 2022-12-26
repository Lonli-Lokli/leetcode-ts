// https://leetcode.com/problems/reverse-words-in-a-string/
export function l151ReverseWordsInAString(s: string): string {
  return s.trim().split(/[ ]{1,}/g,).reverse().join(' ');
}
