import { l424LongestRepeatingCharacterReplacement } from './l-424-longest-repeating-character-replacement';

describe('424. Longest Repeating Character Replacement', () => {
  it('Case 1', () => {
    expect(l424LongestRepeatingCharacterReplacement('ABAB', 2)).toEqual(4);
  });
  it('Case 2', () => {
    expect(l424LongestRepeatingCharacterReplacement('AABABBA', 1)).toEqual(4);
  });
});
