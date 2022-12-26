import { l186ReverseWordsInAStringIi } from './l-186-reverse-words-in-a-string-ii';

describe('186. Reverse Words in a String II', () => {
  it('Example 1: ', () => {
    const s = [
      't',
      'h',
      'e',
      ' ',
      's',
      'k',
      'y',
      ' ',
      'i',
      's',
      ' ',
      'b',
      'l',
      'u',
      'e',
    ];
    l186ReverseWordsInAStringIi(s);
    expect(s).toEqual([
      'b',
      'l',
      'u',
      'e',
      ' ',
      'i',
      's',
      ' ',
      's',
      'k',
      'y',
      ' ',
      't',
      'h',
      'e',
    ]);
  });
  it('Example 2: ', () => {
    const s = ['a'];
    l186ReverseWordsInAStringIi(s);
    expect(s).toEqual(['a']);
  });
});
