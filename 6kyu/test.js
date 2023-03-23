function getNumber(num) {
  const str = String(num);
  let result = 0;
  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];
    result += Number(char) ** (i + 1);
  }
  return result;
}

function sumDigPow(a, b) {
  const result = [];
  for (let i = a; i <= b; i += 1) {
    const data = getNumber(i);
    if (data === i) {
      result.push(i);
    }
  }
  return result;
}
