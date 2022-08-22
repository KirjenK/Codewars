// https://www.codewars.com/kata/5809c661f15835266900010a/train/javascript

// My solution

function doubleEveryOther(a) {
    let newArr = a.map((el, i) => {
       if (i % 2) {
        return el * 2
       }
       return el
    })
    return newArr
  }