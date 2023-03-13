import {
  l271EncodeAndDecodeStrings_decode,
  l271EncodeAndDecodeStrings_encode,
} from './l-271-encode-and-decode-strings';

describe('271. Encode and Decode Strings', () => {
  it('Case 1', () => {
    expect(
      l271EncodeAndDecodeStrings_decode(
        l271EncodeAndDecodeStrings_encode(['Hello', 'World'])
      )
    ).toEqual(['Hello', 'World']);
  });
});
