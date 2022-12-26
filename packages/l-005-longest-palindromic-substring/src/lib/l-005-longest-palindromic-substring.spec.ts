import { l005LongestPalindromicSubstring } from './l-005-longest-palindromic-substring';

describe('5. Longest Palindromic Substring', () => {
  it('Example 1:', () => {
    expect(l005LongestPalindromicSubstring('babad')).toEqual('bab');
  });
  it('Example 2:', () => {
    expect(l005LongestPalindromicSubstring('cbbd')).toEqual('bb');
  });
});
