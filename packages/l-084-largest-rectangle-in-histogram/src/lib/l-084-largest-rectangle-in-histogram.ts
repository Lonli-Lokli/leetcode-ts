// https://leetcode.com/problems/largest-rectangle-in-histogram/
// time limit exceeded
export function l084LargestRectangleInHistogram_Slow(
  heights: number[]
): number {
  let max = 0;

  for (let i = 0; i < heights.length; i++) {
    let minHeight = Number.MAX_SAFE_INTEGER;
    for (let j = i; j < heights.length; j++) {
      minHeight = Math.min(minHeight, heights[j]);
      max = Math.max(max, minHeight * (j - i + 1));
    }
  }

  return max;
}

// time limit exceeded
export function l084LargestRectangleInHistogram_DivideAndConquer(
  heights: number[]
): number {
  const calculateArea = (
    start: number,
    end: number
  ): number => {
    if (start > end) return 0;
    let minIndex = start;
    for (let i = start; i <= end; i++) {
      if (heights[minIndex] > heights[i]) {
        minIndex = i;
      }
    }

    return Math.max(
      heights[minIndex] * (end - start + 1),
      calculateArea(start, minIndex - 1),
      calculateArea(minIndex + 1, end)
    );
  };

  return calculateArea(0, heights.length - 1);
}

export function l084LargestRectangleInHistogram_Stack(
  heights: number[]
): number {
  let max = 0;
  const stack: Array<number[]> = [];
  heights.forEach((h, i) => {
    let start = i;
    while (stack.length > 0 && stack[stack.length - 1][0] > h) {
      const [height, index] = stack.pop()!;
      max = Math.max(max, height * (i - index));
      start = index;
    }

    stack.push([h, start]);
  });

  return stack.reduce(
    (acc, [h, i]) => Math.max(acc, h * (heights.length - i)),
    max
  );
}

export function l084LargestRectangleInHistogram_Stack_WithBounds(
  heights: number[]
): number {
  let max = 0;
  const stack: Array<number[]> = [];
  [0, ...heights, 0].forEach((h, i) => {
    while (stack.length > 0 && stack[stack.length - 1][0] > h) {
      const right = i;
      const height = stack.pop()![0];
      const left = stack[stack.length - 1][1];
      max = Math.max(max, (right - left - 1) * height);
    }
    stack.push([h, i]);
  });

  return max;
}
