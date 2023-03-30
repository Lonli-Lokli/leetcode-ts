// https://leetcode.com/problems/remove-nth-node-from-end-of-list/
import { ListNode } from "@leetcode/core";

export function l019RemoveNthNodeFromEndOfList(head: ListNode | null, n: number): ListNode | null {
  const dummy = new ListNode();
  dummy.next = head;

  let fast: ListNode | null = dummy
  let slow: ListNode | null = dummy
  for (let i = 0; i <= n; i++) {
    fast = fast?.next ?? null;
  }

  while (fast !== null) {
    fast = fast.next;
    slow = slow?.next ?? null;
  }

  slow!.next = slow?.next?.next ?? null;

  return dummy.next;
};
