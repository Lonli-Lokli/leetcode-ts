export function l202HappyNumber(n: number): boolean {
  const visited = new Set<number>();

  const happify = (val: number): boolean => {
    if (visited.has(val)) return false;
    visited.add(val);
    const digits = val.toString().split('').map(Number);

    const newVal = digits.reduce((acc, curr) => {
      return acc + Math.pow(curr, 2);
    }, 0);

    if (newVal === 1) return true;
    return happify(newVal);
  };

  return happify(n);
}
