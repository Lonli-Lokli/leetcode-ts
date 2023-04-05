import { createNode } from '@leetcode/core';
import { l025ReverseNodesInKGroup } from './l-025-reverse-nodes-in-k-group';

describe('25. Reverse Nodes in k-Group', () => {
  it('Case 1', () => {
    expect(l025ReverseNodesInKGroup(createNode([1,2,3,4,5]), 3)?.asString()).toEqual(
      '3,2,1,4,5'
    );
  });
});
