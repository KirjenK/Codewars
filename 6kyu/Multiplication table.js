// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08

const multiplicationTable = function (size) {
  const generalArr = [];
  const arr = Array.from({ length: size }, (el, i) => i + 1);
  generalArr.push(arr);
  let newArr = arr.map((el, index) => el + index + 1);

  for (let i = 0; i < size - 1; i += 1) {
    generalArr.push(newArr);
    newArr = newArr.map((el, index) => el + index + 1);
  }
  return generalArr;
};