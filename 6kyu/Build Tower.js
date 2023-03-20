// https://www.codewars.com/kata/576757b1df89ecf5bd00073b/javascript

function towerBuilder(nFloors) {
  const tower = [];
  let i = 0;
  let stars = '*';
  let times = nFloors;

  while (i < nFloors) {
    tower.push(stars);
    stars += '**';
    i += 1;
  }

  return tower.map((el) => {
    times -= 1;
    return ' '.repeat(times) + el + ' '.repeat(times);
  });
}
