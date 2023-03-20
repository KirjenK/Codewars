// https://www.codewars.com/kata/52b757663a95b11b3d00062d

function toWeirdCase(str) {
  let result = '';
  let checkIndex = 0;
  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];
    if (checkIndex % 2 === 0) {
      result += char.toUpperCase();
    } else {
      result += char.toLowerCase();
    }
    if (char === ' ') {
      checkIndex = 1;
    }
    checkIndex += 1;
  }
  return result;
}
