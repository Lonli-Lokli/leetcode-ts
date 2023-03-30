// https://leetcode.com/problems/reorder-list/
import { ListNode } from '@leetcode/core';

export function l143ReorderList(head: ListNode | null) {
  const findMid = (node: ListNode | null) => {
    let slow = node;
    let fast = node;
    let prev = slow;

    while (slow !== null && fast !== null) {
      prev = slow;
      slow = slow?.next ?? null;
      fast = fast?.next?.next ?? null;
    }
    if (prev) {
      prev.next = null;
    }
    return slow;
  };

  const reverse = (head: ListNode | null): ListNode | null => {
    let prev: ListNode | null = null;
    let curr: ListNode | null = head;
    while (curr !== null) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    return prev;
  };

  const merge = (
    listA: ListNode | null,
    listB: ListNode | null
  ): ListNode | null => {
    const dummy = new ListNode();
    let node: ListNode | null = dummy;
    while (node !== null && (listA !== null || listB !== null)) {
      if (listA) {
        node.next = listA;
        listA = listA.next;
        node = node.next;
      }
      if (listB) {
        node.next = listB;
        listB = listB.next;
        node = node.next;
      }
    }
    return dummy.next;
  };

  merge(head, reverse(findMid(head)));
}
