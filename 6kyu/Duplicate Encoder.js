// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

function duplicateEncode(str) {
  let result = '';
  const regex = /[A-z]/;
  const newStr = str.split('').map((el) => (regex.test(el) ? el.toLowerCase() : el)).join('');
  for (let i = 0; i < newStr.length; i += 1) {
    const char = newStr[i];
    if (newStr.indexOf(char) === newStr.lastIndexOf(char)) {
      result += '(';
    } else {
      result += ')';
    }
  }
  return result;
}