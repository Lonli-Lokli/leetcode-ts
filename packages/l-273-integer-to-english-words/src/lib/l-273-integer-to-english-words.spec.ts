import { l273IntegerToEnglishWords } from './l-273-integer-to-english-words';

describe('273. Integer to English Words', () => {
  it('Case 1', () => {
    expect(l273IntegerToEnglishWords(123)).toEqual('One Hundred Twenty Three');
  });
  it('Case 2', () => {
    expect(l273IntegerToEnglishWords(12345)).toEqual(
      'Twelve Thousand Three Hundred Forty Five'
    );
  });
  it('Case 3', () => {
    expect(l273IntegerToEnglishWords(1234567)).toEqual(
      'One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven'
    );
  });
});
