import { createNode } from '@leetcode/core';
import {
  l2130MaximumTwinSumOfALinkedList_Simple,
  l2130MaximumTwinSumOfALinkedList_Stack,
} from './l-2130-maximum-twin-sum-of-a-linked-list';

describe('2130. Maximum Twin Sum of a Linked List', () => {
  it('Case 1', () => {
    expect(
      l2130MaximumTwinSumOfALinkedList_Simple(createNode([5, 4, 2, 1]))
    ).toEqual(6);
    expect(
      l2130MaximumTwinSumOfALinkedList_Stack(createNode([5, 4, 2, 1]))
    ).toEqual(6);
  });
  it('Case 2', () => {
    expect(
      l2130MaximumTwinSumOfALinkedList_Simple(createNode([4, 2, 2, 3]))
    ).toEqual(7);
    expect(
      l2130MaximumTwinSumOfALinkedList_Stack(createNode([4, 2, 2, 3]))
    ).toEqual(7);
  });

  it('Case 3', () => {
    expect(
      l2130MaximumTwinSumOfALinkedList_Simple(createNode([1, 100000]))
    ).toEqual(100001);
    expect(
      l2130MaximumTwinSumOfALinkedList_Stack(createNode([1, 100000]))
    ).toEqual(100001);
  });
});
