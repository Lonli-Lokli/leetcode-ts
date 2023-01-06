// https://leetcode.com/problems/set-matrix-zeroes/
export function l075SetMatrixZeroes_Initial(matrix: number[][]): void {
  // uses space O(N+M)
  const rows = new Set<number>();
  const columns = new Set<number>();
  for (let x = 0; x < matrix[0].length; x++) {
    for (let y = 0; y < matrix.length; y++) {
      if (matrix[y][x] == 0) {
        rows.add(y);
        columns.add(x);
      }
    }
  }

  for (let x = 0; x < matrix[0].length; x++) {
    for (let y = 0; y < matrix.length; y++) {
      if (rows.has(y) || columns.has(x)) {
        matrix[y][x] = 0;
      }
    }
  }
}

export function l075SetMatrixZeroes_Optimal(matrix: number[][]): void {
  // uses space O(1) - just for variables
  const aRowIsEmpty = matrix[0].some((el) => el === 0);
  const aColumnIsEmpty = matrix.some((col) => col[0] === 0);

  const ColumnNo = matrix[0].length;
  const RowNo = matrix.length;

  for (let r = 0; r < RowNo; r++) {
    for (let c = 0; c < ColumnNo; c++) {
      if (matrix[r][c] === 0) {
        matrix[r][0] = 0;
        matrix[0][c] = 0;
      }
    }
  }

  for (let r = 1; r < RowNo; r++) {
    for (let c = 1; c < ColumnNo; c++) {
       if (matrix[r][0] === 0 || matrix[0][c] === 0) {
        matrix[r][c] = 0;
      }
    }
  }

  if (aRowIsEmpty) matrix[0].forEach((_, idx) => matrix[0][idx] = 0);
  if (aColumnIsEmpty) matrix.forEach(row => row[0] = 0)

}
