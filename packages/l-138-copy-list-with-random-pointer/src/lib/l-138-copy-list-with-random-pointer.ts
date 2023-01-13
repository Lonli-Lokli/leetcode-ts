// https://leetcode.com/problems/copy-list-with-random-pointer/
class Node {
  val: number;
  next: Node | null;
  random: Node | null;
  constructor(val?: number, next?: Node, random?: Node) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }
}

export function l138CopyListWithRandomPointer(head: Node | null): Node | null {
  throw new Error('TODO')
}