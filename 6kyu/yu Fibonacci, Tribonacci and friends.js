// https://www.codewars.com/kata/556e0fccc392c527f20000c5

function Xbonacci(arr, n) {
  const { length } = arr;
  for (let i = 0; i < n; i += 1) {
    const newArr = arr.slice(i, arr.length);
    const sum = newArr.reduce((sum, el) => sum + el, 0);
    arr.push(sum);
  }
  return arr.slice(0, arr.length - length);
}