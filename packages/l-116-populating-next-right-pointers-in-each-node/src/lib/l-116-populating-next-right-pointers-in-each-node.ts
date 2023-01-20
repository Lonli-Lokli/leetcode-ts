import { TreeNodeNext } from "@leetcode/core";


// it has non-constant space
export function l116PopulatingNextRightPointersInEachNode_Queue(root: TreeNodeNext | null): TreeNodeNext | null {
  if (!root) return root;
  const queue: TreeNodeNext[] = [root];
  
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

export function l116PopulatingNextRightPointersInEachNode_Recursion(root: TreeNodeNext | null): TreeNodeNext | null {
  const link = (left: TreeNodeNext | null, right: TreeNodeNext | null) => {
    if (!left) return;

    left.next = right;

    link(left.left, left.right);
    link(left.right, right?.left ?? null);
    link(right?.left ?? null, right?.right ?? null);
  }

  link(root?.left ?? null, root?.right ?? null);  
  return root;
}
