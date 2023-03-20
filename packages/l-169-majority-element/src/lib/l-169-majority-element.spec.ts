import { l169MajorityElement } from './l-169-majority-element';

describe('169. Majority Element', () => {
  it('Case 1', () => {
    expect(l169MajorityElement([3,2,3])).toEqual(3);
  });
  it('Case 2', () => {
    expect(l169MajorityElement([2,2,1,1,1,2,2])).toEqual(2);
  });
});
