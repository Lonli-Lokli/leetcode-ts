// https://leetcode.com/problems/valid-parentheses/

const brackets: Record<string, string> = {
  '(': ')',
  '{': '}',
  '[': ']' 
}

export function l020ValidParentheses(s: string): boolean {
  const stack: string[] = [];
  for (const ch of s) {
    if (brackets[ch])   { // open bracket arrive, push to stack      
      stack.push(ch);
    } else {
      if (brackets[stack.pop() ?? ''] !== ch) {
        return false;
      }
    }
  }
  return stack.pop() === undefined;
}
