// https://www.codewars.com/kata/550554fd08b86f84fe000a58/javascript

function inArray(arr1, arr2) {
  const generalStr = arr2.join(' ');
  const result = [];

  for (let i = 0; i < arr1.length; i += 1) {
    const word = arr1[i];
    if (generalStr.includes(word)) {
      result.push(word);
    }
  }
  return result.sort();
}
