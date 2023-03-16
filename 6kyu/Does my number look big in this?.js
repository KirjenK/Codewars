// https://www.codewars.com/kata/5287e858c6b5a9678200083c

function narcissistic(value) {
  const arrOfNums = value.toString().split('').map((el) => Number(el));
  const degree = arrOfNums.length;
  
  const result = arrOfNums.reduce((sum, el) => {
    sum += el ** degree;
    return sum;
  }, 0);

  return result === value;
}