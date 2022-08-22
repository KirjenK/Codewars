// https://www.codewars.com/kata/5783d8f3202c0e486c001d23

// My solution

function toNumberArray(stringarray) {
    let newArr = stringarray.map((el) => {
     return Number(el)
    })
    return newArr
  }