function solution(str) {
  if (str === '') return '';

  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];
    if (char === char.toUpperCase()) {
      result += ` ${char}`;
    } else {
      result += char;
    }
  }
  return result;
}

console.log(solution('camelCasing'));
console.log(solution('identifier'));
// console.log(solution(''));
