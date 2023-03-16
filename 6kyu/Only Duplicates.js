// https://www.codewars.com/kata/5a1dc4baffe75f270200006b

function onlyDuplicates(str) {
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];
    if (str.indexOf(char) !== str.lastIndexOf(char)) {
      result += char;
    }
  }
  return result;
}