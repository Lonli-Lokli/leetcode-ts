export function l041FirstMissingPositive(nums: number[]): number {
  const N = nums.length;
    
    const swap = (pos1: number, pos2: number): void => {
        const temp = nums[pos1];
        nums[pos1] = nums[pos2];
        nums[pos2] = temp;
    }
    
    for(let i=0; i<N; i++) {
        while(nums[i] >=1 && nums[i] < N && nums[i]!==nums[nums[i]-1]) {
            swap(i, nums[i]-1)
        }
    }
    for(let i=0; i<N; i++) {
        if(nums[i] !== i+1) return i+1
    }
    return N+1;
}
