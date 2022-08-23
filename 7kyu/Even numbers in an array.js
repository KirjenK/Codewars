// https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c/train/javascript

// My solution

function evenNumbers(arr, number) {
    let fullEvenArr = arr.filter(el => el % 2 ===0)
    let startLength = fullEvenArr.length - number 
    return fullEvenArr.slice(startLength)
  }