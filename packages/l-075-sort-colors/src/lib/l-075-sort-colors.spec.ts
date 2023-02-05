import { l075SortColors } from './l-075-sort-colors';

describe('75. Sort Colors', () => {
  it('Case 1', () => {
    const nums = [2, 0, 2, 1, 1, 0];
    l075SortColors(nums);
    expect(nums).toEqual([0, 0, 1, 1, 2, 2]);
  });
});
