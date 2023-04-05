export function l2379MinimumRecolorsToGetKConsecutiveBlackBlocks(
  blocks: string,
  k: number
): number {
  let best = Number.MAX_SAFE_INTEGER;

  let current = 0;
  const N = blocks.length;

  for (let i = 0; i < N; i++) {
    if (blocks[i] === 'W') {
      current++;
    }
    if (i - k >= 0 && blocks[i - k] === 'W') {
      current--;
    }

    if (i - k + 1 >= 0) {
      best = Math.min(best, current);
    }
  }

  return best;
}
