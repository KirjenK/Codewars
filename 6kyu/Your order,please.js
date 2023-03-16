// https://www.codewars.com/kata/55c45be3b2079eccff00010f

function iterable(str) {
  const baza = '123456789';
  const hash = {};

  for (let i = 0; i < str.length; i++) {
    const char = [str[i]];
    if (baza.includes(char)) {
      hash[char] = str;
    }
  }
  return hash;
}

function order(words) {
  const arrOfStr = words.split(' ');
  let obj = {};
  arrOfStr.forEach((el) => {
    const a = iterable(el);
    obj = { ...obj, ...a };
  });
  const values = Object.values(obj).join(' ');
  return values;
}