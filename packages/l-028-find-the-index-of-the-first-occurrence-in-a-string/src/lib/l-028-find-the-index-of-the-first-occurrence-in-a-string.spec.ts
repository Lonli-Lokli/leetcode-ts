import { l028FindTheIndexOfTheFirstOccurrenceInAString } from './l-028-find-the-index-of-the-first-occurrence-in-a-string';

describe('28. Find the Index of the First Occurrence in a String', () => {
  it('Case 1', () => {
    expect(
      l028FindTheIndexOfTheFirstOccurrenceInAString('sadbutsad', 'sad')
    ).toEqual(0);
  });
  it('Case 2', () => {
    expect(
      l028FindTheIndexOfTheFirstOccurrenceInAString('leetcode', 'leeto')
    ).toEqual(-1);
  });
});
