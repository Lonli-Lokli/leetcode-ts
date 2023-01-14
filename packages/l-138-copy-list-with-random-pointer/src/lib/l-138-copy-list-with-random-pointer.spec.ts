import {
  l138CopyListWithRandomPointer_Naive,
  Node,
} from './l-138-copy-list-with-random-pointer';

const createNode = (input: Array<[number, number | null]>): Node | null => {
  const head = new Node();
  const nodes: Node[] = [];

  let current = head;
  for (let i = 0; i < input.length; i++) {
    const newNode = new Node(input[i][0]);
    nodes.push(newNode);
    current.next = newNode;
    current = newNode;
  }
  for (let i = 0; i < input.length; i++) {
    nodes[i].random = input[i][1] === null ? null : nodes[input[i][1]!];
  }
  return head.next;
};

const collectNode = (input: Node | null): Array<Node> => {
  const nodes = [];
  let current = input;
  while (current !== null) {
    nodes.push(current);
    current = current.next;
  }
  return nodes;
};
const cases: () => Array<[Node | null, Node | null]> = () => [
  [
    createNode([
      [7, null],
      [13, 0],
      [11, 4],
      [10, 2],
      [1, 0],
    ]),
    createNode([
      [7, null],
      [13, 0],
      [11, 4],
      [10, 2],
      [1, 0],
    ]),
  ],
];

describe('138. Copy List with Random Pointer', () => {
  it.each(cases())(
    'Initial: given %p and %p as arguments, returns %p',
    (head, expectedResult) => {
      const representNode = (input: Node | null) =>
        collectNode(input)
          .map((n) => n.asString())
          .join('|');
      expect(representNode(l138CopyListWithRandomPointer_Naive(head))).toEqual(
        representNode(expectedResult)
      );
    }
  );
});
