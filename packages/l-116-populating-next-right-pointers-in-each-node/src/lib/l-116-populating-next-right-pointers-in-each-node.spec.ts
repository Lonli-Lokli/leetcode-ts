import {
  l116PopulatingNextRightPointersInEachNode_Recursion,
  l116PopulatingNextRightPointersInEachNode_Stack,
  Node,
} from './l-116-populating-next-right-pointers-in-each-node';

const createTree = (items: (number | null)[]): Node | null => {
  if (items.length === 0) return null;
  const root = new Node(items.shift()!);
  const queue = [root];
  while (queue.length > 0) {
    const node = queue.shift()!;
    const left = items.shift() ?? null;
    node.left = left !== null ? new Node(left) : null;
    const right = items.shift() ?? null;
    node.right = right !== null ? new Node(right) : null;

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return root;
};

const cases: () => Array<[Node | null, string]> = () => [
  [createTree([1,2,3,4,5,6,7]), '1,#,2,3,#,4,5,6,7,#'],
];

const collectNexts = (root: Node | null) => {
  if (!root) return root;
  const result: string[] = [];


  const traverse = (node: Node) => {
    result.push(node.val.toString());
    let clone: Node | null = node;
    while (clone !== null)  {
      result.push(clone.next?.val.toString() ?? '#');
      clone = clone.next;
    }
    if (node.left) {
      traverse(node.left);
    }
  }
  traverse(root)
  return result.join(',');
}
describe('116. Populating Next Right Pointers in Each Node', () => {
  it.each(cases())(
    'Initial: given %p and %p as arguments, returns %p',
    (node, expectedResult) => {
      expect(collectNexts(l116PopulatingNextRightPointersInEachNode_Stack(node))).toEqual(
        expectedResult
      );
    }
  );
  it.each(cases())(
    'Recursion: given %p and %p as arguments, returns %p',
    (node, expectedResult) => {
      expect(collectNexts(l116PopulatingNextRightPointersInEachNode_Recursion(node))).toEqual(
        expectedResult
      );
    }
  );
});
