// https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004/javascript

function highestRank(arr) {
  let counter = 0;
  let result = 0
  let max = -1
  arr
  .sort((a, b) => b - a)
  .forEach((el, i) => {
    if (arr[i] === arr[i + 1]) {
      counter += 1
    } else if (arr[i] !== arr[i + 1] && counter > max) {
      result = arr[i]
      max = counter
      counter = 0
    }
  })
  return result
}
