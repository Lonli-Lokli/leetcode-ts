// https://leetcode.com/problems/add-two-numbers-ii/

import { ListNode } from "@leetcode/core";

export function l445AddTwoNumbersIi_Initial(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const list2array = (l1: ListNode | null): number[] => {
    const result: number[] = [];
    let node: ListNode | null = l1;
    while (node !== null) {
      result.push(node.val);
      node = node.next;
    }
    return result;
  }

  const arr1 = list2array(l1);
  const arr2 = list2array(l2);
  
  const maxLength = Math.max(arr1.length, arr2.length);
  arr1.unshift(...Array.from('0'.repeat(maxLength - arr1.length)).map(Number));
  arr2.unshift(...Array.from('0'.repeat(maxLength - arr2.length)).map(Number));
  
  let sum = 0;
  const accumulated: number[] = [];
  for (let i = arr1.length - 1; i >= 0; i--) {
    sum += arr1[i] + arr2[i];
    accumulated.push(sum % 10);
    sum = sum > 9 ? 1 : 0 
  }
  if (sum > 0)  accumulated.push(sum);

  const result = new ListNode(0);
  let node: ListNode | null = result;
  for (let i = accumulated.length - 1; i >= 0; i--) {
    node.next = new ListNode(accumulated[i]);
    node = node?.next;
  }

  return result.next;
}

export function l445AddTwoNumbersIi_External(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  throw new Error('Implement!');
}