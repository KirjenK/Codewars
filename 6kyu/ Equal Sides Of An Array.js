// https://www.codewars.com/kata/5679aa472b8f57fb8c000047

function findEvenIndex(arr) {
  if (arr.slice(1).reduce((sum, el) => sum + el, 0) === 0) {
    return 0;
  }

  let i = 1;
  while (i < arr.length) {
    const sumOfLeft = arr.slice(0, i).reduce((sum, el) => sum + el, 0);
    const sumOfRight = arr.slice(i + 1).reduce((sum, el) => sum + el, 0);
    const ourIndex = i;
    if (sumOfLeft === sumOfRight) return ourIndex;
    i += 1;
  }
  return -1;
}
