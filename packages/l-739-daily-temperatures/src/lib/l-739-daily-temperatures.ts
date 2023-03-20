// https://leetcode.com/problems/daily-temperatures/
export function l739DailyTemperatures_BruteForce(
  temperatures: number[]
): number[] {
  const N = temperatures.length;
  const answer: number[] = Array.from({ length: N }, (_, __) => 0);
  for (let day = 0; day < N; day++) {
    for (let futureDay = day + 1; futureDay < N; futureDay++) {
      if (temperatures[futureDay] > temperatures[day]) {
        answer[day] = futureDay - day;
        break;
      }
    }
  }

  return answer;
}

export function l739DailyTemperatures_Stack(temperatures: number[]): number[] {
  const N = temperatures.length;
  const elements = Array.from({ length: N }, (_, __) => 0);
  const stack: number[] = [];

  for (let i = N - 1; i >= 0; i--) {
    while (
      stack.length !== 0 &&
      temperatures[stack.at(-1)!] <= temperatures[i]
    ) {
      stack.pop();
    }
    elements[i] = stack.length === 0 ? 0 : stack.at(-1)! - i;
    stack.push(i);
  }
  return elements;
}
