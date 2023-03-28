// https://www.codewars.com/kata/559536379512a64472000053/javascript

function playPass(str, n) {
  let res = ''
  for (let i = 0; i < str.length; i += 1) {

    if (/[A-z]/.test(str[i])) {
      let newChar = String.fromCharCode(str[i].charCodeAt() + n)
      if (newChar.charCodeAt() > 90) {
        newChar = String.fromCharCode(newChar.charCodeAt() - 26)
      }
      if (i % 2 === 0) {
        res += newChar.toUpperCase()
      } else {
        res += newChar.toLowerCase()
      }
    }
    if (/[0-9]/.test(str[i])) {
      const digit = str[i]
      res += 9 - digit
    }
    if (!/[0-9]/.test(str[i]) && !/[A-z]/.test(str[i])) {
      res += str[i]
    }
  }
  return res.split('').reverse().join('')
}
