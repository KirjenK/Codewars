// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c

function maxSequence(arr) {
  const dontHavePositive = arr.every((el) => el <= 0);
  if (dontHavePositive) return 0;

  const allPositives = arr.every((el) => el >= 0);
  if (allPositives) {
    return arr.reduce((sum, el) => sum + el, 0);
  }
  let currentMax = 0;
  let max = 0;
  arr.forEach((el) => {
    if (currentMax < 0) {
      currentMax = 0;
    } else {
      currentMax += el;
      if (currentMax < 0) {
        currentMax = 0;
      }
    }
    if (currentMax > max) max = currentMax;
  });
  return max;
}