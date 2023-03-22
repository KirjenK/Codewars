// https://www.codewars.com/kata/5aa69e68ba1bb5ecdf000557/javascript

function longestSequence(num) {
  const maxSqrt = +Math.sqrt(num).toFixed();
  let result = 0;
  let finalResult = [];
  let checkNum = 1;
  for (let i = 1; i < maxSqrt; i += 1) {
    result += i ** 2;
    finalResult.push(i);

    if (result === num) {
      return finalResult;
    }
    if (result > num) {
      finalResult = [];
      result = 0;
      checkNum += 1;
      i = checkNum;
    }
  }
  const sum = finalResult
    .map((el) => el ** 2)
    .reduce((count, el) => count + el, 0);

  return sum === num ? finalResult : [];
}

console.log(longestSequence(595));
