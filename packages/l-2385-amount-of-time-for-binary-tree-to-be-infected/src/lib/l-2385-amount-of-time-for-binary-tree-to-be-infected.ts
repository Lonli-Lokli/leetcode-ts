// https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/
import { TreeNode } from "@leetcode/core";

export function l2385AmountOfTimeForBinaryTreeToBeInfected(root: TreeNode | null, start: number): number {
  if (root === null) return 0;

  const map = new Map<TreeNode, TreeNode | null>();
  const stack = [root];
  map.set(root, null);
  let infectedNode: TreeNode | null = null;
  while (stack.length > 0) {
      const curr = stack.pop()!;
      if (curr.val === start) {
          infectedNode = curr;
      }
      if (curr.left !== null) {
          stack.push(curr.left);
          map.set(curr.left, curr);
      }
      if (curr.right !== null) {
          stack.push(curr.right);
          map.set(curr.right, curr);
      }
  }
  
  const visited = new Set<number>([start]);
  const queue = [infectedNode];
  let result = 0;
  while (queue.length > 0) {
      let size  = queue.length;
      while (size > 0) {
          const curr = queue.shift()!;
          
          if (curr.left !== null && !visited.has(curr.left.val)) {
              queue.push(curr.left);
              visited.add(curr.left.val)
          }
          
          if (curr.right !== null && !visited.has(curr.right.val)) {
              queue.push(curr.right);
              visited.add(curr.right.val)
          }
          
          if (map.get(curr) !== null && !visited.has(map.get(curr)!.val)) {
              queue.push(map.get(curr)!)
              visited.add(map.get(curr)!.val)
          }
          result++;
          size--;
      }
  }
  
  return result - 1;
};
