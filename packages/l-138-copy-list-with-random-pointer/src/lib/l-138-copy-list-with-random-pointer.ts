// https://leetcode.com/problems/copy-list-with-random-pointer/
export class Node {
  val: number;
  next: Node | null;
  random: Node | null;
  constructor(val?: number, next?: Node, random?: Node) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }

  asString() {
    return `Value ${this.val}, Next ${this.next}, Random ${this.random}`;
  }
}

export function l138CopyListWithRandomPointer_Naive(
  head: Node | null
): Node | null {
  const result = new Node();

  let current = result;
  const map: Map<Node, Node> = new Map();
  while (head !== null) {
    current.next = map.has(head)
      ? map.get(head)!
      : map.set(head, new Node(head.val)).get(head)!;
    if (head.random) {
      current.next.random = map.has(head.random)
        ? map.get(head.random)!
        : map.set(head.random, new Node(head.random.val)).get(head.random)!;
    }
    head = head.next;
    current = current.next;
  }
  return result.next;
}
