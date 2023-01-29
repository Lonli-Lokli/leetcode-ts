// https://leetcode.com/problems/wildcard-matching/
export function l044WildcardMatching_DynamicProgramming(
  s: string,
  p: string
): boolean {
  // empty string or just equal
  if (s === p) return true;

  const ROWS = p.length; // with empty string
  const COLUMNS = s.length;

  const matrix: Array<boolean[]> = Array.from({ length: ROWS + 1 }, (_, __) =>
    Array.from({ length: COLUMNS + 1 }, (_, __) => false)
  );
  matrix[0][0] = true; // init for empty
  for (let i = 0; i < ROWS; i++) {
    if (p[i] === '*') {
      matrix[i+1][0] = matrix[i][0]; // we should take upper value only for first column
    };
  }

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLUMNS; col++) {
      const fromS = s[col];
      const fromP = p[row];

      if (fromP === '*') { // union join of values from left top and left-diag
        matrix[row+1][col+1] = matrix[row][col] || matrix[row+1][col] || matrix[row][col+1]
      } else if (fromP === '?') { // for this only top-left is enought
        matrix[row+1][col+1] = matrix[row][col];
      } else  // for simple character they should match and prev (top left) too
      matrix[row+1][col+1] = matrix[row][col] && fromS === fromP;
    }
  }

  return matrix[ROWS][COLUMNS];
}
