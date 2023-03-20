// https://www.codewars.com/kata/51c8e37cee245da6b40000bd/javascript

function solution(input, markers) {
  let result = '';
  let indexOfMarker = 0;
  let startIndex = 0;
  let countOfBrake = 0;
  for (let i = 0; i < input.length; i += 1) {
    const char = input[i];
    if (markers.includes(char)) {
      indexOfMarker = i;
      let str = input.slice(startIndex, indexOfMarker - 1);
      result += str;
      startIndex = indexOfMarker;
      str = '';
    }
    if (char === '\n') {
      if (countOfBrake === 1) {
        indexOfMarker = i;
        const str = input.slice(startIndex, i);
        result += str;
      }
      startIndex = i;
      countOfBrake += 1;
    }
  }
  return result;
}
