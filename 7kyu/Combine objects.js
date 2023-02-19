// https://www.codewars.com/kata/56bd9e4b0d0b64eaf5000819

// My solution

const combine = (...objects) => {
  return objects.reduce((generalObj, currentObj) => {
    for (const key in currentObj) {
      if (generalObj[key]) {
        generalObj[key] += currentObj[key];
      } else {
        generalObj[key] = currentObj[key];
      }
    }
    return generalObj;
  }, {});
};