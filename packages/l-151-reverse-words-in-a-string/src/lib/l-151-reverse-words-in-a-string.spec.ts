import { l151ReverseWordsInAString } from './l-151-reverse-words-in-a-string';

describe('151. Reverse Words in a String', () => {
  it('Example 1: ', () => {
    expect(l151ReverseWordsInAString('the sky is blue')).toEqual(
      'blue is sky the'
    );
  });
  it('Example 2: ', () => {
    expect(l151ReverseWordsInAString('  hello world  ')).toEqual('world hello');
  });
  it('Example 3: ', () => {
    expect(l151ReverseWordsInAString('a good   example')).toEqual(
      'example good a'
    );
  });
});
