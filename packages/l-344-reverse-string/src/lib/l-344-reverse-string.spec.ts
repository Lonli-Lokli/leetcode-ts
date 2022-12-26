import { l344ReverseString } from './l-344-reverse-string';

describe('344. Reverse String', () => {
  it('Example 1:', () => {
    const input = ["h","e","l","l","o"];
    l344ReverseString(input);
    expect(input).toEqual(["o","l","l","e","h"]);
  });
  it('Example 2:', () => {
    const input = ["H","a","n","n","a","h"];
    l344ReverseString(input);
    expect(input).toEqual(["h","a","n","n","a","H"]);
  });
  it('Example 3:', () => {
    const input = ["A"," ","m","a","n",","," ","a"," ","p","l","a","n",","," ","a"," ","c","a","n","a","l",":"," ","P","a","n","a","m","a"];
    l344ReverseString(input);
    expect(input).toEqual(["a","m","a","n","a","P"," ",":","l","a","n","a","c"," ","a"," ",",","n","a","l","p"," ","a"," ",",","n","a","m"," ","A"]);
  });
});
