import { createNode } from '@leetcode/core';
import { l234PalindromeLinkedList_ConstantSpace, l234PalindromeLinkedList_Initial } from './l-234-palindrome-linked-list';

describe('234. Palindrome Linked List', () => {
  it('Case 1', () => {
    expect(l234PalindromeLinkedList_Initial(createNode([1,2,2,1]))).toEqual(true);
    expect(l234PalindromeLinkedList_ConstantSpace(createNode([1,2,2,1]))).toEqual(true);
  });
  it('Case 2', () => {
    expect(l234PalindromeLinkedList_Initial(createNode([1,2]))).toEqual(false);
    expect(l234PalindromeLinkedList_ConstantSpace(createNode([1,2]))).toEqual(false);
  });
  it('Case 3', () => {
    expect(l234PalindromeLinkedList_Initial(createNode([1]))).toEqual(true);
    expect(l234PalindromeLinkedList_ConstantSpace(createNode([1]))).toEqual(true);
  });
});
