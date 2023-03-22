function count(str) {
  const res = {};
  let i = 0;
  while (i < str.length) {
    const char = str[i];
    if (!res[char]) {
      res[char] = 1;
    } else {
      res[char] += 1;
    }
    i += 1;
  }
  return res;
}

console.log(count('ABC'));
