export function l238ProductOfArrayExceptSelf_Naive(nums: number[]): number[] {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
      let sum = 1;
      for (let j = 0; j < nums.length; j++) {
          sum *= (j === i ? 1 : nums[j]);
      }
      result.push(sum);
  }
  
  return result;
};

export function l238ProductOfArrayExceptSelf_Fast(nums: number[]): number[] {
  const result = Array.from({length: nums.length}, (_, __) => 1);
  let product = 1;
  for (let i = 0; i < nums.length; i += 1) {
    result[i] = product;
    product *= nums[i];
  }

  product = 1;
  for (let i = nums.length - 1; i >= 0; i -= 1) {
    result[i] *= product;
    product *= nums[i];
  }
    
  return result;
};