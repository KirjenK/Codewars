// https://www.codewars.com/kata/520b9d2ad5c005041100000f

function pigIt(str) {
  let word = '';
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];
    if (char !== ' ') {
      word += char;
    }
    if (char === ' ' || i === str.length - 1) {
      if (/[A-z]/.test(word)) {
        word = `${word.slice(1) + word.slice(0, 1)}ay`;
        if (str.length - 1 === i) {
          result += `${word}`;
        } else {
          result += `${word} `;
          word = '';
        }
      } else {
        result += word;
      }
    }
  }
  return result;
}