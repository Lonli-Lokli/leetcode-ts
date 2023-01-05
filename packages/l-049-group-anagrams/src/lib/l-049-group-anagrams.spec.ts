import { l049GroupAnagrams } from './l-049-group-anagrams';

const cases: Array<[string[], Array<string[]>]> = [
  [
    ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'],
    [['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']],
  ],
  [[''], [['']]],
  [['a'], [['a']]],
];

describe('49. Group Anagrams', () => {
  it.each(cases)(
    'Initial: given %p as arguments, returns %p',
    (args, expectedResult) => {
      expect(l049GroupAnagrams(args).flatMap(_ => _)).toEqual(expect.arrayContaining(expectedResult.flatMap(_ => _)));
    }
  );
});
