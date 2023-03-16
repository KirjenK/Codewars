// https://www.codewars.com/kata/526989a41034285187000de4

function ipsBetween(start, end) {
  const startArr = start.split('.');
  const endArr = end.split('.');
  const fourth = Number(endArr[3]) - Number(startArr[3]);
  const third = (Number(endArr[2]) - Number(startArr[2])) * 256;
  const second = (Number(endArr[1]) - Number(startArr[1])) * 256 * 256;
  const first = (Number(endArr[0]) - Number(startArr[0])) * 256 * 256 * 256;

  return first + second + third + fourth;
}