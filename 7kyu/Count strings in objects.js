// https://www.codewars.com/kata/565b3542af398bfb50000003

// My solution


const strCount = (obj) => {
  const arrOfObjValues = Object.values(obj);
  return arrOfObjValues.reduce((counter, el) => {
    console.log(el, 'el');
    if (typeof el === 'string') {
      counter += 1;
    }
    if (typeof el === 'object' && el !== null) {
      counter += strCount(el);
    }
    return counter;
  }, 0);
};