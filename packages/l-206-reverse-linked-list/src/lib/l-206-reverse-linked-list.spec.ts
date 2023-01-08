import { l206ReverseLinkedList_Iteratively, l206ReverseLinkedList_Recursively, l206ReverseLinkedList_Updated, ListNode } from './l-206-reverse-linked-list';

const cases: () => Array<[ListNode | null, ListNode | null]> = () => [
  [
    new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))),
    new ListNode(5, new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(1)))))
  ]
];

describe('54. Spiral Matrix', () => {
  it.each(cases())(
    'Initial Iteratively: given %p as arguments, returns %p',
    (args, expectedResult) => {
      expect(l206ReverseLinkedList_Iteratively(args)?.asString()).toEqual(expectedResult?.asString());
    }
  ); 
  it.each(cases())(
    'Initial Recursively: given %p as arguments, returns %p',
    (args, expectedResult) => {
      expect(l206ReverseLinkedList_Recursively(args)?.asString()).toEqual(expectedResult?.asString());
    }
  ); 
  it.each(cases())(
    'Updated Recursively: given %p as arguments, returns %p',
    (args, expectedResult) => {
      expect(l206ReverseLinkedList_Updated(args)?.asString()).toEqual(expectedResult?.asString());
    }
  ); 
});
