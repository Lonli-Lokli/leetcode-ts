import { l021MergeTwoSortedLists, ListNode } from './l-021-merge-two-sorted-lists';


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
  [ListNode | null, ListNode | null, ListNode | null]
> = () => [
  [createNode([1, 2, 4]), createNode([1, 3, 4]), createNode([1,1,2,3,4,4])],
  [createNode([]), createNode([]), createNode([])],
  [createNode([]), createNode([0]), createNode([0])],
];

describe('21. Merge Two Sorted Lists', () => {
  it.each(cases())(
    'Initial: given %p and %p as arguments, returns %p',
    (l1, l2, expectedResult) => {
      expect(l021MergeTwoSortedLists(l1, l2)?.asString()).toEqual(
        expectedResult?.asString()
      );
    }
  );
});
