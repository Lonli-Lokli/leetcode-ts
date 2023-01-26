import { TreeNode } from "@leetcode/core";

// https://leetcode.com/problems/binary-tree-paths
export function l257BinaryTreePaths(root: TreeNode | null): string[] {
  const result: string[] = [];
  const backtrack = (node: TreeNode | null, paths: number[]): void => {
      if (node === null) return;
      
      paths.push(node.val);
      if (node.left === null && node.right === null) {
          result.push(paths.map(p=> p.toString()).join('->'));
          paths.pop();
          return;
      }
     
      backtrack(node.left, paths);
      backtrack(node.right, paths);
      paths.pop();
  }
  
  backtrack(root, []);
  return result;
}
