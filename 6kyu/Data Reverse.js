// https://www.codewars.com/kata/569d488d61b812a0f7000015/javascript

function dataReverse(data) {
  const result = [];
  for (let i = 0; i < data.length; i += 8) {
    const segment = data.slice(i, i + 8);
    result.unshift(...segment);
  }
  return result;
}
