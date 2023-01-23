import { collectGraphNodes, createGraph, GraphNode } from '@leetcode/core';
import { l133CloneGraph } from './l-133-clone-graph';

const cases: () => Array<[GraphNode]> = () => [
  [
    createGraph([
      [2, 4],
      [1, 3],
      [2, 4],
      [1, 3],
    ]),
  ],
];

describe('133. Clone Graph', () => {
  it.each(cases())('Initial: procees with %p as input', (node) => {
    const result = collectGraphNodes(l133CloneGraph(node)).map(_ => _.val);
    const exp = collectGraphNodes(node).map(_ => _.val)
    expect(result).toEqual(exp);
  });
});
