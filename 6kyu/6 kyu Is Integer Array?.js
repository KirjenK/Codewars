// https://www.codewars.com/kata/52a112d9488f506ae7000b95/javascript

function isIntArray(arr) {
  if (!Array.isArray(arr)) return false;
  return arr.every((el) => !Number.isNaN(el) && Number.isInteger(el));
}
