// https://www.codewars.com/kata/586d6cefbcc21eed7a001155/javascript

function longestRepetition(s) {
  if (!/[A-z]/.test(s)) {
    return ['', 0];
  }
  const finalResult = [];
  let check = '';
  let checkForOnlyOneChar = '';
  for (let i = 0; i < s.length; i += 1) {
    const char = s[i];
    const nextChar = s[i + 1];
    const prevChar = s[i - 1];
    if (char === nextChar) {
      check += char;
    }
    if (char !== nextChar && char === prevChar) {
      check += char;
      finalResult.push(check);
      check = '';
    }
    if (char !== nextChar && char !== prevChar) {
      checkForOnlyOneChar += char;
      finalResult.push(checkForOnlyOneChar);
      checkForOnlyOneChar = '';
    }
  }
  let maxLengthWord = finalResult[0];

  finalResult.forEach((el) => {
    if (el.length > maxLengthWord.length) maxLengthWord = el;
  });

  return [maxLengthWord[0], maxLengthWord.length];
}

console.log(longestRepetition('ba')); //
