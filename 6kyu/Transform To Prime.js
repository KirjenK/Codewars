// https://www.codewars.com/kata/5a946d9fba1bb5135100007c/javascript

function checkPrime(number) {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number;
}

function minimumNumber(numbers) {
  const sum = numbers.reduce((acc, number) => acc + number);

  let isPrime = true;
  for (let i = 2; i < sum; i += 1) {
    if (sum % i === 0) {
      isPrime = false;
    }
  }
  if (isPrime) return 0;

  for (let i = sum + 1; i <= Infinity; i += 1) {
    const data = checkPrime(i);
    if (data) {
      return data - sum;
    }
  }
}
