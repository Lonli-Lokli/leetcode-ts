export function l118PascalsTriangle(numRows: number): number[][] {
  const dp: number[][] = [[1]];

  for (let i = 1; i < numRows; i++) {
    const newRow: number[] = Array.from({length: i + 1}, (_, idx) => idx === 0 || idx === i ? 1 : 0);
    const prevRow = dp[i-1];

    for (let j = 1; j < i; j++) {
      newRow[j] = prevRow[j -1] + prevRow[j];
    }

    dp.push(newRow);
  }
  return dp;
};
