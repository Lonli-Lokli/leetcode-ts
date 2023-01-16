export function l347TopKFrequentElements_Naive(
  nums: number[],
  k: number
): number[] {
  const frequent: { [key: string]: number } = {};
  for (const num of nums) {
    frequent[num] = 1 + (frequent[num] ?? 0);
  }

  return Object.entries(frequent)
    .sort((a, b) => b[1] - a[1])
    .splice(0, k)
    .map((s) => +s[0]);
}

export function l347TopKFrequentElements_Neetcode(
  nums: number[],
  k: number
): number[] {
  const counts: Record<number, number> = {};
  const freqs: Array<number[]> = Array.from(
    { length: nums.length + 1 },
    (_, __) => [] as number[]
  );
  for (const n of nums) {
    counts[n] = 1 + (counts[n] ?? 0);
  }

  Object.entries(counts).forEach(([key, value]) => {
    freqs[value].push(+key);
  });
  const result: number[] = [];
  for (let i = freqs.length - 1; i >= 0; i--) {
    for (let j = 0; j < freqs[i].length; j++) {
      if (result.length === k) return result;
      result.push(freqs[i][j]);
    }
  }
  return result;
}
