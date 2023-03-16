// https://www.codewars.com/kata/587731fda577b3d1b0001196/javascript

// My solution

String.prototype.camelCase = function () {
  const arrOfStrings = this.split(' ');
  const result = arrOfStrings
    .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
    .join('');
  return result;
};

