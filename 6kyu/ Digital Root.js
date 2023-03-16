// https://www.codewars.com/kata/541c8630095125aba6000c00

function digitalRoot(n) {
  const sum = n
    .toString()
    .split('')
    .map((el) => Number(el))
    .reduce((sum, el) => sum + el, 0)
  console.log(sum, 'sum');
  if (sum.toString().length > 1) {
    const stringSum = sum.toString()
    let result = 0
    let index
    for (let i = 0; i < stringSum.length; i++) {
      result += Number(stringSum[i])
    }
    const lastNumberOfResult = Number(result.toString()[result.toString().length - 1])

    if (result > 10) {
      return Number(sum.toString()[0])
    }
   
    if (lastNumberOfResult === 0) {
      return Number(result.toString()[0])
    } else {
      return [...sum.toString()]
        .map((el) => Number(el))
        .reduce((sum, el) => sum + el, 0)
    }
  }
  return sum
}