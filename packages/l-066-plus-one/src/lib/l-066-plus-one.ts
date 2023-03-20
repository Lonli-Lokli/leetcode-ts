export function l066PlusOne(digits: number[]): number[] {
  return String(BigInt(digits.join('')) + 1n).split('').map(Number);
};
