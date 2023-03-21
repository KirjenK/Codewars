// https://www.codewars.com/kata/550498447451fbbd7600041c/javascript

function comp(arr1, arr2) {
  if (Array.isArray(arr1) && Array.isArray(arr2)) {
    if (arr1.length === 0 || arr2.length === 0) return true;
  } else {
    return false;
  }
  const increaseToSquare = arr1
    .map((el) => el ** 2);

  for (let i = 0; i < arr2.length; i += 1) {
    const digits = arr2[i];
    if (increaseToSquare.includes(digits)) {
      const indexOfDigits = increaseToSquare.indexOf(digits);
      increaseToSquare.splice(indexOfDigits, 1);
    }
  }
  return increaseToSquare.length === 0;
}
