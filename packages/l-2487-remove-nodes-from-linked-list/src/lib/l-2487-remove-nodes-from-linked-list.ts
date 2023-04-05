// https://leetcode.com/problems/remove-nodes-from-linked-list/
import { ListNode } from "@leetcode/core";

export function l2487RemoveNodesFromLinkedList(head: ListNode | null): ListNode | null {
  // here we sure that dummy will always be in stack
  const dummy = new ListNode(1_000_000);
  const stack = [dummy];
  let current = head;
  while (current !== null) {
      // we must keep stack monotonic
      while (stack.length > 0 && stack[stack.length - 1].val < current.val) {
          stack.pop();
      }
      // connect to the new head
      stack[stack.length - 1].next = current;
      stack.push(current);
      current = current.next;
  }
  
  return dummy.next;
};