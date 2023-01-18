export class Node {
  val: number;
  left: Node | null;
  right: Node | null;
  next: Node | null;
  constructor(val?: number, left?: Node, right?: Node, next?: Node) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
  }
}

export function l116PopulatingNextRightPointersInEachNode_Stack(root: Node | null): Node | null {
  if (!root) return root;
  const queue: Node[] = [root];
  
  while (queue.length > 0) {
      let qLen = queue.length;
      while (--qLen >= 0) {
           const top = queue.shift()!;
           if (qLen > 0) top.next = queue[0] ?? null;
           if (top.left) queue.push(top.left);
           if (top.right) queue.push(top.right);
      }        
  }
  
  return root;
}

export function l116PopulatingNextRightPointersInEachNode_Recursion(root: Node | null): Node | null {
  const link = (left: Node | null, right: Node | null) => {
    if (!left) return;

    left.next = right;

    link(left.left, left.right);
    link(left.right, right?.left ?? null);
    link(right?.left ?? null, right?.right ?? null);
  }

  link(root?.left ?? null, root?.right ?? null);  
  return root;
}
