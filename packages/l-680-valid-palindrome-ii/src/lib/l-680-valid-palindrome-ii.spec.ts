import { l680ValidPalindromeIi } from './l-680-valid-palindrome-ii';

describe('680. Valid Palindrome II', () => {
  it('Case 1', () => {
    expect(l680ValidPalindromeIi('aba')).toEqual(true);
  });
  it('Case 1', () => {
    expect(l680ValidPalindromeIi('abca')).toEqual(true);
  });
  it('Case 1', () => {
    expect(l680ValidPalindromeIi('abc')).toEqual(false);
  });
});
