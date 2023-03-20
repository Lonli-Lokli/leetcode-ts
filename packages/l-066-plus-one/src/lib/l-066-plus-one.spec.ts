import { l066PlusOne } from './l-066-plus-one';

describe('66. Plus One', () => {
  it('Case 1', () => {
    expect(l066PlusOne([1,2,3])).toEqual([1,2,4]);
  });
  it('Case 2', () => {
    expect(l066PlusOne([4,3,2,1])).toEqual([4,3,2,2]);
  });
  it('Case 3', () => {
    expect(l066PlusOne([9])).toEqual([1,0]);
  });
});
