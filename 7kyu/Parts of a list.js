// https://www.codewars.com/kata/56f3a1e899b386da78000732

// My solution

function partlist(arr) {
    return arr
      .map((el, index) => [
        arr.slice(0, index).join(' '),
        arr.slice(index).join(' ')
      ])
      .slice(1);
  }