import { createNode } from '@leetcode/core';
import { l143ReorderList } from './l-143-reorder-list';

describe('143. Reorder List', () => {
  it('Case 1', () => {
    const node = createNode([1,2,3,4]);
    l143ReorderList(node);
    expect(node?.asString()).toEqual('1,4,2,3');
  });
  it('Case 2', () => {
    const node = createNode([1,2,3,4,5]);
    l143ReorderList(node);
    expect(node?.asString()).toEqual('1,5,2,4,3');
  });
});
