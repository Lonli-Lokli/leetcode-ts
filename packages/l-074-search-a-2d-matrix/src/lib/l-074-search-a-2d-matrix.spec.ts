import { l074SearchA2dMatrix } from './l-074-search-a-2d-matrix';

describe('74. Search a 2D Matrix', () => {
  it('Case 1', () => {
    expect(l074SearchA2dMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3)).toEqual(true);
  });
  it('Case 2', () => {
    expect(l074SearchA2dMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13)).toEqual(false);
  });
});
