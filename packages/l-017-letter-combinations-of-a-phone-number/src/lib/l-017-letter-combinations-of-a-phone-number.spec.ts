import { l017LetterCombinationsOfAPhoneNumber_Iterative, l017LetterCombinationsOfAPhoneNumber_Recursive } from './l-017-letter-combinations-of-a-phone-number';

describe('17. Letter Combinations of a Phone Number', () => {
  it('Case 1', () => {
    expect(l017LetterCombinationsOfAPhoneNumber_Recursive('23')).toEqual(
      expect.arrayContaining([
        'ad',
        'ae',
        'af',
        'bd',
        'be',
        'bf',
        'cd',
        'ce',
        'cf',
      ])
    );
    expect(l017LetterCombinationsOfAPhoneNumber_Iterative('23')).toEqual(
      expect.arrayContaining([
        'ad',
        'ae',
        'af',
        'bd',
        'be',
        'bf',
        'cd',
        'ce',
        'cf',
      ])
    );
   
  });
  it('Case 2', () => {
   
    expect(l017LetterCombinationsOfAPhoneNumber_Recursive('')).toEqual(
      expect.arrayContaining([])
    );
    expect(l017LetterCombinationsOfAPhoneNumber_Iterative('')).toEqual(
      expect.arrayContaining([])
    );
  });
  it('Case 3', () => {
    
    
    expect(l017LetterCombinationsOfAPhoneNumber_Recursive('2')).toEqual(
      expect.arrayContaining(['a', 'b', 'c'])
    );
    expect(l017LetterCombinationsOfAPhoneNumber_Iterative('2')).toEqual(
      expect.arrayContaining(['a', 'b', 'c'])
    );
  });
});
