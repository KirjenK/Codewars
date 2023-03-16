// https://www.codewars.com/kata/54e6533c92449cc251001667

const uniqueInOrder = function (data) {
  const result = [];
  for (let i = 0; i < data.length; i += 1) {
    const char = data[i];
    if (char !== data[i - 1]) {
      result.push(char);
    }
  }
  return result;
};