import { l704BinarySearch } from './l-704-binary-search';

describe('704. Binary Search', () => {
  it('Case 1', () => {
    expect(l704BinarySearch([-1,0,3,5,9,12], 9)).toEqual(4);
  });
  it('Case 2', () => {
    expect(l704BinarySearch([-1,0,3,5,9,12], 2)).toEqual(-1);
  });
});
