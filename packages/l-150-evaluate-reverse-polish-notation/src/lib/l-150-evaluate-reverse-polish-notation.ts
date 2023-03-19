export function l150EvaluateReversePolishNotation(tokens: string[]): number {
  const operations: { [key: string]: (a: number, b: number) => number } = {
     '+': (a: number, b: number) => a + b,
     '-': (a: number, b: number) => a - b,
     '*': (a: number, b: number) => a * b,
     '/': (a: number, b: number) => Math.trunc(a/b),
   };
   const stack: number[] = [];
   for (const token of tokens) {
     const op = operations[token];
     if (op) {
       const right = stack.pop()!;
       const left = stack.pop()!;
       stack.push(op(left, right));
     } else {
       stack.push(+token);
     }
   }
   return stack.pop()!;
 };