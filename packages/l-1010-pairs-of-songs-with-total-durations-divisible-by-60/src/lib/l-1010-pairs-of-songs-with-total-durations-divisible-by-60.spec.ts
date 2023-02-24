import { l1010PairsOfSongsWithTotalDurationsDivisibleBy60_BruteForce, l1010PairsOfSongsWithTotalDurationsDivisibleBy60_Faster } from './l-1010-pairs-of-songs-with-total-durations-divisible-by-60';

describe('1010. Pairs of Songs With Total Durations Divisible by 60', () => {
  it('Case 1', () => {
    expect(l1010PairsOfSongsWithTotalDurationsDivisibleBy60_BruteForce([30,20,150,100,40])).toEqual(
      3
    );
    expect(l1010PairsOfSongsWithTotalDurationsDivisibleBy60_Faster([30,20,150,100,40])).toEqual(
      3
    );
  });
});
