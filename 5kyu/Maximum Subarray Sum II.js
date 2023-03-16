// https://www.codewars.com/kata/56e3cbb5a28956899400073f

function findSubarrMaxSum(arr) {
  const isHaveOnlyNegatives = arr.every((el) => el < 0);
  if (isHaveOnlyNegatives) return [[], 0];

  const isHaveOnlyPositives = arr.every((el) => el > 0);
  if (isHaveOnlyPositives) {
    const sum = arr.reduce((count, el) => count + el, 0);
    return [arr, sum];
  }

  let currentMax = 0;
  let currentResult = [];
  let max = 0;
  let result = [];

  arr.forEach((el) => {
    if (currentMax >= 0) {
      currentMax += el;
      currentResult.push(el);

      if (currentMax < 0) {
        currentMax = 0;
        currentResult = [];
      }
    }
    if (max < currentMax) {
      max = currentMax;
      result = Array.from(currentResult);
    }
  });
  const sum1 = result.reduce((sum, el) => sum + el, 0);
  const sum2 = currentResult.reduce((sum, el) => sum + el, 0);

  // console.log(result);
  // console.log(currentResult);

  const isSimilar = result.every((el, i) => result.indexOf(el) === currentResult.indexOf(el));

  if (isSimilar) {
    return [result, max];
  }

  if (sum1 === sum2) {
    return [[result, currentResult], max];
  }
  return [result, max];
}