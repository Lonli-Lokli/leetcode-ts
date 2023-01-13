import { l138CopyListWithRandomPointer } from './l-138-copy-list-with-random-pointer';

const cases: () => Array<
  [Array<Node | null>, Node | null]
> = () => [
  [ createIntersection(createNode([1, 9, 1, 2, 4])!, createNode([3, -1, -1])!, 3, 0), 2],
  [ createIntersection(createNode([4,1,8,4,5])!, createNode([5,6,1,8,4,5])!, 2, 2), 8],
  [ createIntersection(createNode([1])!, createNode([1])!, 0, 0), 1],
 [ [createNode([1]), createNode([1])], 0],
];

describe('138. Copy List with Random Pointer', () => {
  it.each(cases())(
    'Initial: given %p and %p as arguments, returns %p',
    ([headA, headB], expectedResult) => {
      expect(l138CopyListWithRandomPointer(node)?.val ?? 0).toEqual(expectedResult);
    }
  );
});
