import { l053MaximumSubarray } from './l-053-maximum-subarray';

describe('53. Maximum Subarray', () => {
  it('Case 1', () => {
    expect(l053MaximumSubarray([-2,1,-3,4,-1,2,1,-5,4])).toEqual(6);
  });
  it('Case 2', () => {
    expect(l053MaximumSubarray([1])).toEqual(1);
  });
  it('Case 3', () => {
    expect(l053MaximumSubarray([5,4,-1,7,8])).toEqual(23);
  });
});
