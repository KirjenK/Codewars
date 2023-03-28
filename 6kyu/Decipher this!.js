// https://www.codewars.com/kata/581e014b55f2c52bb00000f8/javascript

function changeWord(str) {
  const nums = str.match(/[0-9]/g).join('')
  const charFromCharCode = String.fromCharCode(nums)
  
  const strWithoutNums = str.split('').filter((el) => /[A-z]/.test(el)).join('')

  let result = strWithoutNums.slice(-1) + strWithoutNums.slice(1, -1) + strWithoutNums.slice(0, 1)
  if (strWithoutNums.length === 1) {
    result = charFromCharCode + strWithoutNums
    return result
  }
  return charFromCharCode + result
}

function decipherThis(str) {
  const generalArr = str.split(' ')
  let result = ''
  generalArr.forEach((el) => {
    const word = changeWord(el)
    result += `${word} `
  })
  return result.trim()
}