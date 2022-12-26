import { l001TwoSumSlow } from './l-001-two-sum';

describe('001. Two Sum', () => {
  it('Example 1', () => {
    expect(l001TwoSumSlow([2,7,11,15], 9)).toEqual([0, 1]);
  });

  it('Example 2', () => {
    expect(l001TwoSumSlow([3,2,4], 6)).toEqual([1, 2]);
  });

  it('Example 3', () => {
    expect(l001TwoSumSlow([3, 3], 6)).toEqual([0, 1]);
  });
});
