/* eslint-disable no-prototype-builtins */
export function l167TwoSumIiInputArrayIsSorted_Slow(
  numbers: number[],
  target: number
): number[] {
  for (let i = 0; i < numbers.length; i++) {
    let j = i + 1;
    while (j < numbers.length) {
      const toCheck = numbers[i] + numbers[j];
      if (toCheck === target) return [i + 1, j + 1];
      if (toCheck > target) break;
      j++;
    }
  }

  throw new Error('Should not happen');
}

export function l167TwoSumIiInputArrayIsSorted_Faster(
  numbers: number[],
  target: number
): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < numbers.length; i++) {
    if (map.has(target - numbers[i])) {
      return [map.get(target - numbers[i])! + 1, i + 1];
    } else {
      map.set(numbers[i], i);
    }
  }

  throw new Error('Should not happen');
}
