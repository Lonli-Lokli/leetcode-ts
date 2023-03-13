// https://leetcode.com/problems/next-greater-element-i/
export function l496NextGreaterElementI(nums1: number[], nums2: number[]): number[] {
  const stack = [];
  const map = new Map<number, number>();
  for (let i = 0; i < nums2.length; i++) {
      while (stack.length > 0 && nums2[i] > stack[stack.length - 1]) {
          map.set(stack.pop()!, nums2[i]);
      }
      stack.push(nums2[i]);
  }
  
  const result = [];
  for (const i of nums1) {
      result.push(map.get(i) ?? -1)
  }
  return result;
};