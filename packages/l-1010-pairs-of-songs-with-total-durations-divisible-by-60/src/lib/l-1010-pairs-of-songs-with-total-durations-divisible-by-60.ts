export function l1010PairsOfSongsWithTotalDurationsDivisibleBy60_BruteForce(
  time: number[]
): number {
  let result = 0;
  for (let i = 0; i < time.length; i++) {
    for (let j = i + 1; j < time.length; j++) {
      if ((time[i] + time[j]) % 60 === 0) {
        result++;
      }
    }
  }

  return result;
}

export function l1010PairsOfSongsWithTotalDurationsDivisibleBy60_Faster(
  time: number[]
): number {
  let count = 0;

  const map = new Map<number, number>();

  for (let i = 0; i < time.length; i++) {
    const key = time[i] % 60;

    const pairedKey = key == 0 ? key : 60 - key;

    count += map.get(pairedKey) ?? 0;

    map.set(key, (map.get(key) ?? 0) + 1);
  }

  return count;
}
