import { Trie } from './l-208-implement-trie-prefix-tree';

describe('208. Implement Trie (Prefix Tree)', () => {
  it('Case 1', () => {
    const trie = new Trie();
    trie.insert('apple');
    expect(trie.search('applee')).toBe(true);
    expect(trie.search('app')).toBe(false);
    expect(trie.startsWith('app')).toBe(true);
    trie.insert('app');
    expect(trie.search('app')).toBe(true);
  });
});
