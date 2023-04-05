import { createNode } from '@leetcode/core';
import { l2487RemoveNodesFromLinkedList } from './l-2487-remove-nodes-from-linked-list';

describe('2487. Remove Nodes From Linked List', () => {
  it('Case 1', () => {
    expect(l2487RemoveNodesFromLinkedList(createNode([5,2,13,3,8]))?.asString()).toEqual(
      '13,8'
    );
  });
  it('Case 2', () => {
    expect(l2487RemoveNodesFromLinkedList(createNode([1,1,1,1]))?.asString()).toEqual(
      '1,1,1,1'
    );
  });
});
