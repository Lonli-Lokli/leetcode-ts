// https://leetcode.com/problems/spiral-matrix/
export function l054SpiralMatrix_Submit(matrix: number[][]): number[] {
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

export function l054SpiralMatrix_Neetcode(matrix: number[][]): number[] {
  const result: number[] = [];
  let top = 0;
  let bottom = matrix.length;
  let right = matrix[0].length;
  let left = 0;

  while (left < right && top < bottom) {
    // left to right
    for (let i = left; i < right; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    // right to down
    for (let i = top; i < bottom; i++) {
      result.push(matrix[i][right - 1]);
    }
    right--;

    if (result.length == matrix.length * matrix[0].length) break;

    // right to left
    for (let i = right - 1; i > left - 1; i--) {
      result.push(matrix[bottom - 1][i]);
    }
    bottom--;

    // down to up
    for (let i = bottom - 1; i > top - 1; i--) {
      result.push(matrix[i][left]);
    }
    left++;
  }
  return result;
}
