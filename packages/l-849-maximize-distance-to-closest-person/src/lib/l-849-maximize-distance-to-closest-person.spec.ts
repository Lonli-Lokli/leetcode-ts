import { l849MaximizeDistanceToClosestPerson_External, l849MaximizeDistanceToClosestPerson_Submitted } from './l-849-maximize-distance-to-closest-person';

const cases: Array<[number[], number]> = 
[
  [[1, 0, 0, 0, 1, 0, 1], 2],
  [[1, 0, 0, 0], 3],
  [[0, 1], 1],
  [[1, 0, 0, 1], 1],
  [[0,0,1], 2],
  [[0,1,1,1,0,0,1,0,0], 2],
  [[0,0,0,0,1,0,0,0,0,0], 5],
];

describe('849. Maximize Distance to Closest Person', () => {
  it.each(cases)('Submitted: given %p as arguments, returns %p', (args, expectedResult) => {
    expect(l849MaximizeDistanceToClosestPerson_Submitted(args)).toEqual(expectedResult);
  });
});


describe('849. Maximize Distance to Closest Person', () => {
  it.each(cases)('External: given %p as arguments, returns %p', (args, expectedResult) => {
    expect(l849MaximizeDistanceToClosestPerson_External(args)).toEqual(expectedResult);
  });
});
