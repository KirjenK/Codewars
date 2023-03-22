function solution(num) {
  const hash = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M',
  };
  const keys = Object.keys(hash).map((el) => Number(el));

  const str = String(num);
  let res = '';

  for (let i = 0; i < str.length; i += 1) {
    const clearNum = Number(str.slice(i, i + 1) + '0'.repeat(str.length - i - 1));
    if (clearNum === 0) continue;

    if (hash[clearNum]) {
      res += hash[clearNum];
    } else {
      const checkArr = [...keys];
      checkArr.push(clearNum);
      checkArr.sort((a, b) => a - b);
      const indexOfClearNum = checkArr.indexOf(clearNum);

      if (clearNum.toString()[0] === '4') {
        const prevNum = checkArr[indexOfClearNum - 1];
        const nextNum = checkArr[indexOfClearNum + 1];
        res += hash[prevNum] + hash[nextNum];
      } else if (+clearNum.toString()[0] < 5) {
        const prevNum = checkArr[indexOfClearNum - 1];
        res += hash[prevNum].repeat(clearNum.toString()[0]);
      }
      if (clearNum.toString()[0] === '9') {
        const prevNum = checkArr[indexOfClearNum - 2];
        const nextNum = checkArr[indexOfClearNum + 1];
        res += hash[prevNum] + hash[nextNum];
      } else if (+clearNum.toString()[0] > 5) {
        const prevNum = checkArr[indexOfClearNum - 1];
        const prevPrev = checkArr[indexOfClearNum - 2];
        res += hash[prevNum] + hash[prevPrev].repeat(clearNum.toString()[0] - 5);
      }
    }
  }
  return res;
}
// console.log(solution(21));
// console.log(solution(22));
// console.log(solution(23));
// console.log(solution(24));
// console.log(solution(25));
// console.log(solution(26));
// console.log(solution(27));
// console.log(solution(28));
// console.log(solution(29));
console.log(solution(2008));
