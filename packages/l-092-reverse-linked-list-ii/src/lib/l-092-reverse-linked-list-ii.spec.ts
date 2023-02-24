import { createNode } from '@leetcode/core';
import { l092ReverseLinkedListIi } from './l-092-reverse-linked-list-ii';

describe('92. Reverse Linked List II', () => {
  it('Case 1', () => {
    expect(l092ReverseLinkedListIi(createNode([1,2,3,4,5]), 2, 4)?.asString()).toEqual('1,4,3,2,5');
  });
});
