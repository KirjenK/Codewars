// https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991/javascript

function revrot(str, sz) {
  if (sz <= 0) return '';
  let sum = 0;
  let result = '';
  for (let i = 0; i < str.length; i += sz) {
    let word = str.slice(i, sz + i);
    if (word.length === sz) {
      let j = 0;
      while (j < word.length) {
        const digit = word[j];
        sum += digit ** 3;
        j += 1;
      }
      if (sum % 2 !== 0) {
        word = word.slice(1) + word.slice(0, 1);
        result += word;
      } else {
        word = word.split('').reverse().join('');
        result += word;
      }
      sum = 0;
    }
  }
  return result;
}
