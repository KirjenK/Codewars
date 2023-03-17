// https://www.codewars.com/kata/55983863da40caa2c900004e

function nextBigger(n) {
  const arr = n.toString().split('');
  let leftSide = '';
  let rightSide = '';
  let pivot = '';
  for (let i = arr.length; i >= 0; i -= 1) {
    const digit = arr[i];
    if (digit > arr[i - 1]) {
      leftSide = n.toString().slice(0, i - 1);
      rightSide = n.toString().slice(i);
      pivot = arr[i - 1];
      break;
    }
  }
  let maxNumberAfterPivot = rightSide[0];

  for (let i = 0; i < rightSide.length; i += 1) {
    const digit = rightSide[i];
    if (digit > pivot && digit <= maxNumberAfterPivot) {
      maxNumberAfterPivot = digit;
    }
  }
  const indexOfMaxNum = rightSide.indexOf(maxNumberAfterPivot);

  rightSide = rightSide.slice(0, indexOfMaxNum) + rightSide.slice(indexOfMaxNum + 1) + pivot;
  rightSide = rightSide.split('').sort().join('');

  const result = Number(leftSide + maxNumberAfterPivot + rightSide);
  return result > n ? result : -1;
}
