export function l740DeleteAndEarn(nums: number[]): number {
  let maxNumber = 0;
  const points = nums.reduce((acc, curr) => {
    acc.set(curr, (acc.get(curr) ?? 0) + curr);
    maxNumber = Math.max(maxNumber, curr);
    return acc;
  }, new Map<number, number>());

  const maxPoints = Array.from({ length: maxNumber + 1 }, () => 0);
  maxPoints[1] = points.get(1) ?? 0;

  for (let i = 2; i < maxPoints.length; i++) {
    maxPoints[i] = Math.max(
      maxPoints[i - 1],
      maxPoints[i - 2] + (points.get(i) ?? 0)
    );
  }

  return maxPoints[maxNumber];
}
