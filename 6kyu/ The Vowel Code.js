// https://www.codewars.com/kata/53697be005f803751e0015aa/javascript

function decode(str) {
  const hash = {
    1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u',
  };
  let res = '';

  let i = 0;
  while (i < str.length) {
    const char = str[i];
    if (hash[char]) {
      res += hash[char];
    } else {
      res += char;
    }
    i += 1;
  }
  return res;
}

