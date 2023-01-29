export function l387FirstUniqueCharacterInAString(s: string): number {
  const symbol2Count = new Map<string, { count: number; position: number }>();
  for (let i = 0; i < s.length; i++) {
    const item =
      symbol2Count.get(s[i]) ??
      symbol2Count.set(s[i], { count: 0, position: i }).get(s[i]);
    item!.count++;
  }

  for (const [_, info] of symbol2Count.entries()) {
    if (info.count === 1) return info.position;
  }

  return -1;
}
