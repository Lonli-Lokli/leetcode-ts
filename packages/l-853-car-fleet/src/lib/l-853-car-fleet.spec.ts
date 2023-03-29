import { l853CarFleet } from './l-853-car-fleet';

describe('853. Car Fleet', () => {
  it('Case 1', () => {
    expect(l853CarFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3])).toEqual(3);
  });
  it('Case 2', () => {
    expect(l853CarFleet(10, [3], [3])).toEqual(1);
  });
  it('Case 3', () => {
    expect(l853CarFleet(100, [0, 2, 4], [4, 2, 1])).toEqual(1);
  });
});
