import { l412FizzBuzz } from './l-412-fizz-buzz';

describe('412. Fizz Buzz', () => {
  it('Simple', () => {
    expect(l412FizzBuzz(3)).toEqual(['1', '2', 'Fizz']);
    expect(l412FizzBuzz(5)).toEqual(['1', '2', 'Fizz', '4', 'Buzz']);
    expect(l412FizzBuzz(15)).toEqual([
      '1',
      '2',
      'Fizz',
      '4',
      'Buzz',
      'Fizz',
      '7',
      '8',
      'Fizz',
      'Buzz',
      '11',
      'Fizz',
      '13',
      '14',
      'FizzBuzz',
    ]);
  });
});
