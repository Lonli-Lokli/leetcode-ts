// https://leetcode.com/problems/reverse-string/
export function l344ReverseString(s: string[]): void {
  let subs = '';
  for (let i = s.length -1; i >= s.length / 2; i--) {
    subs = s[Math.abs(i-s.length) -1];
    s[Math.abs(i-s.length) -1] = s[i];
    s[i] = subs;
  }
}
