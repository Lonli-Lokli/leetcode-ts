import { l496NextGreaterElementI } from './l-496-next-greater-element-i';

describe('496. Next Greater Element I', () => {
  it('Case 1', () => {
    expect(l496NextGreaterElementI([4, 1, 2], [1, 3, 4, 2])).toEqual([
      -1, 3, -1,
    ]);
  });
  it('Case 2', () => {
    expect(l496NextGreaterElementI([2, 4], [1, 2, 3, 4])).toEqual([3, -1]);
  });
});
