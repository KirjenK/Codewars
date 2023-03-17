// https://www.codewars.com/kata/5254ca2719453dcc0b00027d

function swap(str) {
  console.log(str, 'str');
  const arr = str.split('');
  const result = [];
  for (let i = 0; i < arr.length - 1; i += 1) {
    [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
    const word = arr.join('');
    result.push(word);
  }
  return result;
}

function permutations(str) {
  if (str.length === 1) return str.split('');
  let result = [];
  const doubleStr = str + str;
  let index = str.length;
  for (let i = 0; i < doubleStr.length; i += 1) {
    const word = doubleStr.slice(i, index);
    if (!result.includes(word) && word.length === str.length) {
      result.push(word);
    }
    if (word.length === str.length) {
      const data = swap(word);
      result = [...result, data];
    }

    index += 1;
  }

  result = result.flat();
  const set = new Set(result);
  const arr = Array.from(set);
  arr.sort();
  let oneMoreResult = [];
  arr.forEach((el) => {
    const data = swap(el);
    oneMoreResult = [...oneMoreResult, data];
  });

  oneMoreResult = oneMoreResult.flat();
  const oneMoreSet = new Set(oneMoreResult);
  const oneMoreArr = Array.from(oneMoreSet);
  oneMoreArr.sort();
  return oneMoreArr;
}
