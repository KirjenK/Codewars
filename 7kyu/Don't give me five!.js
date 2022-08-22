// https://www.codewars.com/kata/5813d19765d81c592200001a

// My solution

function dontGiveMeFive(start, end) {
    let result = 0
    let newArr = []
    for(let i = start; i <= end; i++) {
      newArr.push(String(i))
    }
    for(let i = 0; i < newArr.length; i++) {
      if(!newArr[i].includes('5')) {
        result += 1
      }
    }
    return result
  }