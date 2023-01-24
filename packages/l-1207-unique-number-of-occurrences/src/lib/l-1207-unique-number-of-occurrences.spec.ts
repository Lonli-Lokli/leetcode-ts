import { l1207UniqueNumberOfOccurrences } from './l-1207-unique-number-of-occurrences';

describe('l1207UniqueNumberOfOccurrences', () => {
  it('Case 1', () => {
    expect(l1207UniqueNumberOfOccurrences([1,2,2,1,1,3])).toEqual(
      true
    );
  });
  it('Case 2', () => {
    expect(l1207UniqueNumberOfOccurrences([1,2])).toEqual(
      false
    );
  });
  it('Case 3', () => {
    expect(l1207UniqueNumberOfOccurrences([-3,0,1,-3,1,1,1,-3,10,0])).toEqual(
      true
    );
  });
});
