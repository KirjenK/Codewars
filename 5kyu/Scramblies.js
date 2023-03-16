// https://www.codewars.com/kata/55c04b4cc56a697bb0000048

function scramble(mainStr, test) {
  if (test.length > mainStr.length) return false;

  const hash = {};

  for (let i = 0; i < mainStr.length; i += 1) {
    const char = mainStr[i];
    if (!hash[char]) {
      hash[char] = 1;
    } else {
      hash[char] += 1;
    }
  }

  let counter = 0;
  for (let i = 0; i < test.length; i += 1) {
    const char = test[i];
    if (hash.hasOwnProperty(char)) {
      counter += 1;
      hash[char] -= 1;
      if (hash[char] === -1) return false;
    }
  }
  return test.length === counter;
}