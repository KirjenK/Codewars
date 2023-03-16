// https://www.codewars.com/kata/5526fc09a1bbd946250002dc

function findOutlier(integers) {
  let counter = 0
  if (integers[0] % 2 === 0) {
    counter++
  }
  if (integers[1] % 2 === 0) {
    counter++
  }
  if (integers[2] % 2 === 0) {
    counter++
  }
  console.log(counter, 'counter');
  if (counter === 3 || counter === 2) {
    // this is even arr! need to find odd number
    return integers.find((el) => el % 2 !== 0)
  }
  // this is odd arr! need to find even number
  return integers.find((el) => el % 2 == 0)
}