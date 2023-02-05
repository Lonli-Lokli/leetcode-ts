// https://leetcode.com/problems/regular-expression-matching

// time limit
export function l010RegularExpressionMatching_Recursive(s: string, p: string): boolean {
  if (s === p) return true;

  const firstMatch = s.length > 0 && (p[0] === s[0] || p[0] === '.');
  if (p.length >= 2 && p[1] === '*') {
    return l010RegularExpressionMatching_Recursive(s, p.substring(2)) || (firstMatch && l010RegularExpressionMatching_Recursive(s.substring(1), p));
  } else {
    return firstMatch && l010RegularExpressionMatching_Recursive(s.substring(1), p.substring(1))
  }
}

export function l010RegularExpressionMatching_DynamicProgramming(s: string, p: string): boolean {
  const cache = new Map<string, boolean>();
  const asId = (i: number, j: number) => i.toString().padEnd(3) + '-' + j.toString().padEnd(3);
  const backtrack = (i: number, j: number): boolean => {
    const id = asId(i, j);
    if (cache.has(id)) return cache.get(id)!;
    if (i >= s.length && j >= p.length) return true;
    if (j >= p.length) return false;

    const firstMatch = i < s.length &&  (s[i] === p[j] || p[j] == '.');
    if (j+1 < p.length && p[j+1] === '*') {
      cache.set(id, backtrack(i, j+2) || (firstMatch && backtrack(i+1, j)));
      return cache.get(id)!;
    }

    if (firstMatch) {
      cache.set(id, backtrack(i+1, j+1));
      return cache.get(id)!;
    }
    return false;
  }

  return backtrack(0, 0);
  
}
