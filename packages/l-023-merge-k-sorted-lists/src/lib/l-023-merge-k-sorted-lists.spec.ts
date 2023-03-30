import { ListNode } from '@leetcode/core';
import { l023MergeKSortedLists_Faster, l023MergeKSortedLists_Submitted } from './l-023-merge-k-sorted-lists';


const createNode = (input: number[]): ListNode | null => {
  const node = new ListNode();
  let next = node;
  for (const n of input) {
    next.next = new ListNode(n);
    next = next.next;
  }

  return node.next;
};

const cases: () => Array<
  [Array<ListNode | null>, ListNode | null]
> = () => [
  [[[1,4,5],[1,3,4],[2,6]].map(createNode), createNode([1,1,2,3,4,4,5,6])],
  [[], createNode([])],
  [[[],[-1,5,11],[],[6,10]].map(createNode), createNode([-1,5,6,10,11])],
];

describe('21. Merge Two Sorted Lists', () => {
  it.each(cases())(
    'Initial: given %p and %p as arguments, returns %p',
    (l1, expectedResult) => {
      expect(l023MergeKSortedLists_Submitted(l1)?.asString()).toEqual(
        expectedResult?.asString()
      );
    }
  );
  it.each(cases())(
    'Faster: given %p and %p as arguments, returns %p',
    (l1, expectedResult) => {
      expect(l023MergeKSortedLists_Faster(l1)?.asString()).toEqual(
        expectedResult?.asString()
      );
    }
  );
});
