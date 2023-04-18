// https://www.codewars.com/kata/54bb6f887e5a80180900046b/javascript

function checkPalindrome(str) {
  if (str === str.split('').reverse().join('')) {
    return str;
  }
}

function longestPalindrome(str) {
  if (str.length === 0) return 0;
  let result = 0;

  for (let i = 0; i < str.length; i += 1) {
    for (let j = i + 1; j < str.length; j += 1) {
      const word = str.slice(i, j + 1);
      if (word[word.length - 1] === word[0]) {
        const isPalWord = checkPalindrome(word);
        if (isPalWord) {
          result > isPalWord.length ? result : result = isPalWord.length;
        }
      }
    }
  }
  return result === 0 ? 1 : result;
}
