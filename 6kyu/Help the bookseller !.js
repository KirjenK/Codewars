// https://www.codewars.com/kata/54dc6f5a224c26032800005c/javascript

function stockList(main, arrOfChar) {
  if (main.length === 0) return '';

  const hash = {};
  main.forEach((el) => {
    const firstChar = el[0];
    const indexOfNums = el.match(/[0-9]/).index;
    const nums = Number(el.slice(indexOfNums));

    if (!hash[firstChar]) {
      hash[firstChar] = nums;
    } else {
      hash[firstChar] += nums;
    }
  });

  let finalResult = '';

  arrOfChar.forEach((el) => {
    if (hash[el]) {
      finalResult += ` - (${el} : ${hash[el]})`;
    } else {
      finalResult += ` - (${el} : 0)`;
    }
  });

  if (finalResult[0] === ' ') {
    return finalResult.slice(3);
  }
  return finalResult;
}

const list = ['CBART 20', 'CDXEF 50', 'BKWRK 25', 'BTSQZ 89', 'DRTYM 60'];
const find = ['A', 'B', 'C', 'W'];

// '(A : 0) - (B : 1290) - (C : 515) - (D : 600)';

console.log(stockList(list, find));
