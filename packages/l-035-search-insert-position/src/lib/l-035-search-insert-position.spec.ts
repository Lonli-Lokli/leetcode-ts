import { l035SearchInsertPosition } from './l-035-search-insert-position';

describe('35. Search Insert Position', () => {
  it('Case 1', () => {
    expect(l035SearchInsertPosition([1,3,5,6], 5)).toEqual(2);
  });
  it('Case 2', () => {
    expect(l035SearchInsertPosition([1,3,5,6], 2)).toEqual(1);
  });
  it('Case 3', () => {
    expect(l035SearchInsertPosition([1,3,5,6], 7)).toEqual(4);
  });
});
