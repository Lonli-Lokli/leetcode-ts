// https://leetcode.com/problems/reverse-linked-list-ii/
import { ListNode } from "@leetcode/core";

export function l092ReverseLinkedListIi(head: ListNode | null, left: number, right: number): ListNode | null {
  const dummy = new ListNode(0, head);
  let before: ListNode | null = dummy;
  for (let i = 1; i < left; i++) {
      before = before!.next;
  }
  
  let prev = before;
  let curr = before!.next;
  for (let i = left; i <= right; i++) {
      const next = curr!.next;
      curr!.next = prev;
      prev = curr;
      curr = next;
  }
  
  before!.next!.next = curr;
  before!.next = prev;
  
  return dummy.next;
};