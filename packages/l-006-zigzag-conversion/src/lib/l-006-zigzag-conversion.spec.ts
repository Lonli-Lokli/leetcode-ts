import { l006ZigzagConversion } from './l-006-zigzag-conversion';

describe('6. Zigzag Conversion', () => {
  it('Case 1', () => {
    expect(l006ZigzagConversion('PAYPALISHIRING', 3)).toEqual('PAHNAPLSIIGYIR');
  });
  it('Case 2', () => {
    expect(l006ZigzagConversion('PAYPALISHIRING', 4)).toEqual('PINALSIGYAHRPI');
  });
});
