// https://www.codewars.com/kata/5626b561280a42ecc50000d1

function isValidWalk(walk) {
  if (walk.length !== 10) return false;
  let north = 0;
  let south = 0;
  let east = 0;
  let west = 0;

  walk.forEach((el) => {
    if (el === 'n') north++;
    if (el === 's') south++;
    if (el === 'e') east++;
    if (el === 'w') west++;
  });

  if (north - south === 0 && east - west === 0) {
    return true;
  }
  return false;
}

console.log(isValidWalk(['n', 'e', 's', 's',
  's', 'w', 's', 'n',
  'n', 'n']));
