// https://leetcode.com/problems/fizz-buzz/
export function l412FizzBuzz(n: number): string[] {
  return Array.from({ length: n }, (_, k) => k + 1).reduce((acc, curr) => {
    acc.push(
      curr % 3 === 0
        ? curr % 5 === 0
          ? 'FizzBuzz'
          : 'Fizz'
        : curr % 5 === 0
        ? 'Buzz'
        : curr.toString()
    );
    return acc;
  }, [] as string[]);
}
