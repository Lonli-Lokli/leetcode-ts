import { l300LongestIncreasingSubsequence } from './l-300-longest-increasing-subsequence';

describe('300. Longest Increasing Subsequence', () => {
  it('Example 1', () => {
    expect(l300LongestIncreasingSubsequence([10, 9, 2, 5, 3, 7, 101, 18])).toEqual(4);
  });
  it('Example 2', () => {
    expect(l300LongestIncreasingSubsequence([0, 1, 0, 3, 2, 3])).toEqual(4);
  });
  it('Example 3', () => {
    expect(l300LongestIncreasingSubsequence([7, 7, 7, 7, 7, 7, 7])).toEqual(1);
  });
});
