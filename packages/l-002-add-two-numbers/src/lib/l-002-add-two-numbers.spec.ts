import {
  l002AddTwoNumbers_Initial,
  l002AddTwoNumbers_NonReversed,
  l002AddTwoNumbers_Updated,
  ListNode,
} from './l-002-add-two-numbers';

const reversedCases: () => Array<
  [ListNode | null, ListNode | null, ListNode | null]
> = () => [
  [createNode([2, 4, 3]), createNode([5, 6, 4]), createNode([7, 0, 8])],
  [
    createNode([9, 9, 9, 9, 9, 9, 9]),
    createNode([9, 9, 9, 9]),
    createNode([8, 9, 9, 9, 0, 0, 0, 1]),
  ],
];

const nonReversedCases: () => Array<
  [ListNode | null, ListNode | null, ListNode | null]
> = () => [
  [createNode([2, 4, 3]), createNode([5, 6, 4]), createNode([8, 0, 7])],
  [
    createNode([1, 7, 5]),
    createNode([2, 8, 7]),
    createNode([4, 6, 2]),
  ],
];

const createNode = (input: number[]): ListNode | null => {
  const node = new ListNode();
  let next = node;
  for (const n of input) {
    next.next = new ListNode(n);
    next = next.next;
  }

  return node.next;
};

describe('2. Add Two Numbers', () => {
  it.each(reversedCases())(
    'Initial: given %p and %p as arguments, returns %p',
    (l1, l2, expectedResult) => {
      expect(l002AddTwoNumbers_Initial(l1, l2)?.asString()).toEqual(
        expectedResult?.asString()
      );
    }
  );
  it.each(reversedCases())(
    'Updated: given %p and %p as arguments, returns %p',
    (l1, l2, expectedResult) => {
      expect(l002AddTwoNumbers_Updated(l1, l2)?.asString()).toEqual(
        expectedResult?.asString()
      );
    }
  );

  it.each(nonReversedCases())(
    'Follow-up (non-reversed): given %p and %p as arguments, returns %p',
    (l1, l2, expectedResult) => {
      expect(l002AddTwoNumbers_NonReversed(l1, l2)?.asString()).toEqual(
        expectedResult?.asString()
      );
    }
  );
});
