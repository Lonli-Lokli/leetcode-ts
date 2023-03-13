// https://leetcode.com/problems/two-sum-iv-input-is-a-bst/
import { TreeNode } from "@leetcode/core";

export function l653TwoSumIvInputIsABst(root: TreeNode | null, k: number): boolean {
  const nodes: number[] = [];
  const traversal = (node: TreeNode | null) => {
      if (node === null) return;
      traversal(node.left);
      nodes.push(node.val);
      traversal(node.right);        
  }
  
  traversal(root);
  
  let left = 0;
  let right = nodes.length - 1;
  while (left < right) {
      const sum = nodes[left] + nodes[right];
      if (sum === k) return true;
      if (sum < k) left++;
      if (sum > k) right--;
  }
  
  return false;
};