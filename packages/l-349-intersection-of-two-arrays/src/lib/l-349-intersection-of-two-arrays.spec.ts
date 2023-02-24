import { l349IntersectionOfTwoArrays } from './l-349-intersection-of-two-arrays';

describe('349. Intersection of Two Arrays', () => {
  it('Case 1', () => {
    expect(l349IntersectionOfTwoArrays([1,2,2,1], [2, 2])).toEqual([2]
    );
  });
  it('Case 2', () => {
    expect(l349IntersectionOfTwoArrays([4,9,5], [9,4,9,8,4])).toEqual(expect.arrayContaining([9, 4])    );
  });
});
