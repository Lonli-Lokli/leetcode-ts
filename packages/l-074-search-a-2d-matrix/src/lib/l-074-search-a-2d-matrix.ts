// https://leetcode.com/problems/search-a-2d-matrix/
export function l074SearchA2dMatrix(matrix: number[][], target: number): boolean {
  let left = 0;
  let right = matrix.length*matrix[0].length - 1;
  
  while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const row = Math.floor(mid / matrix[0].length);
      const col = mid % matrix[0].length;
      if (matrix[row][col] === target) return true;
      
      if (matrix[row][col] > target) right = mid - 1;
      if (matrix[row][col] < target) left = mid + 1;
  }
  
  return false;
};