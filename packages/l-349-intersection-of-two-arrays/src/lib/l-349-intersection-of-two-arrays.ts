export function l349IntersectionOfTwoArrays(nums1: number[], nums2: number[]): number[] {
  const num1S = new Set(nums1);
  const num2S = new Set(nums2);
  
  const result = new Set<number>();
  
  num1S.forEach(el => {
      if (num2S.has(el)) result.add(el);
  });
  num2S.forEach(el => {
      if (num1S.has(el)) result.add(el);
  });
  
  
  return Array.from(result.values());
};
