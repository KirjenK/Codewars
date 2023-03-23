// https://www.codewars.com/kata/5626b561280a42ecc50000d1

function checkSideResult(arr) {
  const str = arr[0];
  const num = arr[1];
  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];
    if (char.charCodeAt() === num) {
      return true;
    }
  }
  return false;
}

function bingo(ticket, win) {
  let result = 0;
  for (let i = 0; i < ticket.length; i += 1) {
    const score = checkSideResult(ticket[i]);
    result += score;
  }
  return result >= win ? 'Winner!' : 'Loser!';
}

console.log(bingo([
  ['LFC', 67],
  ['JALDHMTU', 85],
  ['JTNXQQ', 75],
  ['CA', 67],
  ['TJMRGHP', 72],
], 2));
