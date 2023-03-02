import { l238ProductOfArrayExceptSelf_Fast, l238ProductOfArrayExceptSelf_Naive } from './l-238-product-of-array-except-self';

describe('238. Product of Array Except Self', () => {
  it('Case 1', () => {
    expect(l238ProductOfArrayExceptSelf_Naive([1,2,3,4])).toEqual(
      [24,12,8,6]
    );
    expect(l238ProductOfArrayExceptSelf_Fast([1,2,3,4])).toEqual(
      [24,12,8,6]
    );
  });
});
