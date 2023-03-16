// https://www.codewars.com/kata/529eef7a9194e0cbc1000255

const isAnagram = function (test, original) {
  const hash = {}
  const arrOfStrings = [test, original]
  const sorted = arrOfStrings
    .map((el) => el.toLowerCase().split('').sort().join(''))
  return sorted.every((el) => el === sorted[0])
};