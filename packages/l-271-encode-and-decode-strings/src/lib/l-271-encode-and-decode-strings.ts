export function l271EncodeAndDecodeStrings_encode(strs: string[]): string {
  const strToBytes = (s: string) => {
    const res = [];
    for (const c of s) {
      res.push(c.charCodeAt(0).toString());
    }

    return res.join(',');
  };
  return strs.map(strToBytes).join('!');
}

export function l271EncodeAndDecodeStrings_decode(s: string): string[] {
  const bytesToStr = (str: string) =>
    str
      .split(',')
      .map((c) => (+c === 0 ? '' : String.fromCharCode(+c)))
      .join('');
  return s.split('!').map(bytesToStr);
}
