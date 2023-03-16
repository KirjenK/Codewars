// https://www.codewars.com/kata/51edd51599a189fe7f000015

const solution = function (arr1, arr2) {
  const newArr = [];
  arr1.forEach((el, i) => {
    if (arr2[i] > el) {
      const num = (arr2[i] - el) ** 2;
      newArr.push(num);
    } else if (el >= arr2[i]) {
      const num = (el - arr2[i]) ** 2;
      newArr.push(num);
    }
  });
  return newArr.reduce((sum, el) => sum + el, 0) / newArr.length;
};