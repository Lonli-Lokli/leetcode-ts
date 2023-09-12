import { l007ReverseInteger } from './l-007-reverse-integer';

describe('7. Reverse Integer', () => {
  it('Case 1', () => {
    expect(l007ReverseInteger(123)).toEqual(321);
  });
  it('Case 2', () => {
    expect(l007ReverseInteger(-123)).toEqual(-321);
  });
  it('Case 3', () => {
    expect(l007ReverseInteger(120)).toEqual(21);
  });
});
