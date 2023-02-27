import { l118PascalsTriangle } from './l-118-pascals-triangle';

describe(`118. Pascal's Triangle`, () => {
  it('Case 1', () => {
    expect(l118PascalsTriangle(5)).toEqual( [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]);
  });
});
