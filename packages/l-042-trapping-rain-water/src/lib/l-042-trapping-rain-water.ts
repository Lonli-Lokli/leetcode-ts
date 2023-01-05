// https://leetcode.com/problems/trapping-rain-water/
export function l042TrappingRainWater(heights: number[]): number {

  const buildMaxes = (input: number[]) => {
    const map = [];
    let currMax = 0;
    for (let i = 0; i < input.length; i++) {
      map.push(currMax);
      currMax = Math.max(currMax, input[i]);      
    }
    return map;
  }

  const lefts = buildMaxes(heights);
  const rights = buildMaxes([...heights].reverse()).reverse();

  return heights.reduce((acc, curr, idx) => {
    return acc + Math.max(Math.min(rights[idx], lefts[idx]) - curr, 0);
  }, 0);
}


