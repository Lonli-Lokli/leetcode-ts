import { l067AddBinary } from './l-067-add-binary';

describe('67. Add Binary', () => {
  it('Case 1', () => {
    expect(l067AddBinary('11', '1')).toEqual('100');
  });
  it('Case 2', () => {
    expect(l067AddBinary('1010', '1011')).toEqual('10101');
  });
});
