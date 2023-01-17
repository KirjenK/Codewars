// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

// My solution
const someFunc = (str, num) => {
  let result = '';
  for (let i = 0; i < num; i += 1) {
    result += str;
  }
  if (result[0] === result[0].toUpperCase()) {
    return `${result[0] + result.slice(1).toLowerCase()}-`;
  }
  return `${result[0].toUpperCase() + result.slice(1)}-`;
};

// console.log(someFunc('k', 5));

const accum = (str) => {
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    result += someFunc(str[i], i + 1);
  }
  return result.slice(0, -1);
};

// console.log(accum('ZpglnRxqenU'));
