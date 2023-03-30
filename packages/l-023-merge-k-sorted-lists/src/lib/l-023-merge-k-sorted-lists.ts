// https://leetcode.com/problems/merge-k-sorted-lists/

import { ListNode } from "@leetcode/core";

export function l023MergeKSortedLists_Submitted(lists: Array<ListNode | null>): ListNode | null {
  const result = new ListNode(0);

  const LISTNODE_MAX = 10_000;
  const findMinValueList = (lists: Array<ListNode | null>): ListNode | null=> {
    return lists.sort((a, b) => (a?.val ?? LISTNODE_MAX) - (b?.val ?? LISTNODE_MAX))[0] ?? null;
  }

  let current = result;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const minNode = findMinValueList(lists);
    if (minNode === null) {
      break;
    }

    current.next = minNode;
    current = current.next;

    lists = lists.filter(node => node !== minNode);
    if (minNode.next) {
      lists.push(minNode.next);
    }
  }
  

  return result.next;
}

export function l023MergeKSortedLists_Faster(lists: Array<ListNode | null>): ListNode | null {

  if (lists.length === 0) return null;

  const mergeLists = (listA: ListNode | null, listB: ListNode | null): ListNode | null => {
    const dummy = new ListNode();
    let tail = dummy;
    while (listA && listB) {
      if (listA.val < listB.val) {
        tail.next = listA;
        listA = listA.next
      } else {
        tail.next = listB;
        listB = listB.next;
      }
      tail = tail.next;
    }

    tail.next = listA || listB;
    return dummy.next;
  }

  while (lists.length > 1) {
    const merged = [];
    for (let i = 0; i < lists.length; i += 2){
      merged.push(mergeLists( lists[i], lists[i + 1] ?? null));
    }
    lists = merged;
  }
  
  return lists[0] ?? null;
}
