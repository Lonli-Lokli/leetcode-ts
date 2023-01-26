export function l009PalindromeNumber_Initial(x: number): boolean {
  return x.toString().split('').reverse().join('') ===  x.toString();
}
export function l009PalindromeNumber_WithoutString(x: number): boolean {
  const reverse = (x: number): number => {
    let num = 0;
    while (x > 0) {
        num = num * 10 + (x % 10);
        x = Math.floor(x / 10);
    }
    return num;
  }

  return x === reverse(x);
}
