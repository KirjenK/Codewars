// https://www.codewars.com/kata/5418a1dd6d8216e18a0012b2/javascript

function validate(n) {
  const str = String(n).split('').map((el) => Number(el))

  const result = []
  if (str.length % 2 === 0) {
    for (let i = 0; i < str.length; i += 1) {
      if (i % 2 === 0) {
        const sum = str[i] + str[i]
        if (sum > 9) {
          result.push(sum / 2)
        } else {
          result.push(sum)
        }
      } else if (i % 2 !== 0) {
        result.push(str[i])
      }
    }
  } else if (str.length % 2 !== 0) {
    for (let i = str.length - 1; i >= 0; i -= 1) {
      if (i % 2 !== 0) {
        const sum = str[i] + str[i]
        if (sum > 9) {
          result.unshift(sum / 2)
        } else {
          result.unshift(sum)
        }
      } else {
        result.unshift(str[i])
      }
    }
  }
  return Number.isInteger(result.reduce((sum, el) => sum + el, 0) / 10)
}