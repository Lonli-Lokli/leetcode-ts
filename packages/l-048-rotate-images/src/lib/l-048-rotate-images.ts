// https://leetcode.com/problems/rotate-image/
export function l048RotateImages(matrix: number[][]): void {
  let left = 0;
  let right = matrix.length - 1;

  while (left < right) {
    for (let shift = 0; shift < right - left; shift++) {
      const top = left;
      const bottom = right;

      const topLeft = matrix[top][left + shift];
      matrix[top][left+shift] = matrix[bottom-shift][left];
      matrix[bottom-shift][left] = matrix[bottom][right-shift];
      matrix[bottom][right-shift] = matrix[top+shift][right];
      matrix[top+shift][right] = topLeft;
    }
    left++;
    right--;
  }
}
