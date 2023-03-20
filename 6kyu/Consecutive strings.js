// https://www.codewars.com/kata/56a5d994ac971f1ac500003e/javascript

function longestConsec(arr, k) {
  if (arr.length === 0) return '';
  if (k <= 0) return '';
  if (arr.length < k) return '';

  let lastIndex = k;
  let result = arr[0];

  for (let i = 0; i < arr.length; i += 1) {
    const words = arr.slice(i, lastIndex).reduce((generalWord, el) => generalWord + el, '');
    if (words.length > result.length) {
      result = words;
    }
    lastIndex += 1;
  }
  return result;
}
