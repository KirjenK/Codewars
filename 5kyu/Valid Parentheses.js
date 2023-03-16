// https://www.codewars.com/kata/52774a314c2333f0a7000688

function validParentheses(str) {
  if (str[0] === ')') return false;
  if (str.length % 2 !== 0) return false;
  let i = 0;
  let counter = 0;
  while (i < str.length) {
    const brace = str[i];
    if (brace === '(') counter++;
    if (brace === ')') counter--;
    if (counter === -1) return false;
    i++;
  }
  return counter === 0;
}