// https://www.codewars.com/kata/55c6126177c9441a570000cc/javascript

function getSpecNum(num) {
  const strNum = num.toString()
  let result = 0;
  for (let i = 0; i < strNum.length; i += 1) {
    const digit = Number(strNum[i])
    result += digit
  }
  return result
}

function orderWeight(str) {
  const arrOfNums = str.split(' ').map((el) => Number(el))
  const arrOfSpecNum = []
  arrOfNums.forEach((el) => {
    const specNum = getSpecNum(el)
    const hash = {}
    hash.newNum = specNum
    hash.oldNum = el
    arrOfSpecNum.push(hash)
  })

  const sorted = arrOfSpecNum.sort((a, b) => {
    if (a.newNum === b.newNum) {
      return a.oldNum.toString().localeCompare(b.oldNum.toString())
    } else {
      return a.newNum - b.newNum
    }
  });
  const result = sorted.map((el) => el.oldNum).join(' ')
  if (result === '0') return ''
  return result
}