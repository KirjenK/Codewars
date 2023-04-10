// https://www.codewars.com/kata/58223370aef9fc03fd000071/javascript

function dashatize(n) {
  if (!Number.isInteger(n)) {
    return 'NaN';
  }

  if (n < 0) {
    n = Math.abs(n);
  }
  const strNum = String(n);
  let res = '';

  for (let i = 0; i < strNum.length; i += 1) {
    const digit = Number(strNum[i]);
    const prevDigit = Number(strNum[i - 1]);
    if (digit % 2 === 0) {
      if (prevDigit % 2 !== 0 && !Number.isNaN(prevDigit)) {
        res += `-${digit}`;
      } else {
        res += digit;
      }
    } else if (digit % 2 !== 0) {
      if (Number.isNaN(prevDigit)) {
        res += `${digit}`;
      } else {
        res += `-${digit}`;
      }
    }
  }
  return res;
}

console.log(dashatize(-28369));
