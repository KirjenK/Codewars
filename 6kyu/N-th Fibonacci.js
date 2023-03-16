// https://www.codewars.com/kata/522551eee9abb932420004a0

function nthFibo(n) {
  if (n === 1) return 0
  if (n === 2) return 1

  let a = 0;
  let b = 1;
  let c;
  for (let i = 2; i < n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return c;
}