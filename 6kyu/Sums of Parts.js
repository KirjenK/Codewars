// https://www.codewars.com/kata/5ce399e0047a45001c853c2b/javascript

function partsSums(list) {
  if (list.length === 0) return [0];

  let max = list[list.length - 1];
  const result = [max];

  for (let i = list.length - 2; i >= 0; i -= 1) {
    max += list[i];
    result.push(max);
  }
  result.reverse();
  result.push(0);
  return result;
}
