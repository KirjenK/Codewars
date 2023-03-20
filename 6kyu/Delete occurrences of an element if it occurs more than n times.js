// https://www.codewars.com/kata/554ca54ffa7d91b236000023/javascript

function deleteNth(arr, n) {
  const result = [];
  const hash = {};

  for (let i = 0; i < arr.length; i += 1) {
    const digit = arr[i];
    if (!hash[digit]) {
      hash[digit] = 1;
      result.push(digit);
    } else if (hash[digit]) {
      hash[digit] += 1;
      if (hash[digit] <= n) {
        result.push(digit);
      }
    }
  }
  return result;
}
