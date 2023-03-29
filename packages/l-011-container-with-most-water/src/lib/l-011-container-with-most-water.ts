export function l011ContainerWithMostWater(height: number[]): number {
  let left = 0;
    let right = height.length - 1;
    let max = 0;
    
    while (left < right) {
        const newMax = (right - left)*Math.min(height[left], height[right]);
        if (newMax > max) {
            max = newMax;
        }  
        if (height[left] > height[right]) {
            right--;
        } else left++;
    }
    
    return max;
}
