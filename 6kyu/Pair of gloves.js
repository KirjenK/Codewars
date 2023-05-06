// https://www.codewars.com/kata/58235a167a8cb37e1a0000db/javascript

function numberOfPairs(gloves) {
  const hash = {};
  gloves.forEach((el) => {
    if (!hash[el]) {
      hash[el] = 1;
    } else {
      hash[el] += 1;
    }
  });
  return Object.values(hash).reduce((res, el) => {
    const pairs = Math.floor(el / 2);
    res += pairs;
    return res;
  }, 0);
}

// second 

function numberOfPairs(gloves) {
  const hash = {};
  let pairs = 0;

  gloves.forEach((el) => {
    if (!hash[el]) {
      hash[el] = 1;
    } else {
      hash[el] += 1;
    }
    if (hash[el] === 2) {
      pairs += 1;
      hash[el] = 0;
    }
  });
  return pairs;
}