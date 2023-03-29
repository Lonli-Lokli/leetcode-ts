import {
  l084LargestRectangleInHistogram_DivideAndConquer,
  l084LargestRectangleInHistogram_Slow,
  l084LargestRectangleInHistogram_Stack,
  l084LargestRectangleInHistogram_Stack_WithBounds
} from './l-084-largest-rectangle-in-histogram';

const cases: Array<[number[], number]> = [[[2, 1, 5, 6, 2, 3], 10]];

describe('84. Largest Rectangle in Histogram', () => {
  it.each(cases)('given %p as arguments, returns %p', (input, expected) => {
    expect(l084LargestRectangleInHistogram_Slow(input)).toEqual(expected);
    expect(l084LargestRectangleInHistogram_DivideAndConquer(input)).toEqual(
      expected
    );
    expect(l084LargestRectangleInHistogram_Stack(input)).toEqual(
      expected
    );
    expect(l084LargestRectangleInHistogram_Stack_WithBounds(input)).toEqual(
      expected
    );
  });
});
