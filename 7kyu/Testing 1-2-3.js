// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9

// My solution

var number=function(arr){
  let newArr = arr.map((el, i) => {
    return `${i+1}: ${el}`
  }) 
    return newArr
  }

// Second solution

var number=function(arr){
    if(arr.length === 0) {
      return []
    }
    let newArr = []
    for(let i = 0; i < arr.length; i++) {
      newArr.push(String(i + 1 + ': ' + arr[i]))
    }
    return newArr
  }
