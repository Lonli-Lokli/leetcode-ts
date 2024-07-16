// https://leetcode.com/problems/integer-to-roman/
export function l012IntegerToRoman(num: number): string {
  const matrix = [
    { value: 1, symbol: 'I', consecutively: 3 },
    { value: 5, symbol: 'V', consecutively: 1 },
    { value: 10, symbol: 'X', consecutively: 3 },
    { value: 50, symbol: 'L', consecutively: 1 },
    { value: 100, symbol: 'C', consecutively: 3 },
    { value: 500, symbol: 'D', consecutively: 1 },
    { value: 1000, symbol: 'M', consecutively: 3 },
  ];
  const substractiveForms = [
    { value: 4, symbol: 'IV' },
    { value: 9, symbol: 'IX' },
    { value: 40, symbol: 'XL' },
    { value: 90, symbol: 'XC' },
    { value: 400, symbol: 'CD' },
    { value: 900, symbol: 'CM' },
  ]
  const numToSum = (input: number): number[] =>
    input
      .toString()
      .split('')
      .reverse()
      .map((ch, idx) => Number(ch) * Math.pow(10, idx))
      .reverse();

  const numberToRoman = (input: number): string => {
    if (input === 0) return '';
    // not 4 or 9
    if (input.toString()[0] !== '4' && input.toString()[0] !== '9') {
      const mapped = matrix.findLast((m) => input - m.value >= 0)!;
      if (Math.floor(input / mapped.value) > 0 && Math.floor(input / mapped.value) <= 3) // do not return if we have more than 3 here
        return mapped.symbol + numberToRoman(input - mapped.value);
    }
    const negated = substractiveForms.find(n => n.value === input);
    return negated?.symbol ?? 'U';
  };

  return numToSum(num).map(numberToRoman).join('');
}
