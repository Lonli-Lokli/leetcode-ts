// https://leetcode.com/problems/merge-two-sorted-lists/

import { ListNode } from "@leetcode/core";

export function l021MergeTwoSortedLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  const result = new ListNode(0);
  let first = list1;
  let second = list2;
  let current: ListNode | null = result;

  while (current !== null && (first !== null || second !== null)) {
    
    if ((first?.val ?? 200) < (second?.val ?? 200)) {
      current.next = first;
      first = first?.next ?? null;
    } else {
      current.next = second;
      second = second?.next ?? null
    }
    current = current.next;
  }

  return result.next;
}
