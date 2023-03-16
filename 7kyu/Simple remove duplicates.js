// https://www.codewars.com/kata/5ba38ba180824a86850000f7

function solve(arr) {
  const result = [];
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    if (!result.includes(arr[i])) {
      result.unshift(arr[i]);
    }
  }
  return result;
}