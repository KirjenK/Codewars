// https://www.codewars.com/kata/556deca17c58da83c00002db

function tribonacci(arr, n) {
  if (n === 0) return [];
  if (n === 1) return [arr[0]];
  if (n === 2) return [arr[0], arr[1]];
  for (let i = 3; i < n; i += 1) {
    const sum = arr[i - 1] + arr[i - 2] + arr[i - 3];
    arr.push(sum);
  }
  return arr;
}