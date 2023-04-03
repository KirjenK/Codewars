// https://www.codewars.com/kata/58663693b359c4a6560001d6/javascript

function mazeRunner(arr, direction) {
  const maxLength = arr.length - 1;
  let currentEl;
  let indexArr;
  let indexEl;
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr[i].length; j += 1) {
      if (arr[i][j] === 2) {
        indexArr = i;
        indexEl = j;
        currentEl = arr[indexArr][indexEl];
      }
    }
  }
  for (let k = 0; k < direction.length; k += 1) {
    if (direction[k] === 'N') {
      indexArr -= 1;
    }
    if (direction[k] === 'S') {
      indexArr += 1;
    }
    if (direction[k] === 'E') {
      indexEl += 1;
    }
    if (direction[k] === 'W') {
      indexEl -= 1;
    }

    if (indexArr === -1 || indexArr > maxLength) return 'Dead';
    if (indexEl > maxLength || indexEl === -1) return 'Dead';

    currentEl = arr[indexArr][indexEl];

    if (currentEl === 1) return 'Dead';
    if (currentEl === 3) return 'Finish';
  }
  return 'Lost';
}

// const maze = [
//   [1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
//   [1, 3, 1, 0, 1, 0, 0, 0, 0, 1],
//   [1, 0, 1, 0, 0, 0, 1, 1, 0, 1],
//   [1, 0, 1, 1, 1, 1, 1, 0, 0, 1],
//   [1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
//   [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
//   [1, 0, 1, 0, 1, 0, 0, 0, 0, 0],
//   [1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
//   [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
//   [1, 1, 1, 0, 1, 1, 1, 1, 2, 1],
// ];

// const way = ['N', 'W', 'W', 'W', 'W'];

// console.log(mazeRunner(maze, way));
