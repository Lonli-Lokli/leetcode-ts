import { l011ContainerWithMostWater } from './l-011-container-with-most-water';

describe('11. Container With Most Water', () => {
  it('Case 1', () => {
    expect(l011ContainerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7])).toEqual(49);
  });
  it('Case 1', () => {
    expect(l011ContainerWithMostWater([1, 1])).toEqual(1);
  });
});
