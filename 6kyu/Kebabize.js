// https://www.codewars.com/kata/57f8ff867a28db569e000c4a/javascript

function kebabize(str) {
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];
    if (char === char.toUpperCase() && !/[0-9]/.test(char)) {
      result += '-';
      result += char.toLowerCase();
    } else if (/[A-z]/.test(char)) {
      result += char;
    }
  }
  return result[0] === '-' ? result.slice(1) : result;
}