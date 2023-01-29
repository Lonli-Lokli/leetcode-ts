import { l387FirstUniqueCharacterInAString } from './l-387-first-unique-character-in-a-string';

describe('l387FirstUniqueCharacterInAString', () => {
  it('Case 1', () => {
    expect(l387FirstUniqueCharacterInAString('leetcode')).toEqual(0);
  });
  it('Case 2', () => {
    expect(l387FirstUniqueCharacterInAString('loveleetcode')).toEqual(2);
  });
  it('Case 3', () => {
    expect(l387FirstUniqueCharacterInAString('aabb')).toEqual(-1);
  });
});
