import { l041FirstMissingPositive } from './l-041-first-missing-positive';

describe('41. First Missing Positive', () => {
  it('Case 1', () => {
    expect(l041FirstMissingPositive([1, 2, 0])).toEqual(3);
  });
  it('Case 2', () => {
    expect(l041FirstMissingPositive([3, 4, -1, 1])).toEqual(2);
  });
  it('Case 3', () => {
    expect(l041FirstMissingPositive([7, 8, 9, 11, 12])).toEqual(1);
  });
});
