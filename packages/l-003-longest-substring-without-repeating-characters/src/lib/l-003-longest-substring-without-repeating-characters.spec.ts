import { l003LongestSubstringWithoutRepeatingCharacters } from './l-003-longest-substring-without-repeating-characters';

describe('3. Longest Substring Without Repeating Characters', () => {
  it('Case 1', () => {
    expect(l003LongestSubstringWithoutRepeatingCharacters('abcabcbb')).toEqual(
      3
    );
  });
  it('Case 2', () => {
    expect(l003LongestSubstringWithoutRepeatingCharacters('bbbbb')).toEqual(1);
  });
  it('Case 3', () => {
    expect(l003LongestSubstringWithoutRepeatingCharacters('pwwkew')).toEqual(3);
  });
});
