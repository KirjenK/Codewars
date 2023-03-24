// https://www.codewars.com/kata/51b6249c4612257ac0000005/javascript

function solution(str) {
  const hash = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };
  let res = 0;
  for (let i = 0; i < str.length; i += 1) {
    const symbol = str[i];
    const nextSymbol = str[i + 1];

    if (hash[symbol] < hash[nextSymbol]) {
      res -= hash[symbol];
    } else {
      res += hash[symbol];
    }
  }
  return res;
}
