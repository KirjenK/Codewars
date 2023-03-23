/* eslint-disable no-restricted-syntax */
function validBraces(str) {
  let result = '';
  const start = '({[';
  const end = ')}]';

  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];
    if (start.includes(char)) {
      result += char;
    } else if (end.includes(char)) {
      if (result[result.length - 1] === start[end.indexOf(char)]) {
        result = result.slice(0, result.length - 1);
      } else {
        return false;
      }
    }
  }
  return result.length === 0;
}
