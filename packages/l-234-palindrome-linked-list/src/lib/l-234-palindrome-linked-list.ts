import { ListNode } from '@leetcode/core';

// https://leetcode.com/problems/palindrome-linked-list/
export function l234PalindromeLinkedList_Initial(
  head: ListNode | null
): boolean {
  let forward = '';
  let backward = '';

  while (head !== null) {
    forward = forward + head.val.toString();
    backward = head.val.toString() + backward;
    head = head.next;
  }

  return forward === backward;
}

export function l234PalindromeLinkedList_ConstantSpace(
  head: ListNode | null
): boolean {
  if (head === null) return true;

  const reverseList = (node: ListNode | null): ListNode | null => {
    let curr = node;
    let prev: ListNode | null = null;

    while (curr !== null) {
      const temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
    }
    return prev ?? curr;
  };

  const findMiddle = (node: ListNode | null): ListNode | null => {
    let slow = node;
    let fast = node;

    while (fast?.next && fast.next.next) {
      fast = fast.next.next;
      slow = slow?.next ?? null;
    }

    return slow;
  };

  const firstHalf = findMiddle(head);
  const secondHalf = reverseList(firstHalf?.next ?? null);

  let result = true;
  let firstPointer: ListNode | null = head;
  let secondPointer: ListNode | null = secondHalf;
  while (result && firstPointer && secondPointer) {
    if (firstPointer.val !== secondPointer.val) {
      result = false;
    }
    firstPointer = firstPointer.next;
    secondPointer = secondPointer.next;
  }

  if (firstHalf) {
    firstHalf.next = reverseList(secondHalf);
  }

  return result;
}
