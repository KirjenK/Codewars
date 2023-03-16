// https://www.codewars.com/kata/526571aae218b8ee490006f4

var countBits = function (n) {
  const binarySystemNum = n.toString(2)
  let counterOfBits = 0
  let i = 0
  while (i < binarySystemNum.length) {
    if (binarySystemNum[i] === '1') counterOfBits++
    i++
  }
  return counterOfBits
};