// https://www.codewars.com/kata/59f08f89a5e129c543000069/javascript

function createNewWord(str) {
  let word = '';
  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];
    const nextChar = str[i + 1];
    if (char === nextChar) continue;
    word += char;
  }
  return word;
}

function dup(arr) {
  return arr.map((el) => createNewWord(el));
}
