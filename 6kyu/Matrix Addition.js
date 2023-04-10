// https://www.codewars.com/kata/526233aefd4764272800036f/javascript

function matrixAddition(a, b) {
  const res = [];
  for (let i = 0; i < a.length; i += 1) {
    const newArr = [];
    for (let j = 0; j < a[i].length; j += 1) {
      newArr.push(a[i][j] + b[i][j]);
    }
    res.push(newArr);
  }
  return res;
}
