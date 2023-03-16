// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

function persistence(num) {
  let arrOfNums = num.toString().split('').map((el) => Number(el));
  let counter = 0;
  if (arrOfNums.length === 1) {
    return counter;
  }

  while (arrOfNums.length > 1) {
    counter += 1;
    const newData = arrOfNums.reduce((sum, el) => sum * el, 1);
    arrOfNums = newData.toString().split('').map((el) => Number(el));
  }
  return counter;
}