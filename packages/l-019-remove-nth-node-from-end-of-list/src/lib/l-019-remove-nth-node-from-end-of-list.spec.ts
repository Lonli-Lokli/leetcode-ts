import { createNode } from '@leetcode/core';
import { l019RemoveNthNodeFromEndOfList } from './l-019-remove-nth-node-from-end-of-list';

describe('19. Remove Nth Node From End of List', () => {
  it('Case 1', () => {
    expect(
      l019RemoveNthNodeFromEndOfList(createNode([1, 2, 3, 4, 5]), 2)?.asString()
    ).toEqual('1,2,3,5');
  });
  it('Case 2', () => {
    expect(
      l019RemoveNthNodeFromEndOfList(createNode([1]), 1)?.asString()
    ).toEqual(undefined);
  });
  it('Case 3', () => {
    expect(
      l019RemoveNthNodeFromEndOfList(createNode([1, 2]), 2)?.asString()
    ).toEqual('2');
  });
});
