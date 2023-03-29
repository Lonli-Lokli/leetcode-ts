import { l0153Sum_Faster, l0153Sum_Slow } from './l-015-3sum';

describe('15. 3Sum', () => {
  it('Case 1', () => {
    expect(l0153Sum_Slow([-1, 0, 1, 2, -1, -4])).toEqual(
      expect.arrayContaining([
        [-1, -1, 2],
        [-1, 0, 1],
      ])
    );
    expect(l0153Sum_Faster([-1, 0, 1, 2, -1, -4])).toEqual(
      expect.arrayContaining([
        [-1, -1, 2],
        [-1, 0, 1],
      ])
    );
  });
  it('Case 2', () => {
    expect(l0153Sum_Slow([0, 1, 1])).toEqual(expect.arrayContaining([]));
    expect(l0153Sum_Faster([0, 1, 1])).toEqual(expect.arrayContaining([]));
  });
  it('Case 3', () => {
    expect(l0153Sum_Slow([0, 0, 0])).toEqual(
      expect.arrayContaining([[0, 0, 0]])
    );
    expect(l0153Sum_Faster([0, 0, 0])).toEqual(
      expect.arrayContaining([[0, 0, 0]])
    );
  });
  it('Case 4', () => {
    expect(l0153Sum_Slow([-2, 0, 1, 1, 2])).toEqual(
      expect.arrayContaining([
        [-2, 0, 2],
        [-2, 1, 1],
      ])
    );
    expect(l0153Sum_Faster([-2, 0, 1, 1, 2])).toEqual(
      expect.arrayContaining([
        [-2, 0, 2],
        [-2, 1, 1],
      ])
    );
  });
});
