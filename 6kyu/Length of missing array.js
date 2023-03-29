// https://www.codewars.com/kata/57b6f5aadb5b3d0ae3000611/javascript

function getLengthOfMissingArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return 0;
  }
  const sorted = arr
    .filter((el) => Array.isArray(el))
    .sort((a, b) => a.length - b.length);

  if (sorted.length === 1 || sorted[0].length === 0) return 0;

  for (let i = 0; i < sorted.length; i += 1) {
    if (sorted[i].length + 1 !== sorted[i + 1].length) {
      return sorted[i].length + 1;
    }
  }
  return 0;
}
