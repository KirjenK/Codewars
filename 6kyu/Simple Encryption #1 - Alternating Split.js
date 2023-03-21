function encrypt(str, n) {
  if (typeof str !== 'string' || str.length === 0 || n < 0) {
    return str;
  }
  if (n <= 0) return str;
  let oddFirst = '';
  let even = '';
  for (let i = 0; i < str.length; i += 1) {
    if (i % 2 !== 0) {
      oddFirst += str[i];
    } else {
      even += str[i];
    }
  }
  const result = oddFirst + even;

  if (n > 0) {
    return encrypt(result, n - 1);
  }
}

function decrypt(str, n) {
  if (typeof str !== 'string' || str.length === 0 || n < 0) {
    return str;
  }
  if (str.length === 0 || n < 0 || typeof str !== 'string') {
    return str;
  }
  if (n <= 0) return str;
  const mid = Math.floor(str.length / 2);
  const even = str.slice(mid);
  const odd = str.slice(0, mid);

  let result = '';
  for (let i = 0; i < even.length; i += 1) {
    if (even[i] !== undefined) {
      result += even[i];
    }
    if (odd[i] !== undefined) {
      result += odd[i];
    }
  }
  if (n > 0) {
    return decrypt(result, n - 1);
  }
}
