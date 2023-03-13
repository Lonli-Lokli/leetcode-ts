import { l128LongestConsecutiveSequence } from './l-128-longest-consecutive-sequence';

describe('128. Longest Consecutive Sequence', () => {
  it('Case 1', () => {
    expect(l128LongestConsecutiveSequence([100, 4, 200, 1, 3, 2])).toEqual(4);
  });
  it('Case 2', () => {
    expect(
      l128LongestConsecutiveSequence([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])
    ).toEqual(9);
  });
});
