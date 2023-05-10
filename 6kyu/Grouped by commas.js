// https://www.codewars.com/kata/5274e122fc75c0943d000148/javascript

function groupByCommas(n) {
  let str = String(n);
  const groups = [];
  while (str.length > 3) {
    groups.push(str.slice(-3));
    str = str.slice(0, -3);
  }
  groups.push(str);
  return groups.reverse().join();
}
