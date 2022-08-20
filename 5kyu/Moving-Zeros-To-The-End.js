// https://www.codewars.com/kata/52597aa56021e91c93000cb0

// My solution

function moveZeros (arr) {
    let newArr = []
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] !== 0) {
        newArr.push(arr[i])
      }
    }
    arr.forEach((el) => {
      if (el === 0) {
        newArr.push(el)
      }
    })
    return newArr
  }