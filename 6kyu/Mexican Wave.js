// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029

function wave(str) {
  const finalResult = [];
  for (let i = 0; i < str.length; i += 1) {
    finalResult.push(str[i].toUpperCase() + str.slice(i + 1));
  }
  for (let i = finalResult.length - 1; i > 0; i -= 1) {
    finalResult[i] = str.slice(0, i) + finalResult[i];
  }
  return finalResult.filter((el) => /[A-Z]/.test(el));
}
