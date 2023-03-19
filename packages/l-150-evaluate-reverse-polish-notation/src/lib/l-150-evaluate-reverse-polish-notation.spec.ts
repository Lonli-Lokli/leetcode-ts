import { l150EvaluateReversePolishNotation } from './l-150-evaluate-reverse-polish-notation';

describe('150. Evaluate Reverse Polish Notation', () => {
  it('Case 1', () => {
    expect(
      l150EvaluateReversePolishNotation(['2', '1', '+', '3', '*'])
    ).toEqual(9);
  });
  it('Case 2', () => {
    expect(
      l150EvaluateReversePolishNotation(['4', '13', '5', '/', '+'])
    ).toEqual(6);
  });
  it('Case 3', () => {
    expect(
      l150EvaluateReversePolishNotation([
        '10',
        '6',
        '9',
        '3',
        '+',
        '-11',
        '*',
        '/',
        '*',
        '17',
        '+',
        '5',
        '+',
      ])
    ).toEqual(22);
  });
});
