// https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9/javascript

function upArray(arr) {
  const isHaveMinusIntOrBigInt = arr.some((el) => el < 0 || el > 9);

  if (isHaveMinusIntOrBigInt || arr.length === 0) {
    return null;
  }

  const isHaveOnlyNine = arr.every((el) => el === 9);

  if (isHaveOnlyNine) {
    const res = Array.from({ length: arr.length }, (el) => el = 0);
    res.unshift(1);
    return res;
  }

  let firstHalf;

  let num = '';
  if (arr.at(-1) === 9) {
    for (let i = arr.length - 1; i >= 0; i -= 1) {
      if (arr[i] !== 9) {
        num = arr[i] + num;
        firstHalf = arr.slice(0, -num.length);

        break;
      }
      num += arr[i];
    }

    num = +num + 1;
    num = String(num).split('').map((el) => Number(el));

    if (arr[0] === 9 && arr.length <= num.length) {
      return num;
    }
    return [...firstHalf, ...num];
  }

  return [...arr.slice(0, -1), arr.at(-1) + 1];
}
