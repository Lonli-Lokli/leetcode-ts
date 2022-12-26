// https://leetcode.com/problems/string-to-integer-atoi/
export function l008StringToIntegerAtoi(s: string): number {

  s = s.trimStart();
  let result = '';

  for (const ch of s) {
    if (ch === '+' || ch === '-') {
      if (result !== '') break;
      result += ch;
    } else if (ch.charCodeAt(0) >= '0'.charCodeAt(0) && ch.charCodeAt(0) <= '9'.charCodeAt(0)) {
      result += ch;
    } else {
      break;
    }
  }
  if (result === '+' || result === '-') result += '0';
  return Math.min(Math.max(+result, Math.pow(-2, 31)), Math.pow(2, 31) - 1);
}
