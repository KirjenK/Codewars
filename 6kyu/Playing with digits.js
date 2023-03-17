function digPow(n, p) {
  const digStr = n.toString()
  let result = 0;
  for (let i = 0; i < digStr.length; i += 1) {
    const degree = i + p
    const digit = Number(digStr[i])
    result += digit ** degree
  }
  const check = result / n
  if (Number.isInteger(check)) {
    return check
  }
  return - 1
}