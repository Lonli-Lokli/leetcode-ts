import { l242ValidAnagram } from './l-242-valid-anagram';

describe('242. Valid Anagram', () => {
  it('Case 1', () => {
    expect(l242ValidAnagram('anagram', 'nagaram')).toEqual(true);
  });
  it('Case 2', () => {
    expect(l242ValidAnagram('rat', 'car')).toEqual(false);
  });
});
