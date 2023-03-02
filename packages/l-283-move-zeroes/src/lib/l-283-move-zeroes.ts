// https://leetcode.com/problems/move-zeroes/

export function l283MoveZeroes(nums: number[]): void {
  let zeroes = 0;
  let processing = 0;
  while (processing < nums.length) {
      if (nums[processing] === 0) {
          nums.splice(processing, 1);
          zeroes++;
      } else processing++;
  }

  for (let i = 0; i < zeroes; i++) {
      nums.push(0);
  }
};
