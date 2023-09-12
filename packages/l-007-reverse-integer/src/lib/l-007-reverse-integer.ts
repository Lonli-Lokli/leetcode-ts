// https://leetcode.com/problems/reverse-integer/

export function l007ReverseInteger(x: number): number {
  const res =
    Math.abs(x)
      .toString()
      .split('')
      .reduce((acc, curr, idx) => acc + Math.pow(10, idx) * Number(curr), 0) *
    (x < 0 ? -1 : 1);

  return Math.abs(res) > Math.pow(2, 31) ? 0 : res;
}
