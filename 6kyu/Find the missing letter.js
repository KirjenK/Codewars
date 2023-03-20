// https://www.codewars.com/kata/5839edaa6754d6fec10000a2/javascript

function findMissingLetter(arr) {
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i].charCodeAt() - arr[i - 1].charCodeAt() !== 1) {
      const charCodeOfMissing = arr[i - 1].charCodeAt() + 1;
      return String.fromCharCode(charCodeOfMissing);
    }
  }
}
