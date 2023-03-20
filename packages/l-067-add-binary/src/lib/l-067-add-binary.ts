// https://leetcode.com/problems/add-binary/
export function l067AddBinary(a: string, b: string): string {
  return (BigInt('0b' + a) + BigInt('0b' + b)).toString(2);
}
