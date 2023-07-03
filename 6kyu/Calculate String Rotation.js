// https://www.codewars.com/kata/5596f6e9529e9ab6fb000014/javascript

function shiftedDiff(first, second) {
  if (first === second) return 0;
  if (first.lenght !== second.lenght) return -1;
  const index = 0;
  for (let i = 1; i < second.length; i += 1) {
    const word = second.slice(i) + second.slice(index, i);
    if (word === first) return i;
  }
  return -1;
}
