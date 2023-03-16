// https://www.codewars.com/kata/6319dba6d6e2160015a842ed

function countPhotos(road) {
  let count = 0;
  let carMoveToLeft = 0;
  let carMoveToRight = 0;
  let camera = 0;

  for (let i = 0; i < road.length; i += 1) {
    const symbol = road[i];
    if (symbol === '>') {
      carMoveToRight += 1;
    }
    if (symbol === '<') {
      carMoveToLeft += 1;
      count += carMoveToLeft * camera;
      carMoveToLeft -= 1;
    }
    if (symbol === '.') {
      count += carMoveToRight * 1;
      camera += 1;
    }
  }
  return count;
}