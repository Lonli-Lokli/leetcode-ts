// https://leetcode.com/problems/car-fleet/
export function l853CarFleet(target: number, position: number[], speed: number[]): number {
    const pairs = position
        .map((item, index) => [item, speed[index]])
        .sort((a, b) => a[0] - b[0]);
    const stack: number[] = [];

    pairs.reverse().forEach(pair => {
        const [position, speed] = pair;

        stack.push((target - position) / speed);

        if (stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
            stack.pop();
        }
    })

    return stack.length;
};