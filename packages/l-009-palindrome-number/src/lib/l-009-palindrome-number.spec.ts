import { l009PalindromeNumber_WithoutString, l009PalindromeNumber_Initial } from './l-009-palindrome-number';

describe('9. Palindrome Number', () => {
  it('Case 1', () => {
    expect(l009PalindromeNumber_Initial(121)).toEqual(true);
    expect(l009PalindromeNumber_WithoutString(121)).toEqual(true);
  });
  it('Case 2', () => {
    expect(l009PalindromeNumber_Initial(-121)).toEqual(false);
    expect(l009PalindromeNumber_WithoutString(-121)).toEqual(false);
  });
  it('Case 3', () => {
    expect(l009PalindromeNumber_Initial(10)).toEqual(false);
    expect(l009PalindromeNumber_WithoutString(10)).toEqual(false);
  });
});
