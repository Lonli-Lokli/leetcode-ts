import { l217ContainsDuplicate } from './l-217-contains-duplicate';

describe('217. Contains Duplicate', () => {
  it('Case 1', () => {
    expect(l217ContainsDuplicate([1,2,3,1])).toEqual(true);
  });
  it('Case 1', () => {
    expect(l217ContainsDuplicate([1,2,3,4])).toEqual(false);
  });
  it('Case 1', () => {
    expect(l217ContainsDuplicate([1,1,1,3,3,4,3,2,4,2])).toEqual(true);
  });
});
