// https://www.codewars.com/kata/5842df8ccbd22792a4000245/javascript

function expandedForm(num) {
  const arr = num.toString().split('');
  let result = arr[0] + '0'.repeat(arr.length - 1);

  for (let i = 1; i < arr.length; i += 1) {
    const digits = arr.slice(i);
    if (digits[0] !== '0') {
      result += ` + ${digits[0]}${'0'.repeat(digits.length - 1)}`;
    }
  }
  return result;
}
