// https://www.codewars.com/kata/5340298112fa30e786000688/javascript

function twosDifference(input) {
  const sorted = [...input].sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < sorted.length; i += 1) {
    for (let j = i + 1; j < sorted.length; j += 1) {
      if (sorted[i] + 2 === sorted[j]) {
        result.push([sorted[i], sorted[j]]);
      }
    }
  }
  return result;
}

console.log(twosDifference([0, 3, 1, 4]));
