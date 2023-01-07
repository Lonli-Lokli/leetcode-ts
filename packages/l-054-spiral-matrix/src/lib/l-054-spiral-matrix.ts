// https://leetcode.com/problems/spiral-matrix/
export function l054SpiralMatrix(matrix: number[][]): number[] {
  const result: number[] = [];
  let up = 0;
  let down = matrix.length - 1;
  let right = matrix[0].length - 1;
  let left = 0;

  while (result.length < matrix.length * matrix[0].length) {
    // left to right
    for (let i = left; i <= right; i++) {
      result.push(matrix[up][i]);
    }

    // right to down
    for (let i = up + 1; i <= down; i++) {
      result.push(matrix[i][right]);
    }

    // right to left
    if (up !== down) {
      for (let i = right - 1; i >= left; i--) {
        result.push(matrix[down][i]);
      }
    }

    // down to up
    if (left !== right) {
      for (let i = down - 1; i > up; i--) {
        result.push(matrix[i][left]);
      }
    }

    up++;
    down--;
    left++;
    right--;
  }
  return result;
}
