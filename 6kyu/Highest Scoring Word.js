//https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/solutions/javascript

// My solution
const collection = new Map();

collection.set('a', 1);
collection.set('b', 2);
collection.set('c', 3);
collection.set('d', 4);
collection.set('e', 5);
collection.set('f', 6);
collection.set('g', 7);
collection.set('h', 8);
collection.set('i', 9);
collection.set('j', 10);
collection.set('k', 11);
collection.set('l', 12);
collection.set('m', 13);
collection.set('n', 14);
collection.set('o', 15);
collection.set('p', 16);
collection.set('q', 17);
collection.set('r', 18);
collection.set('s', 19);
collection.set('t', 20);
collection.set('u', 21);
collection.set('v', 22);
collection.set('w', 23);
collection.set('x', 24);
collection.set('y', 25);
collection.set('z', 26);

const getScore = (str) => {
  let result = 0;
  for (let i = 0; i < str.length; i += 1) {
    result += collection.get(str[i]);
  }
  return result;
};

function getMaxScore(arr) {
  let max = 0;
  arr.forEach((el) => (el > max ? max = el : null));
  return arr.indexOf(max);
}

function high(str) {
  const arr = str.split(' ');
  const arrScore = arr
    .map((el) => getScore(el));

  const indexOfMaxScoreEl = getMaxScore(arrScore);

  return arr[indexOfMaxScoreEl];
}
