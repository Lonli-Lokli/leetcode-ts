// https://leetcode.com/problems/maximize-distance-to-closest-person/
export function l849MaximizeDistanceToClosestPerson_Submitted(seats: number[]): number {
  let maxDistance = 0;
  let count = 0;
  let isFirst = true;
  for (let i = 0; i < seats.length; i++) {
    if (seats[i] === 0) {
      count++;
    } else {
      if (isFirst) {
        isFirst = false;
        maxDistance = count;
      } else {
        maxDistance = Math.max(Math.floor((count + 1) / 2), maxDistance);
      }
      
      count = 0;
    }
  }

  return Math.max(count, maxDistance);
}

// clever 
export function l849MaximizeDistanceToClosestPerson_External(seats: number[]): number {
  const zeros = seats.join('').split('1');
  return Math.max(
    zeros.shift()?.length ?? 0,
    zeros.pop()?.length ?? 0,
    ...zeros.map(i => i.length > 0 ? Math.floor((i.length + 1) / 2) : 0)
  );
}
